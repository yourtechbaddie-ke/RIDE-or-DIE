# Chapter 2 — Hollowgate

## Status
**Layer 23 — Production Package / Narrative and gameplay lock candidate**

## Chapter purpose
Chapter 2 is the first sustained investigation chapter. The player has survived the Collapse, reached Hollowgate, and experienced the first impossible ECHO event. The chapter shifts the game from immediate survival into **uncertain survival**: people have routines, factions, memories and rules, but the town itself no longer behaves consistently.

The player should leave Chapter 2 believing three things:
1. Hollowgate is not merely a survivor settlement; something about the place is wrong.
2. The protagonist's own memories and promises may be unreliable.
3. ECHO is capable of using familiar voices, spaces and relationships to influence what people perceive.

## Continuity locks from Chapter 1
- The chapter begins after the 2:13 AM radio incident.
- Noah's statement — **"You."** — is canonical.
- The four-note ECHO motif remains the primary audio signature.
- `PROMISE_MOTHER_CALL`, `NOAH_PROMISE`, and the Chapter 1 trapped-woman choice persist.
- No conventional explanation of ECHO is given.
- The protagonist does not suddenly become a supernatural expert.
- Hollowgate remains grounded, human and materially believable even when reality becomes unstable.

## Target runtime
**75–120 minutes** for the first production pass.

## Chapter promise
The player wakes after the night anomaly and attempts to understand what happened while helping Hollowgate survive its first full day after the Collapse. Investigation reveals that several residents have experienced contradictory versions of the same places and events. The protagonist discovers evidence that the radio transmission was not an isolated event.

---

## Sequence 1 — Morning After
**Quest:** MORNING LIGHT

The player wakes before sunrise. The settlement is exhausted rather than peaceful.

Environmental beats:
- Generator sputters.
- Someone boils water.
- A child asks for breakfast.
- Two survivors argue over fuel.
- Medical supplies are running low.
- The protagonist's wreck-related injuries remain visible.

The player can inspect:
- Phone.
- Photograph.
- Radio.
- Noah's toy dinosaur if it was retained at the end of Chapter 1.

The radio is silent.

Optional interaction: the player checks the time. It reads **6:17 AM**. This mirrors the 6:17 PM opening of Chapter 1 without explaining why.

Mara asks whether the protagonist heard anything during the night. The player can:
- Tell the truth.
- Minimize it.
- Ask why she is asking.
- Lie.

Hidden state: `CH2_MARA_TRUST`.

---

## Sequence 2 — The Settlement Rule
**Quest:** KEEP THE PEACE

Mara explains the immediate priorities: water, fuel, medicine and a functioning radio.

Jace wants to search the old town for supplies. Evelyn objects because "the town changes after dark."

The line is treated as local superstition rather than fact.

Player can volunteer for:
1. Water run.
2. Medical supply search.
3. Radio repair.
4. Stay and help the settlement.

The selected task affects the order of later scenes but not the chapter's central mystery.

---

## Sequence 3 — The First Inconsistency
**Quest:** SOMETHING IS MISSING

During the chosen task, the protagonist discovers an ordinary object in an impossible location.

Examples by route:
- Water route: a child's school notebook inside a sealed utility room.
- Medical route: a prescription dated after the Collapse.
- Radio route: a handwritten frequency list containing the protagonist's name.
- Settlement route: a photograph showing the service station as it appeared before the Collapse, with the protagonist standing in the background despite never having visited it.

The player is not told which interpretation is correct.

A four-note motif may occur once, buried beneath environmental audio.

---

## Sequence 4 — Noah's Memory
**Quest:** FIND NOAH

Noah disappears briefly after an argument between adults.

The player finds him near an abandoned school bus or service road within the settlement perimeter.

Noah says he remembers the protagonist from "before."

Dialogue choices:
- "Before the crash?"
- "We've never met."
- "What do you remember?"
- "Let's get you back."

Noah's answers are deliberately incomplete:
- "You had the same face."
- "It was raining."
- "You told me not to listen."
- "You forgot me."

Noah cannot explain whether these are memories, dreams or something he was told.

If `NOAH_PROMISE = TRUE`, he asks whether the protagonist kept the promise.

This creates a callback to the Chapter 1 promise without declaring the player good or bad.

---

## Sequence 5 — Hollowgate Proper
**Quest:** INTO TOWN

Mara authorizes a small group to enter the town perimeter.

The player experiences Hollowgate as a grounded, partially abandoned town:
- Grocery storefronts.
- Clinic.
- Church or community hall.
- Gas station.
- Residential street.
- Police/fire access road.
- Old radio relay structure.

World design principle: **the town should initially feel explorable, not haunted.**

The horror comes from discrepancies.

Examples:
- A clock shows 9:42 while the player's watch shows 9:17.
- A house has fresh food but no occupants.
- A family photograph contains one extra person.
- A radio plays a conversation from earlier that day before it has happened.

---

## Sequence 6 — The Hollowgate Archive
**Quest:** WHAT HAPPENED HERE?

The player discovers an old local archive containing newspaper clippings, emergency plans, maps and radio logs.

The records establish that Hollowgate has experienced unexplained communication anomalies before the current Collapse.

Important rule: the archive never states "ECHO is real."

Instead, it contains repeated references to:
- voices on dead frequencies;
- missing time;
- people reporting identical dreams;
- residents hearing loved ones who were elsewhere;
- buildings being remembered differently by different witnesses.

A damaged page contains the word **ECHO**.

The player can photograph or record evidence.

Hidden state: `EVIDENCE_ECHO_01`.

---

## Sequence 7 — The Radio Room
**Quest:** DEAD FREQUENCY

The protagonist reaches the old relay station.

The radio equipment appears partly functional.

Player interaction:
- Tune frequency.
- Inspect wiring.
- Replace a component.
- Record transmission.

At a specific frequency, the player hears fragments of conversations from Chapter 1.

Then the protagonist hears their own voice say a sentence the player has **not yet spoken**.

The player can immediately shut the radio off or continue listening.

If they continue:
- A voice says the protagonist's name.
- A second voice says Noah's name.
- The four-note motif plays.
- Transmission ends.

Hidden state: `RADIO_LISTENED_LONG`.

---

## Sequence 8 — The Town Changes
**Quest:** GET BACK

On the return journey, the environment subtly differs from the route the player used earlier.

Do not make the change theatrical.

Examples:
- A blue car is now parked where there was none.
- A road sign has a different destination.
- A shop that was closed is now open but empty.
- A house number changes.
- The same dog appears in two locations.

The protagonist can question Mara, Jace or Evelyn afterward.

Each gives a different explanation.

This is the chapter's central experiential rule:

> **The world does not agree with itself.**

---

## Sequence 9 — Nightfall
**Quest:** AFTER DARK

Hollowgate's residents impose a strict night rule: remain inside after dark.

The player can choose to obey or investigate.

### If the player obeys
They participate in a human conversation sequence. Relationships deepen, conflict develops and the player hears contradictory stories about Hollowgate.

### If the player investigates
They discover a second radio source and see a distant light moving through town.

The player does not get a full supernatural reveal.

---

## Sequence 10 — The Familiar Voice
**Quest:** DON'T ANSWER

A voice outside the player's shelter sounds exactly like someone the protagonist trusts.

The game never assumes which person emotionally matters most; the line is selected according to relationship state.

The voice asks the protagonist to open the door.

Choices:
1. OPEN THE DOOR.
2. ASK WHO IT IS.
3. STAY SILENT.
4. WAKE SOMEONE ELSE.

The consequences differ:
- Opening the door produces an environmental anomaly and a temporary loss of certainty.
- Asking a question causes the voice to answer with a personal detail it should not know.
- Staying silent makes the voice gradually imitate the protagonist.
- Waking someone else creates an interpersonal scene where the witness may hear a different voice entirely.

---

## Sequence 11 — The Evidence Wall
**Quest:** PUT IT TOGETHER

The protagonist assembles discovered evidence.

The player can connect:
- Radio anomaly.
- Hollowgate archive.
- Noah's memory.
- Environmental inconsistencies.
- Repeated ECHO motif.
- Personal photographs/phone records.

The game does not provide a single "correct theory."

Instead, the player forms a working hypothesis.

Possible labels:
- "Someone is manipulating the radios."
- "People are experiencing shared hallucinations."
- "Hollowgate is repeating something."
- "The Collapse changed reality."
- "I don't know yet."

This choice is stored as `PLAYER_ECHO_THEORY`.

---

## Sequence 12 — Chapter 2 Climax
**Quest:** THE SECOND VOICE

The settlement radio activates without power.

Every nearby radio begins broadcasting the same transmission.

The protagonist hears fragments from Chapter 1, then a future-sounding exchange between Mara and Jace.

The final transmission is the protagonist's voice:

**"If you can hear this, don't let them take Noah."**

The player has not said this line during the game.

Noah appears in the doorway.

He looks frightened.

Noah asks:
**"Did you forget again?"**

The player can respond:
- "Forget what?"
- "Noah, come here."
- "Who told you that?"
- silence.

The lights go out.

Four-note ECHO motif.

When emergency light returns, the room is empty for one beat.

Then Noah is standing exactly where he was.

CUT TO BLACK.

## Chapter ending hook
Text appears:

**HOLLOWGATE REMEMBERS.**

Then:

**CHAPTER 3 — THE TOWN THAT WASN'T THERE**

---

## Chapter 2 design rules
- Horror escalates through contradiction, not spectacle.
- No definitive ECHO explanation.
- Noah remains a child, not a supernatural exposition device.
- Mara, Jace and Evelyn retain independent motivations.
- The player can distrust everyone without the game confirming that distrust.
- Environmental changes must be subtle enough that players question their own memory.
- Player choices modify relationships, evidence and later callbacks.
- Every major anomaly has at least one plausible non-supernatural interpretation.
- Audio is a primary storytelling system.
- The chapter must remain playable without combat.
- The player should finish Chapter 2 with more questions than answers, but with enough concrete evidence to feel that investigation is progressing.
