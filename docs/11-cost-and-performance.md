# AAP-COST-001 · Low-cost pilot architecture and measurement

**Stage:** budgeting assumptions, not observed spend or price guarantee. Excludes engineering time, Hermes existing token use and customer's hardware.

## Pilot cost target
- Offline browser prototype: $0 in new service fees.
- Windows trial with ARPA and licensed free-to-use test VRM: potentially $0 incremental **software** cost (must check model/motion rights and environment).
- Existing Hermes STT/TTS: reuse current provider and usage; Edge TTS and local Whisper can avoid per-call vendor bills, but run on local CPU and may have operational limits.
- *Optional* paid voice upgrades: budget separately if default voice quality inadequate. No paid voice subscription prerequisite.
- Target cap for optional new variable service cost for **one internal test**: **$15 USD** (proposed ceiling; adjust only with approval). Not a total project cost or commercial price.

## Infrastructure
| Resource | First pilot | Notes |
| --- | --- | --- |
| Windows test machine | existing PC, ideally 16GB RAM, hardware accelerated graphics | measure actual GPU/RAM; no fixed min claim for ARPA |
| Existing Hermes instance | preserve | test remote authenticated gateway/profile identity/version |
| Renderer | local Electron ARPA or browser | no new GPU VPS needed for basic animation |
| STT/TTS | Hermes default | local resources or existing provider charges |
| New VPS/database | none necessary | future multi-tenant auth relay may require infra |
| Storage | character manifest in Git; licensed assets in controlled Drive | no public customer portraits |
| Telemetry | local redacted debug initially | no unsolicited recordings |

## Experiment plan
P50/P95 "utterance finished → agent response starts" and "response ready → audible speech starts"; animation frame rate on representative hardware; CPU/RAM/GPU peak, restarts, network recovery, permission deny; lip-sync divergence, cost per 100 turns and 30-minute usability session.

## Engineering acceptance targets (unmeasured)
- Manual first-run under explicit consent.
- Stable 30-minute internal session and immediate pause/hide.
- No second TTS/agent call for a single reply when Hermes owns voice.
- No camera/screen access in basic presence mode.
- Natural PT-PT/PT-BR voice subjectively approved, captions accessible.
- Set P95 audio/LLM latency targets **after** one measured baseline; avoid publishing arbitrary promises.

## Cost alternatives
AVATAR for trial minimizes window/rendering work but requires integration feasibility; own Three.js/VRM increases engineering cost but reduces external coupling; multi-tenant hosted speech increases recurring costs. Calculate costs from actual calls/provider invoices, not from generic "free AI" claims.
