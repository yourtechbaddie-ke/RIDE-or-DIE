import express from 'express';
import cors from 'cors';

const app = express();
const port = Number(process.env.PORT || 8787);
const startedAt = new Date().toISOString();

app.use(cors({ origin: process.env.FRONTEND_ORIGIN?.split(',').map(v => v.trim()) || true }));
app.use(express.json({ limit: '32kb' }));

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'ride-or-die-web', startedAt }));

app.get('/api/threshold', (_req, res) => res.json({
  name: 'The Threshold',
  canonical: true,
  canonicalStatus: 'homepage-only-liminal-meta-space',
  region: null,
  tagline: 'Before you enter the world, the world notices you.',
  openingSequence: ['fire-road', 'road-advance', 'impossible-geometry', 'water', 'floating-room', 'wrong-reflection', 'menu'],
  menu: [
    { id: 'continue', label: 'CONTINUE' },
    { id: 'new', label: 'NEW JOURNEY' },
    { id: 'world', label: 'THE WORLD' },
    { id: 'people', label: 'PEOPLE' },
    { id: 'journal', label: 'JOURNAL' },
    { id: 'settings', label: 'SETTINGS' }
  ],
  lockedVisuals: {
    firstFrame: 'an intact road surrounded by a world that appears to be burning',
    impossibleRoads: true,
    upsideDownWorld: true,
    floatingBedroom: true,
    wrongReflection: true
  }
}));

app.post('/api/session/events', (req, res) => {
  const allowed = new Set(['intro_started', 'intro_skipped', 'menu_opened', 'menu_selected', 'echo_seen']);
  const event = String(req.body?.event || '');
  if (!allowed.has(event)) return res.status(400).json({ ok: false, error: 'Unsupported event' });
  res.status(202).json({ ok: true, accepted: true, event, receivedAt: new Date().toISOString() });
});

app.listen(port, () => console.log(`RIDE OR DIE web server listening on ${port}`));
