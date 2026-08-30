# Ride or Die — Unreal Project Foundation

## Purpose
This document is the implementation contract for the first playable vertical slice. It intentionally describes architecture before engine-specific binary assets are committed.

## Engine direction
- Unreal Engine 5
- Primary target: Android
- Primary presentation: landscape
- Scalable quality tiers
- Offline-first single-player gameplay

## Core modules
- Core: game state, world state, time, persistence
- Player: movement, camera, health, stamina, interaction
- World: streaming regions, time, weather, interactables
- Narrative: dialogue, choices, quests, relationship state
- AI: companions, civilians, enemies, perception and morale
- Vehicles: driving, fuel, condition, storage
- ECHO: authored narrative orchestration and mystery-state responses
- UI: contextual actions, inventory, dialogue, map, phone, journal
- Audio: music, ambience, radio, haptics/audio events
- Save: versioned local save data; cloud support later

## Vertical-slice implementation order
1. Project/bootstrap configuration
2. Input and player controller
3. Third-person camera and movement
4. Interaction framework
5. First highway environment
6. Vehicle controller and crash sequence
7. Basic survival/inventory state
8. Hollowgate environment
9. Mara, Jace, Noah and Evelyn character implementations
10. Dialogue/choice state machine
11. Quest and persistent-variable system
12. Radio/ECHO encounter
13. Save/load
14. Chapter-end cinematic
15. Android packaging, profiling and QA

## Architecture rule
Narrative state must be data-driven. Do not hard-code individual dialogue outcomes into unrelated gameplay systems. Choices should write named state variables; quests, dialogue, relationships and world events read those variables.

## Performance rule
Design for mobile from day one. Use level-of-detail, texture budgets, world partition/streaming where appropriate, asynchronous loading, scalable effects, audio streaming/compression and device-quality profiles.

## Repository rule
Large generated Unreal binaries and DerivedDataCache must not be committed to Git. The actual `.uproject` and source/config/content required to reproduce the project will be added when the Unreal project is initialized locally or in the chosen build environment.
