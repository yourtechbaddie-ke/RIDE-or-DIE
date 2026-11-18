export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ ok: false, error: 'Method not allowed.' });
  }

  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json({
    name: 'The Threshold',
    canonical: true,
    canonicalStatus: 'homepage-only-liminal-meta-space',
    region: null,
    tagline: 'Before you enter the world, the world notices you.',
    openingSequence: [
      'fire-road',
      'road-advance',
      'impossible-geometry',
      'water',
      'floating-room',
      'wrong-reflection',
      'menu'
    ],
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
  });
}
