import { mkdir,writeFile,cp } from 'node:fs/promises';
import { resolve,join } from 'node:path';
import { catalog,root,files,read } from '../src/catalog.mjs';
const site=process.argv[2];
if(!site)throw new Error('Usage: node scripts/sync-site.mjs <site-directory>');
const target=resolve(site),category={'3d':'Visual',ui:'Interface',development:'Developer','web-design':'Visual',media:'Visual',codex:'Developer'};
const metadata=[],content={};
for(const skill of catalog){
 const names=await files(skill.name);
 metadata.push({slug:skill.name,name:skill.title,eyebrow:category[skill.category]+' / skill',description:skill.description,category:category[skill.category],tags:skill.tags,installCommand:`npx --yes github:marcusmfrancis/skills#main install ${skill.name} --global --agent codex`,updateCommand:`npx --yes github:marcusmfrancis/skills#main update ${skill.name} --global --agent codex`,license:skill.name==='mf-ui-taste'?'MIT / adapted; bundled notice':'MIT / see bundled notices',sourceLabel:'Skill files',sourceHref:`https://github.com/marcusmfrancis/skills/tree/main/${skill.path}`,repositoryHref:'https://github.com/marcusmfrancis/skills',repositoryLabel:'GitHub',sourceType:'local',copyLabel:'Copy prompt',copyText:`Use ${skill.name}. Ask me the relevant setup questions in plain language, recommend an approach, then give me exact commands and help implement it.`,files:names});
 content[skill.name]={};
 for(const name of names)content[skill.name][name]=await read(skill.name,name);
 await mkdir(join(target,'public/skill-files',skill.name),{recursive:true});
 await cp(join(root,skill.path),join(target,'public/skill-files',skill.name),{recursive:true});
}
await writeFile(join(target,'src/data/personal-skills.json'),JSON.stringify(metadata,null,2)+'\n');
await writeFile(join(target,'src/data/personal-skill-content.json'),JSON.stringify(content,null,2)+'\n');
console.log(`Synced ${metadata.length} personal skills to site.`);
