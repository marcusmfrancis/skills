#!/usr/bin/env node
import { homedir } from 'node:os';
import { list, read, files, install, update, globalDestination, fetchCatalog } from '../src/catalog.mjs';
const [command='help',...args]=process.argv.slice(2);
try {
 if(command==='list') console.log(JSON.stringify(list(args.join(' ')),null,2));
 else if(command==='fetch') console.log(JSON.stringify(await fetchCatalog(args.join(' ')),null,2));
 else if(command==='read' && [1,2].includes(args.length)) console.log(await read(args[0],args[1]));
 else if(command==='files' && args.length===1) console.log(JSON.stringify(await files(args[0]),null,2));
 else if(['install','update'].includes(command)) {
  let destination;
  if(args.length===3 && args[1]==='--dest') destination=args[2];
  else if(args.length===4 && args[1]==='--global' && args[2]==='--agent') destination=globalDestination(args[3],homedir());
  else throw new Error('Use <name> --dest <directory> or <name> --global --agent <codex|claude|cursor|shared>.');
  const result=await (command==='install'?install:update)(args[0],destination);
  console.log(typeof result==='string'?result:JSON.stringify(result,null,2));
 } else if(command==='mcp' && args.length===0) await (await import('../src/mcp.mjs')).start();
 else if(command==='mcp' && args.length===1 && args[0]==='config') console.log(JSON.stringify({mcpServers:{skills:{command:'npx',args:['--yes','github:marcusmfrancis/skills#main','mcp']}}},null,2));
 else if(command==='help') console.log('mf-skills list [query]\nmf-skills fetch [query] (latest public catalog)\nmf-skills read <name> [file]\nmf-skills files <name>\nmf-skills install <name> --dest <directory>\nmf-skills update <name> --dest <directory>\nUse --global --agent <codex|claude|cursor|shared> instead of --dest for user-level skills.\nmf-skills mcp [config]');
 else throw new Error('Invalid arguments. Run mf-skills help.');
} catch(error) {console.error(error.message);process.exitCode=1;}
