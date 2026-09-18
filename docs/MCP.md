# Connect

Remote URL: `https://marcusmfrancis.com/mcp`

Claude Code:

```sh
claude mcp add --transport http skills https://marcusmfrancis.com/mcp
```

Codex:

```sh
codex mcp add skills --url https://marcusmfrancis.com/mcp
```

For another client that supports remote MCP, add the URL through its MCP settings. No account is required to read the public library.

Local server configuration for clients that support stdio:

```json
{"mcpServers":{"skills":{"command":"npx","args":["--yes","github:marcusmfrancis/skills#main","mcp"]}}}
```

Requires Node.js 20+. Restart the local server to load a newer catalog. Pin a release tag instead of `main` when you need a fixed version.

Ask your AI: "Find the skill for my task, read it, and ask the setup questions before implementing."

Local tools: `mf_skills_list`, `mf_skills_read`, `mf_skills_files`. The read tool accepts an optional `file` for supporting instructions.
Remote tools: `skills/list`, `resources/search`, `skills/read`. Read a personal skill by its `mf-` slug; its catalog entry includes install/update commands and file names. The remote read tool also accepts `file`.

MCP reads guidance. Installation and updates happen on your computer through the CLI, not on the website:

```sh
npx --yes github:marcusmfrancis/skills#main fetch
npx --yes github:marcusmfrancis/skills#main install mf-3d-web-experiences --global --agent codex
npx --yes github:marcusmfrancis/skills#main update mf-3d-web-experiences --global --agent codex
```
