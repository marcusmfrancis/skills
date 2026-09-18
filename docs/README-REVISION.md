# Catalog correction

| Requirement | Owner | Baseline | Target / proof | Status |
|---|---|---|---|---|
| Title Skills; no personal introduction or narrow positioning | src/docs.mjs / README | MF branding and interface-only description | Plain title, catalog first; generated README checked | Untested |
| MF only as skill-name prefix | public docs / metadata | Product branded MF Skills | Skills title; existing CLI identifiers preserved for compatibility | Untested |
| Better categories and BKLIT removal | catalog / skill folders | Five overlapping categories; thin BKLIT entry | Design, Development, Media; five skills; no BKLIT entry in new release | Untested |
| Preserve working distribution | CLI / MCP / release | v0.1.0 published | Tests, new v0.1.1 and public CLI check; old tag retained | Untested |
| Publish correction | GitHub | Prior README live | Updated rendered README and repository description | Untested |

Rollback: revert this correction; retain v0.1.0. No website changes. Infrastructure and new UI metrics are not applicable to Markdown/catalog corrections. Review rendered GitHub content and retain attribution in its dedicated file.
