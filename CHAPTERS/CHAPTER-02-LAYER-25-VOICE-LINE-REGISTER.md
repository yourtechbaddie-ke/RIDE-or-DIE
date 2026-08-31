# Chapter 2 — Layer 25 Voice Line Register

## Purpose
Canonical recording register for the current Chapter 2 dialogue pass. Lines are grouped by sequence and should be assigned stable IDs during implementation.

## Sequence 1 — Morning Light
- CH2_S01_MARA_001 — "You were awake last night?"
- CH2_S01_PLAYER_001 — "I heard the radio."
- CH2_S01_PLAYER_002 — "Not really."
- CH2_S01_PLAYER_003 — "Why?"
- CH2_S01_PLAYER_004 — "I slept."

## Sequence 2 — Keep the Peace
- CH2_S02_MARA_001 — "Water first. Medicine second. Fuel if there's enough left to carry. The radio comes back before tonight."
- CH2_S02_JACE_001 — "And if the town has something we need?"
- CH2_S02_MARA_002 — "Then we decide whether needing it is worth losing someone over."
- CH2_S02_EVELYN_001 — "You shouldn't go after dark."
- CH2_S02_JACE_002 — "Nobody said after dark."
- CH2_S02_EVELYN_002 — "I'm saying it now."

## Sequence 3 — Something Is Missing
- CH2_S03_PLAYER_001 — "That wasn't here before."
- CH2_S03_NPC_001 — "What?"
- CH2_S03_PLAYER_002 — "Nothing."

## Sequence 4 — Find Noah
- CH2_S04_PLAYER_001 — "Noah."
- CH2_S04_PLAYER_002 — "You scared everybody."
- CH2_S04_NOAH_001 — "I wasn't scared."
- CH2_S04_PLAYER_003 — "What were you doing?"
- CH2_S04_NOAH_002 — "Waiting."
- CH2_S04_PLAYER_004 — "For who?"
- CH2_S04_NOAH_003 — "You."
- CH2_S04_PLAYER_005 — "Before the crash?"
- CH2_S04_NOAH_004 — "Before that."
- CH2_S04_PLAYER_006 — "We've never met."
- CH2_S04_NOAH_005 — "I know."
- CH2_S04_PLAYER_007 — "What do you remember?"
- CH2_S04_NOAH_006 — "Rain. A road. You told me not to listen."
- CH2_S04_PLAYER_008 — "Let's get you back."
- CH2_S04_NOAH_007 — "You said that before."
- CH2_S04_NOAH_008 — "Did you keep it?"

## Sequence 5 — Into Town
- CH2_S05_MARA_001 — "Stay where we can see you."
- CH2_S05_JACE_001 — "That's not how searching works."
- CH2_S05_MARA_002 — "Today it is."

## Sequence 6 — What Happened Here?
- CH2_S06_PLAYER_001 — "Echo."
- CH2_S06_PLAYER_002 — "Why is that written here?"

## Sequence 7 — Dead Frequency
- CH2_S07_UNKNOWN_001 — "...do you copy?"
- CH2_S07_ECHO_PLAYER_001 — "Don't let them take Noah."
- CH2_S07_ECHO_PLAYER_002 — "[PROTAGONIST NAME]."
- CH2_S07_ECHO_PLAYER_003 — "Noah."

## Sequence 8 — Get Back
- CH2_S08_PLAYER_001 — "That wasn't there."
- CH2_S08_JACE_001 — "What wasn't?"
- CH2_S08_PLAYER_002 — "The car."
- CH2_S08_JACE_002 — "It's just a car."

## Sequence 10 — Don't Answer
- CH2_S10_ECHO_001 — "It's me. Open the door."
- CH2_S10_PLAYER_001 — "Who are you?"
- CH2_S10_ECHO_002 — "You know me."
- CH2_S10_PLAYER_002 — "Say something only you would know."
- CH2_S10_WITNESS_001 — "Who's outside?"
- CH2_S10_PLAYER_003 — "You heard that?"
- CH2_S10_WITNESS_002 — "Heard what?"

## Sequence 11 — Put It Together
- CH2_S11_PLAYER_001 — "Something is repeating."
- CH2_S11_PLAYER_002 — "I don't know what this is."

## Sequence 12 — The Second Voice
- CH2_S12_ECHO_PLAYER_001 — "If you can hear this, don't let them take Noah."
- CH2_S12_NOAH_001 — "Did you forget again?"
- CH2_S12_PLAYER_001 — "Forget what?"
- CH2_S12_NOAH_002 — "The promise."
- CH2_S12_PLAYER_002 — "Noah, come here."
- CH2_S12_PLAYER_003 — "Who told you that?"

## Recording notes
- Player-character lines must be recorded with a clean source performance before ECHO processing.
- Record alternate takes with restrained, fearful and emotionally controlled variants where indicated by the scene specification.
- Preserve breaths and micro-pauses in the source takes; editing should not sterilize the performances.
- ECHO versions should be generated from the canonical source performance where technically feasible so identity remains convincing.
- `[PROTAGONIST NAME]` is a localization/implementation placeholder and must be resolved before final recording or runtime synthesis.
