# Chapter 2 — Audio Production Specification

## Status
Layer 23 audio design lock. Actual generated/recorded audio files are produced later through the selected voice, music and SFX pipeline.

## Audio philosophy
Chapter 2 uses sound to create uncertainty before visuals do. The player should often hear something that could have an ordinary explanation before the game gives them any reason to believe it is supernatural.

## Core motifs

### ECHO motif
- Four notes.
- Same interval identity as Chapter 1.
- Chapter 2 introduces longer decay and subtle environmental distortion.
- Never use the motif continuously.
- It should feel like recognition rather than a jump scare.

### Hollowgate ambience
Required layers:
- Low generator hum.
- Wind through damaged structures.
- Distant human conversation.
- Metal movement.
- Occasional dogs.
- Electrical interference.
- Sparse birds in daylight.
- Night insects that abruptly stop during anomalies.

## Dialogue production
Character voices should remain naturalistic. Avoid theatrical horror delivery except when a character is knowingly imitating another voice.

### Protagonist
Performance direction: controlled, tired, increasingly uncertain. The player should hear the character trying to remain rational.

### Mara
Performance direction: practical, protective, exhausted. Authority without military caricature.

### Jace
Performance direction: defensive, blunt, emotionally compressed. His distrust should feel earned rather than villainous.

### Evelyn
Performance direction: warm but unsettlingly perceptive. Never play her as an obvious fortune teller.

### Noah
Performance direction: five-year-old child. Natural curiosity, fear and matter-of-fact observations. Do not make him sound knowingly supernatural.

### ECHO voices
Use familiar vocal identities but introduce tiny inconsistencies:
- slightly wrong breathing;
- unnatural pauses;
- duplicated consonants;
- emotionally incorrect emphasis;
- faint room tone that does not match the visible location.

Do not over-process every ECHO line. The player should first question whether the voice is real.

## Priority dialogue assets
1. Morning-after radio silence.
2. Noah's "before" memory conversation.
3. Hollowgate archive discovery reactions.
4. Dead-frequency transmission.
5. Familiar Voice sequence.
6. Final transmission: **"If you can hear this, don't let them take Noah."**
7. Noah: **"Did you forget again?"**

## SFX categories
- Generator start/stop.
- Radio tuning.
- Static bursts.
- Analog radio hum.
- Electrical failure.
- Footsteps on asphalt, concrete, wood and debris.
- Door hinges.
- Distant vehicle movement.
- Paper/archive handling.
- Camera/phone recording.
- Night insects.
- Sudden environmental silence.
- Low-frequency ECHO transition.

## Music
Chapter 2 should use less conventional score than Chapter 1. Music should enter primarily when the player's interpretation changes.

Required tracks/stems:
- `ch02_morning_after`
- `ch02_hollowgate_theme`
- `ch02_investigation_low`
- `ch02_radio_room`
- `ch02_familiar_voice`
- `ch02_climax_echo`
- `echo_motif_04note`

## Implementation rules
- Dialogue must be interruptible where gameplay allows.
- Radio audio should be spatialized as an in-world source.
- ECHO audio may deliberately violate expected spatial positioning, but this should be rare.
- Environmental ambience should duck subtly beneath important dialogue.
- Silence is an authored asset: anomaly scenes require dedicated silent/near-silent states.

## Asset naming convention
`CH02_[SCENE]_[TYPE]_[NUMBER]`

Examples:
- `CH02_MORNING_DLG_001`
- `CH02_RADIO_SFX_004`
- `CH02_ECHO_DLG_012`
- `CH02_HOLLOWGATE_AMB_002`
- `CH02_CLIMAX_MUS_001`

## Production note
No audio-generation service is locked yet. The production team may use an appropriate licensed TTS/voice platform for dialogue, a licensed generative music platform for score, and licensed/generated SFX sources. Commercial-use rights must be verified before any asset is shipped in a commercial build.
