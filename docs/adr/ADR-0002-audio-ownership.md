# ADR-0002 · Single audio authority, Hermes preferred

- Date: 2026-10-10
- Status: **PROPOSED**.
- Context: Hermes may already perform STT and TTS. AAP must not double synthesize and charge for speech.
- Proposal: per session `input_owner` and `output_owner`, default `hermes`. AAP renderer consumes authorized audio events/levels only. External TTS selected **only** when explicitly authorized and Hermes audio disabled.
- Alternatives: always synthesize inside AAP; regenerate external TTS from Hermes text; global system-output loopback permanently.
- Risks: remote Hermes may not expose audio timeline easily; version-specific client voice semantics; require proper stream hook.
- Acceptance: one TTS source, no duplicated playback, cancellation stops mouth, no unsolicited mic.
