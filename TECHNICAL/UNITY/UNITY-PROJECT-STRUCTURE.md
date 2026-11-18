# Unity 6 Project Structure and File Ownership

## Unity Editor root

The Unity Editor must open the folder containing `Assets/`, `Packages/manifest.json` and `ProjectSettings/ProjectVersion.txt`. The recommended repository location is `UnityProject/`.

```text
RIDE-or-DIE/
├── AUDIO/                         # Audio direction and asset briefs
├── CHAPTERS/                      # Narrative and chapter implementation references
├── CHARACTERS/                    # Character canon, dossiers and concept art
├── PRODUCTION/                    # Production bibles and approved systems
├── TECHNICAL/
│   ├── UNITY/                     # Unity-specific technical contracts
│   └── VR/                        # Optional XR architecture
├── WEB-PROTOTYPE/                 # Separate React/Vite reference prototype
├── api/                           # Existing web/API functions
├── backend/                       # Existing web backend
├── frontend/                      # Existing web frontend
├── UnityProject/                  # Unity Editor project root (to be safely initialized/synchronized)
│   ├── Assets/
│   │   └── _RideOrDie/
│   │       ├── Art/
│   │       │   ├── Characters/
│   │       │   ├── Environments/
│   │       │   ├── Props/
│   │       │   ├── Vehicles/
│   │       │   ├── Materials/
│   │       │   └── Textures/
│   │       ├── Audio/
│   │       │   ├── Music/
│   │       │   ├── Dialogue/
│   │       │   ├── Ambience/
│   │       │   └── SFX/
│   │       ├── Animations/
│   │       │   ├── Controllers/
│   │       │   ├── Clips/
│   │       │   └── AvatarMasks/
│   │       ├── Cinematics/
│   │       ├── Data/
│   │       │   ├── Characters/
│   │       │   ├── Hazards/
│   │       │   ├── Items/
│   │       │   ├── Dialogue/
│   │       │   └── World/
│   │       ├── Prefabs/
│   │       │   ├── Characters/
│   │       │   ├── Environment/
│   │       │   ├── Interactables/
│   │       │   ├── Vehicles/
│   │       │   └── UI/
│   │       ├── Scenes/
│   │       │   ├── Bootstrap/
│   │       │   ├── Chapter01/
│   │       │   └── Shared/
│   │       ├── Scripts/
│   │       │   ├── Core/
│   │       │   ├── Characters/
│   │       │   ├── Player/
│   │       │   ├── Interaction/
│   │       │   ├── Narrative/
│   │       │   ├── Survival/
│   │       │   ├── Hazards/
│   │       │   ├── Medical/
│   │       │   ├── Death/
│   │       │   ├── NPC/
│   │       │   ├── World/
│   │       │   ├── Vehicles/
│   │       │   ├── Inventory/
│   │       │   ├── Evidence/
│   │       │   ├── Audio/
│   │       │   ├── UI/
│   │       │   ├── Save/
│   │       │   └── XR/
│   │       ├── Settings/
│   │       ├── Tests/
│   │       │   ├── EditMode/
│   │       │   └── PlayMode/
│   │       └── UI/
│   ├── Packages/
│   │   └── manifest.json
│   └── ProjectSettings/
│       └── ProjectVersion.txt
├── PRODUCTION/                    # Approved production canon and build mandate
├── README.md
├── package.json                   # Root web prototype only
└── vercel.json                    # Root web prototype deployment only
```

## Rules that prevent integration errors

1. The actual Unity Editor root is `UnityProject/`, not the repository root, unless an existing local project is already structured differently and is deliberately adopted.
2. All game C# scripts live under `UnityProject/Assets/_RideOrDie/Scripts/`. Do not put scripts in `WEB-PROTOTYPE/`, root `frontend/`, root `backend/` or repository root.
3. All game assets live under `UnityProject/Assets/_RideOrDie/`. Keep imported third-party assets in clearly named subfolders and preserve their licenses.
4. Use consistent namespaces: `RideOrDie.Core`, `RideOrDie.Player`, `RideOrDie.Characters`, `RideOrDie.Hazards`, etc.
5. Use one authoritative owner for each state domain. Game state, character condition, inventory, relationships and death must not be duplicated across unrelated MonoBehaviours.
6. Prefer ScriptableObjects for authored definitions (hazard profiles, items, character configuration, dialogue data); keep mutable runtime state in serializable runtime models/services.
7. Use stable IDs for characters, items, evidence, quests and world events. Do not use display names as save keys.
8. Scene names, asset names, namespaces and file names should be consistent and predictable. Use PascalCase for C# types and filenames; use descriptive scene prefixes such as `SCN_`.
9. Keep generated files out of Git: `Library/`, `Temp/`, `Obj/`, `Logs/`, `UserSettings/`, `Builds/`, `Build/`, `MemoryCaptures/`, `Recordings/`, `*.csproj`, `*.sln`, `.vs/`, and IDE caches. Do commit `Assets/`, `Packages/manifest.json`, `Packages/packages-lock.json`, `ProjectSettings/`, and required `.meta` files.
10. Never delete or regenerate Unity `.meta` files for existing assets. Their GUIDs preserve scene/prefab references.
11. Do not commit APKs, AABs, large generated caches or temporary exports to the source repository. Store release artifacts separately.
12. Add assembly definition files only when there is a real compile/test isolation need. Avoid circular assembly references.
13. Keep optional XR code behind clear abstractions or assembly boundaries so Android non-XR builds compile without XR-only dependencies.
14. Do not assume a plugin/package is installed because a document mentions it. Verify `Packages/manifest.json` and Unity Package Manager first.
15. Never edit `ProjectSettings` or package versions blindly. Make a backup and validate project open/compile after changes.

## Asset import conventions

- Preserve original model files in a source archive folder outside runtime if they are large; import optimized runtime copies into the relevant Art folder.
- Keep source and runtime assets distinguishable.
- Character prefabs should have a documented root transform, scale, rig/avatar configuration, animator and collider setup.
- Avoid multiple competing player controllers or multiple active AudioListeners.
- Use addressable/streaming systems only when needed and verify the package is installed.

## Scene conventions

- `SCN_Bootstrap`: service registration and initial routing.
- `SCN_MainMenu`: menu and settings.
- `SCN_CH01_Highway`: authored opening drive/disaster.
- `SCN_CH01_Aftermath`: crash aftermath and survivor encounter.
- `SCN_CH01_Hollowgate`: settlement exploration.
- `SCN_CH01_RadioRoom`: radio/ECHO sequence if separate scene loading is appropriate.

Do not create every scene up front if the existing project already contains an equivalent working structure. Adopt the existing scene architecture and document mappings.

## Required first validation

Before substantial content work:
- Unity opens the project without import or compile errors.
- The selected Unity version matches `ProjectVersion.txt`.
- Packages resolve successfully.
- One bootstrap scene enters Play Mode.
- One Android development build succeeds.
- Git status is clean or all pre-existing user changes are explicitly preserved.
