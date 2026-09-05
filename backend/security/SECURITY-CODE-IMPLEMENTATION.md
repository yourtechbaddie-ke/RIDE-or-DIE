# RIDE OR DIE — Security Code Implementation

This directory contains the executable security baseline for the web/backend layer. It complements `SECURITY.md` and `TECHNICAL/SECURITY-ARCHITECTURE.md`.

## Implemented

- centralized production secret/config validation
- Helmet security headers
- API and authentication rate limiting
- HTTPS enforcement in production
- request correlation IDs
- bearer-token boundary
- strict state-mutation validation
- authoritative-state repository boundary
- frontend API timeout/error handling
- safe environment template

## Integration contract

The backend entry point should install `securityHeaders(app)`, `requestId`, `requireHttps`, and the appropriate limiter before application routes. Protected mutation routes must authenticate first and then pass only validated player intent into `applyAuthoritativeEvent`.

The frontend must never contain production secrets. `VITE_API_BASE_URL` is a public endpoint configuration, not a credential.

## Critical limitation

The bearer middleware intentionally does not pretend to be a complete identity provider. Wire it to the chosen production authentication provider and verify signatures, issuer, audience, expiry, and revocation server-side before assigning an authenticated `playerId` or roles.

Likewise, `applyAuthoritativeEvent` requires a real transactional persistence adapter. Do not replace that boundary with client-provided inventory, currency, relationship, progression, or world-state snapshots.

## Release gate

Production is blocked until authentication, authorization, database transactions, secret management, dependency scanning, backup/restore testing, and Android signing protection are connected to the deployed infrastructure.
