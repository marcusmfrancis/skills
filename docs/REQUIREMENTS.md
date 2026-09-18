# Release ledger

Scope: personal-brand skill hub at marcusmfrancis/skills; preserve Octane repositories and existing installation links. A portable first release drawn from four existing guides and two recent UI workflows, not a wholesale export of private workspace skills.

| Outcome | Owner | Baseline | Target and evidence | Stop / rollback | Status |
|---|---|---|---|---|---|
| Personal account publication | GitHub repo | No personal repositories | Public marcusmfrancis/skills; anonymous retrieval | Verify authenticated owner before push | Partial |
| MF naming and categorization | agent-skills | Existing Octane names | All six pass skill-creator quick_validate and contract checks | No renames of upstream projects | Verified |
| Portable skills and recent workflows | six SKILL.md files | Four basic existing guides; local routing and video analysis | No private paths or dependencies on local tools; sources and use cases | Exclude private recordings and restricted source | Partial |
| Browse and previews | README, SCREENSHOTS | Separate Octane repos | Categorized links, three existing-site preview captures (shader withheld after a rendering defect) with clear provenance | Do not represent screenshots as new demos | Partial |
| Install | CLI | No personal installer | List/read/install; temporary project test, reject unknown names and existing targets | Refuse overwrite | Partial |
| MCP | stdio server | Existing website serves Octane catalog | Real SDK client initializes, lists/searches/reads all six personal skills | Read-only; no implicit install/deploy | Partial |
| Maintainability and currency | catalog, tests, CI | No shared personal catalog | One manifest for README/CLI/MCP; review date and honest validation boundaries | Fail checks on drift | Partial |
| Existing website integration | live /skills and /mcp | Octane library remains live | Link personal repo from hub; website replacement remains separate until site release blockers resolved | Preserve live site | Partial |

Infrastructure: local stdio process only, no daemon or cloud compute. Cost and GPU metrics are not applicable. Security: no credentials, private workspace data, unrelated source or recording screenshots in release. Output judgment: deterministic file/install/MCP checks plus editorial skill review; no unobserved task success claims. UI: GitHub rendered README and existing preview images; no new custom application. Hosted personal MCP and a complete dependency audit of upstream tools are outside this first release and remain unimplemented.

Local verification: 3 contract suites pass, covering all six CLI installs, existing-target and symlink rejection, unknown-name rejection, MCP initialization/search/read/resources/error handling. All six skill-creator validations pass. README freshness check passes. Public distribution validation follows publication.
