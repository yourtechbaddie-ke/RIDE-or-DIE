# Chapter 2 — Layer 37: Player Navigation & Third-Person Cinematic Controller

## Status
**Creative direction locked.**

## Purpose
Establish that RIDE OR DIE is a **playable, navigable 3D narrative game**, not a text-based interactive fiction experience.

The Hatchable vertical slice is a visual prototype of the atmosphere and narrative language. The production game requires a real-time player controller, navigable environments, character animation, camera control, interaction systems and spatial audio.

---

# 1. Core principle

> **The player inhabits the story. They do not read their way through it.**

Text can appear as dialogue, diaries, messages, clues and UI when appropriate, but the primary experience is embodied movement through a physical world.

---

# 2. Player embodiment

The protagonist should have:
- visible physical presence where camera perspective permits;
- believable movement;
- walking and running states;
- turning and stopping with natural momentum;
- contextual animation;
- interaction animations;
- emotional body language;
- appropriate reactions to danger, injury and environmental conditions.

---

# 3. Third-person camera

The primary gameplay camera should support a cinematic third-person perspective.

Camera behaviour should include:
- free look;
- follow movement;
- contextual framing;
- collision avoidance;
- indoor camera adjustment;
- cinematic camera takeover for selected moments;
- smooth transitions back to player control.

A first-person mode can be considered later if it strengthens specific scenes, but third-person is the foundational presentation for the vertical slice and core game direction.

---

# 4. Navigation controls

The production prototype should support controller and keyboard/mouse input where the target platform allows it.

Conceptual controls:
- move;
- look;
- sprint;
- crouch/hide where narratively appropriate;
- interact;
- inspect;
- pause;
- inventory/evidence access;
- contextual action.

Exact bindings remain implementation-specific.

---

# 5. Physical exploration

Players should be able to move through spaces rather than selecting locations from menus.

Examples:
- walk through a home;
- enter a kitchen;
- approach a table;
- inspect a photograph;
- move upstairs;
- hear a sound from another room;
- look through a window;
- leave through a door;
- navigate an outdoor street;
- follow or avoid another character.

---

# 6. Contextual interaction

Interaction should be spatial and visually grounded.

The player should approach an object or person and receive a restrained interaction cue when appropriate.

Interactions can include:
- inspect;
- pick up;
- read;
- listen;
- open;
- close;
- follow;
- talk;
- observe;
- hide;
- photograph;
- examine evidence.

Avoid turning the screen into a permanent list of clickable objects.

---

# 7. Cinematic autonomy

The player should retain control during most exploration.

For major authored moments, the camera can temporarily become cinematic when necessary.

Examples:
- a character suddenly enters a room;
- the protagonist notices a disturbing photograph;
- a private burial is discovered;
- a wedding moment becomes emotionally significant;
- a character breaks down;
- a dangerous encounter begins.

Cinematic control should return smoothly to the player.

---

# 8. No text-box dependence

Dialogue should primarily be experienced through:
- voice performance;
- facial expression;
- body language;
- timing;
- environment;
- spatial positioning.

Subtitles remain available as an accessibility option and can be enabled by default depending on platform conventions.

Important narrative information should not depend exclusively on reading large blocks of text.

---

# 9. Environmental navigation

Locations should communicate through physical design.

A player should be able to recognize:
- where they are;
- where they came from;
- where people are likely to be;
- what spaces are private;
- what spaces are public;
- what objects matter;
- what changed since the last visit.

Landmarks and environmental storytelling should reduce dependence on objective markers.

---

# 10. Stealth and hiding as narrative behaviour

Hiding is not an arcade stealth score.

It exists to create tension and believable vulnerability.

Possible actions:
- hide behind furniture;
- remain out of sight;
- retreat into another room;
- wait for someone to leave;
- observe through a doorway;
- stay silent.

The player may sometimes choose to hide simply because they are frightened, not because a mission requires it.

---

# 11. Movement and emotion

Movement can reflect character state.

Examples:
- exhaustion reduces pace;
- injury changes movement;
- grief can affect posture;
- carrying a child changes movement options;
- fear changes breathing and body language;
- rain can affect footing and animation;
- emotional scenes can alter walking behaviour afterward.

Do not turn every emotion into an exaggerated gameplay debuff.

---

# 12. Physical interaction with children

Where appropriate and safe, family scenes can involve physical interaction such as:
- carrying a baby;
- comforting a child;
- holding a child's hand;
- helping with everyday tasks.

The interactions should feel natural and contextual rather than mechanically repetitive.

---

# 13. World-scale navigation

The game should support multiple interconnected spaces.

Potential structure:
- homes;
- streets;
- businesses;
- schools;
- event venues;
- religious spaces;
- workplaces;
- private locations;
- outdoor gathering places.

The world can be segmented technically while presenting a coherent physical geography to the player.

---

# 14. Loading and continuity

Transitions between spaces should preserve:
- time;
- weather;
- NPC locations;
- event state;
- evidence state;
- relationship state;
- environmental changes.

Loading should never silently reset the living-world simulation.

---

# 15. Audio-driven navigation

Sound can guide the player without UI arrows.

Examples:
- a pot boiling;
- footsteps upstairs;
- a baby crying;
- a door closing;
- distant music from a party;
- rain against a window;
- a vehicle approaching;
- muffled conversation behind a door.

The player can investigate because something sounds humanly meaningful.

---

# 16. Visual discovery

Important clues should be discoverable through observation.

Examples:
- a wet footprint;
- a displaced chair;
- an unfamiliar photograph;
- a missing object;
- a bloodstain after an event;
- an open diary;
- a changed family photograph;
- decorations from yesterday's event.

Clues should not always glow or produce a giant objective marker.

Accessibility options can provide stronger visual assistance when needed.

---

# 17. Camera and emotional distance

The camera should sometimes stay back.

Not every emotional moment needs a close-up.

Allow the player to witness:
- a person sitting alone;
- someone burying another person;
- a family gathering from across a room;
- a character walking away;
- someone crying privately.

Distance can create stronger emotion than forced spectacle.

---

# 18. Vertical-slice implementation target

The next playable Hatchable/production-facing prototype should evolve from the current visual scene into a navigable micro-environment containing:

- one explorable interior;
- one exterior transition area;
- one controllable protagonist representation;
- third-person camera behaviour;
- at least three interactable objects;
- at least two NPCs with basic movement;
- spatial audio cues;
- a small autonomous event;
- photograph discovery;
- diary discovery;
- a consequence visible after the player makes a choice.

Hatchable remains useful for demonstrating the experience and validating visual direction; the full 3D runtime may ultimately require a dedicated game engine appropriate to the target platform.

---

# 19. UI philosophy

The HUD should remain restrained.

Prioritize:
- contextual interaction prompts;
- subtle status information;
- optional map/navigation support;
- evidence/inventory access;
- subtitles;
- accessibility settings.

Avoid:
- permanent quest clutter;
- excessive XP popups;
- kill counters;
- arcade-style damage numbers;
- gamified emotional scores.

---

# 20. Layer 37 acceptance criteria

- [ ] RIDE OR DIE is explicitly a real-time navigable game, not text-based interactive fiction.
- [ ] A controllable protagonist is part of the core architecture.
- [ ] Third-person camera is the foundational perspective.
- [ ] Movement is physical and contextual.
- [ ] Controller and keyboard/mouse support can be implemented for target platforms.
- [ ] Exploration occurs through physical spaces.
- [ ] Interaction is spatial and contextual.
- [ ] Cinematic moments can temporarily control the camera.
- [ ] Voice, animation and environment carry narrative information.
- [ ] Text is supplemental rather than the primary gameplay medium.
- [ ] Hiding supports emotional tension rather than arcade scoring.
- [ ] Movement can respond subtly to physical/emotional state.
- [ ] Family interactions can be physically embodied.
- [ ] Multiple spaces can form one coherent world.
- [ ] Transitions preserve world state.
- [ ] Audio can guide exploration.
- [ ] Important visual clues can be discovered without excessive UI markers.
- [ ] Camera distance can be used deliberately for emotional impact.
- [ ] The next vertical slice has a concrete navigable prototype target.
- [ ] HUD remains cinematic and restrained.

## Direction lock
**Ride or Die is a game you inhabit. You walk through its homes, streets and events, hear people before you see them, notice what has changed, and physically choose where to go. The story happens around you—not inside a text box.**
