---
name: mf-data-line-chart
description: Integrate a source-attributed BKLIT line chart with explicit data semantics, missing-data behavior and accessible summaries.
---

# Dashboard line charts

Use for dashboard time series. Preserve the host chart library if it already meets the task; BKLIT is a source option, not permission to replace the entire chart system.

1. Establish x ordering, units, timezone, aggregation and whether missing values mean zero or unknown. Keep those decisions explicit; never silently convert missing data to zero.
2. Inspect the current BKLIT documentation and registry item, generated files, license and host dependencies before installing. The older Octane example used a Visx-based wrapper; do not assume current upstream props match it.
3. Map colors, grid density and tooltip typography to the host. Keep a visible heading, units and text summary or accessible data alternative.
4. Implement empty, loading, error and single-point states. Ensure negative values, repeated timestamps and long labels are handled deliberately.
5. Exercise hover and available touch/keyboard alternatives, resizing, reduced motion and the real data feed. Check that tooltip values and axis labels agree with source data.

Deliver the chart, data contract, source attribution and exact checks performed. This skill includes guidance, not a redistributed BKLIT implementation or a blanket license grant.

## Sources

- https://bklit.com/
- https://github.com/octanehouse/octane-skill-bklit-line-chart
