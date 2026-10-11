# AGENTS.md — Atlas Avatar Presence · contributor and Codex operating contract

## Mission and non-negotiables

Build a visible agent presence, not a new LLM, not a fork of Hermes, and not a remote control product. Hermes must **remain an optional single source of truth for both intelligence AND audio** (STT/TTS). Alternate providers may plug in through contracts, including OpenClaw, but never silently replace the currently selected agent or regenerate audio already produced by Hermes.

**Before work:** README → docs/INDEX.md → docs/02-architecture.md → docs/04-contracts.md → docs/05-audio-and-voice.md → docs/12-security-and-consent.md → docs/14-codex-work-orders.md. Review relevant ADRs, then code/tests.

## Truth/status labels

- OBSERVED: read in named source, may be newer or obsolete after date.
- PROPOSED: design, requires decision.
- IMPLEMENTED: code present.
- VERIFIED: CI or real-device measured results with evidence.
- DEPLOYED: infrastructure/application live with operations evidence.

Never describe `createHermesAdapter` as an authenticated deployed integration: it is a transport-injected adapter requiring an integration implementation and security review.

## Architecture invariants

1. Renderer has no LLM keys, tenant DB credentials, source OAuth grants or privileged OS access.
2. Agent API, audio I/O, renderer and device capabilities are replaceable but boundaries are typed.
3. **One audio owner per session/utterance.** If Hermes handles TTS, AAP cannot synthesize again; lip sync observes/rendered audio, not a second API call.
4. Actor and tenant identity are verified at server/bridge, not trusted from renderer events.
5. Knowledge is accessed through authorized agent tools and [AKH](https://github.com/atlashub-digital/Atlas-Knowledge-Hub). PC actions use [ADB](https://github.com/atlashub-digital/Atlas-Device-Bridge) only.
6. Avatar characters/models/voices need explicit per-asset licenses, provenance and rights; avoid shipping third-party bundled VRM models from ARPA.
7. Audio, screen or camera capture always visible and opt-in; no passive background surveillance, no keylogging, no stealth.
8. No independent new corporate unit; AtlasHub shared component for AI Workforce, LIA, teacher etc, with separated identity/tenancy.

## Definition of done for engineering changes

- Update contract schemas and JSDoc types as appropriate, ADR if architecture changed.
- Tests include negative cases (no double-TTS, invalid transitions, unauthorized capture/actions, replay/session mismatch, declined handoff).
- Keep mock browser demo functional and without network requests unless feature specifically calls for connectivity and requests user authorization.
- Update docs/analysis-log.md and CHANGELOG.md.
- Run `npm test && npm run check:docs && npm run demo`; CI must pass.
- Never introduce tokens, private media, hostnames, tenant IDs, credentials or live recordings to the public repo.
- Open a scoped issue/PR for features after initial bootstrap; use versioned evidence.

## Task ordering

1. W01 ARPA overlay POC and third-party license audit.
2. W02 Hermes auth/session/audio integration **against actual pinned Hermes revision**, with graceful mock fallback.
3. W03 Sync gestures/voice and test one-source-of-truth audio.
4. W04 character packaging and Helena likeness approval.
5. W05 later optional Bridge integration; mobile/TV out of MVP.

See [Codex work orders](docs/14-codex-work-orders.md) for exact tasks and acceptance.
