# Contributing and architecture governance

This is a public study and prototype repository. Read [AGENTS.md](AGENTS.md) before coding, follow [the ADR process](docs/13-architecture-decisions.md), and do not imply a reviewed design is deployed.

Use issues to identify a single work-order ID. Each change requires tests (including denial cases), updated docs, version/CHANGELOG where appropriate, and evidence. Avoid introducing provider dependencies until actual deployment and version licenses have been audited.

## Local
```bash
node --version
npm test
npm run check:docs
npm run demo
```

No dependencies need installing for the current baseline.

## Security
No private data, real personal character artwork, impersonated voices, API keys, inaccessible Drive URLs, internal endpoints or screenshots of customers in this public repo. Use a private asset vault and store approved hashes/manifest references only.
