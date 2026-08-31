# Chapter 2 — Layer 38: Visual Asset Pipeline & Cinematic Realism

## Status
**Creative direction locked.**

## Purpose
Define the production visual standard for RIDE OR DIE and establish how placeholder prototype visuals become reviewed, consistent game assets.

---

# 1. Core principle

> **If the player can see it, it belongs to the world.**

The game should pursue grounded cinematic realism rather than generic game-like abstraction.

---

# 2. Asset hierarchy

Visual production is divided into:

### Characters
- face identity;
- body proportions;
- hair;
- skin/material detail;
- wardrobe;
- accessories;
- age presentation;
- emotional expressions;
- injury states where narratively appropriate.

### Environments
- homes;
- streets;
- workplaces;
- schools;
- religious spaces;
- event venues;
- private locations;
- outdoor spaces.

### Props
- phones;
- photographs;
- diaries;
- food and cookware;
- clothing;
- furniture;
- vehicles;
- gifts;
- personal belongings;
- evidence objects.

### Events
- weddings;
- birthdays;
- births;
- burials;
- concerts;
- religious ceremonies;
- family gatherings.

---

# 3. Character continuity

Each major character requires a canonical visual reference before production assets are considered final.

Reference information should include:
- front/three-quarter/side views where useful;
- facial proportions;
- hair;
- defining features;
- body silhouette;
- wardrobe rules;
- accessories;
- age range;
- emotional baseline;
- contextual outfit variants.

A character must remain recognizably the same person across scenes.

---

# 4. Visual identity versus randomness

AI-assisted generation or procedural asset creation may help accelerate production, but generated outputs are not automatically canonical.

A human/creative review pass is required for:
- identity consistency;
- anatomy;
- continuity;
- cultural plausibility;
- wardrobe continuity;
- object continuity;
- scene lighting.

---

# 5. Environment realism

Spaces should contain believable evidence of habitation.

Examples:
- used cookware;
- imperfectly arranged furniture;
- personal photographs;
- laundry;
- school materials;
- medication or care items where narratively relevant;
- food preparation;
- receipts;
- clutter appropriate to the character.

Do not populate every room with decorative objects simply to make it look detailed.

---

# 6. Food and domestic detail

Food preparation is part of world realism.

Where a scene includes cooking, the environment should support:
- ingredients;
- cookware;
- steam;
- stirring;
- serving;
- sounds;
- plausible food placement;
- character interaction with the kitchen.

The detail exists to make the world feel lived in, not to turn cooking into an unrelated minigame.

---

# 7. Photographic evidence

Photographs are first-class narrative assets.

Each important photograph should have:
- subjects;
- location context;
- approximate time;
- photographer when known;
- ownership;
- physical format;
- discovery location;
- narrative significance.

A photograph must remain visually consistent with the people and place it depicts.

---

# 8. Diaries and written artifacts

Written objects should be visually grounded.

Possible presentation:
- handwriting;
- typed pages;
- folded paper;
- annotations;
- stains/wear;
- bookmarks;
- torn pages.

Text should be used where the artifact itself is meaningful.

---

# 9. Lighting

Lighting should follow physical context.

Use:
- natural daylight;
- indoor practical lighting;
- street lighting;
- vehicle lights;
- event lighting;
- candlelight;
- emergency lighting.

Avoid using dramatic lighting solely because a scene is important.

---

# 10. Weather and materials

Rain, dust, heat, mud and other environmental conditions should affect the visual presentation where appropriate.

Examples:
- wet clothing;
- reflective streets;
- condensation;
- damp surfaces;
- muddy footwear;
- fogged windows.

Effects should remain physically plausible.

---

# 11. Facial performance

Major emotional scenes require expressive performance.

Important states can include:
- joy;
- fear;
- grief;
- anger;
- shock;
- confusion;
- relief;
- suppressed emotion;
- exhaustion.

Avoid making every emotional response theatrical. Small reactions can be more powerful.

---

# 12. Tears and physical emotion

Visible tears, trembling, breathing changes, posture shifts and vocal strain can be used in high-emotion scenes.

They should be contextual rather than applied automatically whenever the script says someone is sad.

---

# 13. Injury and aftermath visuals

Where mature story content requires injury depiction, presentation should prioritize realism and consequence over gore spectacle.

Visual continuity should track:
- location of injury;
- severity;
- clothing effects;
- movement limitations;
- recovery;
- medical treatment where relevant.

Do not treat wounds as disposable visual effects that vanish after a scene.

---

# 14. Cinematic composition

Shots should be motivated by:
- character perspective;
- geography;
- emotional distance;
- discovery;
- tension;
- environmental storytelling.

The game should allow quiet observational compositions as well as intense moments.

---

# 15. Asset naming and versioning

Production assets should use consistent identifiers.

Recommended pattern:

`CHAR_[ID]_[ASSET]_[VARIANT]_[VERSION]`

`ENV_[LOCATION]_[ASSET]_[VARIANT]_[VERSION]`

`PROP_[OBJECT]_[VARIANT]_[VERSION]`

This supports continuity and prevents accidental replacement of canonical assets.

---

# 16. Visual review gates

Every major asset passes through:

1. **Concept** — creative direction.
2. **Reference** — canonical identity established.
3. **Prototype** — used in gameplay test.
4. **Continuity review** — checked against existing assets.
5. **Final** — approved for production use.

Only the final stage should be treated as canonical.

---

# 17. Vertical-slice visual target

The next 3D-facing slice should contain reviewed assets for:
- protagonist;
- at least two NPCs;
- one home interior;
- one exterior transition space;
- kitchen props;
- photograph;
- diary;
- phone;
- rain/weather treatment;
- basic facial/emotional performance;
- contextual clothing.

The current Hatchable prototype remains an experience prototype until these assets are integrated.

---

# 18. Final visual rule

The production standard is:

**Cinematic realism + character continuity + environmental storytelling + emotional performance + restraint.**

The goal is not photorealism for its own sake.

The goal is to make the player forget that they are looking at a collection of assets.

They should feel like they are looking into someone's life.

---

# 19. Layer 38 acceptance criteria

- [ ] A formal visual asset hierarchy exists.
- [ ] Major characters have canonical visual references.
- [ ] Character identity remains consistent across scenes.
- [ ] AI/procedural outputs require creative review before becoming canonical.
- [ ] Environments communicate believable habitation.
- [ ] Domestic and cooking details support realism.
- [ ] Photographs are tracked as narrative assets.
- [ ] Diaries and written artifacts have physical visual identity.
- [ ] Lighting follows physical context.
- [ ] Weather affects materials and appearance plausibly.
- [ ] Facial performance supports nuanced emotion.
- [ ] Tears and physical emotion are used contextually.
- [ ] Injuries maintain continuity and prioritize consequence over spectacle.
- [ ] Cinematic composition supports both tension and quiet observation.
- [ ] Assets have consistent naming/versioning.
- [ ] Major assets pass through review gates.
- [ ] The next 3D slice has a defined visual asset target.

## Direction lock
**The final Ride or Die visual standard is not “make everything photorealistic.” It is “make everything believable enough that the player stops seeing assets and starts seeing lives.”**
