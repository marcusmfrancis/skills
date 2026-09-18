---
name: mf-3d-threejs
description: Build and debug Three.js scenes, cameras, materials, assets, shaders, and rendering performance.
---

# Three.js development

## Start with the user

Inspect the current project and supplied references first. Ask only unanswered questions below, in one short batch with plain-language options and an "I'm not sure" choice. Do not make a nontechnical user choose package names. Recommend a default and explain what it enables in one sentence. Reuse answers already given. If they ask only for advice, return advice; implementation requires a request to act.

- Are we building a scene, adding a feature, or fixing an existing rendering problem?
- What should the scene show and how should people interact with it?
- What models/textures already exist, and what devices must run it?
- Is visual fidelity, loading time, or interaction speed the current priority?

## Setup

Inspect package versions, renderer, asset pipeline, and existing animation loop. Keep the current WebGL or WebGPU backend unless a measured requirement justifies changing it. GLSL ShaderMaterial and WebGPU/TSL are different implementations; do not promise an automatic conversion.

For an existing vanilla JavaScript project:

```sh
npm install three
```

For TypeScript, add `npm install -D @types/three`. Use `three/addons/` for compatible loaders and controls. In React, use the existing Fiber canvas if present. For a new site, first confirm its directory and framework, then give the selected starter's current commands; don't assume a bundler is already running.

## Implementation order

1. Establish world units, axes, camera near/far planes and aspect ratio. Use a basic mesh to verify rendering before debugging an imported model.
2. Size the drawing buffer to its actual container, cap pixel ratio by device budget, and update camera projection on resize. Use one animation owner; use delta time for continuous animation.
3. Load assets with visible progress, failure and retry. Inspect scale, orientation, materials and animation clips. Do not treat a failed asset as an empty successful scene.
4. Mark color textures appropriately for the installed Three.js version; keep normal/roughness data in linear space. Check tone mapping and exposure before compensating with extreme light values.
5. Add pointer/touch picking in canvas-relative coordinates. Keep important controls available through ordinary labeled HTML and keyboard actions.
6. Profile draw calls, triangles, texture sizes and render passes. Prefer instancing for repeated meshes, selective shadows, appropriate texture resolutions, and fewer post-processing passes before reducing everything globally.
7. Dispose owned geometry, materials, textures, render targets and controls on replacement/unmount. Shared cached assets need shared lifetime ownership; don't dispose a resource another scene still uses.
8. For custom effects, inspect backend/version support and test a minimal shader first. Handle renderer initialization failure and context loss with a usable fallback.

## Verify

Exercise mount/unmount, repeated asset changes, resize/high-DPI, loading failure and input. Compare before/after memory and frame timing over a repeated interaction. Test on the weakest supported device. For a scroll narrative, plan the camera route separately from renderer mechanics.

## Setup and handoff

After the answers, state the chosen approach and the files it affects. Give exact commands for the detected package manager and working directory, explaining what each does. If no new dependency is needed, say so. Preserve the existing stack and lockfile; do not install a second library for a capability the project already owns. Run authorized setup, then exercise the actual result. Report what changed, what was tested, and any remaining blocker in plain language. Never equate generated code or a passing build with a working user flow.
