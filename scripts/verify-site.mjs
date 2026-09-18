import assert from 'node:assert/strict';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { catalog,read,files } from '../src/catalog.mjs';
const base=process.argv[2] || 'https://marcusmfrancis.com';
const response=await fetch(`${base}/skills/catalog`);
assert.equal(response.status,200);
const entries=(await response.json()).skills;
const client=new Client({name:'personal-skills-verification',version:'1.0.0'});
const transport=new StreamableHTTPClientTransport(new URL(`${base}/mcp`));
await client.connect(transport);
try {
 const available=(await client.listTools()).tools.map(t=>t.name);
 assert.ok(available.includes('skills/read'));
 const result=await client.callTool({name:'skills/list',arguments:{}});
 const text=result.content.filter(c=>c.type==='text').map(c=>c.text).join('');
 for(const skill of catalog){
  assert.ok(text.includes(skill.name),`MCP catalog missing ${skill.name}`);
  const entry=entries.find(s=>s.slug===skill.name);
  assert.ok(entry,`Site catalog missing ${skill.name}`);
  assert.ok(entry.installCommand.includes(skill.name));assert.ok(entry.updateCommand.includes(skill.name));
  const remote=await client.callTool({name:'skills/read',arguments:{slug:skill.name}});
  assert.equal(remote.isError,undefined);
  assert.equal(remote.content[0].text,await read(skill.name));
  const raw=await fetch(`${base}/skills/${skill.name}/SKILL.md`);
  assert.equal(raw.status,200);assert.equal(await raw.text(),await read(skill.name));
  const page=await fetch(`${base}/skills/${skill.name}`);
  assert.equal(page.status,200);assert.ok((await page.text()).includes(skill.title));
  for(const file of await files(skill.name)){
   const resource=await client.callTool({name:'skills/read',arguments:{slug:skill.name,file}});
   assert.equal(resource.content[0].text,await read(skill.name,file));
   const download=await fetch(`${base}/skill-files/${skill.name}/${file}`);
   assert.equal(download.status,200);assert.equal(await download.text(),await read(skill.name,file));
  }
 }
 const bad=await client.callTool({name:'skills/read',arguments:{slug:catalog[0].name,file:'../../package.json'}});
 assert.equal(bad.isError,true);
 console.log(`Verified ${catalog.length} site pages, catalog entries, raw instructions, all supporting files and real HTTP MCP reads.`);
}finally{await client.close();}
