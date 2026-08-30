# RIDE OR DIE — Implementation Roadmap

## Current milestone
Chapter 1: The Last Normal Day — playable vertical slice foundation.

## Build sequence
1. Initialize the Unreal Engine 5 project locally from the approved architecture.
2. Establish mobile input, camera, player movement, interaction, save/load, and game-state foundations.
3. Build the opening highway environment and drivable vehicle.
4. Implement the crash sequence and transition into on-foot exploration.
5. Build the highway survivor encounter and its three primary choice outcomes.
6. Build Hollowgate as the first explorable settlement.
7. Add Mara, Jace, Noah, Evelyn, and the first background survivor population.
8. Implement dialogue, relationship variables, promises, and persistent choice state.
9. Implement the radio investigation and first ECHO encounter.
10. Build the Chapter 1 ending cinematic and Chapter 2 handoff.
11. Add autosave/manual save, checkpoint recovery, accessibility settings, audio/haptics hooks, and analytics hooks.
12. Profile on representative Android hardware and establish scalable quality presets.
13. Run gameplay, narrative, performance, thermal, memory, save-corruption, and interruption testing.
14. Package an Android development build, then move through internal and closed testing before production release.

## Definition of playable vertical slice
A tester can install the build, start a new game, drive the opening sequence, survive the crash, make the highway choice, reach Hollowgate, interact with the key Chapter 1 characters, make persistent dialogue/relationship choices, investigate the radio, experience ECHO, save/load successfully, and reach the Chapter 1 ending without a blocker.

## Engineering rule
Do not fabricate Unreal binary/project assets in GitHub documentation. The actual `.uproject`, Config, Content, Source, and generated build artifacts must be created and validated by Unreal Engine and then committed through the appropriate development workflow.
