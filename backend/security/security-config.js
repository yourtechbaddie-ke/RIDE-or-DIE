const crypto = require('crypto');

const isProduction = process.env.NODE_ENV === 'production';

function required(name) {
  const value = process.env[name];
  if (!value && isProduction) throw new Error(`Missing required production secret: ${name}`);
  return value || '';
}

module.exports = {
  isProduction,
  jwtSecret: required('JWT_SECRET'),
  sessionTtlSeconds: Number(process.env.SESSION_TTL_SECONDS || 900),
  refreshTtlSeconds: Number(process.env.REFRESH_TTL_SECONDS || 60 * 60 * 24 * 30),
  maxBodyBytes: Number(process.env.MAX_BODY_BYTES || 1024 * 1024),
  authRateLimit: Number(process.env.AUTH_RATE_LIMIT || 10),
  apiRateLimit: Number(process.env.API_RATE_LIMIT || 120),
  hashToken(token) {
    return crypto.createHash('sha256').update(token).digest('hex');
  },
};
