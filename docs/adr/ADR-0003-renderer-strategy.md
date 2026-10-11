# ADR-0003 · ARPA for POC, portable rendering contract

- Date: 2026-10-10
- Status: **PROPOSED**.
- Context: fastest path to Windows overlay is existing ARPA AVATAR with VRM/VRMA, audio and local control bus.
- Proposal: evaluate an adapter to ARPA in isolated Windows POC; preserve ability to replace with Three.js/three-vrm own Electron host.
- Alternatives: own renderer first, Live2D only, heavy photorealistic UE/MetaHuman pipeline.
- Risks: upstream/bundled licensing, installer trust, local IPC API compatibility, whole-device audio false lip-sync.
- Acceptance: licensed test model, controlled local bus, pause/hide, benchmark, no unwanted capture.
