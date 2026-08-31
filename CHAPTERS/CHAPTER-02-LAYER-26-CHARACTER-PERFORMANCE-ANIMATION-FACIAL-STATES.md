# Chapter 2 — Layer 26: Character Performance, Animation & Facial-State System

## Status
Production specification.

## Purpose
Define the reusable performance states, animation beats, facial states, transitions and implementation rules required to make Chapter 2's characters feel psychologically continuous rather than like dialogue mannequins.

## Global performance rules
1. Every major line has an emotional state before, during and after delivery.
2. Characters should not snap instantly between fear, calm and anger unless the story explicitly calls for a shock response.
3. Idle animation must continue during most conversations: breathing, weight shifts, hand activity, eye movement and environmental attention.
4. Facial animation should prioritize eye focus, jaw tension, blink timing and small asymmetries over exaggerated expressions.
5. Performance changes must be compatible with branching state; the same line can have different intensity depending on trust, evidence and prior choices.
6. ECHO imitation should reproduce the target's physical and vocal identity while introducing subtle timing errors rather than monster-like facial distortion.

---

# 1. Protagonist performance system

## Core states
- `P_IDLE_NEUTRAL`
- `P_FATIGUED`
- `P_ALERT`
- `P_SUSPICIOUS`
- `P_CONFUSED`
- `P_GRIEVING`
- `P_PROTECTIVE`
- `P_CONTROLLED_FEAR`
- `P_PANIC_SUPPRESSED`
- `P_ECHO_RECOGNITION`
- `P_DECISIVE`

## Transition rules
- Neutral → Alert: unexpected sound, visual anomaly or NPC warning.
- Alert → Suspicious: evidence contradicts environmental expectation.
- Suspicious → Controlled Fear: supernatural implication becomes personally relevant.
- Controlled Fear → Protective: Noah is threatened or appears vulnerable.
- Controlled Fear → Panic Suppressed: player chooses to hide fear in front of others.
- Any state → ECHO Recognition: protagonist hears or sees an impossible self-reference.

## Facial direction
**Neutral:** relaxed brow, natural blink rate, unfocused jaw.

**Alert:** eyes lead before head movement; lips close; brow tension minimal.

**Suspicious:** narrowed focus, slight head tilt, delayed blink.

**Controlled fear:** eyes widen slightly, jaw sets, breathing becomes visible, expression remains composed.

**ECHO recognition:** micro-freeze for 300–500 ms before normal movement resumes.

**Protective:** eyes leave threat and locate Noah; shoulders square; voice becomes lower and more deliberate.

## Animation beats
When hearing the protagonist's own voice on radio:
1. Hand stops moving.
2. Eyes shift to receiver.
3. Breathing changes.
4. Head turns slowly.
5. No immediate spoken reaction.
6. Player control returns only after the first transmission fragment ends.

---

# 2. Mara performance system

## Character principle
Mara is a leader who converts fear into tasks. She should almost always be doing something practical while talking.

## States
- `MARA_TASK_FOCUS`
- `MARA_GUARDED`
- `MARA_COMMAND`
- `MARA_SUSPICIOUS`
- `MARA_PROTECTIVE`
- `MARA_PRIVATE_FEAR`
- `MARA_BREAKING_COMPOSURE`

## Key beats
### Morning Light
While asking whether the protagonist was awake, Mara continues sorting supplies. She only stops when the answer becomes suspicious.

### Keep the Peace
Mara's command state uses direct eye contact and reduced gestures. She does not shout unless a later emergency demands it.

### After Dark
If the player ignored her earlier warning, Mara's disappointment should appear before anger.

### Chapter climax
When the radios activate, Mara's first reaction is not to speak. She scans the room and counts people visually, checking whether everyone is present.

---

# 3. Jace performance system

## Character principle
Jace uses practicality and sarcasm to control uncertainty. His confidence should deteriorate in small increments.

## States
- `JACE_CONFIDENT`
- `JACE_IMPATIENT`
- `JACE_SKEPTICAL`
- `JACE_DEFENSIVE`
- `JACE_UNCERTAIN`
- `JACE_FEAR_LEAK`

## Key beats
- Early town scenes: broad gestures, quicker movement and frequent eye contact.
- When evidence contradicts him: gestures reduce and pauses increase.
- When the car/environment discrepancy appears: Jace initially dismisses it while avoiding looking directly at the protagonist.
- During the final radio event: Jace freezes for one beat longer than everyone else before pretending to be busy.

---

# 4. Evelyn performance system

## Character principle
Evelyn notices patterns before others do but is reluctant to disclose why.

## States
- `EVELYN_OBSERVING`
- `EVELYN_RELUCTANT`
- `EVELYN_RECOGNITION`
- `EVELYN_WITHHOLDING`
- `EVELYN_AFRAID`
- `EVELYN_RESIGNED`

## Key beats
When she says, "You shouldn't go after dark," she should not look at the protagonist immediately. She looks toward the route she is warning against.

When the ECHO becomes undeniable, Evelyn should show recognition rather than surprise. This is a critical continuity clue.

---

# 5. Noah performance system

## Character principle
Noah is never "creepy" on purpose. His sincerity is what makes his knowledge disturbing.

## States
- `NOAH_CALM`
- `NOAH_DISTRACTED`
- `NOAH_LISTENING`
- `NOAH_CERTAIN`
- `NOAH_CONFUSED`
- `NOAH_AFRAID`
- `NOAH_TRUSTING`
- `NOAH_RECOGNIZING`
- `NOAH_ABSENT`

## Eye direction
Noah should frequently look slightly past the speaker when listening to a radio or environmental sound that others cannot hear.

## Key performance: "You."
After the protagonist asks "For who?":
1. Noah stops his previous movement.
2. Looks directly at protagonist.
3. One small inhale.
4. Says "You."
5. Holds eye contact for approximately one second.
6. Looks away naturally.

The line must not be delivered as a horror stinger.

## Key performance: "Did you forget again?"
Noah's delivery is gentle and genuinely confused. He is asking a familiar question, not threatening the protagonist.

---

# 6. ECHO performance system

## Core rule
ECHO must be more disturbing when it is almost human.

## Voice-body mismatch
When ECHO imitates a character:
- lip sync should be technically correct;
- blink timing can be fractionally wrong;
- head movement can arrive slightly before emotional emphasis;
- posture should be familiar but too still;
- reaction latency should occasionally be unnaturally short.

## ECHO states
- `ECHO_DORMANT`
- `ECHO_LISTENING`
- `ECHO_MIMIC`
- `ECHO_NEAR_PERFECT`
- `ECHO_GLITCH`
- `ECHO_WITHDRAWAL`

## Never do
- sudden monster face;
- random screaming;
- constant facial distortion;
- obvious possession animation;
- excessive eye effects.

The player should be allowed to question whether the performance was actually abnormal.

---

# 7. Conversation animation framework

Each dialogue event should support:

`PreState → LineDelivery → MicroReaction → ChoiceWindow → ChoiceReaction → ExitState`

Example:

`MARA_GUARDED → question → 0.6s eye hold → player choice → suspicion increase → MARA_TASK_FOCUS`

This allows the same dialogue system to support branching without requiring entirely separate cinematic assets for every choice.

---

# 8. Companion reaction system

During exploration, companions should react to discoveries without interrupting player control every time.

Reaction tiers:

### Tier 0 — No reaction
Discovery is insignificant or already known.

### Tier 1 — Micro-reaction
Eye movement, head turn, short breath.

### Tier 2 — Spoken reaction
One short line.

### Tier 3 — Behavioural interruption
Companion stops walking, approaches evidence or changes route.

### Tier 4 — Cinematic lock
Used only for major narrative revelations.

Chapter 2 should use Tier 1–3 frequently and reserve Tier 4 for the radio climax.

---

# 9. Facial-state implementation

Facial states should be parameterized rather than built as isolated animations.

Recommended parameters:
- brow tension;
- eye openness;
- gaze direction;
- blink rate;
- jaw tension;
- mouth openness;
- cheek tension;
- head pitch;
- head yaw;
- breathing intensity.

Each named emotional state is a preset combination of these values with blendable transitions.

## Blend guidance
- Normal conversation: 0.2–0.5 second transitions.
- Sudden surprise: 0.05–0.15 second initial response followed by 0.4 second settle.
- Fear escalation: gradual 0.8–1.5 second blend.
- ECHO mismatch: introduce timing offsets rather than large value differences.

---

# 10. Performance capture / recording guidance

If using human performers:
- capture clean dialogue before effects;
- record neutral breathing and silence takes;
- record emotional alternates for major branching lines;
- retain eye-line and blocking notes;
- record ECHO source performances before processing.

If using synthetic voices:
- generate a clean canonical performance first;
- preserve stable character identity;
- create emotional variants rather than changing voice identity between states;
- keep ECHO transformations derived from the same canonical voice.

---

# 11. QA acceptance criteria

Layer 26 passes when:
- no major character changes emotion instantly without a narrative cause;
- Noah's unsettling knowledge never depends on exaggerated horror acting;
- Mara's leadership is communicated through behaviour as well as dialogue;
- Jace's skepticism visibly erodes across the chapter;
- Evelyn's recognition reads as withheld knowledge;
- the protagonist's fear can be communicated without dialogue;
- ECHO can be recognized as wrong without obvious visual distortion;
- facial transitions remain natural during branching dialogue;
- animation states can be driven from the Chapter 2 branching variables;
- the final radio sequence works even with dialogue muted, through body language alone.

## Dependency map
**Layer 23:** narrative and choice canon → **Layer 24:** scene implementation → **Layer 25:** dialogue/cinematic direction → **Layer 26:** character performance and animation → future implementation layers.
