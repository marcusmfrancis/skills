---
name: mf-before-launch
description: Check launch readiness, support, privacy disclosures, feedback, and the real product journey.
---

# Before launch

## Start with the user

Inspect the current project and supplied references first. Ask only unanswered questions below, in one short batch with plain-language options and an "I'm not sure" choice. Do not make a nontechnical user choose package names. Recommend a default and explain what it enables in one sentence. Reuse answers already given. If they ask only for advice, return advice; implementation requires a request to act.

- What is launching, who will use it, and where?
- Does it collect accounts, payments, personal data, uploads, or analytics?
- What is the main user journey, and where should support requests go?
- Is this a readiness review or permission to implement missing pieces? What is the launch date?

## Audit before adding features

Inspect routes, forms, authentication, billing, storage, email and deployment setup. Write a short ranked list: launch blockers, worthwhile fixes, later improvements. Only assess features that exist or were requested. A simple portfolio does not automatically need accounts, a feedback database or a tracking suite.

For products with user data, document actual collection, processors, retention and deletion behavior. Draft policy text from verified facts and current jurisdiction-specific guidance. Never invent a governing law, retention period, legal assurance, or claim that a generic template guarantees compliance. Flag decisions requiring the owner or qualified counsel. Do not publish placeholder legal claims as finished policies.

Use existing support/contact paths. If feedback is needed, offer a simple link first; add an in-app form or attachments only when they help users report issues. Validate uploads by type/size, isolate storage, and make failures retryable. For email, distinguish inbound routing from transactional sending. Missing credentials mean the affected path is blocked, not operational.

## Verify the release

Exercise the actual signup or entry flow, main task, saving/export, failure recovery, support/contact, relevant deletion paths, and mobile/keyboard use. Use test payment/provider modes for consequential transactions. Check public links, metadata, error reporting and rollback procedure. Keep secrets server-side. Show exact project-specific build/preview commands and what each checks.

Report a launch decision supported by evidence: ready for the tested scope, or blocked by named items. Deploy or send external messages only when requested. A successful build does not establish email delivery, payment settlement or data deletion.

## Setup and handoff

After the answers, state the chosen approach and the files it affects. Give exact commands for the detected package manager and working directory, explaining what each does. If no new dependency is needed, say so. Preserve the existing stack and lockfile; do not install a second library for a capability the project already owns. Run authorized setup, then exercise the actual result. Report what changed, what was tested, and any remaining blocker in plain language. Never equate generated code or a passing build with a working user flow.
