# Skills

[Install](#install) · [MCP setup](docs/MCP.md) · [Previews](SCREENSHOTS.md)

## Design

| Skill | What it does |
|---|---|
| [SVG brand marks](agent-skills/design/mf-brand-svg-logos/SKILL.md) | Find and use SVG brand marks. |
| [UI recording to evidence catalog](agent-skills/design/mf-ui-reference-catalog/SKILL.md) | Turn UI recordings into timestamped references and interaction notes. |

## Development

| Skill | What it does |
|---|---|
| [Choose and integrate UI components](agent-skills/development/mf-ui-component-routing/SKILL.md) | Choose and integrate components into an existing UI. |
| [Shader gradients](agent-skills/development/mf-visual-shader-gradient/SKILL.md) | Add shader gradients to React projects. |

## Media

| Skill | What it does |
|---|---|
| [Image compression](agent-skills/media/mf-media-image-compression/SKILL.md) | Resize and compress images while preserving the originals. |

## Install

Requires Node.js 20+.

```sh
npx --yes github:marcusmfrancis/skills#v0.1.1 list
npx --yes github:marcusmfrancis/skills#v0.1.1 install mf-ui-reference-catalog --dest .agents/skills
```

Or open a skill's `SKILL.md` directly. The installer copies it to the chosen directory and refuses to overwrite an existing installation.

## MCP

[MCP setup](docs/MCP.md) lets compatible clients search and read the library through a local server.

## Contributing

Use `mf-<skill-name>`, or `mf-<category>-<skill-name>` for related skills. The prefix is for identification and search. Categories group tasks; tags identify specific tools and topics.

Add the skill to `catalog.json`, then run `npm run docs` and `npm test`.

[License](LICENSE) · [Attribution](ATTRIBUTION.md)
