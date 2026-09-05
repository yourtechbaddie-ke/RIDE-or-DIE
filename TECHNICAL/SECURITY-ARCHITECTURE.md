# RIDE OR DIE — Security Architecture

**Status:** Production security baseline

**Scope:** Unity/mobile game client, backend services, database, authentication, GitHub source control, CI/CD, release pipeline, observability, backups, disaster recovery, and future online services.

---

## 1. Security Objective

RIDE OR DIE is a large, persistent, narrative-driven game. Its security architecture must protect more than a website: it must protect the **game source, production infrastructure, player identities, saved progress, inventory, relationship state, world state, release artifacts, signing credentials, and recovery capability**.

There is no absolute “unhackable” system. The target is a resilient architecture in which an attacker must defeat multiple independent controls and where a compromise does not become permanent loss.

### Primary objectives

1. Prevent unauthorized access.
2. Prevent unauthorized mutation of authoritative game state.
3. Prevent production secrets from reaching clients or repositories.
4. Prevent a single compromised credential from destroying the project.
5. Detect suspicious activity quickly.
6. Recover from destructive incidents using trusted backups and source history.
7. Preserve the integrity of production builds.
8. Minimize player-data exposure.

---

## 2. Trust Model

The architecture uses explicit trust boundaries.

```text
                    PLAYER DEVICE
                         │
              ┌──────────▼──────────┐
              │ Unity / Mobile Game │
              │   UNTRUSTED CLIENT  │
              └──────────┬──────────┘
                         │ HTTPS/TLS
                         ▼
              ┌─────────────────────┐
              │ API / Edge Layer    │
              │ Rate limits / WAF   │
              └──────────┬──────────┘
                         ▼
              ┌─────────────────────┐
              │ Authentication &    │
              │ Authorization       │
              └──────────┬──────────┘
                         ▼
              ┌─────────────────────┐
              │ Game Services       │
              │ Authoritative Logic │
              └──────────┬──────────┘
                         ▼
              ┌─────────────────────┐
              │ Database / Storage  │
              └──────────┬──────────┘
                         │
             ┌───────────┴───────────┐
             ▼                       ▼
      Audit / Monitoring       Backup / Recovery

GitHub + CI/CD + signing are maintained as a separate privileged production path.
```

### Fundamental trust rule

**Anything on the player device can be modified.**

The client may request an action, but the backend decides whether that action is valid.

---

## 3. Assets That Must Be Protected

### Critical assets

- Git repository and Git history
- Unity project
- production backend source
- database
- player accounts
- authentication credentials
- refresh-token infrastructure
- API credentials
- cloud/deployment credentials
- database credentials
- production configuration
- Android signing keys
- release artifacts
- premium/entitlement data, if introduced
- narrative content and unreleased assets
- backups
- monitoring and administrative credentials

### Highest-impact compromise

The most dangerous scenario is not simply a hacked player account. It is **loss of the source of truth or production signing/recovery capability**.

Therefore source control, secrets, signing credentials, and backups receive separate protection boundaries.

---

## 4. GitHub Security Architecture

The repository is the canonical production source of truth.

### Required controls

- private repository for proprietary production code where appropriate
- protected default branch
- pull-request workflow for production changes
- required status checks
- review requirements for security-sensitive changes
- least-privilege repository permissions
- no shared developer accounts
- MFA/strong account protection for maintainers
- secret scanning and push protection where available
- dependency and vulnerability monitoring
- CODEOWNERS for critical paths when the team structure is established
- signed commits or equivalent provenance controls where practical
- immutable release tags for production versions

### Protected paths

Additional review should apply to:

```text
.github/
TECHNICAL/
backend/
server/
infrastructure/
security configuration
CI/CD workflows
release configuration
Android signing configuration
```

### Never commit

```text
.env
.env.production
*.pem
*.key
*.p12
*.jks
service-account credentials
private certificates
production database URLs containing credentials
access tokens
refresh tokens
API secrets
```

Safe templates such as `.env.example` may document variable names without containing real values.

---

## 5. Secrets Management

Secrets must exist outside source code.

### Separation

Development, staging, and production must use different credentials.

A production credential must never be required for ordinary local development.

### Rotation

Credentials should have an intentional rotation strategy. If a secret is exposed:

1. revoke it;
2. issue a replacement;
3. update dependent services;
4. invalidate affected sessions where appropriate;
5. inspect logs for misuse;
6. remove the leaked value from future source history where necessary.

Deleting a secret from the latest commit does **not** make a previously exposed secret safe. Rotation is mandatory.

---

## 6. Identity, Authentication & Sessions

The authentication implementation may evolve with the selected production stack, but must follow these principles.

### Requirements

- secure password handling through a mature authentication provider/library
- MFA support for privileged accounts
- email/account verification where applicable
- login throttling and abuse detection
- secure session/token handling
- short-lived access tokens where token authentication is used
- refresh-token rotation and revocation
- session invalidation after high-risk events
- device/session visibility for account security where practical

### Administrative accounts

Administrative identities require stronger controls than ordinary player accounts.

Administrative actions must be authenticated, authorized, and auditable.

---

## 7. Authorization

Authorization is **server-side**.

Never rely on:

- hidden UI buttons
- client-side role flags
- local save files
- client-provided ownership claims
- client-provided progression values
- client-provided prices
- client-provided inventory counts

### Example

Unsafe:

```text
Client → “Give me item MEDKIT_05 because I own it.”
```

Safer model:

```text
Client → authenticated request
       ↓
Backend → verifies player identity
       ↓
Backend → checks authoritative inventory
       ↓
Backend → validates operation
       ↓
Database → transaction
       ↓
Backend → returns resulting state
```

---

## 8. Authoritative Game State

The following should be treated as authoritative server data when the feature requires persistence or protection:

- account identity
- progression
- chapter unlocks
- achievements
- inventory
- ownership
- currencies
- relationship state
- important choices
- world-state mutations
- settlement state
- persistent consequences
- multiplayer/online state, if introduced
- entitlements

The client can maintain a local cache for responsiveness, but the server remains authoritative for protected state.

---

## 9. Save-Game Security

RIDE OR DIE uses persistent narrative state, making save integrity especially important.

A save system should distinguish:

### Local cache

Fast, offline-friendly, potentially tamperable.

### Authoritative cloud/persistent state

Validated and protected by the backend.

### Recovery state

A recoverable version or snapshot that can be restored after corruption or destructive failure.

Important state transitions should be validated and, where practical, recorded as events rather than trusting arbitrary client-provided snapshots.

---

## 10. Game API Security

Every API endpoint must have a defined security classification.

| Class | Example | Protection |
|---|---|---|
| Public | health/version endpoint | minimal exposure, rate limit |
| Authenticated | player profile | authentication |
| Authorized | save/progression mutation | authentication + authorization |
| Privileged | moderation/admin | elevated role + audit |
| Internal | service-to-service | service identity + least privilege |

### API baseline

- TLS/HTTPS
- strict request validation
- schema validation
- bounded payload sizes
- rate limiting
- authentication where required
- authorization on every protected mutation
- safe error responses
- no secrets in responses
- structured logging
- abuse monitoring

---

## 11. Database Security

The database is not exposed directly to the game client.

### Principles

- private network access where supported
- application-specific database credentials
- least privilege
- separate migration/deployment credentials from runtime credentials
- encrypted connections
- encryption at rest where supported
- database auditing/logging where appropriate
- constraints and transactions for critical state changes
- regular backups

### Destructive operations

Administrative or migration operations capable of deleting large amounts of data require additional safeguards and should not be available through ordinary player-facing credentials.

---

## 12. Input Validation & Injection Defense

All externally supplied data is untrusted.

Validate at the API boundary and again at critical domain boundaries.

Protect against:

- SQL/NoSQL injection
- command injection
- path traversal
- unsafe deserialization
- malicious file uploads
- XSS in web-facing administration tools
- malformed JSON
- oversized payloads
- unexpected enum/state values

Use parameterized queries or mature ORM/database APIs rather than constructing queries from raw user input.

---

## 13. Rate Limiting & Abuse Prevention

Rate limits should exist for authentication, account recovery, expensive APIs, and other abuse-prone operations.

Examples:

- login attempts
- password reset requests
- verification messages
- save mutations
- inventory operations
- search/discovery endpoints
- telemetry submission
- administrative endpoints

Limits should account for legitimate mobile-network behavior without allowing trivial automated abuse.

---

## 14. Client Integrity & Anti-Tampering

Unity/mobile clients are inherently difficult to trust completely.

Defense-in-depth measures may include:

- signed application packages
- verified release artifacts
- integrity checks
- secure update mechanisms
- obfuscation where appropriate
- detection of obviously manipulated state
- server-side anomaly detection

These controls are supplementary.

**The backend must never assume that anti-tamper checks make the client trustworthy.**

---

## 15. Android Release Security

The production Android application must use a protected signing process.

### Signing-key rules

- signing keys are never committed to Git
- signing credentials are stored separately from source code
- access is restricted to release personnel/processes
- backups of signing material are encrypted and separately protected
- release builds are generated through a controlled process
- debug credentials are never used for production releases

Loss or theft of the production signing capability is treated as a critical incident.

---

## 16. CI/CD Security

CI/CD is a privileged production path.

### Pipeline principles

```text
Commit
  ↓
Automated checks
  ↓
Dependency/security checks
  ↓
Build
  ↓
Tests
  ↓
Review / approval
  ↓
Staging
  ↓
Production approval
  ↓
Release
```

CI jobs receive only the secrets required for the specific job.

A workflow must not automatically receive broad production credentials when it only needs to run tests.

Third-party actions should be pinned/reviewed where practical.

---

## 17. Dependency Security

The project will eventually contain Unity packages, C# dependencies, backend packages, build tools, and CI actions.

Security controls include:

- vulnerability scanning
- lockfiles/version pinning where supported
- timely patching
- review of abandoned/high-risk dependencies
- minimizing unnecessary dependencies
- removing unused packages

Dependency updates must be tested against gameplay and production builds.

---

## 18. Logging & Monitoring

Security events should be observable without collecting unnecessary personal information.

Useful events include:

- authentication failures
- unusual login patterns
- token/session anomalies
- authorization failures
- high-volume API requests
- administrative actions
- destructive operations
- deployment events
- database restoration events
- security configuration changes

Logs should avoid passwords, raw tokens, private keys, and unnecessary sensitive data.

---

## 19. Detection of Suspicious Game State

Because RIDE OR DIE contains persistent progression, the backend can detect impossible or highly suspicious transitions.

Examples:

- impossible inventory quantities
- impossible progression jumps
- impossible resource changes
- abnormal request frequency
- contradictory world-state transitions
- repeated failed authorization attempts

Detection should generally produce an investigation signal rather than blindly punishing legitimate players. Mobile connectivity and retries can produce unusual but legitimate behavior.

---

## 20. Backup Architecture

Backups must not depend exclusively on the production application environment.

### Target model

```text
Production Database
       │
       ├── Automated backup
       │
       ├── Point-in-time recovery
       │
       └── Separate backup storage
                    │
                    └── Restricted credentials
```

Critical source and release artifacts should also have recoverable copies outside a single developer machine.

### Backup requirements

- encryption
- access control
- retention policy
- automated creation
- monitoring for failed backups
- restoration testing

---

## 21. Disaster Recovery

The recovery objective is not merely “restart the server.”

RIDE OR DIE must be recoverable after:

- accidental deletion
- compromised production account
- database corruption
- destructive deployment
- leaked credentials
- infrastructure failure
- lost development machine
- repository damage
- signing-key incident

### Recovery hierarchy

**Level 1 — Application failure**

Roll back to a known-good release.

**Level 2 — Database corruption**

Restore from the most appropriate verified snapshot/point-in-time backup.

**Level 3 — Credential compromise**

Revoke and rotate credentials, invalidate affected sessions, investigate logs.

**Level 4 — Repository compromise**

Lock down repository access, inspect history, revoke secrets, recover trusted source state.

**Level 5 — Catastrophic production loss**

Rebuild infrastructure from version-controlled configuration and restore authoritative data from protected backups.

---

## 22. Recovery Testing

A backup is not considered reliable until restoration has been tested.

The project should periodically perform a controlled recovery exercise covering:

1. obtain trusted source;
2. provision clean infrastructure;
3. restore database;
4. restore required configuration/secrets through approved channels;
5. deploy a known-good build;
6. verify authentication;
7. verify save/progression integrity;
8. verify critical game services;
9. document recovery time and failures.

---

## 23. Privacy by Design

Collect only data required for the game and its services.

Separate gameplay telemetry from account identity where practical.

Avoid storing sensitive information merely because the system technically can.

Retention periods should be defined for operational and legal requirements once the final production jurisdictions and services are established.

---

## 24. Security Testing Roadmap

Security testing will expand as implementation progresses.

### Phase A — Foundation

- repository secret checks
- dependency scanning
- secure environment configuration
- authentication tests
- authorization tests
- API validation tests

### Phase B — Backend

- endpoint abuse tests
- rate-limit tests
- injection testing
- access-control testing
- session/token testing
- database permission review

### Phase C — Game client

- client tampering assessment
- save manipulation testing
- packet/request manipulation testing
- offline/online state reconciliation tests
- integrity checks

### Phase D — Production

- deployment security review
- release-signing review
- disaster-recovery drill
- external penetration testing when production scope warrants it

---

## 25. Security Severity Model

| Severity | Meaning | Example |
|---|---|---|
| Critical | Project/player compromise or catastrophic loss | production signing-key theft, unrestricted admin access |
| High | Major unauthorized access or data/state manipulation | privilege escalation, database-wide access |
| Medium | Significant but contained weakness | missing authorization on a non-critical endpoint |
| Low | Limited impact | minor information disclosure |

Critical and high-severity issues block production release until addressed or formally accepted with documented mitigation.

---

## 26. Incident Response Runbook

### Suspected leaked secret

1. Stop using the credential.
2. Revoke it.
3. Issue a replacement.
4. Update dependent systems.
5. Inspect logs.
6. Review repository history and CI logs.
7. Document the incident.

### Suspected unauthorized repository change

1. Freeze affected deployment paths.
2. Identify unauthorized commits/actions.
3. Review repository audit information.
4. Revoke compromised credentials.
5. Compare against the last trusted revision.
6. Restore from trusted source if necessary.
7. Rotate any potentially exposed secrets.

### Suspected database compromise

1. Restrict affected credentials.
2. Preserve logs.
3. Determine affected tables/data.
4. Rotate credentials.
5. Validate database integrity.
6. Restore from a verified recovery point if required.
7. Investigate root cause.

### Suspected compromised release

1. Stop distribution/deployment.
2. Identify affected version.
3. Preserve evidence.
4. Revoke compromised release credentials if necessary.
5. Build from a trusted commit.
6. Validate the new release.
7. Publish corrective release through the controlled pipeline.

---

## 27. Security Architecture Rules for Future Features

Every major new feature must answer these questions before production implementation:

1. What data does it create?
2. Who can read it?
3. Who can modify it?
4. What is authoritative—the client or server?
5. What happens if the client lies?
6. What secrets does it require?
7. What happens if its service is compromised?
8. How is suspicious activity detected?
9. How is the data backed up?
10. How is the feature recovered after failure?

If these questions cannot be answered, the feature is not security-complete.

---

## 28. Architecture Principle

The definitive RIDE OR DIE security principle is:

> **Compromise one layer without losing the whole game.**

The game should remain recoverable even when individual accounts, devices, deployments, services, or data stores fail.

Security is therefore designed as a chain of independent protections:

```text
Identity
  +
Authorization
  +
Validation
  +
Isolation
  +
Monitoring
  +
Source Integrity
  +
Build Integrity
  +
Backup
  +
Disaster Recovery
  =
Resilient RIDE OR DIE
```

---

## 29. Implementation Status

This document defines the target architecture and security baseline. It does **not** claim that every listed control has already been implemented.

Controls become “implemented” only after the relevant production code, infrastructure configuration, tests, and operational procedures exist and have been verified.

### Current production direction

- **Engine:** Unity + C#
- **Source control:** GitHub
- **Target platform:** Android
- **Prototype:** Hatchable/web experimentation layer
- **Persistent game:** backend + database architecture to be implemented as production development proceeds

The security architecture must evolve alongside the frontend, backend, persistence, deployment, and game systems rather than being postponed until launch.
