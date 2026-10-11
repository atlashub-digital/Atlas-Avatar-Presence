# ADR-0004 · Never privilege avatar renderer

- Date: 2026-10-10
- Status: **PROPOSED**.
- Context: desktop context/screen/audio and private enterprise KB are sensitive.
- Proposal: all device actions route via ADB; all knowledge comes through authorized agent/AKH; renderer only consumes presentation data.
- Alternatives: direct OS/UI automation inside AAP; client-side raw DB/GDrive integrations; OpenClaw system-run directly callable by renderer.
- Risks: extra network round-trip, dependency on approved policy gate.
- Acceptance: deny-until-consent, wrong tenant/session rejects, renderer cannot hold admin tokens.
