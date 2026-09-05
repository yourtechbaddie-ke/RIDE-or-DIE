# LAYER 102 — NAMED CAST CHARACTER CREATION SYSTEM

## Purpose
Establish the repeatable pipeline for creating actual player-facing/game-ready character assets for the complete 69-entry character roster.

## Character Asset Pipeline
**Canon → Visual Specification → Reference Sheet → Model/Character Asset → Materials → Rig → Animation Set → Expression Set → Wardrobe Variants → Gameplay Integration → Cinematic Validation → Continuity QA**

## Canonical Visual Specification Source
Every human character asset must begin from `PRODUCTION/SEASON-1/CHARACTER-VISUAL-MASTER.md`.

That master contains the canonical age and detailed appearance specification for fixed-identity characters. It also defines the player-customizable Protagonist system. Do not create a competing appearance description in an implementation layer.

## Required Character Package
Each character package should contain, as applicable:
- canonical identity record;
- canonical age or player-selected age;
- visual reference sheet;
- front/side/back full-body reference;
- face/head reference;
- proportions/build reference;
- wardrobe package;
- accessories and signature objects;
- texture/material notes;
- rig requirements;
- facial-expression requirements;
- locomotion requirements;
- interaction requirements;
- cinematic requirements;
- age variants;
- injury/condition variants;
- death-state requirements where applicable;
- NPC behavior profile;
- relationship/recognition markers.

## Playable Perspective Requirement
Any named character can become a playable perspective if the narrative state permits it. Therefore, recurring characters should be built to a quality level that does not make temporary playable control feel like a downgrade from other perspectives.

The Protagonist is different: it is the player's customizable character slot. The player may establish the Protagonist's appearance for their own playthrough, but that selected appearance is not a fixed project-wide canon face. The customization system must obey the same age-aware realism rules as the named cast.

## NPC Requirement
Characters who are never directly controlled still need believable visual and animation assets because NPC autonomy is a core part of the game.

## Recognition System
The player should be able to identify familiar characters from:
- face;
- silhouette;
- hairstyle;
- posture;
- clothing habits;
- accessories;
- voice;
- movement style;
- signature objects;
- context.

Recognition must remain possible even after wardrobe and appearance changes caused by The Collapse.

## No Clone Rule
Do not create characters by duplicating one base appearance and applying superficial changes. Shared technical foundations are acceptable; visible identity must remain distinct.

## Age Fidelity Rule
A fixed-age character must visibly communicate the canonical age recorded in the visual master. Do not make adults substantially younger or older than their stated age, and do not turn children or teenagers into miniature adults. Age presentation must remain coherent across gameplay, cinematics, portraits, wardrobe variants, injury states and survival states.

## Production Priority
1. Recurring/high-interaction characters.
2. Characters with playable perspectives.
3. Characters central to major settlements and systems.
4. Children and age-progressing characters.
5. Characters appearing in multiple chapters.
6. Remaining named cast.

This is an asset-production priority, not a narrative importance ranking.

## Registry / Protagonist Rule
The registry's #1 **Protagonist** entry is intentionally retained as the player's character slot. It must not be replaced by a new named character. The player remains outside the fixed-identity canon while the Protagonist slot remains part of the 51-entry main-character production structure.

## Acceptance Test
A character package passes when a production team can answer:
- Who is this person or player-created character?
- What is their canonical or selected age?
- What do they look like from all required gameplay angles?
- How do they move?
- How do they react emotionally?
- What do they wear before and after The Collapse?
- How do they age, heal, deteriorate or adapt?
- How can another character recognize them?
- What assets are required if they become a playable perspective?

## Canonical Lock
> The cast is not finished when the names exist in Markdown. The cast is finished when the people exist inside the game world.
