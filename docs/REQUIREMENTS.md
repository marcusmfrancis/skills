# Release ledger

Scope: personal-brand skill hub at marcusmfrancis/skills; preserve Octane repositories and existing installation links. A portable first release drawn from four existing guides and two recent UI workflows, not a wholesale export of private workspace skills.

| Outcome | Owner | Baseline | Target and evidence | Stop / rollback | Status |
|---|---|---|---|---|---|
| Personal account publication | GitHub repo | No personal repositories | Public marcusmfrancis/skills; anonymous retrieval | Verify authenticated owner before push | Verified |
| MF naming and categorization | agent-skills | Existing Octane names | All six pass skill-creator quick_validate and contract checks | No renames of upstream projects | Verified |
| Portable skills and recent workflows | six SKILL.md files | Four basic existing guides; local routing and video analysis | No private paths or dependencies on local tools; sources and use cases | Exclude private recordings and restricted source | Verified |
| Browse and previews | README, SCREENSHOTS | Separate Octane repos | Categorized links, three existing-site preview captures (shader withheld after a rendering defect) with clear provenance | Do not represent screenshots as new demos | Verified |
| Install | CLI | No personal installer | List/read/install; temporary project test, reject unknown names and existing targets | Refuse overwrite | Verified |
| MCP | stdio server | Existing website serves Octane catalog | Real SDK client initializes, lists/searches/reads all six personal skills | Read-only; no implicit install/deploy | Verified |
| Maintainability and currency | catalog, tests, CI | No shared personal catalog | One manifest for README/CLI/MCP; review date and honest validation boundaries | Fail checks on drift | Verified |
| Existing website integration | live /skills and /mcp | Octane library remains live | Link personal repo from hub; website replacement remains separate until site release blockers resolved | Preserve live site | Partial |

Infrastructure: local stdio process only, no daemon or cloud compute. Cost and GPU metrics are not applicable. Security: no credentials, private workspace data, unrelated source or recording screenshots in release. Output judgment: deterministic file/install/MCP checks plus editorial skill review; no unobserved task success claims. UI: GitHub rendered README and existing preview images; no new custom application. Hosted personal MCP and a complete dependency audit of upstream tools are outside this first release and remain unimplemented.

Local verification: 3 contract suites pass, covering all six CLI installs, existing-target and symlink rejection, unknown-name rejection, MCP initialization/search/read/resources/error handling. All six skill-creator validations pass. README freshness check passes. Public distribution validation follows publication.

Published verification (2026-09-18):

- Public repository: https://github.com/marcusmfrancis/skills, release tag v0.1.0.
- Anonymous raw catalog retrieval returns six entries.
- Exact documented npx command lists six entries; published install into a temporary directory produces the requested skill.
- Real MCP client launched through the published npx command initializes and retrieves all six skill bodies.
- GitHub Actions passed: https://github.com/marcusmfrancis/skills/actions/runs/35322551886.
- Rendered GitHub README inspected in the browser; category, source, preview and MCP links are present.
- Shader screenshot withheld because the existing site renders the shader outside its frame. Three other current page captures were visually inspected; image compression capture is its empty state.

Remaining broader work: the existing personal website still serves the Octane catalog/MCP. Its migration to this personal catalog and earlier tab-fix deployment are not included in the published hub and remain Partial. The previous site release check failed on generated backups and unrelated source; the local site differs from production. No unrelated website changes were deployed.
