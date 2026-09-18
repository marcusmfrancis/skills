# MF Skills

**Agent skills by Marcus M Francis.** Practical workflows for interfaces, visual tools and reference-driven work. Read a skill, install its folder, or let your agent retrieve it through MCP.

[Website](https://marcusmfrancis.com) · [Existing interactive tools](https://marcusmfrancis.com/skills) · [Previews](SCREENSHOTS.md) · [MCP setup](docs/MCP.md) · [Sources](ATTRIBUTION.md)

## Start here

Node.js 20 or newer is required for the CLI and MCP. Markdown can be read without installing anything.

```sh
npx --yes github:marcusmfrancis/skills#v0.1.0 list
npx --yes github:marcusmfrancis/skills#v0.1.0 read mf-ui-reference-catalog
npx --yes github:marcusmfrancis/skills#v0.1.0 install mf-ui-reference-catalog --dest .agents/skills
```

The installer copies the complete skill folder into the explicit destination. It refuses to overwrite an existing folder. Review changes before replacing an earlier installation. Installing Markdown does not execute it or install its optional third-party tools.

For any coding agent, ask it to read the installed SKILL.md and follow it for the relevant task. Native automatic discovery varies by client; this installer does not modify global settings or guarantee every client discovers .agents/skills.

## Library

### Visual

| Skill | Use it for |
|---|---|
| [mf-visual-shader-gradient](agent-skills/visual/mf-visual-shader-gradient/SKILL.md) | Add a React WebGL gradient with theme-aware colors, reduced-motion behavior and a useful static fallback. |

### Media

| Skill | Use it for |
|---|---|
| [mf-media-image-compression](agent-skills/media/mf-media-image-compression/SKILL.md) | Create web-ready image derivatives with Sharp while preserving source images and checking size, dimensions and visible quality. |

### Data

| Skill | Use it for |
|---|---|
| [mf-data-line-chart](agent-skills/data/mf-data-line-chart/SKILL.md) | Integrate a source-attributed BKLIT line chart with explicit data semantics, missing-data behavior and accessible summaries. |

### Brand

| Skill | Use it for |
|---|---|
| [mf-brand-svg-logos](agent-skills/brand/mf-brand-svg-logos/SKILL.md) | Use official SVG brand marks or Simple Icons without distorting geometry, inventing identity assets or implying endorsement. |

### Ui

| Skill | Use it for |
|---|---|
| [mf-ui-reference-catalog](agent-skills/ui/mf-ui-reference-catalog/SKILL.md) | Turn a supplied UI recording into timestamped screenshots and an interaction catalog that separates observed behavior from inferred implementation. |
| [mf-ui-component-routing](agent-skills/ui/mf-ui-component-routing/SKILL.md) | Select UI components from the host design system and inspect compatibility, rights and interaction behavior before introducing another library. |

## Connect your agent

Use the [read-only MCP server](docs/MCP.md) to search and read this catalog. It exposes two tools and one Markdown resource per skill; it cannot install files, publish or deploy. The server runs locally over stdio. No hosted personal endpoint is provided in this release.

## Keep it current

Every new skill uses `mf-<category>-<skill-name>`. Add it under `agent-skills/<category>/<name>/SKILL.md`, register it in `catalog.json`, then run `npm run docs` and `npm test`. Review upstream APIs in the consuming project before installing components.

The first six guides were editorially reviewed on 2026-09-18. Catalog, installation and MCP delivery are checked automatically. That does not certify every downstream UI implementation, dependency combination or creative result. Previews show existing public site examples; the two recent UI workflows are guidance, not shipped UI demos.

## Attribution and license

Original instructions and tooling: MIT. Upstream components, brands and preview content retain their respective rights; see [ATTRIBUTION.md](ATTRIBUTION.md). Presentation is inspired by [MengTo/Skills](https://github.com/MengTo/Skills), without bulk-copying its library.
