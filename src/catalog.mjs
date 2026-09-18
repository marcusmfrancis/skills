import { readFile, mkdir, cp, rm, readdir, lstat, rename, mkdtemp, realpath, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { resolve, join, relative, isAbsolute } from 'node:path';

export const root = fileURLToPath(new URL('../', import.meta.url));
export const version = JSON.parse(await readFile(join(root, 'package.json'), 'utf8')).version;
export const catalog = JSON.parse(await readFile(join(root, 'catalog.json'), 'utf8')).skills;
const receiptFile = '.mf-skills.json';
export function list(query = '') {
 const term = query.trim().toLowerCase();
 return catalog.filter(s => [s.name,s.title,s.description,s.category,...s.tags].join(' ').toLowerCase().includes(term));
}
export function get(name) {
 const skill = catalog.find(s => s.name === name);
 if (!skill) throw new Error(`Unknown skill: ${name}. Run mf-skills list.`);
 return skill;
}
async function inventory(directory, prefix = '') {
 const result = {};
 for (const entry of await readdir(directory, { withFileTypes: true })) {
  if (!prefix && entry.name === receiptFile) continue;
  const path = join(directory, entry.name), key = prefix + entry.name;
  if (entry.isSymbolicLink()) throw new Error(`Symlinks are not supported: ${key}`);
  if (entry.isDirectory()) Object.assign(result, await inventory(path, key + '/'));
  else if (entry.isFile()) result[key] = createHash('sha256').update(await readFile(path)).digest('hex');
  else throw new Error(`Unsupported file: ${key}`);
 }
 return Object.fromEntries(Object.entries(result).sort(([a],[b])=>a.localeCompare(b)));
}
export async function files(name) { return Object.keys(await inventory(join(root,get(name).path))); }
export async function read(name, file = 'SKILL.md') {
 const base = await realpath(join(root, get(name).path));
 const target = await realpath(resolve(base,file));
 const rel = relative(base,target);
 if (isAbsolute(rel) || rel === '..' || rel.startsWith('../')) throw new Error('File must stay inside this skill.');
 if (!(await files(name)).includes(rel.split('\\').join('/'))) throw new Error('Unknown skill file.');
 const buffer = await readFile(target);
 if (buffer.includes(0)) throw new Error('Binary file: install the skill to use this asset.');
 return buffer.toString('utf8');
}
export async function install(name, destination) {
 const skill = get(name);
 if (!destination) throw new Error('An explicit destination is required.');
 const target = resolve(destination,skill.name);
 await mkdir(resolve(destination),{recursive:true});
 await mkdir(target);
 try {
  const hashes = await inventory(join(root,skill.path));
  for (const entry of await readdir(join(root,skill.path))) await cp(join(root,skill.path,entry),join(target,entry),{recursive:true,force:false,errorOnExist:true});
  await writeFile(join(target,receiptFile),JSON.stringify({name,version,files:hashes},null,2)+'\n');
 } catch(error) {await rm(target,{recursive:true,force:true});throw error;}
 return target;
}
export async function update(name,destination) {
 get(name);
 if (!destination) throw new Error('An explicit destination is required.');
 const base=resolve(destination),target=join(base,name),lock=join(base,`.${name}.update-lock`);
 await mkdir(lock);
 let staging;
 try {
  if (!(await lstat(target)).isDirectory()) throw new Error('Update target must be a real skill directory.');
  if (!(await lstat(join(target,receiptFile))).isFile() || (await lstat(join(target,receiptFile))).isSymbolicLink()) throw new Error('Invalid installation receipt.');
  const receipt=JSON.parse(await readFile(join(target,receiptFile),'utf8'));
  const before=await inventory(target);
  if(receipt.name!==name || JSON.stringify(before)!==JSON.stringify(receipt.files)) throw new Error('Local changes detected. Preserve your edits and install the new version in a separate directory.');
  staging=await mkdtemp(join(base,`.${name}.update-`));
  const next=await install(name,staging);
  if(JSON.stringify(await inventory(target))!==JSON.stringify(before)) throw new Error('Files changed during update; no replacement made.');
  const backup=join(base,`${name}.backup-${Date.now()}`);
  try {await lstat(backup);throw new Error('Backup path already exists.');} catch(e) {if(e.code!=='ENOENT') throw e;}
  await rename(target,backup);
  try {await rename(next,target);} catch(e) {await rename(backup,target);throw e;}
  return {path:target,backup,version};
 } catch(e) {
  if(e.code==='ENOENT') throw new Error('No managed installation found. Install into a new directory first; older untracked folders are preserved.');
  throw e;
 } finally {
  if(staging) await rm(staging,{recursive:true,force:true});
  await rm(lock,{recursive:true,force:true});
 }
}
export function globalDestination(agent,home) {
 const folders={codex:'.codex',claude:'.claude',cursor:'.cursor',shared:'.agents'};
 if(!Object.hasOwn(folders,agent)) throw new Error('Choose --agent codex, claude, cursor or shared.');
 return join(home,folders[agent],'skills');
}
export async function fetchCatalog(query='') {
 const response=await fetch('https://raw.githubusercontent.com/marcusmfrancis/skills/main/catalog.json',{signal:AbortSignal.timeout(15000),cache:'no-store'});
 if(!response.ok) throw new Error(`Catalog fetch failed: HTTP ${response.status}`);
 const data=await response.json();
 if(!Array.isArray(data.skills) || !data.skills.every(s=>typeof s.name==='string' && typeof s.description==='string')) throw new Error('Invalid remote catalog.');
 const term=query.trim().toLowerCase();
 return data.skills.filter(s=>JSON.stringify(s).toLowerCase().includes(term));
}
