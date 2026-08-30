# RIDE OR DIE — Chapter 1 System Contract

This document defines the minimum system behavior required for the first playable vertical slice.

## Player
- On-foot movement and camera must work on touch input.
- Contextual interaction must expose only relevant actions.
- Player state must persist through the Chapter 1 checkpoint system.

## Vehicle
- Player can enter the opening vehicle.
- Basic steering, acceleration, braking, collision, and exit behavior are required.
- Vehicle state must survive the transition from the crash sequence into the aftermath state.

## Dialogue
- Dialogue choices are data-driven.
- Choices can write persistent game-state variables.
- Dialogue must be able to branch locally and converge safely back into the authored chapter flow.

## Relationships
Required initial variables:
- MARA_TRUST
- MARA_RESPECT
- JACE_ATTITUDE
- NOAH_TRUST
- NOAH_PROMISE
- EVELYN_FIRST_IMPRESSION

Relationships are multidimensional; do not reduce them to a single romance/friendship score.

## World state
Required Chapter 1 flags include:
- MOTHER_MESSAGE_RESPONSE
- MOTHER_CALL_PROMISE
- HIGHWAY_WOMAN_OUTCOME
- PROJECT_ECHO_TABLET_FOUND
- MARA_INTRO_RESPONSE
- NOAH_PROMISE
- RADIO_INVESTIGATED
- ECHO_FIRST_CONTACT

## ECHO
The first ECHO event must be deterministic for the vertical slice while still using the same event/state interface intended for later systemic ECHO behavior.

The radio sequence must:
1. begin as an ordinary investigation;
2. transmit an unknown warning;
3. transmit the protagonist's voice;
4. trigger the visual anomaly;
5. end with Noah identifying the voice as the player's.

## Save/load
At minimum, save:
- chapter/scene identifier
- player transform/checkpoint
- inventory
- vehicle state
- required world flags
- relationship values
- discovered evidence
- ECHO progression

## Accessibility hooks
The implementation must leave clean extension points for subtitle sizing, subtitle background, vibration intensity, control remapping, aim assistance, and reduced motion.

## Mobile constraints
Systems must avoid unnecessary per-frame work, support quality scaling, and be profiled on Android before visual polish is finalized.
