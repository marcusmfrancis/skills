import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { catalog, root } from './catalog.mjs';
const headings = { '3d': '3D', 'web-design': 'Web design', ui: 'UI', 'game-development': 'Game development', media: 'Media', codex: 'Agent workflows' };
let body = `# Skills

## Install

Requires Node.js 20+.

List skills:

\`\`\`sh
npx --yes github:marcusmfrancis/skills#v0.2.1 list
\`\`\`

Install globally for Codex:

\`\`\`sh
npx --yes github:marcusmfrancis/skills#v0.2.1 install mf-ui-taste --global --agent codex
\`\`\`

For Claude Code, use \`--agent claude\`. Replace \`mf-ui-taste\` with any skill name below.

Install to a project or another agent's skill directory:

\`\`\`sh
npx --yes github:marcusmfrancis/skills#v0.2.1 install mf-ui-taste --dest .agents/skills
\`\`\`

Copies the skill and its supporting files. Existing folders are preserved.

Or tell your AI:

\`\`\`text
Install mf-ui-taste from marcusmfrancis/skills globally for my coding agent.
\`\`\`

[Download ZIP](https://github.com/marcusmfrancis/skills/archive/refs/tags/v0.2.1.zip) · [MCP setup](docs/MCP.md)

`;
for (const category of [...new Set(catalog.map(s => s.category))]) {
 body += `## ${headings[category] ?? category}\n\n| Skill | Use |\n|---|---|\n`;
 for (const s of catalog.filter(s => s.category === category)) body += `| [${s.name}](${s.path}/SKILL.md) | ${s.title.replaceAll('|', '\\|').replaceAll('\n', ' ')} |\n`;
 body += '\n';
}
body += '[License](LICENSE) · [Notices](ATTRIBUTION.md)\n';
const file = join(root, 'README.md');
if (process.argv.includes('--check')) {
 if (await readFile(file, 'utf8') !== body) throw new Error('README catalog is stale. Run npm run docs.');
} else await writeFile(file, body);
