# RIDE OR DIE — Cinematic Third-Person VR Integration

## Status
**Approved design direction — implementation pending Unity project initialization and headset selection.**

This specification adds an optional cinematic VR presentation mode to the existing third-person game. It does not replace the standard third-person experience and does not convert the game into a first-person-only title.

## 1. Experience definition

The player remains an observer controlling a playable character in the world. In VR, the player sees the character and environment stereoscopically from a carefully composed third-person camera rig.

The defining experience is **cinematic third-person VR**:
- the playable character remains visible during ordinary movement and exploration;
- the player can naturally look around using headset tracking;
- the character's movement, animation, dialogue and world simulation remain independent of head movement;
- authored cinematic sequences can use controlled camera compositions while preserving headset orientation and comfort;
- the standard non-VR camera and controls remain fully supported.

Do not attach the VR camera to the avatar's eyes or silently turn ordinary gameplay into first-person.

## 2. Unity XR platform direction

The production engine direction is Unity + C#. Use a vendor-neutral XR architecture:
- Unity XR Plug-in Management for platform configuration;
- OpenXR as the preferred runtime interface where supported by the selected headset;
- Unity Input System for gameplay and XR input action maps;
- XR Interaction Toolkit only for interaction components that benefit from its abstractions;
- a project-owned VR camera/origin rig so the third-person camera, avatar, cinematic director and comfort systems can coordinate without hard dependencies on one headset vendor.

The exact headset class, minimum hardware, controller profile and store/runtime requirements must be selected before implementation. Android phone stereoscopic mode must not be assumed to provide the tracking, input or performance of a dedicated VR headset.

## 3. Camera architecture

Create a dedicated ThirdPersonVRRig with these logical parts:
- XROrigin: headset tracking origin and calibrated floor/eye reference;
- VRFollowCamera: stereo camera position behind and above the playable character;
- HeadPose: applies tracked head rotation and a restrained, configurable positional offset;
- AvatarAnchor: target used by the third-person follow system;
- CinematicCameraDirector: authored camera framing and transitions;
- ComfortController: applies user-selected comfort settings;
- VRInteractionRouter: maps controller, gaze and standard gameplay actions to the same interaction interface.

The camera must preserve a readable view of the avatar without forcing the player's head to remain fixed. Head rotation should look around the scene, not steer the character automatically. Character movement and camera-relative locomotion must be mapped explicitly and tested independently.

Provide configurable camera distance, height, shoulder offset, follow damping and look sensitivity. Avoid camera collision that pushes the stereo camera abruptly through walls; use predictive obstruction handling and fade/adjust framing smoothly.

## 4. Cinematic VR language

Cinematics should be authored for stereo viewing, not merely rendered through a flat-screen camera.

Requirements:
- preserve comfortable scale, depth and character-to-camera distance;
- avoid rapid artificial camera acceleration, sudden zooms and unmotivated camera rolls;
- do not force head rotation or continuously override the player's head pose;
- use fades, gentle blends or stable repositioning between authored camera positions;
- keep important performances and action inside a comfortable viewing region, while allowing the player to look elsewhere;
- support optional subtitles positioned for comfortable readability without locking them to a tiny fixed point in the world;
- allow a cinematic to be viewed in VR or through the standard flat-screen camera;
- preserve the project's restrained, human cinematic language rather than adding spectacle solely because VR is available.

For scenes that require a precisely directed viewpoint, use a stable camera composition and let the player choose whether to look toward the focal action. Never require a fast forced head turn to understand a critical event.

## 5. Gameplay and interaction

VR and non-VR modes must call the same gameplay systems and state interfaces.

Support:
- standard gamepad/controller movement where the headset supports it;
- VR controller input for selection and contextual interaction;
- optional gaze targeting as an accessibility alternative, never as the only required input;
- ray-based inspection of evidence, objects, documents and environmental details;
- near-field interaction only where physically reaching an object improves the experience;
- consistent interaction prompts and feedback across VR and non-VR.

Do not require room-scale movement for core progression. Every essential interaction must be achievable from a seated or standing stationary play position.

## 6. Comfort and accessibility

Provide user-adjustable settings:
- seated and standing origin calibration;
- snap turning and optional smooth turning;
- movement comfort vignette, adjustable or disabled;
- adjustable follow-camera distance and height;
- reduced camera acceleration and follow smoothing;
- optional teleport locomotion only for spaces designed and tested for it;
- subtitle size, contrast and placement;
- recenter view and recalibrate floor height;
- left/right-handed controller mapping;
- pause and comfort break access at all times.

Avoid forced locomotion, artificial head bob, camera shake, rapid acceleration, unexpected camera roll and extended forced camera movement. Any intense cinematic effect must have a reduced-motion alternative.

## 7. Performance and rendering

VR is a separate performance target, not an automatic consequence of an Android build.

The VR implementation must:
- establish a headset-specific frame-rate and frame-time budget before visual production is locked;
- profile stereo rendering on the minimum supported hardware;
- use scalable quality tiers, level-of-detail, occlusion, texture budgets and efficient lighting;
- evaluate single-pass/multiview rendering and foveated rendering where supported;
- limit expensive post-processing and transparent effects;
- avoid relying on desktop-only rendering features for the minimum headset;
- test thermal behavior, memory pressure, loading and long-session comfort.

Do not promise a headset, refresh rate, resolution or release platform until hardware profiling and platform certification confirm it.

## 8. Narrative and world continuity

VR must not create a separate story canon. Both modes share:
- the same playable perspectives and character identity;
- the same dialogue, choices and relationship state;
- the same world clock, NPC autonomy and persistence;
- the same evidence, inventory, death and continuation systems;
- the same cinematic events and chapter progression.

The player remains an observer with access to a living world, not a new in-world character. VR must not change the no-chosen-one philosophy or grant the player additional canonical agency.

## 9. Suggested Unity project organization

When the Unity project is initialized, organize the implementation under the project source structure, for example:

Assets/RideOrDie/VR/
- Core/ — XR bootstrap, mode selection and capability checks
- Camera/ — third-person XR rig, follow and camera collision
- Cinematics/ — VR-aware camera director and transitions
- Interaction/ — controller/gaze routing to shared interactions
- Input/ — XR action maps and bindings
- Comfort/ — locomotion and comfort settings
- UI/ — VR menus, subtitles and accessibility
- Profiles/ — headset-specific quality and input profiles

Keep the existing web prototype separate; it is not the VR runtime.

## 10. Implementation phases and acceptance criteria

### Phase A — Hardware and feasibility decision
Choose the target headset family, controller requirements, minimum hardware and intended distribution channel. Validate Unity/OpenXR support and licensing/store requirements.

### Phase B — XR foundation
Create XR bootstrap, mode selection, origin calibration, input maps and a stable stereo third-person camera rig.

**Acceptance:** The player can launch either standard third-person or VR mode; in VR the avatar remains visible, head tracking works, and the player can move/look independently without camera instability.

### Phase C — Gameplay interaction
Connect VR controller and optional gaze input to the shared interaction interface.

**Acceptance:** Core Chapter 1 interactions, evidence inspection, menus and pause can all be completed seated without changing story state or requiring room-scale movement.

### Phase D — Cinematic adaptation
Adapt a representative Chapter 1 scene with stereo-aware composition, comfort-safe transitions, readable subtitles and a flat-screen fallback.

**Acceptance:** The scene communicates the same narrative information in both modes, does not force head movement, and passes comfort review.

### Phase E — Optimization and QA
Profile on the selected minimum headset, test long sessions, accessibility settings, tracking loss, recentering, pause/resume, save/load and mode-specific bugs.

**Acceptance:** The selected headset meets its verified frame-time target on the minimum supported scene and all required progression paths work in both modes.

## 11. Open decisions

These decisions remain intentionally unresolved until the production target is confirmed:
- standalone headset versus PC-tethered VR;
- exact supported headset models and minimum specifications;
- controller-only versus controller plus hand tracking;
- whether VR is included in the initial release or delivered as a later mode;
- platform store and certification requirements.

## Non-negotiable rule

**RIDE OR DIE remains a third-person cinematic survival game. VR is an optional immersive way to witness and participate in that same world—not a replacement for its camera language, narrative canon or standard gameplay.**