function assertObject(value, name = 'value') {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    const error = new Error(`${name} must be an object.`);
    error.statusCode = 400;
    throw error;
  }
}

function assertFiniteInteger(value, name, { min = 0, max = Number.MAX_SAFE_INTEGER } = {}) {
  if (!Number.isSafeInteger(value) || value < min || value > max) {
    const error = new Error(`Invalid ${name}.`);
    error.statusCode = 400;
    throw error;
  }
}

function validateStateMutation(payload) {
  assertObject(payload, 'state mutation');
  const allowed = new Set(['version', 'eventId', 'action']);
  for (const key of Object.keys(payload)) {
    if (!allowed.has(key)) {
      const error = new Error(`Unsupported state field: ${key}`);
      error.statusCode = 400;
      throw error;
    }
  }
  if (typeof payload.eventId !== 'string' || payload.eventId.length < 1 || payload.eventId.length > 128) {
    const error = new Error('Invalid eventId.');
    error.statusCode = 400;
    throw error;
  }
  if (typeof payload.action !== 'string' || payload.action.length < 1 || payload.action.length > 128) {
    const error = new Error('Invalid action.');
    error.statusCode = 400;
    throw error;
  }
  if (payload.version !== undefined) assertFiniteInteger(payload.version, 'version', { max: 1000000000 });
  return payload;
}

// The client submits an intent/event. It must never submit the authoritative result.
// A real persistence adapter should validate ownership, progression and world rules in a transaction.
async function applyAuthoritativeEvent({ playerId, event, repository }) {
  if (!playerId) throw Object.assign(new Error('Authenticated player required.'), { statusCode: 401 });
  validateStateMutation(event);
  if (!repository || typeof repository.applyEvent !== 'function') {
    throw new Error('Authoritative state repository is not configured.');
  }
  return repository.applyEvent({ playerId, event });
}

module.exports = { validateStateMutation, applyAuthoritativeEvent };
