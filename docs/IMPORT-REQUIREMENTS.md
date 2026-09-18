# Library import

| Request | Owner | Baseline | Proof | Status |
|---|---|---|---|---|
| Import full supplied library including 3D | agent-skills, catalog | Five skills | Source inventory equals imported mapping; files and links resolve | Verified |
| Repackage updated ytaste | UI skill | Local taste variants found | Latest local taste-skill used after optional clarification; all content retained with mf name | Verified |
| Use mf identifiers and source-like categories | import mapping | Design / Development / Media | Unique names, category parity, 3D group | Verified |
| Bare README, no biography or source-repo links | docs generator and content | Short README | Scan all shipped text; retain copyright/license text without links | Verified |
| Copy/paste install and global installation | CLI and docs | Explicit destination only | Supported global destination checks with isolated homes, all files preserved | Verified |
| Publish tested release | release | v0.1.1 | Skill checks, CLI/MCP, package and GitHub validation | Partial |

Preserve existing published tags. Import only public source and the requested local taste skill. Do not execute downloaded helper scripts during inspection. Inspect license before publishing. Keep copyright notices in each imported skill so standalone installation carries them. Runtime tests prove distribution, not every imported workflow's output. No website deployment in this correction.

Evidence: 147 skill frontmatter validations passed. Four Node tests passed, including byte-for-byte installed supporting files, overwrite/symlink protection, and real MCP reads of every skill. All 141 source entries mapped; all supporting files retained except the documented personal writing corpus replacement. All 321 binary files matched source bytes. Actual npm archive contains every skill file. Remaining apparent Markdown paths are intentional output-template placeholders. Codex and Claude global destinations tested without writing to user skill folders. No source-author URLs remain in shipped content. Individual imported workflows and demos were not executed; this release verifies packaging and delivery. Infrastructure performance and browser interaction states are not applicable to this documentation/package import. Rollback: use the preserved v0.1.1 tag.
