# RIDE OR DIE — Audio Asset Description Bible

## Production Standard
Audio must sound recorded from a living world, not assembled from obvious stock game loops.

The goal is **naturalistic, cinematic, spatial and emotionally restrained audio**. Every sound should have a physical source, distance, material, environment and reason for occurring.

## Core rule
Do not describe an audio asset as merely "scary," "cinematic," or "apocalyptic." Describe what is physically happening and how it should sound from the player's position.

## Environmental audio

### City before The Collapse
Layer realistic traffic at varying distances, tire noise, engines idling, pedestrian conversation, footsteps, doors, HVAC systems, distant construction, public announcements, restaurant activity, phones, appliances and intermittent sirens. Individual sounds should overlap naturally rather than forming a clean loop.

### City during early disruption
Reduce routine density gradually. Add emergency vehicles, confused conversations, hurried footsteps, traffic bottlenecks, distant arguments, radio broadcasts, power irregularities and isolated mechanical failures. The world should feel disrupted before it sounds destroyed.

### Abandoned interiors
Use room tone appropriate to the structure: settling materials, distant wind through gaps, loose fixtures, refrigerator or electrical remnants when power remains, plumbing resonance, insects and occasional building movement. Avoid constant horror drones.

### Human settlements
Capture practical life: cooking, utensils, generators, water containers, footsteps on different surfaces, quiet conversations, children, repairs, tools, fabric movement, doors, radios and people moving between tasks.

## Footsteps
Every footstep asset should specify:
- surface
- footwear
- pace
- weight
- emotional state
- distance from microphone/player
- wet/dry condition
- injury or fatigue when relevant

Examples: tired adult walking quickly over cracked concrete in worn trainers; frightened person slowing on loose gravel; injured survivor compensating for one leg on a metal stairwell.

## Human Foley
Prioritize subtle sounds that sell presence: breathing, clothing movement, hands contacting objects, bags shifting, keys, phones, zippers, chairs, cutlery, cups, doors and objects being placed down.

Foley should not become exaggerated every time the player interacts with something.

## Dialogue
Voices must include natural breath, hesitation, interruptions, incomplete sentences, emotional restraint, changing distance and environmental acoustics. Characters should sometimes speak while walking, working, eating, driving or searching rather than always standing still and delivering clean lines.

## ECHO audio identity
ECHO should be recognizable without becoming a loud horror effect.

Use restrained abnormalities:
- subtly incorrect room tone
- impossible distance perception
- tiny timing inconsistencies
- duplicated consonants
- altered decay
- electrical interference
- reflections that do not match the environment
- voices that sound familiar but emotionally wrong
- silence that arrives too cleanly

ECHO should make the player question reality before it makes them afraid.

## Music / score
Music should behave like an emotional intelligence system rather than a constant soundtrack.

Use sparse motifs, evolving drones, restrained strings, prepared-piano textures, low-frequency movement, distant harmonic fragments and carefully controlled silence where appropriate. Avoid generic trailer music and constant tension beds.

## Chapter 2 asset descriptions

`CH02_MORNING_DLG_001` — A tired survivor speaks immediately after waking. Voice is close and dry, with subtle room reflections and natural breathing. The performance should feel like someone trying to reconstruct what happened rather than narrating for the audience.

`CH02_RADIO_SFX_004` — A handheld analog radio being tuned through weak stations. Include knob friction, electrical hiss, unstable signal, fragments of distant speech and brief frequency gaps. No exaggerated sci-fi static.

`CH02_HOLLOWGATE_AMB_002` — Mid-distance settlement ambience at late afternoon: generator vibration, people speaking in overlapping fragments, cooking, tools, footsteps, dogs at varying distances, wind through damaged structures and occasional metal impacts. Activity must ebb and flow naturally.

`CH02_ECHO_DLG_012` — A familiar human voice heard from an apparently ordinary source. Delivery is almost correct but contains one or two subtle timing or breathing anomalies. The player should initially be able to rationalize it.

`CH02_CLIMAX_MUS_001` — Sparse psychological climax score. Begins nearly inaudible, introduces low sustained harmonic pressure and a restrained four-note identity, then withdraws instead of resolving conventionally.

## Dynamic mixing
Dialogue should sit naturally inside the environment. Important lines may trigger subtle environmental ducking, but the world should never become unnaturally silent unless silence is intentionally authored.

Environmental sounds should change with player movement, doors, buildings, weather, distance and occlusion.

## Asset-generation prompt structure

Use:

**[physical source] + [environment] + [material] + [distance] + [human context] + [weather/state] + [performance intensity] + [recording character] + [duration] + [clean ending or loop requirement]**

Example:

> worn handheld radio in a concrete utility room, weak analog reception, close microphone perspective, exhausted survivor searching for a station, low electrical hum, intermittent signal loss, realistic documentary field recording, 8 seconds, clean loop-free ending.

## Free AI production tool direction
ElevenLabs is approved as the initial SFX-generation candidate because its current Sound Effects tool explicitly supports custom game and video-game sound effects from text prompts. Its free plan requires attribution; its site states the generated game SFX are royalty free and can be used in commercial projects subject to its terms. Verify the current terms again before final commercial shipping.

## Never use
- generic "horror ambience" loops for every location
- identical footsteps for every character
- exaggerated monster sounds for ECHO
- constant wind loops regardless of weather
- music underneath every emotional scene
- perfectly clean dialogue isolated from its environment
- stock explosions or impacts that do not match the physical scene
- one ambience loop reused across different regions
