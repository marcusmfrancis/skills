---
name: mf-motion
description: Design consistent, interruptible interface motion with accessible reduced-motion behavior.
---

# Motion

## Start with the user

Inspect the current project and supplied references first. Ask only unanswered questions below, in one short batch with plain-language options and an "I'm not sure" choice. Do not make a nontechnical user choose package names. Recommend a default and explain what it enables in one sentence. Reuse answers already given. If they ask only for advice, return advice; implementation requires a request to act.

- Which interaction should improve: navigation, panels, hover, drag, loading or a transition?
- What feels wrong now, and is there a reference for the desired behavior?
- Should motion feel quiet, responsive, or expressive? Keep existing approved motion by default.
- Which devices and framework does the project use? Inspect rather than asking users to name libraries.

## Choose and implement

Reuse the project's motion library and token owner. Use CSS for straightforward state changes; add a spring library only when continuity, gestures or layout transitions justify it. In a React project choosing Motion, the setup is `npm install motion`, with imports from `motion/react`. Verify the current React compatibility before installation. Native apps should keep native animation APIs.

Define a small named vocabulary for expansion, travel, content fades and measurement updates. Starting points, not universal requirements: spatial spring stiffness 300/damping 30/mass 0.8; content fade 160ms; entrance stagger 45ms capped at 180ms. Tune against actual distance, gesture speed and content.

Map each transition's trigger, source/destination, interruption, focus and reduced-motion behavior. Preserve object identity when it moves between states. Don't change keys merely to replay an animation. New input should retarget or cancel work rather than wait. Keep transient controls open while a user crosses the gap; include keyboard focus, not only pointer hover.

Prefer transform and opacity for travel. Layout animation can be appropriate when content genuinely changes size: use measured layout techniques and profile it instead of banning size changes. CSS bezier curves approximate, rather than reproduce, physical springs. Continuous scroll-linked values should track input without multiple stacked springs. Pause decorative offscreen loops.

## Verify

Test rapid toggles, reversals, interrupted drag, navigation back, loading/error changes, touch, keyboard and focus. Reduced motion removes large travel/overshoot while preserving status and every action. Check readability and performance on a constrained device; don't label CSS clip effects universally compositor-only.

## Setup and handoff

After the answers, state the chosen approach and the files it affects. Give exact commands for the detected package manager and working directory, explaining what each does. If no new dependency is needed, say so. Preserve the existing stack and lockfile; do not install a second library for a capability the project already owns. Run authorized setup, then exercise the actual result. Report what changed, what was tested, and any remaining blocker in plain language. Never equate generated code or a passing build with a working user flow.
