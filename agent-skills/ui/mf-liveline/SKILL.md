---
name: mf-liveline
description: Add live charts with clear data states, accessible summaries, and realistic streaming behavior.
---

# Liveline

## Start with the user

Inspect the current project and supplied references first. Ask only unanswered questions below, in one short batch with plain-language options and an "I'm not sure" choice. Do not make a nontechnical user choose package names. Recommend a default and explain what it enables in one sentence. Reuse answers already given. If they ask only for advice, return advice; implementation requires a request to act.

- What does the chart measure, and what action should someone take from it?
- Is the data live, historical or simulated? What are the units and update frequency?
- Is this one simple trend, multiple series, or a chart needing axes, annotations, zoom or financial semantics?
- Where will it appear, and what should happen when data stops or fails?

## Check fit

Inspect the current chart owner and source-to-render data path. Liveline is a focused React chart package, not a universal replacement for a full charting system. Keep an existing capable chart library when it fits. For a React project selecting Liveline:

```sh
npm install liveline
```

Read the installed version's README/types before writing props. Verify peer dependencies and required styling. Do not invent a component API from the package name. Provide the actual import, minimal valid example, data adapter and project run command after inspection.

Normalize timestamp units and ordering, reject non-finite values, define duplicate/out-of-order handling, and bound retained samples. Separate zero from missing data. Show units, the current value, time window and freshness. Keep simulated data visibly identified; never present it as a connected source.

Handle loading, empty, paused, stale, disconnected, malformed and recovered data. Avoid extrapolating a line that falsely implies a measurement. Respect the host colors and accessible contrast. Add a textual summary or table and keyboard-accessible alternatives to pointer-only inspection.

## Verify

Replay representative data and the expected peak update rate. Exercise resize/high-DPI, range expansion, long labels, touch/scrubbing, series visibility, source disconnect/reconnect and reduced motion. Verify subscription and animation cleanup on unmount. Report whether the real provider was exercised or only replay fixtures.

## Setup and handoff

After the answers, state the chosen approach and the files it affects. Give exact commands for the detected package manager and working directory, explaining what each does. If no new dependency is needed, say so. Preserve the existing stack and lockfile; do not install a second library for a capability the project already owns. Run authorized setup, then exercise the actual result. Report what changed, what was tested, and any remaining blocker in plain language. Never equate generated code or a passing build with a working user flow.
