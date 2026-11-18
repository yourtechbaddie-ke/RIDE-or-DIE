const API_BASE = (import.meta.env.VITE_API_BASE_URL || '/api').replace(/\/$/, '');

export async function getThresholdConfig() {
  const response = await fetch(`${API_BASE}/threshold`);
  if (!response.ok) throw new Error(`Threshold API failed: ${response.status}`);
  return response.json();
}

export async function recordThresholdEvent(event, metadata = {}) {
  try {
    await fetch(`${API_BASE}/session/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event, metadata })
    });
  } catch {
    // Analytics must never block the cinematic experience.
  }
}
