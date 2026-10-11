# AAP-CODEX-001 · Implementer work orders (development-ready)

**All below are proposed, not assigned or already built.** Each order has inputs, deliverables, deny-cases and pass gate. Implement sequentially; integrate with existing private infrastructure only after authorization and pinned compatibility.

## W00 — Foundation (completed in this repo)
- README, AGENTS, architecture, alternatives, ADRs, event/state/audio/character schemas, fake provider contracts, offline browser demo and CI.
- Deliverable: `npm test && npm run check:docs && npm run demo`.

## W01 — ARPA Windows overlay experiment
- Inspect pinned version of [ARPAHLS/avatar](https://github.com/ARPAHLS/avatar), electron architecture, MCP/loopback bus, installer signing, licenses of bundled models/motions, and safe local API.
- Implement *isolated* AAP-to-ARPA adapter scoped to `setState` / `playAnimation` / `setAvatar` in a sandbox machine. **No real credentials or client data**.
- Pass: approved test VRM in transparent topmost window, hide/pause, no unintended audio/microphone capture and controlled local API exposure.
- Alternative decision: native Three.js + VRM in own Electron if upstream limits unacceptable.

## W02 — Hermes presence integration
- Confirm the actual installed Hermes git revision/endpoint/profile of Helena with infrastructure owner.
- Design signed local proxy/scope with session reuse and redacted logs; implement typed `sendTurn` transport and wire state events.
- Hermes **remains** TTS/STT owner when voice mode selected. No TTS call by AAP in this mode.
- Pass: read actual agent response and profile identity with no second agent created; deny unauthorized session; disconnect/failure no leaks.

## W03 — Agent audio and lip sync
- Connect agent playback stream or approved local PCM level events; implement amplitude mouth movement; later visemes if provider supplies timings.
- Pass: lip movement matches **Helena's actual voice stream** only, not whole system audio; interruption stops animation; latency measured.
- Compare current Hermes Desktop client-direct vs relay before writing voice stack.

## W04 — Character package
- Approve a licensed POC VRM. Create manifest/hashes, rights registry, reduced-motion/size config and brand style. Prepare Helena likeness adaptation in controlled Drive (not public repo).
- Pass: no bundled unlicensed avatars; changes versioned and reversible.

## W05 — Device Bridge (only after W01-W04)
- Implement optional ADB approval prompts in avatar UI, display pending/approved/denied state, integrate consent tool via Bridge service contract. **Never direct arbitrary clicks from renderer**.
- Pass: denial, revoke, stop, wrong device and wrong tenant must fail closed.

## W06 — Other agents, web, LIA
- Profile and character binding resolved per authorized deployment; reuse same engine for LIA and expert roles. Web Canvas/VRM renderer as separate adapter.
- Pass: persona, memories and knowledge do not transfer across customer/venture boundaries.

## W07 — Teacher/TV/mobile feasibility (separate decision)
- Own-app only, guardian/age protections, permitted media, no assumptions of third-party app control. No general rollout until separate OS testing.

## For every work order
Document exact upstream commit/release, API contract with sample payloads **without secrets**, command to run, local telemetry, accepted limitations, negative tests, rollback and reviewer. Treat inaccessible runtime or missing connector as blocker, not implicit success.

## Ready-to-assign engineering kickoff
> You are Engineering Lead for Atlas Avatar Presence. Read AGENTS.md and docs/INDEX.md. Deliver W01 in a Windows sandbox; do not touch AtlasHub production VPS, Hermes secrets or customer sources. Verify licensing and local ARPA bus safety, produce a runnable overlay with licensed test model, add tested adapter, install/uninstall guide, hardware metrics and ADR update. Preserve Hermes ownership of voice and maintain mock fallback; do not claim W02 is complete until existing Helena session connection is verified.
