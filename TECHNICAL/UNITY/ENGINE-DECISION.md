# RIDE OR DIE — Engine and Repository Decision

**Effective date:** 2026-11-18  
**Canonical production engine:** Unity 6  
**Language:** C#  
**Primary release target:** Android  
**Secondary direction:** Optional cinematic third-person VR using the architecture in `TECHNICAL/VR/VR-INTEGRATION-ARCHITECTURE.md`.

## Authority

This file resolves conflicting historical technical documents. The current production build direction in `PRODUCTION/NEW-GAME-BUILD.md` and the current user-approved workflow select Unity 6. All new production implementation, scripts, scenes, prefabs, packages and build instructions must target Unity 6.

## Historical Unreal documents

The following files are retained for historical traceability only and are **not active implementation instructions**:

- `TECHNICAL/UNREAL-INITIALIZATION-SPEC.md`
- `TECHNICAL/UNREAL-PROJECT-FOUNDATION.md`

Do not create an Unreal project, `.uproject`, Blueprints or Unreal C++ for this production workflow. Do not copy Unreal architecture into Unity mechanically. Translate only engine-independent gameplay requirements into idiomatic Unity/C#.

## Repository separation

The repository root currently contains the Vercel/React web prototype and production documentation. The web prototype is not the Unity game runtime and must remain deployable independently.

The Unity production project should live under `UnityProject/` in this repository when it is first safely initialized or synchronized. Its Unity Editor root is the folder containing all three of:

- `Assets/`
- `Packages/manifest.json`
- `ProjectSettings/ProjectVersion.txt`

If the user's existing local Unity project is outside this repository, do not move or overwrite it automatically. Inspect it, back it up, compare it with the canonical folder plan, then synchronize deliberately.

## Root build and Vercel safety

Do not change the root `package.json`, `vercel.json`, `WEB-PROTOTYPE/`, `api/`, `backend/` or `frontend/` as part of Unity game implementation unless a separate web task explicitly requires it. Keep the root Vercel build pointed at `WEB-PROTOTYPE/dist`.

## Canonical Unity source layout

See `TECHNICAL/UNITY/UNITY-PROJECT-STRUCTURE.md`. Do not put C# source files, Unity scenes or Unity packages at the repository root.
