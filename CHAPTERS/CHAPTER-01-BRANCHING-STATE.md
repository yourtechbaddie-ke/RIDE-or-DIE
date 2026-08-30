# Chapter 1 — Branching & Persistent State

## Design principle
Chapter 1 uses convergent narrative with persistent consequences. We avoid exponential content growth while ensuring choices matter.

### Core variables
- `PROMISE_MOTHER_CALL`: made / ignored / fulfilled / broken
- `TRAPPED_WOMAN_OUTCOME`: helped / searched / abandoned
- `MARA_FIRST_IMPRESSION`: respectful / neutral / hostile
- `NOAH_PROMISE`: true / false
- `ECHO_INVESTIGATION`: investigated / ignored
- `BLUE_CAR_CLUE`: discovered / not discovered
- `PROJECT_ECHO_CLUE`: discovered / not discovered

## Choice matrix
| Moment | Choice | Immediate effect | Persistent effect |
|---|---|---|---|
| Mum message | Reply | emotional continuity | later phone/memory reference |
| Mum message | Ignore | no immediate cost | later guilt/context |
| Trapped woman | Help | lose time, gain trust/key | possible later survivor/evidence thread |
| Trapped woman | Search | gain supplies/evidence | woman dies; different emotional context |
| Trapped woman | Abandon | save time | later evidence/context can surface |
| Mara | Respectful | positive first impression | easier relationship opening |
| Mara | Neutral | no change | guarded relationship |
| Mara | Hostile | negative impression | future distrust |
| Noah | Promise | emotional bond | promise can be remembered later |
| Noah | Honesty | no false promise | Noah may trust honesty |
| Noah | Dismissal | distance | weaker bond |
| Radio | Investigate | unlocks anomaly evidence | ECHO knowledge increases |
| Radio | Ignore | preserves uncertainty | later evidence can recontextualize event |

## Important rule
No choice in Chapter 1 is labeled “good” or “bad.” The game records behavior and lets later consequences provide meaning.

## Convergence
All players reach the 2:13 AM ECHO encounter. The route, relationships, evidence and emotional context can differ.

## Save-state requirements
The chapter save must persist all core variables, inventory changes, discovered clues, relationship state and quest completion state. Save data must be versionable for future game updates.