# Chapter 2 — Layer 24
# Scene / Level Design & Implementation Blueprint

## Status
**Production specification — implementation-ready blueprint**

## Purpose
Layer 24 converts the Chapter 2 narrative lock into buildable scene specifications. Every sequence is defined as a playable unit with an objective, space, interactions, NPC behaviour, state changes, audio/cinematic triggers, and exit conditions.

## Global implementation rules
- Chapter 2 begins immediately after Chapter 1's 2:13 AM blackout and Noah's canonical "You." line.
- No scene should require a lore dump to understand the immediate objective.
- Exploration remains grounded; anomalies are subtle and initially explainable.
- All persistent choices write to the Chapter 2 save-state layer.
- Dialogue and environmental events read state rather than hard-coding a single player path.
- The four-note ECHO motif is a restrained signal, never a constant soundtrack cue.
- No combat is required for the Chapter 2 vertical slice.
- Every anomaly should have at least one plausible non-supernatural interpretation.

---

## Scene map

| ID | Sequence | Space | Primary objective | Key state |
|---|---|---|---|---|
| CH2-S01 | Morning After | Hollowgate shelter | Inspect aftermath / speak to Mara | CH2_MARA_TRUST |
| CH2-S02 | Settlement Rule | Service-station settlement | Choose primary task | CH2_PRIMARY_TASK |
| CH2-S03 | First Inconsistency | Route-specific location | Discover anomalous evidence | EVIDENCE_ECHO_01 |
| CH2-S04 | Noah's Memory | Bus / service road | Find Noah | CH2_NOAH_BOND |
| CH2-S05 | Hollowgate Proper | Town perimeter | Enter town and investigate | TOWN_LAYOUT_DOUBT |
| CH2-S06 | Hollowgate Archive | Archive building | Recover historical evidence | EVIDENCE_ECHO_02 |
| CH2-S07 | Radio Room | Relay station | Tune / record dead frequency | RADIO_LISTENED_LONG |
| CH2-S08 | Town Changes | Return route | Recognize spatial discrepancy | PLAYER_DOUBTS_MEMORY |
| CH2-S09 | Nightfall | Settlement | Obey or investigate | CH2_NIGHT_RULE |
| CH2-S10 | Familiar Voice | Player shelter / exterior | Respond to voice | CH2_DOOR_RESPONSE |
| CH2-S11 | Evidence Wall | Player shelter | Form working theory | PLAYER_ECHO_THEORY |
| CH2-S12 | Second Voice | Settlement radio area | Survive climax / protect Noah | ECHO_CONTACT_02 |

---

# CH2-S01 — MORNING AFTER

### Player state
The player has just survived the Chapter 1 anomaly. Health/injury presentation persists. No new tutorial is shown.

### Environment
Pre-dawn Hollowgate shelter. Low generator light, improvised bedding, cookware, medical supplies and exhausted survivors.

### Player interactions
1. Inspect phone.
2. Inspect photograph.
3. Inspect radio.
4. Inspect Noah's toy dinosaur if present.
5. Speak to Mara.
6. Optional ambient conversations.

### NPC behaviour
Mara monitors the settlement rather than standing in one place. She moves between generator, supplies and people. Background survivors perform looping survival tasks.

### Dialogue state
Mara's first question checks whether the player heard anything overnight. Responses modify `CH2_MARA_TRUST` and reveal no objective truth.

### Audio
- Generator hum.
- Distant coughing / footsteps / cookware.
- No music.
- Radio silence with a barely perceptible noise floor.

### Exit condition
Player completes Mara conversation and either inspects at least one personal object or chooses to leave immediately.

---

# CH2-S02 — KEEP THE PEACE

### Objective
Choose one settlement contribution:
- WATER
- MEDICAL
- RADIO
- SETTLEMENT

### Design
Choice is framed as practical survival, not a morality test. The choice determines the first playable route and changes which inconsistency the player discovers.

### Systems
Set `CH2_PRIMARY_TASK`. Spawn route-specific objective marker only if accessibility settings require it.

### NPC reactions
Mara acknowledges practical help. Jace pushes toward town exploration. Evelyn warns against the town after dark.

### Exit condition
Primary task selected and destination reached.

---

# CH2-S03 — SOMETHING IS MISSING

### Route variants
**Water:** school notebook inside sealed utility room.

**Medical:** prescription dated after the Collapse.

**Radio:** frequency list contains protagonist's name.

**Settlement:** pre-Collapse photograph appears to contain the protagonist.

### Interaction model
Player examines object → camera focuses briefly → optional inspect text/dialogue → evidence can be recorded.

### State
Set `EVIDENCE_ECHO_01 = TRUE` when the player identifies the anomaly. Do not require the player to interpret it as supernatural.

### Audio
Environmental sound drops subtly during inspection. Optional single ECHO motif fragment at low volume.

### Exit condition
Player leaves location with or without recording evidence.

---

# CH2-S04 — FIND NOAH

### Environment
Perimeter service road and abandoned school bus. Morning light; ordinary objects dominate the scene.

### Trigger
Noah disappears after an adult argument. NPC search chatter creates the objective without a quest popup.

### Noah behaviour
Noah is not cryptic on every line. He behaves like a frightened five-year-old, occasionally mixing concrete memories with confusing statements.

### Key dialogue branches
- Ask about before the crash.
- Deny previous meeting.
- Ask what he remembers.
- Prioritize returning him safely.

### State
Modify `CH2_NOAH_BOND`. If `NOAH_PROMISE = TRUE`, unlock the promise callback.

### Exit
Return Noah to the settlement or complete the scene through the player choosing to remain with him briefly before returning.

---

# CH2-S05 — INTO TOWN

### Level layout
Use a compact hub-and-spoke town block for the vertical slice:
- Main street.
- Grocery.
- Clinic.
- Church/community hall.
- Residential lane.
- Gas station.
- Police/fire access road.
- Relay station approach.

The player should be able to recognize landmarks and build a mental map.

### Traversal
Walking only for the core slice. Optional sprint. Contextual interaction for doors, drawers, photographs, radios and documents.

### Environmental storytelling
Place evidence in layers:
1. Ordinary survival evidence.
2. Signs of pre-Collapse life.
3. Contradictory details.
4. One unmistakable but brief anomaly.

### State
Exploration can set `TOWN_LAYOUT_DOUBT` when the player notices a spatial/time contradiction.

---

# CH2-S06 — WHAT HAPPENED HERE?

### Level
Small archive interior with shelves, desk, filing cabinet and wall map.

### Core interaction
Search → inspect → photograph/record → connect evidence.

### Evidence set
- Dead-frequency references.
- Missing-time reports.
- Shared-dream reports.
- Familiar-voice incidents.
- Conflicting building memories.
- Damaged page containing ECHO.

### State
Set `EVIDENCE_ECHO_02 = TRUE` when archive evidence is recovered.

### UX
Evidence objects should be visually distinct but not glow unnaturally. Accessibility mode may enable an interaction outline.

---

# CH2-S07 — DEAD FREQUENCY

### Level
Old radio relay station. Exterior approach funnels the player through ordinary infrastructure before revealing the functioning equipment.

### Interaction sequence
1. Inspect radio.
2. Inspect wiring.
3. Replace component.
4. Tune frequency using a controlled dial interaction.
5. Choose whether to continue listening.
6. Record transmission if the player has the recording interaction available.

### Branch
If the player shuts off immediately, preserve mystery and set `RADIO_LISTENED_LONG = FALSE`.

If the player continues, set `RADIO_LISTENED_LONG = TRUE` and trigger the private-detail transmission.

### Audio
Voice begins degraded and becomes unnervingly clear. Do not use excessive distortion; intelligibility is scarier than noise.

### Exit
Radio shuts down or player leaves the station.

---

# CH2-S08 — GET BACK

### Purpose
Make the player question their spatial memory without announcing that the world changed.

### Dynamic world event
The return route is the same authored path with one or more state-dependent substitutions:
- vehicle appears/disappears;
- road sign destination changes;
- storefront state changes;
- house number changes;
- repeated animal appears in impossible positions.

### Implementation
Use deterministic world-state swaps, not procedural randomness, for the vertical slice. This ensures QA can reproduce every anomaly.

### State
Set `PLAYER_DOUBTS_MEMORY = TRUE` when the player explicitly reacts to the discrepancy.

---

# CH2-S09 — AFTER DARK

### Choice
`CH2_NIGHT_RULE = OBEY` or `INVESTIGATE`.

### Obey route
Human conversation hub. Relationship dialogue and contradictory witness accounts. No supernatural encounter required.

### Investigate route
Player follows distant light / second radio source. Keep the route short and tense. Avoid combat.

### Exit
Both routes converge before the Familiar Voice sequence.

---

# CH2-S10 — DON'T ANSWER

### Trigger
A familiar voice is heard outside the shelter.

### Dynamic speaker selection
Select the voice according to the strongest relevant relationship state. The speaker must be someone the protagonist has emotional reason to trust. Never make the selection feel arbitrary.

### Player choices
1. OPEN
2. ASK
3. SILENT
4. WAKE

### Consequences
**OPEN:** exterior anomaly; temporary certainty disruption.

**ASK:** voice reveals private information.

**SILENT:** voice progressively imitates protagonist.

**WAKE:** witness hears a different voice, creating interpersonal disagreement.

### State
Set `CH2_DOOR_RESPONSE`; if private information is revealed, set `ECHO_KNOWS_PRIVATE_DETAIL = TRUE`.

---

# CH2-S11 — PUT IT TOGETHER

### Level
Player shelter converted into a temporary investigation space. Evidence is physically arranged on a table/wall.

### UX
Player selects evidence cards/objects and chooses a working hypothesis:
- RADIO MANIPULATION
- SHARED HALLUCINATION
- HOLLOWGATE REPEATS
- REALITY CHANGE
- UNKNOWN

### State
Set `PLAYER_ECHO_THEORY`.

### Design rule
The game records the player's interpretation but never confirms it. Later dialogue may challenge or support it.

---

# CH2-S12 — THE SECOND VOICE

### Pre-climax
Settlement radio activates without visible power. Nearby radios synchronize.

### Escalation
1. Ordinary static.
2. Chapter 1 fragments.
3. Mara/Jace future-sounding exchange.
4. Protagonist's impossible future line.
5. Noah appears.
6. Player response.
7. Blackout.
8. Four-note motif.
9. One-frame spatial continuity ambiguity.
10. Chapter 3 hook.

### Critical line
Protagonist voice: **"If you can hear this, don't let them take Noah."**

Noah: **"Did you forget again?"**

### Final state
Set:
- `ECHO_CONTACT_02 = TRUE`
- `ECHO_USED_PERSONAL_VOICE = TRUE`
- `CH2_COMPLETE = TRUE`

Persist all relationship/evidence/choice state.

---

# NPC implementation matrix

| NPC | Default behaviour | Reactive state | Core role |
|---|---|---|---|
| Mara | coordinator / protector | trust + evidence disclosure | practical authority |
| Jace | restless / action-oriented | cooperation + investigation choices | pressure toward action |
| Evelyn | observant / cautious | honesty + uncertainty | local memory keeper |
| Noah | curious / frightened | promise + bond | emotional anchor / anomaly witness |

NPCs must have daily routines so Hollowgate feels inhabited rather than populated by quest dispensers.

---

# Level streaming / technical boundaries

For the vertical slice, divide Chapter 2 into lightweight authored areas:
- `CH2_HOLLOWGATE_SHELTER`
- `CH2_SERVICE_ROAD`
- `CH2_TOWN_HUB`
- `CH2_ARCHIVE`
- `CH2_RELAY_STATION`
- `CH2_NIGHT_EXTERIOR`

Shared persistent systems:
- Save state.
- Dialogue manager.
- Evidence manager.
- Relationship manager.
- Audio state manager.
- ECHO event manager.
- Accessibility settings.

Avoid loading the entire town at once if performance testing shows memory pressure. The town hub should remain visually continuous through controlled streaming boundaries.

---

# Interaction priority

### Tier 1 — mandatory
- Door/open/close.
- Talk.
- Inspect evidence.
- Radio tune.
- Photograph/record.
- Core traversal.
- Choice selection.

### Tier 2 — narrative enrichment
- Personal phone messages.
- Food/cooking observations.
- Posters/newspapers.
- Optional survivor conversations.
- Environmental photographs.

### Tier 3 — polish
- Small object physics.
- Additional ambient interactions.
- Reactive props.
- Optional inspection voice lines.

Tier 1 must be complete before Tier 2/3 polish.

---

# Cinematic implementation rules
- Prefer in-engine real-time cinematics over pre-rendered video for the vertical slice.
- Preserve player camera language wherever possible.
- Avoid removing player control for routine dialogue.
- Camera takeover is reserved for major story beats.
- The ECHO anomaly should use controlled lighting, sound and spatial composition rather than visual spectacle.
- Blackouts must preserve save state and never trap the player in a soft-lock.

---

# QA acceptance criteria

A Layer 24 implementation passes when:

- All 12 scene units can be entered and exited.
- All four primary task routes reach the central investigation path.
- Chapter 1 state correctly modifies Chapter 2 dialogue.
- Chapter 2 choice variables persist after reload.
- Familiar Voice speaker selection responds to relationship state.
- Evidence can be collected in different orders without breaking progression.
- The return-route anomaly is deterministic and reproducible.
- The climax triggers exactly once per chapter completion state.
- No mandatory combat encounter exists.
- No single interpretation of ECHO is presented as confirmed truth.
- Accessibility interaction assistance does not change narrative state.
- Chapter 2 can be completed without discovering every optional evidence item.

## Production handoff
Layer 24 is the bridge between narrative design and engine implementation. Unreal production should implement systems against these named states and scene IDs rather than inventing replacement variables during level construction.

**Next layer:** Layer 25 — Chapter 2 Dialogue, Cinematic & Performance Direction Package.
