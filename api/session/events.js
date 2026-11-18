const ALLOWED_EVENTS = new Set([
  'intro_started',
  'intro_skipped',
  'menu_opened',
  'menu_selected',
  'echo_seen'
]);

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed.' });
  }

  let payload = req.body ?? {};
  if (typeof payload === 'string') {
    try {
      payload = JSON.parse(payload);
    } catch {
      return res.status(400).json({ ok: false, error: 'Invalid JSON body.' });
    }
  }

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return res.status(400).json({ ok: false, error: 'A JSON object is required.' });
  }

  const size = Buffer.byteLength(JSON.stringify(payload), 'utf8');
  if (size > 32 * 1024) {
    return res.status(413).json({ ok: false, error: 'Request body is too large.' });
  }

  const event = typeof payload.event === 'string' ? payload.event : '';
  if (!ALLOWED_EVENTS.has(event)) {
    return res.status(400).json({ ok: false, error: 'Unsupported event.' });
  }

  if (
    payload.metadata !== undefined &&
    (!payload.metadata || typeof payload.metadata !== 'object' || Array.isArray(payload.metadata))
  ) {
    return res.status(400).json({ ok: false, error: 'Metadata must be a JSON object.' });
  }

  res.setHeader('Cache-Control', 'no-store');
  return res.status(202).json({
    ok: true,
    accepted: true,
    event,
    receivedAt: new Date().toISOString()
  });
}
