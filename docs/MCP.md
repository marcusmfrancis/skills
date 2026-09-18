# Connect MF Skills through MCP

This is the personal catalog for marcusmfrancis/skills. It is separate from the existing Octane website endpoint.

Requires Node.js 20+ and an MCP client that supports local stdio servers. Add this entry using your client's MCP configuration interface:

```json
{
  "mcpServers": {
    "mf-skills": {
      "command": "npx",
      "args": ["--yes", "github:marcusmfrancis/skills#v0.1.0", "mcp"]
    }
  }
}
```

Clients use different configuration formats; the command and arguments above are the portable connection details, not a universal configuration-file location.

To avoid fetching at connection time, clone this repository, run `npm ci`, and use `node` as the command with the absolute path to `bin/mf-skills.mjs` and `mcp` as its arguments.

## Available capabilities

- `mf_skills_list`: list all skills or filter by `query` across names, categories, descriptions and tags.
- `mf_skills_read`: retrieve a skill with its exact `name`.
- Resources: one `mf-skill:///mf-...` Markdown resource per skill.

Try: "Find the MF skill for analyzing a UI recording, read it and use it to plan the analysis of my supplied video."

The server only reads the bundled catalog and skill files. It does not install skills, run their instructions, access your accounts or deploy. The client decides whether and how to use the returned guidance. No authentication secrets are required.

## Troubleshooting

- If `npx` is not found, configure its full path in the client or use the local Node command.
- If GitHub/package download fails, check network access and that the pinned release exists; use the cloned option if needed.
- If the process exits with an unknown-command error, pass `mcp` as the final argument.
- This is stdio, not an HTTP URL. A remote-only client cannot connect directly to it.
