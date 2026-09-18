---
name: mf-image-to-code
description: Turn screenshots and visual references into responsive code that fits the existing project.
---

# Image to code

## Start with the user

Inspect the current project and supplied references first. Ask only unanswered questions below, in one short batch with plain-language options and an "I'm not sure" choice. Do not make a nontechnical user choose package names. Recommend a default and explain what it enables in one sentence. Reuse answers already given. If they ask only for advice, return advice; implementation requires a request to act.

- Which image or URL is the reference, and is the scope a full page, section, or component?
- Should the result match closely or adapt the layout to their brand?
- Which content/assets must stay, and what should the buttons/forms actually do?
- Which screen sizes matter? Inspect the project stack; recommend one only for a new project.

## Build from evidence

Inspect each supplied image. Separate observed layout/type/spacing from inferred interactions and mobile behavior. Ask about ambiguous behavior that affects implementation. Do not invent functional backends from a screenshot.

Map the reference to existing tokens and component owners. Preserve semantic HTML, visible labels, focus handling, contrast, responsive order and aspect ratios. Use accessible existing primitives for dialogs, tabs and menus. Prefer real supplied assets; do not substitute fake screenshots or unrelated imagery without noting the substitution.

Choose the actual component boundaries and implement one coherent page. A full-page reference should not become disconnected demo fragments. Connect existing data/actions when authorized. For a static prototype, identify simulated behavior in the handoff.

No extra image-to-code service is required: a capable visual coding agent can inspect the image and edit the project. If the user explicitly selects a connected generation service, explain where images are uploaded and use its documented tools. Keep credentials out of commands, source and output. Compare returned variants before applying one; a downloaded artifact is not an integrated implementation.

## Commands and proof

Read package scripts and give the exact install/run commands for this repository. Do not blindly add React/Tailwind to a different framework. Capture the implemented page at the reference size and a phone width after assets settle. Compare alignment, typography, spacing, image crop and content. Test real actions, keyboard/focus, loading/error states and responsive overflow. Fix visible mismatches before claiming fidelity.

## Setup and handoff

After the answers, state the chosen approach and the files it affects. Give exact commands for the detected package manager and working directory, explaining what each does. If no new dependency is needed, say so. Preserve the existing stack and lockfile; do not install a second library for a capability the project already owns. Run authorized setup, then exercise the actual result. Report what changed, what was tested, and any remaining blocker in plain language. Never equate generated code or a passing build with a working user flow.
