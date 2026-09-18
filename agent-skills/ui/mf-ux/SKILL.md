---
name: mf-ux
description: Simplify user journeys, onboarding, contextual panels, and decision-making while preserving useful capability.
---

# UX

## Start with the user

Inspect the current project and supplied references first. Ask only unanswered questions below, in one short batch with plain-language options and an "I'm not sure" choice. Do not make a nontechnical user choose package names. Recommend a default and explain what it enables in one sentence. Reuse answers already given. If they ask only for advice, return advice; implementation requires a request to act.

- Who is using this, and what are they trying to finish?
- Where do they hesitate, lose context, or make mistakes?
- Is the goal a review, a proposed flow, or implementation?
- What behavior, saved data, and product constraints must remain intact?

## Evaluate the journey

Walk the task from entry to completion. Identify the decisions, information and state each step requires. Prefer observable problems over aesthetic opinions. Reduce unnecessary choices while preserving discoverability and control. Do not hide critical information just to reduce clicks.

For each proposed change ask: is the next action understandable, does it preserve context, can people recover, and does it remove more confusion than it adds? Explain a recommendation in ordinary language. Automation is useful when it helps this task; AI is not a requirement for every interface.

## Progressive disclosure

Keep core actions visible. Reveal advanced choices when their purpose becomes relevant. A tray or overlay should have one primary task, a clear title, predictable back/dismiss actions and an obvious path when content grows. Preserve entered data when closing or expanding where the product promises it. Manage focus, background interaction, scroll locking and return focus correctly.

Use motion to explain continuity, drawing from the project's existing vocabulary. Do not add a library solely to apply this skill. Loading, errors, retries and success should keep the user's work and next action clear. Warn before irreversible operations, explain their concrete consequence, and offer undo where possible.

## Verify with the task

Test a newcomer path and an experienced-user path, keyboard and touch, constrained width, interruption and recovery. Compare completion, errors and unnecessary decisions against the baseline. If no real users were observed, label conclusions as a heuristic review. Separate a design proposal from an implemented and tested flow.

## Setup and handoff

After the answers, state the chosen approach and the files it affects. Give exact commands for the detected package manager and working directory, explaining what each does. If no new dependency is needed, say so. Preserve the existing stack and lockfile; do not install a second library for a capability the project already owns. Run authorized setup, then exercise the actual result. Report what changed, what was tested, and any remaining blocker in plain language. Never equate generated code or a passing build with a working user flow.
