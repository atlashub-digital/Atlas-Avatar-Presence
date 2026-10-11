# Document index · AAP v0.1.0

## Strategic
1. [Vision, use cases, non-goals](01-vision-and-boundaries.md)
2. [Architecture / components](02-architecture.md)
3. [Technology options and alternatives](03-technology-options.md)
4. [Costs / infrastructure](11-cost-and-performance.md)
5. [Phases and handoffs](14-codex-work-orders.md)

## Engineering
1. [Typed data contracts](04-contracts.md)
2. [Voice ownership and audio architecture](05-audio-and-voice.md)
3. [Hermes integration strategy](06-hermes-integration.md)
4. [OpenClaw, other agents and runtime adapters](07-openclaw-and-other-runtimes.md)
5. [Device Bridge and Knowledge Hub boundaries](08-device-bridge-and-knowledge.md)
6. [Character pipeline and rights](09-character-system.md)
7. [Desktop/Web/Mobile/TV feasibility](10-platforms.md)

## Quality
1. [Consent, privacy and safety](12-security-and-consent.md)
2. [Decision log and ADRs](13-architecture-decisions.md)
3. [QA, benchmarks and acceptance](15-acceptance-and-quality.md)
4. [Asset licenses](16-licensing-and-assets.md)
5. [References](references.md)
6. [Dated research record](analysis-log.md)
7. [CHANGELOG](../CHANGELOG.md)

## Implemented references
- [app/browser demo](../apps/web-demo/index.html)
- [state transitions](../src/core/state.mjs)
- [conversation orchestration](../src/core/session.mjs)
- [Hermes provider adapter](../src/adapters/hermes.mjs)
- [OpenClaw provider adapter](../src/adapters/openclaw.mjs)
- [character manifest](../contracts/character-manifest.schema.json)
- [avatar events](../contracts/avatar-event.schema.json)
- [voice ownership](../contracts/audio-session.schema.json)
- [architecture SVG](../assets/architecture.svg)

Search tags: `avatar` `Hermes` `OpenClaw` `VRM` `ARPA` `Electron` `3D` `audio-ownership` `STT` `TTS` `lip-sync` `consent` `Helena` `LIA` `teacher` `AI-WaaS`.

**Status:** PROPOSED vs IMPLEMENTED vs VERIFIED vs DEPLOYED must not be conflated.
