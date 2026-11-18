# RIDE OR DIE — HAZARD & THREAT SYSTEM
## Supplementary implementation specification for Season 1

**Status:** Approved production direction  
**Scope:** Player characters, companions, named characters and autonomous NPCs  
**Authority:** Supplements Layers 114–117 and the Chapter 3 survival architecture. It does not renumber, replace or reopen the locked Layers 100–120.

## 1. Purpose

This document makes the existing injury, death, survival and Collapse systems actionable for game implementation. It defines the sources of danger, how they are communicated, how they create injury, and how they can lead to permanent death.

RIDE OR DIE is a grounded, character-driven survival game. Danger comes from a cascading societal Collapse, unsafe environments, resource scarcity, human decisions and the physical consequences of injury. The game must not become a generic zombie shooter or a monster-hunt game.

## 2. Core rules

1. Every serious hazard must have a believable cause in the world.
2. Whenever practical, the player receives observable warning signs before a preventable hazard becomes lethal.
3. Outcomes depend on severity, exposure, preparation, character condition, available help and player decisions—not arbitrary hidden dice rolls.
4. Hazards can affect the player, companions and autonomous NPCs. The world must not protect named characters simply because they are important.
5. Injury is not automatically death. Characters can be injured, impaired, stabilized, treated, recover, deteriorate or die according to severity and circumstances.
6. Death is permanent. Do not respawn the deceased character or erase their consequences.
7. Do not add an always-on arcade health bar if it conflicts with the approved restrained HUD. Communicate condition through contextual UI, animation, audio, movement and character behavior.
8. Keep violence grounded and non-gratuitous. Do not reward cruelty or turn suffering into spectacle.

## 3. Hazard families

### A. Traffic and transportation
- Vehicle collisions during high-speed, low-visibility or congested travel.
- Secondary collisions and pile-ups during the Collapse.
- Loss of vehicle control from damaged tires, brakes, steering or road surfaces.
- Abandoned vehicles, blocked roads, debris and unsafe detours.
- Fuel shortage or breakdown in unsafe locations.
- Dangerous boarding, exiting, loading or rescuing people around moving vehicles.

**Gameplay:** driving skill, speed, visibility, road observation, vehicle condition, seatbelts where present, route choice and passenger protection affect risk. A collision can cause bruising, fractures, concussion-like symptoms, bleeding, impaired mobility or death according to impact severity. Chapter 1's highway sequence must follow the authored sequence in CHAPTERS/CHAPTER-01/THE-LAST-NORMAL-DAY.md.

### B. Fire, smoke and heat
- Vehicle fires and fuel-related fires.
- Building fires, cooking accidents and uncontrolled settlement fires.
- Smoke inhalation and poor visibility.
- Hot surfaces and burns.
- Heat exposure during travel or prolonged work.

**Gameplay:** visible flames, smoke, heat shimmer, coughing, reduced visibility and NPC reactions communicate danger. Fire can spread according to authored environment rules; do not simulate expensive uncontrolled fire physics on mobile. Provide escape, extinguishing or rescue options only where the scene supports them.

### C. Structural and physical environment
- Unstable buildings, damaged floors, collapsing ceilings and falling debris.
- Broken glass, exposed metal, sharp wreckage and unsafe climbing.
- Falls from height, slips and failed jumps.
- Flooded or partially submerged spaces, dangerous currents and unseen obstacles where the region supports them.
- Blocked exits and entrapment.

**Gameplay:** creaking, dust, visible cracks, shifting debris, water movement, warning dialogue and environmental animation should communicate risk. Traversal and rescue outcomes depend on footing, load, mobility, tools and time.

### D. Weather and exposure
- Cold, wet clothing, wind and prolonged exposure in cold regions.
- Heat, dehydration and sun exposure in hot regions.
- Storms, poor visibility, slippery surfaces and weather-damaged routes.
- Lack of suitable clothing or shelter.

**Gameplay:** weather risk is regional and contextual. Show gradual cues such as shivering, fatigue, slowed movement, impaired decisions or NPC concern. Clothing, shelter, warmth/cooling, rest and time affect recovery. Do not apply the same exposure model to every region.

### E. Survival needs and resource deprivation
- Dehydration from insufficient clean water.
- Starvation and malnutrition from prolonged lack of food.
- Exhaustion and sleep deprivation.
- Unsafe food or water and sanitation-related illness.
- Lack of medicine or inability to access care.
- Power, battery, fuel or equipment shortages that expose people to secondary danger.

**Gameplay:** scarcity creates escalating penalties and decisions; it should not instantly kill a character because one meter reaches zero. Food, water, rest, sanitation, shelter, supplies, time and help can stabilize or improve conditions. Track the difference between hunger, thirst, fatigue, illness and injury.

### F. Injury and medical complications
- Blood loss and untreated wounds.
- Burns, fractures and impaired mobility.
- Infection or worsening illness after an injury where medically plausible.
- Shock, pain, reduced consciousness and inability to perform certain actions.
- Delayed deterioration when medical access, supplies or help are unavailable.

**Gameplay:** use the injury states already defined in Layer 114: minor injury, serious injury, exhaustion, dehydration, illness, burns, fractures, blood loss, impaired mobility, psychological shock and recovery. Add severity and progression data without replacing these canonical states. Treatment, medical skill, supplies, shelter, rest and time influence outcomes.

### G. Human threats
People can become dangerous through fear, desperation, greed, grief, ideology, manipulation, territorial behavior, misinformation, opportunism or attempts to protect loved ones.

Possible encounter behaviors include:
- intimidation, threats and coercion;
- theft, robbery and resource disputes;
- deception, manipulation and betrayal;
- territorial exclusion or forced displacement;
- physical assault or armed confrontation where supported by the character and scene;
- abandonment, refusal to help or withholding critical information.

**Gameplay:** not every hostile person attacks. Encounters can be avoided, negotiated, escaped, hidden from or escalated. Combat is optional, costly and consequential—not the default answer. Do not invent a universal enemy faction or a fixed enemy roster where the narrative documents do not establish one.

### H. Collapse-related infrastructure failures
- Electricity and communications outages.
- Water distribution failure.
- Banking, payment and supply-chain failure.
- Fuel and transport disruption.
- Healthcare and emergency-response overload.
- Isolated communities, blocked routes and misinformation.

These are systemic threats as well as background conditions. A power failure can spoil food or disable equipment; a road closure can prevent medicine reaching a settlement; communication failure can cause a person to take a dangerous route. Implement consequences through connected world-state events rather than disconnected random events.

### I. Natural death
Natural death may occur for established elderly characters when age, health, timeline and circumstances make it believable, consistent with Layer 114. It must never be a random punishment. Do not use natural death as a generic mechanic to remove young or healthy characters.

## 4. Injury-to-death progression

Implement a data-driven condition model rather than one generic damage number.

Each character should support:
- current condition and injury states;
- severity and source of each injury;
- onset time and progression;
- mobility and action restrictions;
- bleeding or other ongoing deterioration where relevant;
- treatment requirements and available treatment;
- recovery status;
- death state and cause of death.

A hazard applies an effect appropriate to its source and severity. Multiple conditions can compound: for example, a fractured leg plus dehydration plus lack of shelter can make a journey increasingly dangerous.

Death occurs only when a lethal event or a documented progression reaches a fatal state. The exact numerical thresholds should be tuned and tested in gameplay, not hard-coded as arbitrary instant-kill rules. Provide accessibility and difficulty tuning without removing permanent-death canon.

## 5. Player feedback and fairness

Communicate danger using the character and world:
- animation, posture, limping, guarding an injury, coughing or shivering;
- breathing, pain reactions, fatigue and relevant voice lines;
- environmental sound, fire crackle, structural creaks, alarms, weather and NPC warnings;
- contextual UI for health/injury, stamina, relevant survival conditions and immediate danger, following Layer 117;
- readable interaction prompts when an action is time-sensitive.

Do not reveal every hidden threat or turn the HUD into a constant checklist. Observation and knowledge are survival resources. A player who ignores clear cues may suffer consequences; an unavoidable invisible one-hit death is not acceptable.

## 6. NPC and companion simulation

Apply the same hazard logic to NPCs and companions, scaled to simulation importance and performance budget. NPCs should recognize obvious hazards, seek shelter, avoid fire, react to collisions, seek help, protect dependents, treat injuries when capable and make imperfect decisions based on their knowledge and skills.

The player must be able to discover consequences later: an abandoned vehicle, a damaged shelter, missing supplies, a changed routine, a memorial or a survivor's account. Do not simulate every distant NPC at full fidelity; use deterministic, persistent world-state outcomes for off-screen events.

## 7. Death, persistence and continuation

On death:
- mark the character permanently deceased with a cause, time and location;
- preserve inventory/possessions and their world placement or transfer according to established ownership rules;
- update relationships, family, dependents, settlement routines and responsibilities;
- preserve evidence, discoveries and unfinished tasks;
- trigger grief and other character responses;
- prevent the deceased character from reappearing as a living playable character;
- continue through another living perspective only when the narrative continuation structure permits.

No full reset, resurrection, duplicate living copy or silent retcon is allowed.

## 8. Chapter placement and canon boundaries

- **Chapter 1 — The Last Normal Day:** use the authored traffic pile-up, vehicle wreck, smoke/fire, injured survivors and trapped-woman choice. Keep the chapter's authored pacing and dialogue. No combat encounter is required. No zombie, monster or supernatural enemy reveal. ECHO remains ambiguous and separate from The Collapse.
- **Hollowgate and later chapters:** introduce hazards only where the approved chapter documents, region design and character circumstances support them.
- **Later regions:** cold, flooding, heat, environmental exposure and other regional threats must match their actual world descriptions. Do not scatter every hazard type into every region.
- Human danger must emerge from character motives and context, not generic hostile NPC waves.

## 9. Unity implementation contract

Antigravity must inspect the actual Unity project before coding and integrate with existing architecture rather than create duplicate systems.

Implement or extend modular C# systems equivalent to:
- CharacterCondition / CharacterHealth — persistent condition and injury data;
- HazardDefinition — ScriptableObject or equivalent data-driven hazard configuration;
- HazardVolume / HazardTrigger — scene-level detection and exposure;
- DamageAndInjuryResolver — maps exposure/impact to injury and severity;
- SurvivalNeeds — food, water, rest, exposure and sanitation conditions;
- MedicalTreatment — treatment, stabilization and recovery;
- CharacterDeathService — permanent death event and cause-of-death record;
- WorldConsequenceService — relationships, possessions, schedules, settlement and evidence updates;
- HazardFeedback — animation/audio/UI feedback consistent with Layer 117;
- NPCThreatResponse — NPC hazard awareness and appropriate response.

These are capability names, not a mandate to duplicate classes if equivalent systems already exist. Prefer one authoritative condition/death state per character. Use events/interfaces to connect systems. Persist critical state through save/load. Avoid per-frame allocations and expensive global scans; use pooling, spatial checks and simulation tiers appropriate for Android.

## 10. Required tests and acceptance criteria

- [ ] Vehicle collision produces severity-appropriate injury and consequences.
- [ ] Fire and smoke are detectable and escapable where the scene permits.
- [ ] Structural danger communicates warning signs and can cause falls/impact injuries.
- [ ] Weather exposure varies by region and can be mitigated with clothing/shelter/rest.
- [ ] Food and water deprivation progresses over time rather than causing arbitrary instant death.
- [ ] Injury can be treated, stabilized, worsen or recover.
- [ ] Human threats support avoidance and negotiation as well as conflict.
- [ ] Companions and NPCs respond to obvious hazards.
- [ ] Death is permanent and records cause/time/location.
- [ ] Death consequences survive save/load and affect the persistent world.
- [ ] Chapter 1 remains faithful to its approved sequence and does not introduce zombies/monsters.
- [ ] ECHO remains unexplained and is not implemented as a conventional enemy.
- [ ] Android performance is profiled; expensive simulations use appropriate tiers.
- [ ] No duplicate health, injury or death systems are introduced.

## Final design rule

**The world should be dangerous because it is breaking, because people are human, and because survival has physical costs—not because the game cheats.**
