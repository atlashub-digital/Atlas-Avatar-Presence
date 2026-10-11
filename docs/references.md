# AAP-REF-001 · Repositories and docs to evaluate

**Reference date: 2026-10-10.** This is a curated study list, not code vendored or production-tested. Check release, license, provenance and APIs against pinned revisions before reuse.

## AtlasHub integration map
| Repo | Purpose |
| --- | --- |
| [Atlas-Avatar-Presence](https://github.com/atlashub-digital/Atlas-Avatar-Presence) | this presentation engine |
| [Atlas-Device-Bridge](https://github.com/atlashub-digital/Atlas-Device-Bridge) | device observation/action and permissions |
| [Atlas-Knowledge-Hub](https://github.com/atlashub-digital/Atlas-Knowledge-Hub) | knowledge source governance/retrieval |
| [AtlasHub-AI-WaaS](https://github.com/atlashub-digital/AtlasHub-AI-WaaS) | AI Workforce control plane |
| [atlas-agent-packs](https://github.com/atlashub-digital/atlas-agent-packs) | versioned expert roles and guardrails |
| [atlas-internal-factory](https://github.com/atlashub-digital/atlas-internal-factory) | AMF editorial/production operations (independent) |

## External — primary
| Repo / documentation | Relevance and limitation |
| --- | --- |
| [ARPAHLS/avatar](https://github.com/ARPAHLS/avatar) | VRM transparent desktop avatar, VRMA motions, system audio lip sync and localhost control bus; **first Windows experiment** |
| [ARPA desktop guide](https://github.com/ARPAHLS/avatar/blob/main/docs/using-the-app.md) | runtime/installation mechanics and audio setup |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | existing agent intelligence, profile/session/memory and voice |
| [Hermes voice mode](https://hermes-agent.nousresearch.com/docs/user-guide/features/voice-mode) | official STT/TTS, client-direct vs relay modes |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | optional conversational agent or ADB device-node adapter |
| [OpenClaw computer use](https://github.com/openclaw/openclaw/blob/main/docs/nodes/computer-use.md) | device capability contracts, not avatar renderer |
| [pixiv/three-vrm](https://github.com/pixiv/three-vrm) | renderer fallback/portable VRM runtime |
| [mrdoob/three.js](https://github.com/mrdoob/three.js) | real-time WebGL 3D |
| [electron/electron](https://github.com/electron/electron) | transparent always-on-top desktop window host |
| [livekit/agents](https://github.com/livekit/agents) | optional scalable realtime voice agent orchestration; no need in MVP |
| [microsoft/playwright](https://github.com/microsoft/playwright) | sandbox web automation via **ADB**, not direct renderer |
| [Open-LLM-VTuber](https://github.com/Open-LLM-VTuber/Open-LLM-VTuber) | alternative rich desktop live2D voice/avatar architecture; audit commercial licensing |
| [haowenGuo/AILIS](https://github.com/haowenGuo/AILIS) | community avatar/assistant reference; audit security and maintenance |
| [VRoid Studio](https://vroid.com/en/studio) | character generation and VRM export terms |
| [Live2D](https://www.live2d.com/en/) | alternative 2D rig pipeline, commercial terms apply |
| [OpenXR](https://github.com/KhronosGroup/OpenXR-SDK) | **future only**, not needed for desktop 2D/VRM POC |

## Important note
An earlier informal mention of "YUI" had an unverified repository URL; omitted to avoid supplying a broken/non-vetted link. Reassess only with verified source and license.
