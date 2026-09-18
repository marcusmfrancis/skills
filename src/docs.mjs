import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { catalog, root } from './catalog.mjs';
const intro = `# MF Skills

**Agent skills by Marcus M Francis.** Practical workflows for interfaces, visual tools and reference-driven work. Read a skill, install its folder, or let your agent retrieve it through MCP.

[Website](https://marcusmfrancis.com) · [Existing interactive tools](https://marcusmfrancis.com/skills) · [Previews](SCREENSHOTS.md) · [MCP setup](docs/MCP.md) · [Sources](ATTRIBUTION.md)

## Start here

Node.js 20 or newer is required for the CLI and MCP. Markdown can be read without installing anything.

\`\`\`sh
npx --yes github:marcusmfrancis/skills#v0.1.0 list
npx --yes github:marcusmfrancis/skills#v0.1.0 read mf-ui-reference-catalog
npx --yes github:marcusmfrancis/skills#v0.1.0 install mf-ui-reference-catalog --dest .agents/skills
\`\`\`

The installer copies the complete skill folder into the explicit destination. It refuses to overwrite an existing folder. Review changes before replacing an earlier installation. Installing Markdown does not execute it or install its optional third-party tools.

For any coding agent, ask it to read the installed SKILL.md and follow it for the relevant task. Native automatic discovery varies by client; this installer does not modify global settings or guarantee every client discovers .agents/skills.

## Library

`;
let body=intro;
for (const category of [...new Set(catalog.map(s=>s.category))]) {
 body += `### ${category === 'ui' ? 'UI' : category[0].toUpperCase()+category.slice(1)}\n\n| Skill | Use it for |\n|---|---|\n`;
 for (const s of catalog.filter(s=>s.category===category)) body += `| [${s.name}](${s.path}/SKILL.md) | ${s.description} |\n`;
 body+='\n';
}
body += `## Connect your agent

Use the [read-only MCP server](docs/MCP.md) to search and read this catalog. It exposes two tools and one Markdown resource per skill; it cannot install files, publish or deploy. The server runs locally over stdio. No hosted personal endpoint is provided in this release.

## Keep it current

Every new skill uses \`mf-<category>-<skill-name>\`. Add it under \`agent-skills/<category>/<name>/SKILL.md\`, register it in \`catalog.json\`, then run \`npm run docs\` and \`npm test\`. Review upstream APIs in the consuming project before installing components.

The first six guides were editorially reviewed on 2026-09-18. Catalog, installation and MCP delivery are checked automatically. That does not certify every downstream UI implementation, dependency combination or creative result. Previews show existing public site examples; the two recent UI workflows are guidance, not shipped UI demos.

## Attribution and license

Original instructions and tooling: MIT. Upstream components, brands and preview content retain their respective rights; see [ATTRIBUTION.md](ATTRIBUTION.md). Presentation is inspired by [MengTo/Skills](https://github.com/MengTo/Skills), without bulk-copying its library.
`;
const file=join(root,'README.md');
if(process.argv.includes('--check')) {if(await readFile(file,'utf8')!==body) throw new Error('README catalog is stale. Run npm run docs.');}
else await writeFile(file,body);
