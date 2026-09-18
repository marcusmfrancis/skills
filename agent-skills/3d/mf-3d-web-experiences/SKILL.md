---
name: mf-3d-web-experiences
description: Plan and build scroll-driven 3D websites, product viewers, and interactive scenes.
---

# 3D web experiences

## Start with the user

Inspect the current project and supplied references first. Ask only unanswered questions below, in one short batch with plain-language options and an "I'm not sure" choice. Do not make a nontechnical user choose package names. Recommend a default and explain what it enables in one sentence. Reuse answers already given. If they ask only for advice, return advice; implementation requires a request to act.

- What should visitors do: explore a story, inspect a product, or interact with a scene?
- Is this a new site or an existing one? Inspect its framework rather than asking the user to identify it.
- Which reference moments matter, and do they have usable models, images, or neither?
- Must it work on phones and slower devices? Default to yes.

## Choose the smallest suitable stack

Use the host renderer when healthy. For React projects, React Three Fiber expresses Three.js scenes as components; it is not a replacement for WebGL. For a non-React site, use Three.js directly. A rotating product may need only a model viewer; a sequence of stills may need ordinary HTML rather than a 3D world. Explain the tradeoff before adding complexity.

For a compatible React 19 project without 3D dependencies:

```sh
npm install three @react-three/fiber@9 @react-three/drei
npm install -D @types/three
```

React 18 uses Fiber 8; check Drei peer dependencies before selecting its version. Never upgrade React just to fit this example. For vanilla projects, `npm install three` is enough to begin. Add GSAP only if the chosen scroll choreography benefits from it: `npm install gsap`. Check current peer dependencies and translate commands to the existing package manager.

## Build the experience

1. Turn the brief into a small chapter table: visitor action, content, camera position and target, visible objects, transition, and static fallback. Avoid prescribing a visual style.
2. Build a gray-box scene and the real HTML content first. Agree on scale, camera framing, and the route before materials or effects.
3. Make one normalized scroll progress value drive the camera route and relevant chapter states. Keep camera position and look-at targets coherent; test reverse scrolling, jumps, and resizing. Do not stack independent smoothing systems or hijack wheel/touch input.
4. Keep one persistent canvas where continuity needs it. Prevent orbit controls from fighting the guided camera; make inspect mode and return-to-story explicit.
5. Use licensed GLB assets or procedural geometry appropriate to the brief. Compress based on measured load cost, preserve visual quality, and show loading/error/retry states.
6. Add lighting and materials before bloom or decorative particles. Dispose replaced resources, cap pixel ratio, pause offscreen work, and reuse geometry for repeated objects.
7. Keep navigation, text, and the main action reachable without the canvas. Reduced motion replaces camera travel with clear chapter changes; rendering failure shows useful static content.

## Verify

Test forward/back scrolling, direct chapter navigation, inspect/return, keyboard, touch, resize, loading failure, reduced motion, and a constrained device. Record actual frame timing and download size instead of promising 60 FPS. Compare the finished route with the reference moments, not just a hero screenshot.

## Setup and handoff

After the answers, state the chosen approach and the files it affects. Give exact commands for the detected package manager and working directory, explaining what each does. If no new dependency is needed, say so. Preserve the existing stack and lockfile; do not install a second library for a capability the project already owns. Run authorized setup, then exercise the actual result. Report what changed, what was tested, and any remaining blocker in plain language. Never equate generated code or a passing build with a working user flow.
