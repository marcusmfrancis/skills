# Skills

## Install

Requires Node.js 20+.

List skills:

```sh
npx --yes github:marcusmfrancis/skills#v0.2.1 list
```

Install globally for Codex:

```sh
npx --yes github:marcusmfrancis/skills#v0.2.1 install mf-ui-taste --global --agent codex
```

For Claude Code, use `--agent claude`. Replace `mf-ui-taste` with any skill name below.

Install to a project or another agent's skill directory:

```sh
npx --yes github:marcusmfrancis/skills#v0.2.1 install mf-ui-taste --dest .agents/skills
```

Copies the skill and its supporting files. Existing folders are preserved.

Or tell your AI:

```text
Install mf-ui-taste from marcusmfrancis/skills globally for my coding agent.
```

[Download ZIP](https://github.com/marcusmfrancis/skills/archive/refs/tags/v0.2.1.zip) · [MCP setup](docs/MCP.md)

## Web design

| Skill | Use |
|---|---|
| [mf-visual-shader-gradient](agent-skills/web-design/mf-visual-shader-gradient/SKILL.md) | Shader gradients |

## UI

| Skill | Use |
|---|---|
| [mf-ui-component-routing](agent-skills/ui/mf-ui-component-routing/SKILL.md) | Choose and integrate UI components |
| [mf-ui-taste](agent-skills/ui/mf-ui-taste/SKILL.md) | Frontend taste |
| [mf-brand-svg-logos](agent-skills/ui/mf-brand-svg-logos/SKILL.md) | SVG brand marks |

## Media

| Skill | Use |
|---|---|
| [mf-media-image-compression](agent-skills/media/mf-media-image-compression/SKILL.md) | Image compression |

## Agent workflows

| Skill | Use |
|---|---|
| [mf-ui-reference-catalog](agent-skills/codex/mf-ui-reference-catalog/SKILL.md) | UI recording to evidence catalog |

[License](LICENSE) · [Notices](ATTRIBUTION.md)
