#!/usr/bin/env node
import { homedir } from 'node:os';
import { list, read, install, globalDestination } from '../src/catalog.mjs';
const [command = 'help', ...args] = process.argv.slice(2);
try {
  if (command === 'list') console.log(JSON.stringify(list(args.join(' ')), null, 2));
  else if (command === 'read' && args.length === 1) console.log(await read(args[0]));
  else if (command === 'install' && args.length === 3 && args[1] === '--dest') console.log(await install(args[0], args[2]));
  else if (command === 'install' && args.length === 4 && args[1] === '--global' && args[2] === '--agent') console.log(await install(args[0], globalDestination(args[3], homedir())));
  else if (command === 'mcp' && args.length === 0) await (await import('../src/mcp.mjs')).start();
  else if (command === 'help') console.log('mf-skills list [query]\nmf-skills read <name>\nmf-skills install <name> --dest <directory>\nmf-skills install <name> --global --agent <codex|claude>\nmf-skills mcp');
  else throw new Error('Invalid arguments. Run mf-skills help.');
} catch (error) { console.error(error.message); process.exitCode = 1; }
