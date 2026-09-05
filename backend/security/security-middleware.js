const crypto = require('crypto');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const { jwtSecret, isProduction, authRateLimit, apiRateLimit } = require('./security-config');

function securityHeaders(app) {
  app.disable('x-powered-by');
  app.use(helmet({ contentSecurityPolicy: false }));
}

const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: apiRateLimit,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { error: 'Too many requests. Please try again shortly.' },
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: authRateLimit,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { error: 'Too many authentication attempts.' },
});

function requireHttps(req, res, next) {
  if (!isProduction || req.secure || req.headers['x-forwarded-proto'] === 'https') return next();
  return res.status(400).json({ error: 'HTTPS is required.' });
}

function requireBearer(req, res, next) {
  const header = req.get('authorization') || '';
  if (!header.startsWith('Bearer ')) return res.status(401).json({ error: 'Authentication required.' });

  const token = header.slice(7).trim();
  if (!token || token.length > 4096) return res.status(401).json({ error: 'Invalid authentication token.' });

  // Token verification belongs here once the selected identity provider is wired in.
  // Never trust client-supplied player IDs, roles, inventory, or progression.
  req.auth = { tokenFingerprint: crypto.createHash('sha256').update(token).digest('hex') };
  return next();
}

function requestId(req, res, next) {
  const id = req.get('x-request-id') || crypto.randomUUID();
  req.requestId = id;
  res.setHeader('x-request-id', id);
  next();
}

module.exports = { securityHeaders, apiLimiter, authLimiter, requireHttps, requireBearer, requestId, jwtSecret };
