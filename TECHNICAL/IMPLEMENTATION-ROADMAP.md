# RIDE OR DIE — Unity Implementation Roadmap

**Canonical engine:** Unity 6 + C#  
**Primary platform:** Android (landscape)  
**Version control:** GitHub  
**Development environment:** Unity Editor + Antigravity IDE + connected Unity MCP  
**VR:** Optional secondary third-person observer/XR mode; not a separate game architecture.

This roadmap supersedes the old Unreal Engine 5 implementation sequence. Narrative canon and chapter documents remain unchanged.

## 0. Repository and project safety

1. Read `ANTIGRAVITY-START-HERE.md` and `TECHNICAL/UNITY/UNITY-PROJECT-STRUCTURE.md`.
2. Confirm the actual local Unity project root by locating `Assets/`, `Packages/manifest.json` and `ProjectSettings/ProjectVersion.txt`.
3. Confirm the Unity Editor version and installed packages.
4. Preserve all uncommitted user work. Do not overwrite or regenerate an existing Unity project.
5. Keep the root Vercel/React web prototype separate from the Unity runtime.
6. Create a backup or Git branch before structural changes.

## 1. Foundation and compile stability

1. Verify project opens without compile errors.
2. Verify package manifest and input system.
3. Establish namespaces, assembly definitions only where useful, folder conventions and service ownership.
4. Establish game bootstrap, scene loading, configuration and logging.
5. Establish versioned save/load and central game-state service.
6. Establish mobile input, third-person controller, camera and interaction framework.
7. Create a minimal Android build early to validate device compatibility.

## 2. Vertical gameplay foundation

1. Build the Chapter 1 highway scene from the approved narrative/scene documents.
2. Implement vehicle entry, driving, crash and exit.
3. Implement on-foot exploration and contextual interaction.
4. Implement branching dialogue and relationship state.
5. Implement the survivor encounter and authored choice outcomes.
6. Implement Hollowgate and key character interactions.
7. Implement radio investigation and deterministic first ECHO event.
8. Implement Chapter 1 ending and chapter handoff.

## 3. Shared survival and world systems

1. Implement the canonical hazard/injury/death system in `PRODUCTION/SEASON-1/HAZARD-AND-THREAT-SYSTEM.md`.
2. Integrate survival needs and medical treatment.
3. Integrate NPC autonomy and threat response.
4. Integrate world-state persistence, possessions, relationships and death consequences.
5. Integrate inventory, evidence, vehicles, time, weather and settlement systems according to their canonical documents.
6. Ensure all systems share one authoritative state model; no duplicated health, death, relationship or quest truth.

## 4. Content production

1. Import approved character models and verify scale, orientation, materials and rig.
2. Establish reusable character prefabs and animation controllers.
3. Build environments, vehicles, props, VFX and audio from production bibles.
4. Implement dialogue, voice, facial animation, cinematics and accessibility.
5. Replace placeholders in controlled passes; do not disguise placeholders as final content.

## 5. Android and optional XR

1. Profile CPU, GPU, memory, thermal behavior, storage and load times on target Android devices.
2. Establish quality tiers, LODs, texture budgets, pooling and simulation tiers.
3. Validate touch controls, safe areas, pause/resume, interruptions and save integrity.
4. Add optional XR only after the mobile gameplay foundation is stable, following `TECHNICAL/VR/VR-INTEGRATION-ARCHITECTURE.md`.
5. Produce installable development APKs for testing; produce store AAB only when release configuration is ready.

## 6. QA and delivery

1. Run compile checks after each subsystem.
2. Run edit-mode and play-mode tests where appropriate.
3. Test scene transitions, save/load migrations, death persistence and progression.
4. Test Chapter 1 narrative branches and ECHO timing.
5. Test performance on actual target hardware.
6. Fix all blocking errors before moving to the next milestone.
7. Update the implementation log and GitHub with tested changes only.

## Definition of playable Chapter 1

A tester can install the Android build, start a new game, drive the opening sequence, experience the crash, make the highway choice, reach Hollowgate, interact with key characters, make persistent dialogue/relationship choices, investigate the radio, experience the authored ECHO event, save/load successfully and reach the Chapter 1 ending without a blocker.

## Engineering rule

Build in small, verifiable increments. Do not generate a large untested code dump. Do not fabricate Unity assets in Markdown. Actual scenes, prefabs, ScriptableObjects, C# scripts and project settings must be created and validated in Unity.
