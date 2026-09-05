# RIDE OR DIE — Threshold Web Prototype

This folder is the browser-based reference implementation for the locked **The Threshold** homepage experience.

It is deliberately separate from the final Unity game runtime. The prototype exists to validate composition, interaction hierarchy, responsive behavior, cinematic timing and the visual language before the same design is implemented in Unity.

## Stack

- React
- Vite
- CSS
- Node.js / Express API

## Experience

The opening sequence is locked as:

**Burning Road → Road Advance → Impossible Roads → Upside-Down World → Water → Floating Bedroom → Wrong Reflection → Title → Main Menu**

The main menu contains:

- Continue
- New Journey
- The World
- People
- Journal
- Settings

Controls are intentionally hidden during the opening cinematic and appear only once the menu is active.

## Run locally

```bash
cd WEB-PROTOTYPE
npm install
npm run server
```

In another terminal:

```bash
cd WEB-PROTOTYPE
npm run dev
```

Frontend defaults to `http://localhost:5173` and API defaults to `http://localhost:8787`.

Copy `.env.example` to `.env` if the API is hosted elsewhere.

## Production note

The CSS implementation uses procedural gradients, geometry and motion so the interaction can be tested without waiting for final art assets. Final production visuals should replace these procedural stand-ins with authored cinematic assets while preserving the locked composition and timing.
