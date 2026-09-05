# RIDE OR DIE — Security Policy

> **Security is a production feature, not a post-launch patch.**
>
> RIDE OR DIE is designed as a real game product with a protected source repository, backend services, persistent player/world state, production builds, and future online distribution. This document defines the security baseline for the project.

## Security Goal

RIDE OR DIE cannot be made literally “unhackable.” The engineering goal is instead **defense in depth**: compromise of one component must not automatically compromise the source code, signing credentials, player data, production infrastructure, or recoverability of the game.

The project prioritizes:

- source-code integrity
- identity and access control
- secret protection
- backend authorization
- database isolation
- client/server trust boundaries
- build and release integrity
- player-data protection
- abuse resistance
- logging and incident detection
- backups and disaster recovery

## Repository Security Rules

1. Never commit passwords, API keys, private keys, signing keys, service-account credentials, database credentials, or production tokens.
2. Production secrets must be supplied through an approved secret-management mechanism or deployment environment.
3. Production changes should go through reviewed pull requests rather than direct pushes.
4. Security-sensitive changes require additional review.
5. Dependencies must be monitored and updated when security issues are identified.
6. Generated builds must never be treated as the only copy of the source project.
7. Release/signing credentials must be separated from ordinary development credentials.
8. Local development credentials must never be reused in production.

## Authentication & Authorization

Authentication establishes **who** a user is. Authorization establishes **what that user is allowed to do**.

The backend is authoritative for all security-sensitive operations. A client request must never be trusted merely because the client claims the operation is legitimate.

Authorization must be enforced server-side for operations involving:

- player accounts
- saved games
- progression
- inventory
- relationships
- achievements
- purchases or entitlements, if introduced
- administrative functions
- world-state mutations
- moderation functions

## Game Client Trust Boundary

The Unity/mobile client is considered **potentially compromised**.

Players may inspect, modify, reverse engineer, intercept, or manipulate client-side data. Therefore:

- secrets must not be embedded in the client
- authoritative progression must not live exclusively on the client
- sensitive validation must occur on the backend
- anti-tamper controls are defense-in-depth, not the primary security boundary

## Data Protection

Sensitive data should be minimized. Data that must be retained should be protected in transit and at rest using the capabilities of the selected production infrastructure.

Database access follows least privilege. Application components receive only the permissions they require.

## Backups & Disaster Recovery

RIDE OR DIE must maintain recoverable copies of critical production data and source/build artifacts.

Backups should be:

- automated
- encrypted
- access-controlled
- isolated from normal application credentials
- periodically tested through restoration exercises

A backup that has never been restored successfully is not considered proven disaster recovery.

## Incident Response

Potential security incidents include:

- leaked credentials
- unauthorized repository changes
- suspicious account activity
- data exposure
- malicious API traffic
- unauthorized production deployment
- compromised build/signing credentials
- destructive database activity

When an incident is suspected:

1. Contain the affected credential, account, service, or deployment path.
2. Preserve relevant logs and evidence.
3. Rotate exposed secrets.
4. Determine the scope and affected systems.
5. Restore from a known-good source or backup when necessary.
6. Patch the underlying weakness.
7. Document the incident and prevention measures.

## Vulnerability Reporting

Do not publicly disclose an unpatched security vulnerability with exploit details.

Report suspected vulnerabilities privately to the project maintainer through the repository's configured private security-reporting mechanism once that mechanism is enabled.

## Security Is Part of Definition of Done

A production feature is not complete until its security boundary is understood, secrets are handled correctly, authorization is enforced where required, logging is appropriate, and recovery implications have been considered.

See the full architecture specification in:

`TECHNICAL/SECURITY-ARCHITECTURE.md`
