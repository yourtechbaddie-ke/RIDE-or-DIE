# Chapter 2 — Branching State Specification

## Purpose
This document defines the persistent gameplay state introduced or modified by Chapter 2. States should be stored independently of dialogue so that later chapters can react without requiring the player to replay earlier scenes.

## Carried state from Chapter 1
- `PROMISE_MOTHER_CALL`
- `NOAH_PROMISE`
- `CH1_TRAPPED_WOMAN_CHOICE`
- `CH1_RADIO_HEARD`
- `CH1_ECHO_ANOMALY_WITNESSED`

## Chapter 2 state

### Relationships
- `CH2_MARA_TRUST`: 0–3
- `CH2_JACE_TRUST`: 0–3
- `CH2_EVELYN_TRUST`: 0–3
- `CH2_NOAH_BOND`: 0–3

### Investigation
- `EVIDENCE_ECHO_01`
- `EVIDENCE_ECHO_02`
- `EVIDENCE_ECHO_03`
- `RADIO_LISTENED_LONG`
- `PLAYER_ECHO_THEORY`
- `TOWN_LAYOUT_DOUBT`

### Behavioural choices
- `CH2_PRIMARY_TASK`: WATER / MEDICAL / RADIO / SETTLEMENT
- `CH2_NIGHT_RULE`: OBEY / INVESTIGATE
- `CH2_DOOR_RESPONSE`: OPEN / ASK / SILENT / WAKE
- `CH2_NOAH_RESPONSE`

### Reality-state flags
- `ECHO_CONTACT_02`
- `ECHO_USED_PERSONAL_VOICE`
- `ECHO_KNOWS_PRIVATE_DETAIL`
- `PLAYER_DOUBTS_MEMORY`

## Choice philosophy
Choices should not be presented as morality tests. The system records what the player did, why they did it where possible, and who witnessed it. Later scenes react to those facts.

## Relationship effects

### Mara
Trust increases when the player is honest about the radio anomaly, completes settlement tasks and protects civilians. Trust decreases when the player hides evidence or disregards settlement rules.

### Jace
Trust increases through practical cooperation and directness. Trust decreases when the player repeatedly prioritizes supernatural investigation over immediate survival.

### Evelyn
Trust increases when the player listens rather than demands answers. Evelyn becomes more forthcoming when the player admits uncertainty.

### Noah
Bond increases through keeping promises, protecting him and taking his statements seriously. It decreases when the player dismisses his memories or repeatedly abandons him.

## Convergence rules
The major Chapter 2 climax always occurs. Branches alter:
- who accompanies the player;
- what evidence is available;
- what witnesses believe happened;
- which voice is used in the Familiar Voice sequence;
- which relationship scene follows the blackout;
- what Chapter 3 remembers about the player.

## Save-state requirement
All Chapter 2 state must serialize with the chapter save. No state should depend solely on a temporary scene variable.

## Design principle
**The player should feel that their choices matter even when the plot converges.** The world remembers behaviour, relationships remember promises, and ECHO remembers information the player has exposed.
