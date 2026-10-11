# AAP-CONTRACT-001 · Standard event and adapter contracts

**Status:** JSON Schema references IMPLEMENTED, production network mapping PROPOSED.

Files: [avatar-event](../contracts/avatar-event.schema.json), [agent-profile](../contracts/agent-profile.schema.json), [audio-session](../contracts/audio-session.schema.json), [character-manifest](../contracts/character-manifest.schema.json).

## Events
```json
{
  "schema_version":"1.0",
  "event_id":"demo-0001",
  "session_ref":"local-demo",
  "event_type":"avatar.state",
  "state":"speaking",
  "origin":"agent_adapter",
  "occurred_at":"2026-10-10T12:00:00Z"
}
```
States: `idle`, `listening`, `thinking`, `speaking`, `paused`, `error`.

## One owner per modality
```json
{
  "schema_version":"1.0",
  "session_ref":"local-demo",
  "input_owner":"hermes",
  "output_owner":"hermes",
  "lip_sync_source":"agent_audio_stream",
  "output_device":"system_default",
  "allow_second_tts":false
}
```

## Ports
- `AgentAdapter.sendTurn({sessionRef,text,signal}) → Promise<{text,audioRef?,events?}>`
- `VoiceAdapter.speak(text,{sessionRef}) → Promise<void>` only in `output_owner=external`.
- `PresenceRenderer.setState(state) / renderText(text)`; can be no-op when headless.
- `BridgeAdapter.invoke` defined in ADB repository, not implemented here.

## Contract migrations
Keep `schema_version` and backwards-compatible changes within major version; use ADR for changed contract. Renderer must ignore unknown allowed states safely, not execute arbitrary event-derived scripts. State transitions are driven from trusted input and user consent.
