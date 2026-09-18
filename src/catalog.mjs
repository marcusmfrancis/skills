import { readFile, mkdir, cp, rm, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, join } from 'node:path';

export const root = fileURLToPath(new URL('../', import.meta.url));
export const catalog = JSON.parse(await readFile(join(root, 'catalog.json'), 'utf8')).skills;
export function list(query = '') {
  const term = query.trim().toLowerCase();
  return catalog.filter(skill => [skill.name, skill.title, skill.description, skill.category, ...skill.tags].join(' ').toLowerCase().includes(term));
}
export function get(name) {
  const skill = catalog.find(skill => skill.name === name);
  if (!skill) throw new Error(`Unknown skill: ${name}. Run mf-skills list.`);
  return skill;
}
export async function read(name) {
  const skill = get(name);
  return readFile(join(root, skill.path, 'SKILL.md'), 'utf8');
}
export async function install(name, destination) {
  const skill = get(name);
  if (!destination) throw new Error('An explicit destination is required.');
  const target = resolve(destination, skill.name);
  await mkdir(resolve(destination), { recursive: true });
  await mkdir(target); // Exclusive creation preserves existing installations, including symlinks.
  try {
    for (const entry of await readdir(join(root, skill.path))) {
      await cp(join(root, skill.path, entry), join(target, entry), { recursive: true, force: false, errorOnExist: true });
    }
  } catch (error) {
    await rm(target, { recursive: true, force: true });
    throw error;
  }
  return target;
}

export function globalDestination(agent, home) {
  const folders = { codex: '.codex', claude: '.claude' };
  if (!Object.hasOwn(folders, agent)) throw new Error('Choose --agent codex or --agent claude.');
  return join(home, folders[agent], 'skills');
}
