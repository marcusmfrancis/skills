---
name: mf-storage-cleanup
description: Find disk usage and safely reclaim selected caches and build artifacts without deleting personal data.
---

# Local storage cleanup

## Start with the user

Inspect the current project and supplied references first. Ask only unanswered questions below, in one short batch with plain-language options and an "I'm not sure" choice. Do not make a nontechnical user choose package names. Recommend a default and explain what it enables in one sentence. Reuse answers already given. If they ask only for advice, return advice; implementation requires a request to act.

- Which operating system and disk/folder should we inspect?
- How much space is needed, and which projects/apps are active?
- Should this be a report only, or should we clean selected items after showing the findings?
- Which folders must stay untouched? Do not ask for credentials or browse private app data to infer activity.

## Scan first

Use read-only OS disk tools and a bounded scan of user-authorized folders. For a macOS workspace, substitute its confirmed path:

```sh
df -h .
du -hd 1 "/path/to/confirmed-workspace"
```

These commands only report sizes. Linux may use `du -h --max-depth=1`; on Windows prefer Storage settings or a read-only PowerShell inventory. Never scan all personal folders by default. Skip permission-denied paths rather than escalating automatically. Do not follow symlinks out of the agreed root.

Report candidates with path, size, contents, why they may be disposable, recovery method and active-process risk. Distinguish caches, generated builds, dependency installations, application data and personal files. A large folder is not evidence that it is unused.

## Clean only selected items

Obtain one batch of choices for exact candidates unless the user's existing request already names those targets and authorizes removal. Prefer the application's own cleanup command or a reversible move. Stop affected development servers before removing their build output. Preserve package manifests, lockfiles, source, local patches and offline dependencies. Do not call every node_modules folder safely reproducible.

Never automatically delete Docker volumes or Docker.raw, Git repositories or objects, editor history, browser profiles, backups or Time Machine snapshots. Docker volumes may contain the only copy of a database. No local branches does not prove a repository has no valuable data. Such items require separate inspection, backup/recovery planning and explicit target-specific authorization.

Do not run broad `rm -rf`, delete by age alone, empty Trash, purge snapshots to inflate reclaimed-space figures, or clear shared caches while their owning apps are running. If a path contains unexpected files, stop that candidate and report it.

## Verify

Re-measure the same disk and selected paths. Report actual free-space change separately from estimated folder sizes: snapshots and shared blocks can make them differ. Open/build an affected project if dependencies/builds changed. Keep a record of moved or deleted paths and recovery options. Never run cleanup merely because this skill was installed or read.

## Setup and handoff

After the answers, state the chosen approach and the files it affects. Give exact commands for the detected package manager and working directory, explaining what each does. If no new dependency is needed, say so. Preserve the existing stack and lockfile; do not install a second library for a capability the project already owns. Run authorized setup, then exercise the actual result. Report what changed, what was tested, and any remaining blocker in plain language. Never equate generated code or a passing build with a working user flow.
