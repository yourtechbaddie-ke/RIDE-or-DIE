# ANTIGRAVITY — START HERE (RIDE OR DIE)

This file is the first instruction entry point for AI-assisted development. Read it before editing any file.

## Confirmed production decisions

- Production engine: **Unity 6 + C#**.
- Primary target: **Android**.
- Optional later target: cinematic third-person XR/VR as defined in `TECHNICAL/VR/VR-INTEGRATION-ARCHITECTURE.md`.
- Repository: this GitHub repository, branch `main`.
- Root web app: React/Vite prototype only; it is not the Unity game.
- Canonical high-level build mandate: `PRODUCTION/NEW-GAME-BUILD.md`.
- Unity implementation roadmap: `TECHNICAL/IMPLEMENTATION-ROADMAP.md`.
- Unity project structure: `TECHNICAL/UNITY/UNITY-PROJECT-STRUCTURE.md`.
- Engine conflict resolution: `TECHNICAL/UNITY/ENGINE-DECISION.md`.

## Before touching code

1. Inspect the full repository tree and current Git status.
2. Locate the actual Unity Editor project root. A valid Unity root contains `Assets/`, `Packages/manifest.json` and `ProjectSettings/ProjectVersion.txt`.
3. The repository currently contains the web prototype and documentation. If no Unity project exists in the repository, do not pretend one exists and do not overwrite the user's separate local Unity project. Inspect the local workspace and determine whether it can be safely synchronized into `UnityProject/`.
4. Confirm Unity Editor version and package dependencies from the actual project.
5. Create a backup/branch before reorganizing existing project files.
6. Preserve all existing work, asset GUIDs, `.meta` files, scene references and user changes.
7. Do not change root `package.json`, `vercel.json` or web prototype deployment paths as part of Unity implementation.

## Canonical reading order

1. `README.md`
2. `PRODUCTION/NEW-GAME-BUILD.md`
3. `TECHNICAL/UNITY/ENGINE-DECISION.md`
4. `TECHNICAL/UNITY/UNITY-PROJECT-STRUCTURE.md`
5. `TECHNICAL/IMPLEMENTATION-ROADMAP.md`
6. `PRODUCTION/SEASON-1/LAYER-100-SEASON-1-PRODUCTION-MASTER-PLAN.md`
7. `PRODUCTION/SEASON-1/LAYER-114-DEATH-INJURY-AND-CONTINUATION-SYSTEM.md`
8. `PRODUCTION/SEASON-1/HAZARD-AND-THREAT-SYSTEM.md`
9. `PRODUCTION/SEASON-1/LAYER-115-NPC-AUTONOMY-IMPLEMENTATION.md`
10. `PRODUCTION/SEASON-1/LAYER-116-WORLD-STATE-AND-PERSISTENCE-IMPLEMENTATION.md`
11. `PRODUCTION/SEASON-1/LAYER-117-SEASON-1-UI-HUD-AND-PLAYER-FEEDBACK.md`
12. `TECHNICAL/GAME-STATE-SCHEMA.md`
13. `TECHNICAL/CHAPTER-01-SYSTEM-CONTRACT.md`
14. `CHAPTERS/CHAPTER-01/THE-LAST-NORMAL-DAY.md`
15. Relevant character, world, audio, animation and chapter references before implementing each feature.

## Non-negotiable engineering rules

- Build in small vertical increments. Compile and test after each coherent change.
- Inspect existing systems before adding new ones. No duplicate player controller, input system, health model, death service, save manager, event bus or audio listener.
- Use idiomatic Unity C#, clear namespaces and dependency boundaries.
- Keep a single authoritative state owner for each domain.
- Do not use guessed APIs, missing packages or invented MCP commands. Verify package/API availability in the project.
- Preserve story canon. Chapter 1 is not a zombie/monster reveal; ECHO remains ambiguous and is not a conventional enemy.
- Do not silently replace approved character models, dialogue, voice identities, world layouts or narrative outcomes.
- Do not create fake completion reports. Verify scripts compile, scenes run and builds succeed.
- Fix errors before expanding scope. Record blockers and exact reproduction steps.
- Never delete or regenerate existing `.meta` files.
- Keep web prototype and Unity production project separate.
- Keep credentials, API keys, signing keys and private data out of Git.

## Current task

Synchronize the latest repository documentation, inspect the Unity project, then follow the Unity roadmap. Implement the hazard, injury, medical treatment, survival needs, NPC threat response and permanent-death systems as part of the full game architecture. Do not build a disconnected survival demo.

## Definition of done

A feature is done only when its implementation is integrated, compiles, has been exercised in Play Mode or an automated test, persists correctly where required, and does not break the Android build. The full game is not done until the required playable content and final Android build have been verified.
