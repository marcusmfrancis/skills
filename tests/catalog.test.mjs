import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile, symlink, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
import { catalog, root, read, install, globalDestination } from '../src/catalog.mjs';

test('every registered skill is portable and frontmatter matches its folder', async () => {
 assert.equal(new Set(catalog.map(s=>s.name)).size,catalog.length);
 for(const skill of catalog) {
  assert.match(skill.name,/^mf-[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.ok(skill.path.endsWith('/'+skill.name));
  const text=await read(skill.name);
  assert.ok(text.startsWith(`---\nname: ${skill.name}\ndescription: `));
  assert.doesNotMatch(text,/\/Users\/|github\.com\/MengTo\/Skills/i);
  assert.ok(skill.sources.length>0);
 }
});

test('CLI installs every complete skill, refuses overwrites and invalid names',async()=>{
 const tmp=await mkdtemp(join(tmpdir(),'mf-skills-test-'));
 try {
  for(const skill of catalog) {
   const result=spawnSync(process.execPath,[join(root,'bin/mf-skills.mjs'),'install',skill.name,'--dest',tmp],{encoding:'utf8'});
   assert.equal(result.status,0,result.stderr);
   const files = await readdir(join(root,skill.path), { recursive: true, withFileTypes: true });
   for (const file of files.filter(f=>f.isFile())) {
    const {relative}=await import('node:path');
    const rel=relative(join(root,skill.path),join(file.parentPath,file.name));
    assert.deepEqual(await readFile(join(tmp,skill.name,rel)),await readFile(join(root,skill.path,rel)));
   }
   await writeFile(join(tmp,skill.name,'keep.txt'),'user changes');
   await assert.rejects(install(skill.name,tmp),{code:'EEXIST'});
   assert.equal(await readFile(join(tmp,skill.name,'keep.txt'),'utf8'),'user changes');
  }
  await assert.rejects(install('../../escape',tmp),/Unknown skill/);
  await assert.rejects(install(catalog[0].name,''),/destination/);
  const linkDest=join(tmp,'links');
  const {mkdir}=await import('node:fs/promises');await mkdir(linkDest);
  await symlink(join(tmp,catalog[0].name),join(linkDest,catalog[0].name));
  await assert.rejects(install(catalog[0].name,linkDest),{code:'EEXIST'});
 } finally {await rm(tmp,{recursive:true,force:true});}
});

test('real MCP client lists, searches and reads all skills and resources',async()=>{
 const client=new Client({name:'mf-contract-test',version:'1.0.0'});
 const transport=new StdioClientTransport({command:process.execPath,args:[join(root,'bin/mf-skills.mjs'),'mcp'],stderr:'pipe'});
 try {
  await client.connect(transport);
  const tools=(await client.listTools()).tools;
  assert.deepEqual(tools.map(t=>t.name).sort(),['mf_skills_files','mf_skills_list','mf_skills_read']);
  assert.ok(tools.every(t=>t.annotations.readOnlyHint));
  const all=await client.callTool({name:'mf_skills_list',arguments:{}});
  assert.equal(JSON.parse(all.content[0].text).length,catalog.length);
  const match=await client.callTool({name:'mf_skills_list',arguments:{query:'recording'}});
  assert.ok(JSON.parse(match.content[0].text).some(s=>s.name==='mf-ui-reference-catalog'));
  const empty=await client.callTool({name:'mf_skills_list',arguments:{query:'not-a-real-skill-987'}});
  assert.deepEqual(JSON.parse(empty.content[0].text),[]);
  assert.equal((await client.listResources()).resources.length,catalog.length);
  for(const skill of catalog) {
   const result=await client.callTool({name:'mf_skills_read',arguments:{name:skill.name}});
   assert.equal(result.content[0].text,await read(skill.name));
   const resource=await client.readResource({uri:`mf-skill:///${skill.name}`});
   assert.equal(resource.contents[0].text,await read(skill.name));
  }
  const bad=await client.callTool({name:'mf_skills_read',arguments:{name:'../../etc/passwd'}});
  assert.equal(bad.isError,true);
 } finally {await client.close();}
});

test('global destinations are explicit and agent-specific', () => {
 assert.equal(globalDestination('codex', '/tmp/isolated-user'), '/tmp/isolated-user/.codex/skills');
 assert.equal(globalDestination('claude', '/tmp/isolated-user'), '/tmp/isolated-user/.claude/skills');
 assert.throws(()=>globalDestination('../../escape','/tmp/isolated-user'), /Choose/);
});
