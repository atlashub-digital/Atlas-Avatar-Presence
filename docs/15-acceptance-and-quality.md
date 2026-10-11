# AAP-QA-001 · Acceptance and CI strategy

## Executable in repository v0.1.0
Node native test suite includes:
- Valid and forbidden state transitions.
- Mock agent conversation and safe presentation.
- Runtime adapter rejects missing transport.
- Hermes-owned voice never invokes optional external TTS.
- External voice path invokes exactly one adapter.
- Browser app is **offline** and never records microphones or accesses devices.

## To prove in Windows POC
| Test | Evidence | Release gate |
| --- | --- | --- |
| Overlay remains visible but does not block workflow | consenting user captures sandbox video | effective hide, click-through where supported |
| License for demo avatar/motions | recorded upstream/license/author and rights | no unlicensed asset used |
| Existing Helena Hermes identity preserved | verified profile ref and non-sensitive question | no second accidental persona |
| Voice ownership | trace one reply → one TTS path | 0 duplicate TTS |
| Mic/capture | OS prompt and visible UI | deny until explicit opt-in |
| Resource | CPU/GPU/RAM/FPS logs on named hardware | measured target approved by product |
| Failure | network disconnect, revoke, agent error | returns idle/paused, no uncontrolled capture |
| Costs | usage/voice provider billing | approved pilot budget |
| Packaging | trusted installer/source audit, uninstall | documented reproducible procedure |

## Tenant and regulated negative tests before product
No Helena corporate memory in LIA sessions; no client A content/voice on client B; patient data not recorded by renderer; child sessions opt-in guardian controls; no unauthorized ADB actions.

## CI
GitHub workflow runs tests, docs link checks and demo. CI can verify contracts / mocks, **not Windows device quality or actual Hermes credentials**.
