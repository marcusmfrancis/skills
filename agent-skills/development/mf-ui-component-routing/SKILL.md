---
name: mf-ui-component-routing
description: Select UI components from the host design system and inspect compatibility, rights and interaction behavior before introducing another library.
---

# Choose and integrate UI components

Use when choosing reusable controls, motion libraries or development tuning panels. Start from the actual product task and existing component owner.

1. Inspect project instructions, package manifest, tokens and the owning component. Preserve approved behavior and appearance. Reuse the host implementation when it already fits.
2. Describe the missing behavior precisely: for example nested dialog focus, searchable selection, resizable workspace or temporary animation tuning. A gallery screenshot is not evidence of those behaviors.
3. Compare only candidates relevant to that gap. Inspect framework compatibility, dependency size, source rights, accessibility and maintenance evidence. Free viewing is not redistribution permission.
4. Adapt a selected component at one clear boundary. Use host tokens and one established motion vocabulary. Do not copy a whole starter or replace the design system to gain a small control.
5. For DialKit or similar tuning tools, treat the panel as a development aid. Export or record accepted settings and verify behavior without the panel; the tool does not automatically build the application or make every setting production-ready.
6. Exercise pointer, keyboard, focus, reduced motion and responsive states in the real host. Include dismissal, interruption and nested-overlay recovery where relevant.

Deliver the component decision, source/version, integration seam, accepted settings and observed checks. Avoid global framework mandates and machine-specific catalog dependencies.

## Sources

- https://www.dialkit.dev/
- https://www.dialkit.dev/agent
