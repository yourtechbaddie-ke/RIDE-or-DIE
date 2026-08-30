# RIDE OR DIE — Unreal Engine Initialization Specification

## Purpose
This is the handoff specification for creating the real Unreal Engine project. It intentionally contains no fabricated `.uproject` or generated engine files.

## Project identity
- Project name: `RideOrDie`
- Display name: `RIDE OR DIE`
- Primary platform: Android
- Primary orientation: Landscape
- Secondary UI contexts: Portrait where explicitly designed
- Initial playable target: Chapter 1 — The Last Normal Day

## Engine direction
Unreal Engine 5.x, using the current stable release available at project initialization.

## Initial project configuration
Create a Games project with a scalable/blank foundation appropriate for a custom third-person mobile game. Enable only plugins required by the first slice; avoid unnecessary dependencies.

## Initial modules/systems
Create these implementation boundaries:
- `Core`: game instance/state, subsystem registration, shared interfaces
- `Player`: pawn/character, camera, movement, touch input
- `Interaction`: contextual interaction interface and interaction traces
- `Dialogue`: dialogue data, runtime state, choice dispatch
- `Relationships`: relationship dimensions and persistence
- `World`: world state, time, transitions, streaming hooks
- `Vehicle`: vehicle possession, driving, damage/state
- `Inventory`: item definitions and runtime inventory
- `Evidence`: discovered clues and evidence links
- `Echo`: deterministic Chapter 1 event implementation behind a reusable event interface
- `Save`: versioned save schema and checkpoint handling
- `UI`: HUD, dialogue, phone, inventory, map, accessibility hooks
- `Audio`: music, ambience, radio and ECHO audio hooks
- `Cinematics`: sequencer/cinematic triggers

## Content layout
Recommended Content structure:
`Content/RideOrDie/`
- `Core/`
- `Characters/`
- `Environment/`
- `Vehicles/`
- `UI/`
- `Audio/`
- `Cinematics/`
- `Data/`
- `Maps/`
- `Materials/`
- `FX/`

## First maps
- `L_Chapter01_Highway`
- `L_Chapter01_Hollowgate`
- `L_Chapter01_RadioRoom`

These may initially be greybox maps. Art polish comes after gameplay validation.

## First milestone
A development Android build must reach a playable state where the user can move, interact, drive the opening vehicle, transition through the crash, enter Hollowgate, trigger dialogue, persist at least one choice, investigate the radio, trigger the deterministic ECHO event, and reach the Chapter 1 ending.

## Non-negotiable rule
Do not optimize for visual spectacle before the vertical slice is playable end-to-end. Build the gameplay spine first, then replace greybox assets with final art in controlled passes.
