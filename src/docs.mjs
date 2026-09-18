import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { catalog, root } from './catalog.mjs';
let body = `# Skills

[Install](#install) · [MCP setup](docs/MCP.md) · [Previews](SCREENSHOTS.md)

`;
for (const category of [...new Set(catalog.map(s => s.category))]) {
  body += `## ${category[0].toUpperCase() + category.slice(1)}\n\n| Skill | What it does |\n|---|---|\n`;
  for (const s of catalog.filter(s => s.category === category)) {
    body += `| [${s.title}](${s.path}/SKILL.md) | ${s.description} |\n`;
  }
  body += '\n';
}
body += `## Install

Requires Node.js 20+.

\`\`\`sh
npx --yes github:marcusmfrancis/skills#v0.1.1 list
npx --yes github:marcusmfrancis/skills#v0.1.1 install mf-ui-reference-catalog --dest .agents/skills
\`\`\`

Or open a skill's \`SKILL.md\` directly. The installer copies it to the chosen directory and refuses to overwrite an existing installation.

## MCP

[MCP setup](docs/MCP.md) lets compatible clients search and read the library through a local server.

## Contributing

Use \`mf-<skill-name>\`, or \`mf-<category>-<skill-name>\` for related skills. The prefix is for identification and search. Categories group tasks; tags identify specific tools and topics.

Add the skill to \`catalog.json\`, then run \`npm run docs\` and \`npm test\`.

[License](LICENSE) · [Attribution](ATTRIBUTION.md)
`;
const file = join(root, 'README.md');
if (process.argv.includes('--check')) {
  if (await readFile(file, 'utf8') !== body) throw new Error('README catalog is stale. Run npm run docs.');
} else await writeFile(file, body);
