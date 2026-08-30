# Ride or Die — Game State Schema v0.1

This is the canonical state model for Chapter 1. Names are implementation-facing identifiers and should remain stable once gameplay code begins consuming them.

## Player state
- `player.health`
- `player.stamina`
- `player.hydration`
- `player.hunger`
- `player.location`
- `player.inventory`

## Chapter 1 flags
- `chapter1.mother_call_response` = `replied | promised | ignored`
- `chapter1.mother_call_fulfilled` = boolean
- `chapter1.trapped_woman_outcome` = `helped | searched | abandoned`
- `chapter1.blue_car_clue` = boolean
- `chapter1.echo_tablet_seen` = boolean
- `chapter1.mara_first_impression` = `warm | neutral | hostile`
- `chapter1.noah_promise` = boolean
- `chapter1.noah_truth_response` = boolean
- `chapter1.radio_investigated` = boolean
- `chapter1.echo_first_contact` = boolean

## Relationship dimensions
Each major character stores:
- `trust`
- `respect`
- `affection`
- `fear`
- `resentment`
- `dependency`
- `loyalty`

## Design rule
State changes must happen through a central narrative/state service. UI, dialogue, quests and cinematics should never maintain competing copies of the same truth.

## Save rule
The complete state must be serializable and versioned. Future releases require migrations rather than invalidating existing saves.
