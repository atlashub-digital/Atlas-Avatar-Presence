# Changelog — Atlas Avatar Presence

## [0.1.0] — 2026-10-10 — Architecture and executable reference foundation

### Research and documentation
- Standalone project documented within AtlasHub AI Workforce ecosystem, distinct from Device Bridge and Knowledge Hub.
- Canonical audio ownership strategy prioritizes existing Hermes; other providers and OpenClaw are optional adapters.
- Detailed platform, budget, character, consent, rollout, IP/license and acceptance documents.
- Verifiable external and internal repository reference map; proposed ADRs, diagram, implementation work orders.

### Runnable reference code
- Zero-dependency Node 20+ session state machine, provider/voice contracts and policy guards.
- Mock conversation and pluggable Hermes/OpenClaw transport adapters — **no network integration**.
- Offline 2D avatar demo (not a VRM, not a desktop overlay).
- Tests for state transitions, audio ownership, denied capture, mock dialogue, invalid providers and adapter paths.
- CI / documentation link validation / synthetically generated character fixtures.

### Remaining
- Native Windows/Electron build, 3D asset, ARPA integration, voice STT/TTS link, hardware benchmark, Hermes auth, real-session persistence and production safety audit.
