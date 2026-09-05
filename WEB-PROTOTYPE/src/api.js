const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8787';

export async function getThresholdConfig() {
  const response = await fetch(`${API_BASE}/api/threshold`);
  if (!response.ok) throw new Error(`Threshold API failed: ${response.status}`);
  return response.json();
}

export async function recordThresholdEvent(event, metadata = {}) {
  try {
    await fetch(`${API_BASE}/api/session/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event, metadata })
    });
  } catch {
    // Analytics must never block the cinematic experience.
  }
}
