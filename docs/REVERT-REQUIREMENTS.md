# Import rollback

| Outcome | Owner | Proof | Status |
|---|---|---|---|
| Remove 141 imported recipes | Catalog and skill folders | Exactly original five plus taste remain | Verified |
| Keep taste and simple installation | README, CLI, MCP | Tests and generated README check | Verified |
| Publish correction | GitHub main and v0.2.2 | Remote catalog and CI | Verified |

Use a forward commit. Preserve prior history and tags. No global installations or website changes.

All six retained SKILL.md files match the previous commit byte for byte. Installer, overwrite protection, global destinations and real MCP checks passed. Generated README check passed.

Public catalog confirms six retained skills. Corrected release v0.2.2 preserves dependency versions; clean npm ci and all four tests passed. GitHub Actions run 35331166877 passed for 11f94eed7c32b480fc0fb98e0af4d03793af6495. Prior tags remain historical snapshots.
