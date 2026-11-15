# Ride or Die — Layer 28: Autonomous Life System

## Purpose
Define how named characters continue living, choosing and changing when the player is not present. The system exists to support cinematic discovery, emotional continuity and believable consequences rather than game-like NPC busywork.

## Core principle
> **The player is the protagonist, not the only person with a life.**

Characters have needs, routines, relationships and private decisions. The player can influence these systems but does not control every outcome.

---

## 1. Daily life model

Each important character has a lightweight daily schedule built from:

- sleep;
- waking;
- meals;
- work;
- childcare;
- social time;
- private time;
- travel;
- rest;
- emergency behaviour.

Schedules are flexible rather than minute-perfect. Emergencies, relationships and discoveries can interrupt them.

### Example
A cook normally prepares breakfast at 07:00, but if their partner is missing they may abandon the kitchen, search for them and miss the meal entirely.

---

## 2. Private decision model

At selected simulation checkpoints, characters can make decisions based on:

- personality;
- current emotional state;
- relationship pressures;
- knowledge;
- fear;
- immediate safety;
- available resources;
- previous choices;
- unresolved goals.

Decisions should be authored from bounded possibilities, not generated as arbitrary chaos.

---

## 3. Emotional residue

Major experiences persist.

After witnessing violence, betrayal or death, a character may:
- become quieter;
- avoid a location;
- avoid another character;
- sleep poorly;
- become protective;
- become reckless;
- seek companionship;
- write privately;
- change routines.

Emotional residue gradually changes through time, conversation, safety and new events.

---

## 4. Relationship state

Never reduce relationships to one friendship number.

Track independent dimensions:

`trust`
`affection`
`loyalty`
`resentment`
`fear`
`dependency`
`attraction`
`suspicion`
`grief`
`debt`

A character can love somebody and still resent them. A person can trust someone personally while suspecting them politically.

---

## 5. Secret actions

Characters can perform actions the player never sees directly.

Examples:
- writing a diary entry;
- hiding a gift;
- visiting a grave;
- meeting a lover;
- moving supplies;
- helping an injured person;
- concealing evidence;
- preparing an escape route;
- attending a private burial;
- destroying a photograph.

These actions may later become discoverable through physical evidence, witnesses or changed behaviour.

---

## 6. Event participation

Characters can independently attend:
- weddings;
- birthdays;
- births;
- meals;
- memorials;
- religious gatherings;
- community meetings;
- private meetings.

Participation depends on relationship, location, invitation and current circumstances.

---

## 7. Off-screen simulation levels

### Level A — Ambient
Minor routine changes with no persistent story consequence.

### Level B — Personal
Private action creates a discoverable artifact or relationship change.

### Level C — Social
An event changes multiple relationships or settlement conditions.

### Level D — Narrative
A major autonomous decision alters future scenes or survival conditions.

Use Level D sparingly so the player does not feel that the important story is constantly happening without them.

---

## 8. Discovery design

When the player encounters the result of an off-screen event, do not automatically explain it.

Preferred discovery sequence:

`environmental clue → player interpretation → partial witness account → optional artifact → later confirmation`

This creates curiosity instead of exposition.

---

## 9. Death and absence

A character can transition through:

`ALIVE → MISSING → PRESUMED_DEAD → CONFIRMED_DEAD → REMEMBERED`

Not every death needs immediate confirmation.

A missing character can produce uncertainty, search behaviour and conflicting reports.

Once death is confirmed, their relationships and possessions remain relevant.

---

## 10. Burial behaviour

Characters with strong bonds to the deceased may attempt private burial when safe conditions permit.

Possible motivations:
- love;
- family duty;
- faith;
- guilt;
- respect;
- fear that the body will be discovered;
- refusal to abandon someone.

The player may witness, assist, interrupt, discover later or miss the event entirely.

---

## 11. Personal archive

Important characters can leave behind:
- diaries;
- letters;
- photographs;
- voice recordings;
- recipes;
- sketches;
- clothing;
- gifts;
- tools;
- religious objects;
- receipts or notes;
- maps.

Artifacts should be selected based on personality. A mechanic should not leave behind the same narrative object as a journalist unless there is a reason.

---

## 12. Memory architecture

Characters should remember selected high-impact player actions rather than every interaction.

Memory categories:
- kindness;
- betrayal;
- violence witnessed;
- violence committed;
- rescue;
- abandonment;
- promises;
- secrets revealed;
- gifts;
- major conversations.

Memories can influence later dialogue, trust and autonomous decisions.

---

## 13. Character death rules

Deaths must remain narratively justified.

Do not kill characters randomly merely to prove the simulation is alive.

A potential death requires:
- credible circumstance;
- established vulnerability or risk;
- causal connection to the world state;
- meaningful aftermath.

Some characters can die off-screen, but major emotional deaths should generally have enough setup for the player to understand why the loss matters.

---

## 14. Autonomous violence

Characters can commit violence without player input when their established psychology and circumstances make it credible.

Possible causes:
- panic;
- rage;
- grief;
- self-defense;
- protection of another person;
- coercion;
- revenge;
- moral collapse.

The simulation should never treat an impulsive killing as a reward event. It should produce consequences for the perpetrator, witnesses, relationships and wider community.

---

## 15. Child and family continuity

Children are treated as people within the social world, not props.

Family events can change routines and relationships.

A newborn can change:
- sleep;
- food requirements;
- mobility;
- parental priorities;
- social support;
- risk tolerance;
- future decisions.

Child-related content should remain grounded, respectful and non-exploitative.

---

## 16. Simulation boundaries

The goal is believable continuity, not total physical simulation.

Prioritize systems visible to or emotionally relevant to the player:
- relationships;
- routines;
- events;
- injuries;
- food and shelter;
- evidence;
- deaths;
- memories.

Avoid expensive simulation of irrelevant background details merely for technical novelty.

---

## 17. QA scenarios

Test at minimum:

1. Player attends a wedding and sees relationship changes afterward.
2. Player misses a wedding and later discovers evidence that it happened.
3. A character secretly visits a grave.
4. A character dies before confessing love.
5. The player discovers the deceased character's private writing.
6. A betrayal triggers an impulsive act with consequences.
7. A character changes routine after witnessing violence.
8. A child-related event changes a parent's priorities.
9. Two characters meet without the player and alter their relationship.
10. An off-screen event does not overwrite a major player-facing sequence incorrectly.

## Acceptance criteria
Layer 28 passes when the cast feels capable of living, loving, grieving, making mistakes and changing without constant player supervision—and when those unseen lives can become discoverable, emotionally meaningful story material.
