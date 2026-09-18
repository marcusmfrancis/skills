---
name: mf-ui-cleanup
description: Improve an existing interface’s consistency, readability, responsiveness, and interaction states.
---

# UI cleanup

## Start with the user

Inspect the current project and supplied references first. Ask only unanswered questions below, in one short batch with plain-language options and an "I'm not sure" choice. Do not make a nontechnical user choose package names. Recommend a default and explain what it enables in one sentence. Reuse answers already given. If they ask only for advice, return advice; implementation requires a request to act.

- Which screens feel confusing or inconsistent, and what task should become easier?
- Should we audit first or implement fixes now?
- What must stay: branding, layout, components, behavior or all of these?
- Which devices and user complaints should guide priority?

## Establish the baseline

Read the host design contract, token definitions and shared component owners. Walk through the primary task before styling. Capture the affected screens and note concrete problems: unreadable text, hidden actions, inconsistent controls, overflow, broken focus or unclear state. Do not redesign the entire app to fix one component.

Rank issues by blocked tasks, accessibility, repeated inconsistency and visual polish. Reuse existing semantic tokens and primitives. Add a token only when an existing one cannot express the meaning. Create a short DESIGN.md only when the project lacks a shared contract and the requested scope warrants one.

## Fix the selected scope

Keep input labels visible; placeholders are examples. Use tabular numerals for changing measurements. Preserve brand typography and approved letter spacing. Keep dense full values accessible when truncating. Reserve media space to prevent layout shift.

Group by spacing before adding borders. Keep actions within safe areas and retain access to content hidden at smaller widths. Use one established accessible primitive owner per surface for dialogs, menus, selects and tabs. Keep status understandable without color alone. Meet target-size requirements and aim for generous touch targets where practical.

Put errors near their cause with a recovery action. Empty states should explain the next step. Loading must not look like missing data. Preserve focus, scroll position and user input across transient views. Use existing motion tokens and reduced-motion behavior; no new animation package is needed for ordinary cleanup.

## Verify

Repeat the same task and viewport checks before/after. Exercise keyboard, focus return, portals, touch, responsive overflow, loading, empty, error, disabled and success states relevant to the change. Report exactly what improved and what remains. Do not use screenshot appearance as evidence that a control works.

## Setup and handoff

After the answers, state the chosen approach and the files it affects. Give exact commands for the detected package manager and working directory, explaining what each does. If no new dependency is needed, say so. Preserve the existing stack and lockfile; do not install a second library for a capability the project already owns. Run authorized setup, then exercise the actual result. Report what changed, what was tested, and any remaining blocker in plain language. Never equate generated code or a passing build with a working user flow.
