import { createHash } from 'node:crypto';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, readFile, rm, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { install,update,read,files,catalog,version } from '../src/catalog.mjs';

test('managed updates preserve a backup and refuse changed, extra, untracked and symlinked files',async()=>{
 const fixture=await mkdtemp(join(tmpdir(),'mf-update-')),dir=join(fixture,'skills'),name=catalog[0].name;
 try {
  const target=await install(name,dir);
  const previous='Earlier release instructions';
  await writeFile(join(target,'SKILL.md'),previous);
  const receiptPath=join(target,'.mf-skills.json');
  const receipt=JSON.parse(await readFile(receiptPath,'utf8'));
  receipt.version='0.0.1';receipt.files['SKILL.md']=createHash('sha256').update(previous).digest('hex');
  await writeFile(receiptPath,JSON.stringify(receipt));
  const result=await update(name,dir);
  assert.equal(result.version,version);
  assert.ok(result.backup.startsWith(join(fixture,'.mf-skills-backups')));
  assert.equal(await readFile(join(target,'SKILL.md'),'utf8'),await read(name));
  assert.equal(await readFile(join(result.backup,'SKILL.md'),'utf8'),previous);
  await writeFile(join(target,'SKILL.md'),'my edits');
  await assert.rejects(update(name,dir),/Local changes/);
  assert.equal(await readFile(join(target,'SKILL.md'),'utf8'),'my edits');
  await writeFile(join(target,'SKILL.md'),await read(name));
  await writeFile(join(target,'notes.txt'),'keep');
  await assert.rejects(update(name,dir),/Local changes/);
  await rm(join(target,'notes.txt'));
  await symlink('/tmp',join(target,'link'));
  await assert.rejects(update(name,dir),/Symlinks/);
  await rm(join(target,'link'));
  await rm(join(target,'.mf-skills.json'));
  await assert.rejects(update(name,dir),/No managed installation/);
 }finally{await rm(fixture,{recursive:true,force:true});}
});
test('supporting file reading stays within the selected skill',async()=>{
 const name='mf-3d-threejs';
 assert.ok((await files(name)).includes('LICENSE'));
 assert.match(await read(name,'LICENSE'),/MIT License/);
 await assert.rejects(read(name,'../../../package.json'),/inside this skill/);
 await assert.rejects(read(name,'/etc/passwd'),/inside this skill/);
});
