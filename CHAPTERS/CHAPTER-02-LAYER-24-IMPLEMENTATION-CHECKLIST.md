# Chapter 2 — Layer 24 Implementation Checklist

## Build order
1. Persistent save-state integration.
2. Hollowgate shelter blockout.
3. Town hub blockout and streaming boundaries.
4. Four primary-task routes.
5. Noah service-road sequence.
6. Archive evidence system.
7. Relay-station radio interaction.
8. Deterministic return-route anomaly system.
9. Nightfall choice.
10. Familiar Voice dynamic speaker system.
11. Evidence Wall UX.
12. Second Voice climax.
13. Audio trigger hooks.
14. Cinematic hooks.
15. Accessibility pass.
16. QA and save/reload validation.

## Engineering acceptance
- Scene IDs match Layer 24 exactly.
- State names match the Chapter 2 branching specification exactly.
- No temporary scene-only variable controls persistent narrative consequences.
- All branch paths converge safely at the defined climax.
- Every anomaly has deterministic reproduction conditions.
- Dialogue can query relationship and evidence state.
- Audio events can query scene and ECHO state.
- Chapter completion writes `CH2_COMPLETE = TRUE`.

## Art acceptance
- Hollowgate reads as a believable survivor settlement before supernatural escalation.
- Town landmarks are visually distinct.
- Evidence props are discoverable without glowing quest markers.
- Night lighting supports navigation without destroying darkness.
- Anomalies are subtle and visually coherent.

## Narrative acceptance
- Noah remains age-appropriate and emotionally credible.
- Mara, Jace and Evelyn retain independent motivations.
- No exposition dump explains ECHO.
- Player theories remain theories.
- Chapter 1 promises and choices visibly carry forward.

## Audio acceptance
- Generator, wind, settlement ambience and town ambience have independent mix buses.
- ECHO motif can be triggered independently of music.
- Familiar Voice can swap speaker assets dynamically.
- Radio transmissions can layer clean voice, degradation and environmental noise.
- All audio triggers have fail-safe defaults.

## QA scenarios
- New game with default Chapter 1 states.
- Chapter 1 save with `NOAH_PROMISE = TRUE`.
- Chapter 1 save with `NOAH_PROMISE = FALSE`.
- Each of four primary tasks.
- Evidence collected in different orders.
- Radio immediately switched off.
- Radio listened to fully.
- Night rule obeyed.
- Night rule investigated.
- Each Familiar Voice response.
- Low/high relationship states.
- Reload immediately before and after major choices.
- Chapter completion followed by reload.
