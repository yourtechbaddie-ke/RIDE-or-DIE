# Chapter 2 — Layer 34: World-State & Causality Architecture

## Status
**Creative direction locked.**

## Purpose
Unify Layers 28–33 into one persistent world-state architecture. Characters, relationships, events, environments, discoveries, memories and sensory states must influence one another without requiring every possible storyline to be hand-authored.

---

# 1. Core principle

> **Nothing important happens in isolation.**

A major event should be able to propagate through the world.

Example:

A character dies → someone discovers the body → another character learns of the death → a private burial occurs → the room is changed → belongings are redistributed → a diary is discovered → a relationship changes → a later event has different attendance → the protagonist hears a different version of the story.

---

# 2. Persistent world state

The game should maintain a structured state for:

- characters;
- locations;
- relationships;
- events;
- objects;
- evidence;
- memories;
- injuries;
- pregnancies and births;
- deaths;
- discoveries;
- rumours;
- environmental changes;
- time;
- weather;
- player actions;
- player absences.

The state should survive scene transitions and relevant save/load cycles.

---

# 3. Causal chains

Events should produce consequences through explicit causal relationships.

### Example

**Affair discovered**
→ confrontation
→ relationship rupture
→ possible violence
→ witness memory
→ household change
→ missing spouse
→ later discovery
→ grief/anger/rumour
→ altered future event attendance.

The exact outcome depends on character state and circumstances.

---

# 4. Character state model

Each named character should have a compact state representation including:

- identity;
- current location;
- current activity;
- health condition;
- emotional state;
- important memories;
- relationships;
- secrets;
- knowledge;
- immediate needs;
- long-term goals;
- current commitments;
- event participation;
- survival status.

Do not simulate every human thought. Simulate what can materially affect the story.

---

# 5. Knowledge is not truth

The world should distinguish between:

- what actually happened;
- what the protagonist knows;
- what a character knows;
- what a character believes;
- what someone claims;
- what evidence proves;
- what remains uncertain.

This is essential for diaries, rumours, surveillance photographs and conflicting testimony.

---

# 6. Evidence graph

Important evidence can be connected to:

- its source;
- location;
- creation time;
- owner;
- discoverer;
- related characters;
- related events;
- whether it has been destroyed, moved or hidden.

Evidence can therefore be discovered out of chronological order.

---

# 7. Event scheduler

The autonomous scene engine from Layer 33 should draw possible events from world state.

Priority factors:
1. immediate danger;
2. irreversible consequences;
3. births/deaths;
4. major relationship changes;
5. evidence creation or destruction;
6. scheduled social events;
7. routine behaviour.

The scheduler must respect location, time, character availability and existing commitments.

---

# 8. Avoid simulation chaos

The game should not generate unlimited random drama.

Use authored narrative anchors plus constrained procedural variation.

### Authored anchors
Major story beats that establish the larger arc.

### Variable circumstances
Who is present, what a character knows, who arrives late, who witnesses something, what evidence survives, and how relationships respond.

This creates replayable variation without destroying narrative coherence.

---

# 9. Event interruption and recovery

If an event is interrupted, its state should persist.

Example:

A birthday begins → argument occurs → guests leave → cake remains → child becomes upset → parent remembers the argument → later apology may occur.

The system should not simply mark the birthday as completed and erase the intermediate consequences.

---

# 10. Death and absence propagation

Death should update all relevant systems.

Potential propagation:

**Death**
→ character unavailable
→ relationships change
→ routines change
→ household changes
→ event attendance changes
→ belongings become available
→ rumours spread
→ grief states activate
→ burial/memorial may occur
→ future scenes adapt.

Absence without confirmed death should remain a distinct state.

---

# 11. Birth and family propagation

A birth can update:

- parent relationships;
- household occupancy;
- routines;
- supplies;
- sleep patterns;
- mobility;
- protection priorities;
- social events;
- future memories.

The child becomes part of the persistent world rather than a temporary cutscene prop.

---

# 12. Relationship graph propagation

Relationship changes can affect third parties.

Example:

A betrayal occurs between A and B.

C, who loves A, may become hostile toward B.

D, who depends economically on B, may defend B.

E, who secretly loves B, may conceal evidence.

This creates social consequences without requiring every reaction to be explicitly scripted.

---

# 13. Personal Paparazzi integration

The photographer's behaviour is governed by the same world state.

A photograph can be created only when the photographer has a plausible opportunity to observe the protagonist.

The system can record:
- photographer;
- target;
- time;
- location;
- distance/context;
- placement location;
- discovery status;
- interpretation.

This prevents impossible surveillance unless the narrative intentionally establishes an exceptional explanation.

---

# 14. Environmental propagation

World state can alter physical spaces.

Examples:
- a room becomes occupied by a new family member;
- belongings are packed after a departure;
- food spoils when nobody returns;
- decorations remain after events;
- a grave appears after burial;
- damage remains after violence;
- a home becomes quieter after death.

The environment becomes a visible cache of causality.

---

# 15. Sensory propagation

World-state changes can affect sound and performance.

Examples:
- fewer voices after evacuation;
- altered breathing after injury;
- a character's speech changes after grief;
- a baby's cries alter household ambience;
- a once-familiar song becomes emotionally associated with a deceased character.

---

# 16. Discovery ordering

The player should be able to discover consequences in multiple orders.

For example:

**Route A:** witness argument → find photograph → discover diary.

**Route B:** find diary → discover photograph → hear witness account.

Both can lead to the same underlying truth while producing different emotional experiences.

---

# 17. Save-state integrity

The implementation should preserve important causal state across saves.

A reload must not casually:
- resurrect dead characters;
- undo major environmental changes;
- duplicate unique evidence;
- erase relationship consequences;
- invalidate discovered information.

Technical implementation can evolve, but narrative state must remain authoritative.

---

# 18. Debug and authoring visibility

Developers should have internal tools for inspecting world state without exposing them to players.

Useful debug views:
- character state;
- relationship graph;
- event history;
- evidence graph;
- location state;
- causal chain;
- pending autonomous events.

This is essential for debugging a world with dozens of interconnected characters.

---

# 19. Performance boundary

Not every character needs full simulation at every moment.

Use simulation tiers:

### Tier 1 — Active
Characters near the player or involved in critical events receive detailed simulation.

### Tier 2 — Relevant
Characters connected to current story consequences receive reduced simulation.

### Tier 3 — Background
Distant characters use scheduled state updates rather than frame-by-frame behaviour.

### Tier 4 — Dormant
Characters whose current state cannot affect the active narrative remain stored until relevant.

The world should feel alive without requiring impossible computational cost.

---

# 20. Layer 34 acceptance criteria

- [ ] Layers 28–33 can communicate through a shared world-state model.
- [ ] Major events create persistent causal chains.
- [ ] Character knowledge is distinct from objective truth.
- [ ] Evidence can be tracked independently from interpretation.
- [ ] Autonomous events respect time, location and availability.
- [ ] Authored anchors coexist with constrained variation.
- [ ] Interrupted scenes retain consequences.
- [ ] Death and absence propagate through the world.
- [ ] Birth changes persistent family state.
- [ ] Relationship changes affect connected characters.
- [ ] Paparazzi activity respects plausible opportunity.
- [ ] Environmental changes reflect world state.
- [ ] Sensory performance responds to world state.
- [ ] Discovery order can vary.
- [ ] Save/load preserves important causal state.
- [ ] Internal debugging tools can inspect the simulation.
- [ ] Simulation tiers control performance cost.

## Direction lock
**Ride or Die should not merely remember what happened. It should understand what happened, what it caused, who knows about it, who does not, and what changes because of it.**
