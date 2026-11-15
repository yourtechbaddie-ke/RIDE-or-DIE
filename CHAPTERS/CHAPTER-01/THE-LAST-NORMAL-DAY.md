# Chapter 1 — The Last Normal Day

## Status
**Narrative/design lock for vertical-slice production.**

## Chapter promise
The player begins in an ordinary world and experiences the Collapse without receiving a conventional exposition dump. By the end, the player understands that the disaster is not behaving normally and has encountered the first unmistakable sign of ECHO.

## Target runtime
60–90 minutes for the first production vertical slice. The chapter may expand during full production, but the vertical slice should preserve the following beats.

## Sequence 0 — Prologue: 6:17 PM
**Goal:** establish normality and emotional baseline.

- Black screen.
- Female breathing and faint heartbeat.
- Child: “Are we there yet?”
- Woman: “Almost.”
- Four-note motif, extremely subtle.
- Highway at golden hour.
- Player gains control inside vehicle.

## Sequence 1 — Almost Home
**Quest:** ALMOST HOME

The player drives. No quest marker is necessary. The environment teaches driving naturally.

Phone interaction:
- Mum: “Call me when you get home ❤️”
- Reply: “Almost there.”
- Reply: “I’ll call you when I get in.”
- Ignore.

Hidden state: `PROMISE_MOTHER_CALL` = made / ignored / fulfilled / broken.

Radio is normal, then briefly interrupted by static. A roadside advertisement can flash the word ECHO for a fraction of a second as optional foreshadowing.

## Sequence 2 — The Warning
Around 6:29 PM, traffic slows. Emergency vehicles pass. Phones across the highway vibrate.

Emergency alert appears partially corrupted:
“EMERGENCY ALERT — SEEK SHELTER IMMEDIATELY. DO NOT TRAVEL—”

The sky develops an unnatural luminous distortion. Four notes return.

## Sequence 3 — Collapse
**Quest:** STAY ALIVE

The player must steer, brake and avoid a rapidly escalating chain of collisions. No combat. The purpose is panic and disorientation.

Vehicle impact. Black screen.

## Sequence 4 — The Wreck
Around 6:43 PM, the protagonist wakes upside down inside the wreck.

**Quest:** GET OUT

Contextual interaction teaches escape and basic exploration. The highway is devastated: smoke, fires, abandoned vehicles, survivors searching for loved ones.

First stranger:
- “Hey! You know what’s happening?”
- Player: “No.” / “I don’t know.” / “What did you see?” / silence.
- Stranger: “The lights.”
- Player: “What lights?”
- Stranger: “You didn’t see them?”

## Sequence 5 — The Trapped Woman
**Quest:** THE CHOICE

A woman is trapped in a vehicle. She asks for help and mentions her daughter.

Player choices:
1. HELP HER — spend time to free her; receive a small key; hear “Blue car… my daughter…”
2. SEARCH THE VEHICLE — find supplies and a key; woman dies before departure; photograph of daughter becomes evidence.
3. WALK AWAY — fastest route; woman’s final plea fades behind the player.

The game records the choice without moral labeling.

## Sequence 6 — Hollowgate
Player reaches a temporary survivor settlement around an old service station.

Key atmosphere: generator light, cooking, arguments, wounded survivors, children, prayer, repair work.

Mara introduction:
- Mara: “You lost?”
- Player choices: “I’m looking for somewhere safe.” / “Just passing through.” / “Doesn’t look like anyone’s safe.” / silence.
- Mara notices the protagonist is bleeding.

Jace enters. Their relationship is visibly fractured.

Noah, five years old, approaches with a toy dinosaur:
- Noah: “Do you have a phone?”
- If yes: “Can you call my mum?”

Responses:
- “I’ll try.”
- “I don’t know where she is.”
- “She’s probably coming.”
- “I’m sorry.”

If the player promises to try, `NOAH_PROMISE = TRUE`.

Evelyn, an elderly woman, observes the protagonist:
- Evelyn: “First night?”
- Player: “Yeah.”
- Evelyn: “You’ll learn.”
- Player: “Learn what?”
- Evelyn: “Who people really are.”

## Sequence 7 — Dinner and Night
A quiet human sequence. Food, repair work, children, arguments and exhaustion. The game deliberately allows the player to breathe.

The protagonist receives a sleeping space. Phone and photograph can be inspected.

Dream:
- Dark hallway.
- A child at the far end.
- Child: “You promised.”
- Protagonist wakes.

## Sequence 8 — 2:13 AM
**Quest:** THE VOICE

The settlement is dark. The player hears a radio and investigates.

Radio:
- “If anyone can hear me…”
- “…don’t trust the—”
- static
- “They’re listening.”
- static
- “I’m sorry.”

The voice is the protagonist’s own voice.

A brief visual anomaly: the settlement appears pristine and fully populated; everyone is motionless and staring directly at the player. It lasts only long enough to create doubt.

Three slow knocks.

The player opens the door. Nobody is there. Noah’s toy dinosaur sits on the floor.

Noah appears behind the player:
- Player: “Why are you awake?”
- Noah: “Someone was talking.”
- Player: “Who?”
- Noah: **“You.”**

CUT TO BLACK.

Four-note ECHO motif.

Title card: **THE LAST NORMAL DAY**

Final hook: **CHAPTER 2 — HOLLOWGATE**.

## Chapter 1 design rules
- No traditional tutorial popup unless accessibility requires it.
- No exposition dump explaining the Collapse.
- No zombie/supernatural reveal in Chapter 1.
- Choices converge on the core ending but create persistent world-state differences.
- ECHO remains ambiguous; the player must question whether the anomaly was real.
- Emotional horror is prioritized over gore.