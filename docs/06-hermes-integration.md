# AAP-HERMES-001 · Integrating an existing Hermes agent without creating another Helena

**Status:** design + injectable adapter code; **no live gateway/auth configured**.

## Mandatory discovery before coding
1. Identify actual Hermes version/commit and whether the Helena agent is a profile/session in that runtime.
2. Verify documented authenticated gateway/API routes and transport (REST/WebSocket, supported remote desktop pairing).
3. Verify conversation profile/agent identity, session reuse, tool approvals, voice config and cost/latency.
4. Verify where STT/TTS runs: client direct vs gateway relay; audio output ownership must not duplicate.
5. Use private network/TLS or approved authenticated channel. No raw service tokens stored in renderer.

## Integration options
**A. Use Hermes Desktop as the conversation/voice front end, AAP visualizes events**. Best for quickest safe POC if events/audio can be integrated or observed via supported hooks. Avatar may initially lip-sync from Hermes audio output in a user-controlled local setup, but avoid global audio as permanent product design.

**B. Small authenticated Hermes session bridge**. AAP submits text/transcripts to a narrowly scoped local service tied to Hermes profile and receives typed text/stream/audio events. Recommended for commercial desktop UX once Hermes API revision pinned.

**C. Hermes tool/skill sends avatar animation commands**. Hermes agent can call an approved AAP capability (gesture/state) to enhance expressions; scripts must not become a remote shell. AAP renderer decides capability limits.

## Adapter code contract
[`src/adapters/hermes.mjs`](../src/adapters/hermes.mjs) accepts injected `sendTurn`, rather than inventing a remote Hermes endpoint:
```js
const hermes = createHermesAdapter({
  sendTurn: ({sessionRef, text, signal}) => trustedHermesTransport.send({sessionRef,text,signal})
});
```

Do **not** paste real user credentials into the public repository; `trustedHermesTransport` is a placeholder until verified API documentation and security review.

## Validation script
Use a synthetic first prompt; check response correctly follows existing Helena persona/profile, persistence of selected session **without publishing memory contents**, response audio owned by Hermes, cancellation and denial path. Verify the agent never appears connected if actually a local mock.

## Version pinning
Record pinned Hermes commit/tag, voice config parameters supported at that revision, conversation transport, auth mechanism and streaming semantics in future `integrations/hermes/COMPATIBILITY.md`. Do not merge inference about newer upstream API as certainty.
