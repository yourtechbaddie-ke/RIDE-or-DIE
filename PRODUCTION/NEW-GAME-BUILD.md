# RIDE OR DIE — NEW GAME BUILD

## Status
**CURRENT CANONICAL BUILD DIRECTION**

This document replaces the old Chapter 1 build-order/checklist approach. It describes the actual production build now being developed from the locked Season 1 architecture.

**Important:** This file does **not** rewrite, simplify, replace, or reinterpret the canonical story. Narrative canon remains defined by the approved chapter, lore, character and production documents throughout the repository.

---

# 1. THE NEW BUILD

RIDE OR DIE is now being built as a **real, physically navigable 3D cinematic survival game** rather than as a simple chapter vertical slice or collection of prototype scenes.

### Production direction

- **Engine:** Unity
- **Language:** C#
- **Primary target:** Android mobile
- **Version control:** GitHub
- **Asset pipeline:** high-quality 3D characters, environments, animation, props, vehicles, audio and cinematic assets
- **Web prototype:** retained for rapid narrative/UX experimentation, not treated as the final game
- **Final delivery direction:** optimized Android build / AAB pipeline

The build must be designed for mobile performance from the beginning rather than creating a desktop game first and attempting to reduce it later.

---

# 2. WHAT IS BEING BUILT

The production target is a persistent living world containing:

- believable 3D environments
- high-quality named character models
- natural facial performance
- realistic body movement and animation
- contextual clothing and wardrobe changes
- age and life-stage continuity
- autonomous NPC behavior
- relationships and social systems
- exploration and navigation
- investigation and evidence systems
- resource and inventory systems
- driving and travel
- stealth and pursuit
- optional combat
- everyday-life interactions
- branching decisions
- persistent world state
- permanent death and continuation through other living perspectives
- evolving settlements and routes
- dynamic environmental conditions
- cinematic sequences
- spatial environmental audio
- authored music and recurring motifs
- restrained ECHO manifestations
- long-term continuity across the Season 1 timeline

The game must feel like a **living human world**, not a sequence of levels populated by decorative NPCs.

---

# 3. STORY PRESERVATION RULE

The new build is an implementation change, **not a story reset**.

The following remain canonical and must not be removed merely because the technical build has changed:

- The Collapse and its gradual escalation
- the eight major regions
- the 69 currently established named characters
- the no-chosen-one philosophy
- the absence of a permanent main-character hierarchy
- autonomous NPC lives
- permanent death and world continuation
- family, relationship and settlement continuity
- the Selection List mystery
- Dr. Vera Voss and the Collector storyline
- Rey and Tariq's relationship mystery
- Tariq beginning Season 1 as a newborn and remaining a young child within the primary timeline
- ECHO being separate from The Collapse
- the restrained ECHO mystery
- the Season 1 chapter progression
- the final observer sequence
- the hospital/coma reveal
- the final “Where am I?” ending beat

**No technical modernization may silently alter these story facts.**

---

# 4. WORLD BUILD

World production follows the high-realism standards defined in:

`PRODUCTION/WORLD-VISUAL-REALISM-BIBLE.md`

`PRODUCTION/WORLD-VISUAL-DESCRIPTIONS.md`

Every region must be built as a believable place with its own:

- architecture
- infrastructure
- materials
- vegetation
- ecology
- weather
- lighting behavior
- transportation patterns
- socioeconomic character
- human activity
- history
- evidence of previous lives

The eight major regions are:

1. The Last City
2. The Black Highway
3. Hollowgate
4. The Verdant
5. The Ashen Expanse
6. The Drowned
7. The Silent North
8. The Origin

### World-build rule

**Do not build “an apocalypse map.” Build places where people actually lived, worked, travelled, raised families, repaired things, spent money, stored possessions and made memories. Then show how The Collapse changes those places.**

---

# 5. CHARACTER BUILD

Character production uses the current high-quality character appearance work as the visual baseline.

Do not downgrade established characters to generic NPC models.

Named characters must retain identity across:

- facial structure
- body proportions
- hair
- skin detail
- clothing logic
- age state
- injuries
- emotional state
- environmental conditions
- animation
- cinematic presentation

Supporting NPCs must also have enough visual variation to avoid repeated-template populations.

The world should contain people who look like individuals with occupations, relationships, histories and reasons for being where they are.

---

# 6. NPC LIFE SIMULATION

NPCs are active participants in the world.

They should not:

- stand in one place waiting for the player
- repeat identical idle animations
- rotate toward the camera unnaturally
- use identical schedules
- wear one permanent outfit without reason
- perform exaggerated “game NPC” reactions

NPCs can independently:

- work
- travel
- eat
- rest
- trade
- repair objects
- care for children
- form relationships
- argue
- reconcile
- relocate
- help others
- make mistakes
- acquire possessions
- lose possessions
- change routines
- become injured
- die

The player may witness these events, discover evidence of them later, or never know they happened.

---

# 7. AUDIO BUILD

Audio is a first-class production system rather than a final polish pass.

The build requires:

- location-specific environmental ambience
- realistic footsteps by surface and footwear
- human Foley
- clothing and object interaction
- vehicles
- weather
- domestic sound
- settlement sound
- radio and broadcast systems
- dialogue
- spatial sound
- music and score
- dynamic silence
- ECHO-specific sonic behavior

Audio must support the same realism standard as the visual world. Ordinary civilization should sound ordinary before The Collapse. Sound should then deteriorate and change with the world.

ECHO should remain subtle, recognizable and unsettling rather than becoming generic horror audio.

---

# 8. GAMEPLAY BUILD

The core gameplay layer must support actual player agency.

### Player systems

- third-person movement
- camera control
- exploration
- contextual interaction
- inventory
- resources
- doors and containers
- evidence collection
- phone/radio interaction
- cooking and eating
- washing and changing clothes
- carrying objects
- climbing
- hiding
- driving
- repair
- injury-aware movement
- social interaction
- investigation
- stealth
- pursuit
- optional combat

### World systems

- time progression
- weather/environment state
- NPC schedules
- relationships
- reputation
- ownership
- resources
- settlement state
- route state
- evidence state
- branching decisions
- persistent consequences
- death state
- continuation state

---

# 9. DEATH & CONTINUATION

Death is permanent.

The build must not treat death as a simple reload screen.

When a playable perspective dies, the system should preserve the consequences of that death and continue through another viable living thread or perspective when the narrative structure permits.

The deceased character's:

- relationships
- possessions
- family connections
- reputation
- unfinished business
- discoveries
- settlement relationships
- evidence
- absence

can continue affecting the world.

The world remembers the loss.

---

# 10. CINEMATIC PERFORMANCE

Cinematics are integrated with gameplay rather than functioning as unrelated movie clips.

Character performances must account for:

- fatigue
- fear
- injury
- grief
- trust
- relationships
- environment
- context
- conversational history

Dialogue should allow:

- hesitation
- interruptions
- silence
- misunderstanding
- ordinary conversation
- jokes
- lies
- refusal
- emotional restraint

The goal is human performance, not theatrical NPC delivery.

---

# 11. ECHO BUILD

ECHO remains intentionally unexplained.

The build may represent it through:

- impossible lights
- corrupted screens
- unusual reflections
- interface anomalies
- radio interference
- distorted audio
- strange broadcasts
- recurring visual inconsistencies
- subtle reality disturbances

ECHO must not be converted into a conventional monster, jumpscare system or exposition device.

Its mystery is part of the game's identity.

---

# 12. SEASON 1 PRODUCTION STACK

The current Season 1 architecture is locked through **Layer 120**.

The production stack covers:

- Layer 100 — Season 1 Production Master Plan
- Layer 101 — Character Visual Bible
- Layer 102 — Named Cast Character Creation System
- Layer 103 — Character Appearance & Wardrobe
- Layer 104 — Character Animation & Expression
- Layer 105 — Age Progression & Generational Visuals
- Layer 106 — Environment Visual Bible
- Layer 107 — Props, Vehicles & Interactive Objects
- Layer 108 — Audio Master Bible
- Layer 109 — Music & Score
- Layer 110 — Voice & Dialogue
- Layer 111 — Environmental Sound
- Layer 112 — ECHO Identity
- Layer 113 — Gameplay Animation & Interaction
- Layer 114 — Death, Injury & Continuation
- Layer 115 — NPC Autonomy
- Layer 116 — World State & Persistence
- Layer 117 — UI/HUD
- Layer 118 — Cinematics & Camera Language
- Layer 119 — QA, Continuity & Branch Testing
- Layer 120 — Complete Season 1 Production Lock

These layers are the production architecture. This file provides the practical build overview that sits above them.

---

# 13. BUILD PIPELINE

```text
CANONICAL STORY + LORE
        ↓
SEASON 1 PRODUCTION LOCK
        ↓
CHARACTER / WORLD / PROP / VEHICLE ASSETS
        ↓
ANIMATION + FACIAL PERFORMANCE
        ↓
AUDIO + VOICE + MUSIC
        ↓
UNITY GAMEPLAY SYSTEMS
        ↓
NPC AUTONOMY + WORLD PERSISTENCE
        ↓
CHAPTER IMPLEMENTATION
        ↓
CINEMATICS + LIGHTING + FINAL AUDIO MIX
        ↓
ANDROID OPTIMIZATION
        ↓
DEVICE QA + SAVE/LOAD + BRANCH TESTING
        ↓
AAB BUILD
        ↓
RELEASE CANDIDATE
```

---

# 14. MOBILE-FIRST PERFORMANCE

Because Android is the intended final platform, every asset and system must be evaluated for mobile cost.

Production should prioritize:

- efficient meshes
- appropriate texture resolution
- LOD systems
- occlusion culling
- baked/optimized lighting where appropriate
- controlled real-time lighting
- efficient animation systems
- pooled objects
- streaming where necessary
- memory-conscious audio
- scalable effects
- device-tier quality profiles
- thermal and battery awareness
- reliable save/load behavior

Visual realism is required, but realism must be achieved intelligently rather than through wasteful asset complexity.

---

# 15. DEFINITION OF A REAL BUILD

The new build is not considered successful merely because a scene loads.

A production-ready chapter must demonstrate:

- the correct canonical story
- physically navigable 3D space
- high-quality characters
- believable animation
- contextual NPC behavior
- functioning interactions
- persistent state
- correct dialogue and choices
- working investigation systems
- appropriate audio
- cinematic presentation
- reliable saves
- mobile performance within target budgets
- no progression-breaking issues
- continuity with the rest of Season 1

---

# 16. WHAT IS NO LONGER THE BUILD STANDARD

The following older approaches are obsolete and should not be used as the definition of the final game:

- Unreal-specific Chapter 1 build planning
- a Chapter 1-only technical shell as the primary production architecture
- placeholder-character production as the final visual target
- generic environment blockouts as final world assets
- basic NPC navigation presented as finished NPC behavior
- treating audio as a late polish task
- treating the Hatchable prototype as the final engine
- reducing the entire game to a single vertical slice

Vertical slices and prototypes may still be used for testing, but they are **development instruments**, not the final definition of RIDE OR DIE.

---

# 17. CANONICAL SOURCE RULE

When documents appear to conflict:

1. Current canonical story/lore documents take priority for narrative facts.
2. Current character and world production bibles take priority for visual identity.
3. Season 1 Layers 100–120 take priority for production architecture.
4. This file defines the current high-level build direction.
5. Old prototype/checklist documents should not override the current build.

**Never delete a story document simply because its implementation method has changed.**

---

# FINAL BUILD PRINCIPLE

> **RIDE OR DIE is not being built as a collection of scenes. It is being built as a living world.**

The player should feel that every street existed before them, every room belonged to someone, every character has a life outside the camera, every choice leaves a trace, and the world continues after the player looks away.
