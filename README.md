# Skills

## Install

Requires Node.js 20+.

List skills:

```sh
npx --yes github:marcusmfrancis/skills#main list
```

Install globally for Codex:

```sh
npx --yes github:marcusmfrancis/skills#main install mf-ui-taste --global --agent codex
```

For Claude Code, use `--agent claude`. Replace `mf-ui-taste` with any skill name below.

Install to a project or another agent's skill directory:

```sh
npx --yes github:marcusmfrancis/skills#main install mf-ui-taste --dest .agents/skills
```

Copies the skill and its supporting files. Existing folders are preserved. Skills ask short questions before choosing an implementation.

Find new skills:

```sh
npx --yes github:marcusmfrancis/skills#main fetch
```

Update an installed skill:

```sh
npx --yes github:marcusmfrancis/skills#main update mf-ui-taste --global --agent codex
```

Updates keep a backup and stop if you edited the installed files. Older installations without a receipt must go into a new directory first. Use `--agent cursor` or `--agent shared` for those skill directories.

Or tell your AI:

```text
Install mf-ui-taste from marcusmfrancis/skills globally for my coding agent.
```

[Download ZIP](https://github.com/marcusmfrancis/skills/archive/refs/heads/main.zip) · [MCP setup](docs/MCP.md)

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
| [mf-image-to-code](agent-skills/ui/mf-image-to-code/SKILL.md) | Image to code |
| [mf-motion](agent-skills/ui/mf-motion/SKILL.md) | Motion |
| [mf-liveline](agent-skills/ui/mf-liveline/SKILL.md) | Liveline |
| [mf-ui-cleanup](agent-skills/ui/mf-ui-cleanup/SKILL.md) | UI cleanup |
| [mf-ux](agent-skills/ui/mf-ux/SKILL.md) | UX |

## Media

| Skill | Use |
|---|---|
| [mf-media-image-compression](agent-skills/media/mf-media-image-compression/SKILL.md) | Image compression |

## Agent workflows

| Skill | Use |
|---|---|
| [mf-ui-reference-catalog](agent-skills/codex/mf-ui-reference-catalog/SKILL.md) | UI recording to evidence catalog |

## 3D

| Skill | Use |
|---|---|
| [mf-3d-web-experiences](agent-skills/3d/mf-3d-web-experiences/SKILL.md) | 3D web experiences |
| [mf-3d-threejs](agent-skills/3d/mf-3d-threejs/SKILL.md) | Three.js development |

## Development

| Skill | Use |
|---|---|
| [mf-before-launch](agent-skills/development/mf-before-launch/SKILL.md) | Before launch |
| [mf-storage-cleanup](agent-skills/development/mf-storage-cleanup/SKILL.md) | Local storage cleanup |

[License](LICENSE) · [Notices](ATTRIBUTION.md)
