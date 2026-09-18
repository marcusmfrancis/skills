# Public skill release

| Outcome | Baseline | Owner | Proof | Status |
|---|---|---|---|---|
| Two broad 3D skills | Not published | Skill folders | Scoped questions, stack decisions, commands, references | Verified |
| Image to code | Private-service assumptions | Skill folder | Portable workflow, no required private endpoint | Verified |
| Before launch | Overprescribed legal/feedback additions | mf-before-launch | Product-specific intake and checks | Verified |
| Local storage cleanup | Broad automatic deletion | mf-storage-cleanup | Read-only scan, explicit selected actions, no snapshot/volume purge defaults | Verified |
| Motion and Liveline | Internal guidance | Two skill folders | Host-aware questions, implementation and verification | Verified |
| UI cleanup and UX | Internal guidance | Two skill folders | Intake and scoped improvements | Verified |
| Install, update, fetch | Install only | CLI | Clean install, safe update, modified-file protection, fresh catalog | Verified |
| GitHub and website library | Six personal skills; separate site resources | Catalog, site adapter | All new entries and exact instructions on both | Verified |
| MCP access for every skill | Read-only local and site tools | MCP | Real SDK clients initialize, list, read every added skill | Verified |
| Public release | v0.2.2 | GitHub and Workers | CI, typecheck, lint, Workers preview, browser, live checks | Verified |

Rollback: preserve Git tags, backup touched site files before editing, record Workers version. No changes to global source skills. Preserve unrelated site resources. Privacy: publish no credentials or machine-specific paths. Runtime claims are limited to skill delivery and setup, not every possible generated application. Measure CLI file preservation and HTTP/MCP agreement before and after. Infrastructure cost/throughput benchmarks do not apply to this static catalog change. Website build/preview and production checks remain separate.

Local evidence: six installer/MCP tests pass after a clean npm install; all 15 skill frontmatters validate; docs match the catalog. Workers preview serves all 15 exact instructions and supporting files through a real HTTP MCP client. Website typecheck passes. Full website lint has pre-existing generated-build and unrelated component errors; changed files pass scoped lint. Published v0.3.0; GitHub CI passed on 66f49d9. Live HTTP MCP initialization, all 15 reads, every supporting file, catalog and page checks passed. Public npx install/update/fetch passed. Browser search, detail navigation, copy feedback, keyboard activation and connection disclosures exercised; constrained and desktop layouts inspected. Workers version fcc9bcac-40ec-4367-9e6b-4046670492d4; previous version 86a5451c-d8f6-45f9-84fd-91bfac94c71d. The existing site verifier passed its internal checks; external GitHub links had transient 504 responses and were rechecked separately. No claim of downstream application performance or formal usability-study results.
