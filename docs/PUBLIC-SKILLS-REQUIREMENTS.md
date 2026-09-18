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
| GitHub and website library | Six personal skills; separate site resources | Catalog, site adapter | All new entries and exact instructions on both | Partial |
| MCP access for every skill | Read-only local and site tools | MCP | Real SDK clients initialize, list, read every added skill | Verified |
| Public release | v0.2.2 | GitHub and Workers | CI, typecheck, lint, Workers preview, browser, live checks | Partial |

Rollback: preserve Git tags, backup touched site files before editing, record Workers version. No changes to global source skills. Preserve unrelated site resources. Privacy: publish no credentials or machine-specific paths. Runtime claims are limited to skill delivery and setup, not every possible generated application. Measure CLI file preservation and HTTP/MCP agreement before and after. Infrastructure cost/throughput benchmarks do not apply to this static catalog change. Website build/preview and production checks remain separate.

Local evidence: six installer/MCP tests pass after a clean npm install; all 15 skill frontmatters validate; docs match the catalog. Workers preview serves all 15 exact instructions and supporting files through a real HTTP MCP client. Website typecheck passes. Full website lint has pre-existing generated-build and unrelated component errors; changed files pass scoped lint. Publication and final live verification pending.
