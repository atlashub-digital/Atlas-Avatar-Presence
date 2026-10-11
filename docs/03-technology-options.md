# AAP-STACK-001 · Technical choices, research options and tradeoffs

**Status:** proposed pending POC, license and actual Windows measurement.

| Layer | First trial | Product candidate | Notes |
| --- | --- | --- | --- |
| Windows presence / transparent overlay | [ARPA AVATAR](https://github.com/ARPAHLS/avatar) in sandbox | Electron or Tauri own host | ARPA offers VRM + VRMA + desktop overlay and local control bus, but needs audit |
| VRM renderer | Reuse ARPA if compatible | [Three.js](https://github.com/mrdoob/three.js) + [pixiv/three-vrm](https://github.com/pixiv/three-vrm) | Independent long-term stack |
| Character generation | Licensed trial model | VRoid Studio → VRM 1.0 or licensed professionally rigged model | Portrait photo alone is **not** rigged |
| Intelligence and memory | Existing Hermes | Hermes + alternate adapters | Do not fork existing user agents |
| Audio | Hermes default | Hermes voice / TTS with optional approved external adapters | Ownership contract prevents duplicates |
| Event/orchestration | Local JS state machine | TypeScript package and authenticated event bridge | Code in this repo |
| Knowledge | Not used for presence POC | AKH through agent | Never renderer-to-database |
| Device action | Not used for presence POC | ADB consent-gated | No privileged API on UI |
| Advanced realtime streaming | Not required | LiveKit optionally | Adds complexity/infra and costs |
| Mobile/TV | research only | controlled native/web app | No universal cross-app overlay |

## Alternative architecture comparison
1. **ARPA integration** (MVP speed). Keep ARPA separate, talk to its local bus if version and authentication permit. No code copying until license audit. Test Windows system audio vs direct audio.
2. **Own Three.js/VRM Renderer** (portability). More engineering, better branded character/voice control and web embed. Good if ARPA exposes unacceptable coupling/licensing/support.
3. **Open-LLM-VTuber** (reference). Rich integrated experience but duplicates Hermes voice/agent stack and may impose separate commercial terms.
4. **AILIS** (reference). Agent+avatar integration ideas, but inspect code/security/license before reuse.
5. **2D / Live2D**. Better fidelity to existing 2D profile artwork; commercial SDK/licensing can be separate.
6. **Photorealistic digital human**. Defer until persona economics and realism justified; GPU/model rights and latency burdens.

## Gates
Licenses of application AND bundled avatar AND animations AND voice; Linux/macOS availability; on-device CPU/GPU; audio stream routing, local control bus auth; accessibility; update integrity; code maintenance status.

Never assert an external repo is a supported production integration merely by linking to it.
