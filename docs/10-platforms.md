# AAP-PLATFORM-001 · Rollout by platform

**Stage:** POC plans, not shipping applications.

| Platform | Proposed approach | MVP? | Limits |
| --- | --- | --- | --- |
| Windows x64 | ARPA/Electron overlay, local rendered VRM, pinned Hermes auth | **Yes** | install trust, signed releases, audio capture scopes |
| macOS | native/Electron app overlay, Accessibility & TCC only if ADB opted in | Later | OS permission, packaging and sandbox |
| Linux | own Web/Electron window | Later | Wayland overlay/compositor limitations |
| Browser/Workspace | three-vrm with canvas and explicit audio permissions | Prototype now as synthetic 2D; VRM later | no true desktop overlay outside own browser |
| Android app | in-app canvas/render, local mic permission | Later | background, accessibility and store policies |
| iOS app | in-app character, AVAudio and App Intents for own actions | Later | no generic other-app overlay/control |
| Android/Google TV | controlled own-app player + tutor avatar + media | Later | don't promise third-party YouTube/native apps |
| HDMI/kiosk | managed companion mini-PC/browser app | Study | hardware logistics and lifecycle |

**Stage 0 browser demo** can be opened from disk and run offline; it does not request mic permissions or call hosted AI. **Stage 1 Windows** uses approved external ARPA runtime or own signed Electron later.

## TV education/LIA
Same *manifest and event contracts*, different app shell, branding, voice rights, knowledge and guardian/clinical guardrails. Avoid large universal desktop codebase upfront.

## Packaging
Pin dependency versions, verify hashes/signatures and produce signed release channels after security review. Update rollback and installer removal requirements before external distribution.
