# AAP-SEC-001 · Threat model and permissions

**Stage:** proposed product controls; browser demo intentionally has zero privileged capabilities.

## Key threats
Agent/tenant impersonation, silent activation of mic/screen, cloned human voice/likeness without permission, provider API-key leakage, accidental TTS of sensitive records via speakers, malicious third-party VRM animations/plugins, cross-domain data exfiltration and avatar overlay deception (clickjacking), remote control privilege bypass.

## Policies
1. **Visible activation:** no always-on mic by default, no hidden camera/screen. UI clearly indicates listening, speaking, paused; pause button always effective.
2. **Minimal auth:** independently verify agent/deployment and session; do not trust renderer client-selected identity. Every provider transport must authenticate and authorize.
3. **One voice owner:** Hermes or explicitly chosen provider per session; no double TTS or unconscious export of user transcript to another provider.
4. **No direct device actions:** only ADB controls device pairing/permissions/approvals.
5. **Do not embed secrets** in browser JS/renderer, VRM manifest, public Git or log files.
6. **Media rights:** character and voice rights documented per asset, approval required before publishing a likeness or cloned voice.
7. **Minimal retention:** no raw audio, transcripts, screenshot or face tracking stored in demo; for product need retention purpose/legal basis/erasure.
8. **Accessibility:** a screen overlay must not block important UI, emergency stop/hide and reduced-motion alternative.
9. **Minors/health:** age-aware guardian consent and education safety, patient/health privacy, no diagnosis or therapy claims.
10. **Secure updates:** pinned dependency and installer integrity, sandbox first, vulnerability review.

## Public Git safety
No Helena's real recordings, AI Workforce client IDs, internal VPS IPs, passwords, personal photos, authenticated connector URLs or private transcripts in this repository.

## Needed before Windows real pilot
Assess ARPA binary signing and dependency provenance, scan installer/dependencies, verify local bus is bound loopback with auth and disabled by default, audio capture consent, measure clipboard/camera access, create uninstall procedure.
