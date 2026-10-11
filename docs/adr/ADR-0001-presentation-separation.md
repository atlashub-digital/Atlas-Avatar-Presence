# ADR-0001 · Separate avatar presentation from agent intelligence

- Date: 2026-10-10
- Status: **PROPOSED**.
- Context: Helena, LIA, Teacher and Atlas Experts are different agents but need one reusable embodiment/UI.
- Proposal: AAP owns only visual/voice UI and event orchestration; existing AI Workforce/Hermes remains brain/role/memory owner. Access KB through AKH and devices through ADB.
- Alternatives: build a monolith agent+voice+renderer; embed prompts and customer memory per character; run separate LLM inside desktop.
- Benefits: less duplicate cost, consistent persona/privacy boundaries and reusable renderer.
- Risks: adapter complexity, cross-service latency; require stable versioned events.
- Acceptance: identity binding validated, no extra agent created, consumer isolation tests.
