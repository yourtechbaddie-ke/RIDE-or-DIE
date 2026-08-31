# Chapter 2 — Layer 29: Personal Paparazzi System

## Status
**Creative concept locked.**

## Core concept
The player-controlled protagonist can discover photographs of themselves that were taken without their knowledge and secretly placed among their belongings.

The photograph itself is evidence of proximity: someone was close enough to observe the protagonist and physically access their clothing or possessions without being detected.

The system is designed as psychological mystery rather than a conventional collectible mechanic.

---

# 1. Emotional target

The intended player reaction is:

> **"Someone was here. They were close enough to touch me. Why didn't I notice?"**

The game should create paranoia without immediately confirming whether the photographer is dangerous.

No automatic jump scare is required.

The photograph is the scare.

---

# 2. Possible photographer identities

The identity behind the photographs can vary by narrative route.

### Secret admirer
The photographer is emotionally attached to the protagonist and secretly documents them. The behaviour may be affectionate from their perspective while remaining invasive and frightening to the protagonist.

### Cold-blooded killer
The photographs document surveillance, routines and vulnerability. Their existence can become evidence that the protagonist has been watched for longer than expected.

### Unknown child
A future/branching character can be revealed as the protagonist's previously unknown child. The photographs are not intended as an attack; the child has secretly watched the parent they never knew.

### Other identities
The system remains open for:
- journalist;
- investigator;
- protective friend;
- obsessive rival;
- conspiracy investigator;
- ECHO-related observer;
- person acting under coercion;
- character whose motives change over time.

Do not hard-code the photographer to one explanation.

---

# 3. Photograph placement

Photographs can be discovered in believable locations:

- jacket pockets;
- trouser pockets;
- bags;
- notebooks;
- diaries;
- drawers;
- under pillows;
- inside books;
- behind personal objects;
- inside containers;
- other belongings the player routinely accesses.

Placement should be context-sensitive. A photograph hidden in a jacket the protagonist wore that same day should imply recent proximity.

---

# 4. Photograph content

Photographs should begin innocuously.

Examples:
- protagonist eating;
- protagonist walking;
- protagonist talking to Mara;
- protagonist working;
- protagonist outside a building;
- protagonist laughing;
- protagonist sleeping;
- protagonist helping someone;
- protagonist attending an event.

The unsettling detail may be the distance, angle, timing or location rather than anything visible in the photograph itself.

---

# 5. Chronology

Photographs may have dates or contextual clues.

The sequence can establish:
- escalating surveillance;
- long-term observation;
- changing photographer intent;
- a photographer following the protagonist across locations;
- photographs taken before the protagonist knew the photographer;
- photographs whose dates contradict what the protagonist believed happened.

Not every photograph needs a date.

---

# 6. Discovery design

The protagonist should not automatically receive a quest marker.

Discovery can occur naturally while:
- changing clothes;
- searching an inventory container;
- reading a diary;
- sleeping;
- preparing for travel;
- cleaning belongings;
- searching for another object.

After discovery, allow a quiet reaction.

Possible performance:
1. protagonist looks at photograph;
2. expression changes;
3. eyes move toward the surrounding room;
4. protagonist checks the photograph again;
5. breathing changes;
6. they inspect the door/window or nearby space;
7. no explanatory dialogue is required.

---

# 7. Escalation

The system should support gradual escalation.

### Stage 1 — Curiosity
One strange photograph.

### Stage 2 — Unease
Several photographs from different places.

### Stage 3 — Proximity
A photograph clearly taken from very close range.

### Stage 4 — Impossible access
A photograph taken somewhere the protagonist believed was private.

### Stage 5 — Personal knowledge
The photographs reveal knowledge the photographer should not possess.

### Stage 6 — Identity revelation
The player learns who has been taking them, or realizes the identity remains uncertain.

Escalation should be route-dependent.

---

# 8. False assumptions

The player must be allowed to interpret the evidence incorrectly.

A photograph can initially appear threatening but later be revealed as an act of grief or love.

A seemingly affectionate photographer can turn out to be dangerous.

A feared observer can ultimately have been protecting the protagonist.

This preserves uncertainty.

---

# 9. Secret child route

One special route may reveal that the photographer is the protagonist's previously unknown child.

The photographs can retrospectively change meaning:

- childhood or family clues;
- attempts to identify the parent;
- photographs taken from a respectful distance;
- evidence of long-term searching;
- an eventual meeting.

The revelation should be emotionally grounded rather than presented as a cheap twist.

---

# 10. Killer route

If the photographer is a killer, photographs can function as narrative evidence rather than trophies.

Possible implications:
- knowledge of routines;
- knowledge of relationships;
- evidence of previous proximity;
- proof that an attack was planned;
- identification of another victim;
- clues connecting seemingly unrelated events.

The protagonist does not gain XP or a reward for finding the photographs.

They gain **information—and fear**.

---

# 11. Admirer route

The admirer may leave photographs because they cannot express affection directly.

Their collection can reveal:
- favourite moments;
- places they associate with the protagonist;
- moments they found beautiful;
- an unhealthy degree of fixation;
- an eventual decision to approach, confess, flee or escalate.

The game should not automatically romanticize stalking.

---

# 12. Connection to character autonomy

The photographer can operate through the same autonomous-life architecture established in Layer 28.

The player may:
- never see them taking a photograph;
- nearly encounter them;
- hear them leave;
- discover evidence after they die;
- identify them through another character;
- confront them;
- misunderstand them;
- never fully learn their identity.

---

# 13. Connection to events

Photographs can document:
- weddings;
- birthdays;
- births;
- funerals;
- secret meetings;
- ordinary meals;
- moments of violence;
- disappearances.

A photograph from an event the player skipped can become a way of revealing that the event happened without them.

---

# 14. Connection to diaries and memory

Photographs can be paired with diary entries or letters.

Example architecture:

**Photograph:** protagonist asleep.

**Diary entry discovered later:** a character describes watching over the protagonist that night.

The combination should allow the player to reconstruct events rather than simply receive exposition.

---

# 15. ECHO compatibility

The system remains compatible with ECHO without making every photograph supernatural.

Potential late-game ambiguity:
- a photograph appears where no human could have accessed it;
- the photographer appears to know an impossible detail;
- an image contains an inconsistency;
- the same moment appears to have been photographed twice from different impossible positions.

These are optional narrative escalations, not default behaviour.

---

# 16. Design restrictions

Avoid:
- repetitive photograph spam;
- identical discovery animations;
- constant jump scares;
- treating every observer as an enemy;
- making the mystery solvable solely through UI markers;
- reducing the mechanic to collectibles.

The system exists to generate **story, paranoia, intimacy and emotional discovery**.

---

# 17. Layer 29 acceptance criteria

- [ ] Unseen photographer architecture exists.
- [ ] Photographs can be placed contextually in personal belongings.
- [ ] Identity can vary by narrative route.
- [ ] Secret admirer route is supported.
- [ ] Killer route is supported.
- [ ] Unknown-child route is supported.
- [ ] Photograph chronology can escalate tension.
- [ ] Discovery can happen without quest markers.
- [ ] Player reactions can be silent and performance-driven.
- [ ] Photographs can document missed events.
- [ ] Photographs can connect to diaries and letters.
- [ ] The system can operate through autonomous NPC behaviour.
- [ ] ECHO-related ambiguity can be introduced only when narratively justified.

## Creative lock
**The protagonist can be watched without knowing it. The player learns this only when physical evidence appears in a place that proves someone was close. The identity and motive remain uncertain until the story earns the reveal.**
