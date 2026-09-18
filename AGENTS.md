# Skills

The library is titled Skills. The mf- prefix is for skill identifiers and search, not product branding. Do not constrain the library to its current topics. Skill folders and frontmatter names begin with mf-. Group related topics using mf-category-skill-name. Keep every skill portable; no machine-specific paths, credentials or private client artifacts.

catalog.json is the metadata owner for the CLI, MCP and generated README catalog. Add skills under agent-skills/category/name/SKILL.md. Keep source attribution and dependency licenses distinct from this repository's original prose/code license. Do not relabel external implementation code as original work.

Run `npm test` and `npm run docs:check` before publishing. MCP is read-only and must never install files or execute skill instructions. The CLI installer writes only to an explicit destination and refuses existing skill folders. Never print logging on MCP stdout.
