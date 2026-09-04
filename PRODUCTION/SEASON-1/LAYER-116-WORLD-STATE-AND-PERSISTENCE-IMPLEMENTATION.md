# LAYER 116 — WORLD-STATE & PERSISTENCE IMPLEMENTATION

## Purpose

Every meaningful action should be capable of leaving a trace in the world. Persistence ensures RIDE OR DIE remembers what happened after the player moves on.

## Persistent State Categories

Track, where relevant:

- character life/death status
- injuries and recovery
- relationships
- family structures
- pregnancies and births
- child age states
- reputation and rumors
- possessions and ownership
- shelter status
- settlement condition
- resource levels
- road conditions
- vehicle states
- evidence discovered or lost
- organizational activity
- NPC locations
- major choices
- discovered secrets
- broadcast/information states

## Causality

World-state changes should propagate to believable consequences rather than isolated flags.

Example:

Character dies → family learns or discovers death → household changes → possessions are redistributed or disputed → routines change → reputation/history updates → future encounters reflect the loss.

## Persistence Across Perspectives

Changing the current playable perspective does not erase previous events. The new perspective inherits the world produced by earlier actions and deaths.

## Time

The primary Season 1 timeline is approximately 12–18 months. Persistence should support time progression without requiring every character to visibly age dramatically during this period.

## Clothing & Possessions

Wardrobe and possessions persist as part of character identity. Clothing may be worn, washed, repaired, replaced, transferred, lost or inherited. Important garments can carry emotional history.

## Hidden Information

Not every state is immediately visible to the player. The system may track facts the player has not discovered, including organizational records and concealed family histories.

## Rey & Tariq

The system must preserve the concealed historical truth that Tariq is Rey's biological son while allowing both characters to experience an authentic friendship before the reveal.

The reveal should change interpretation of prior events without retroactively changing what the characters genuinely felt.

## Save Integrity

Critical world-state transitions must survive saving/loading and perspective changes. Deaths, major possessions, relationship changes and irreversible choices cannot silently reset.

## Canonical Rule

> RIDE OR DIE remembers what the player did, what the world did, and what the player never got to see.
