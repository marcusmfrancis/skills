---
name: mf-visual-shader-gradient
description: Add a React WebGL gradient with theme-aware colors, reduced-motion behavior and a useful static fallback.
---

# Shader gradients

Use for ambient WebGL gradients behind a hero or transition surface. This does not generate video or replace an approved background design.

1. Inspect the host renderer, React/Three versions, container sizing and existing theme tokens. Read the installed Shader Gradient documentation before selecting props or peers; avoid copying a dependency list from an older project.
2. Isolate the canvas in a client-rendered component. Give its parent a real height and keep foreground links selectable and readable. Decorative canvases should not intercept pointer events or appear as content to assistive technology.
3. Start with the smallest supported `ShaderGradientCanvas` / `ShaderGradient` composition. Save the actual accepted parameter values alongside the component instead of depending on an editor URL alone.
4. Provide a CSS or image fallback for unavailable WebGL, loading, context loss and reduced motion. Stopping animation should retain the approved appearance, not expose a blank hero.
5. Exercise dark/light themes, resize, phone layout and navigation away/back. Inspect GPU use and scrolling on the target device; lower resolution or stop offscreen animation if the surface harms responsiveness.

Deliver the component, accepted settings, fallback and observed browser checks. A screenshot proves one frame, not smooth motion or recovery.

## Sources

- https://github.com/ruucm/shadergradient
- https://www.shadergradient.co/
