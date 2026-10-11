# AAP-ARCH-001 · Component architecture

**Status:** PROPOSED target / OFFLINE reference implemented.

![Architecture](../assets/architecture.svg)

```mermaid
flowchart TB
  UI["Avatar UI / renderer (web or desktop)"]
  CORE["Avatar Session Controller<br/>states / permissions / events"]
  RT["Agent Runtime Adapter"]
  VO["Voice ownership adapter"]
  H["Hermes existing profile / tools / memory"]
  OC["OpenClaw alternate runtime"]
  M["Mock demo"]
  D["Atlas Device Bridge"]
  K["Atlas Knowledge Hub"]
  UI <--> CORE
  CORE <--> RT
  CORE <--> VO
  RT --> H
  RT -. "optional only" .-> OC
  RT -. "offline fixtures" .-> M
  H --> K
  H --> D
```

## Three independent planes

1. **Visual**: renderer (VRM, 2D, native renderer) maps state/events into expressions and displays captions. No confidential agent access keys.
2. **Conversational + voice**: approved agent runtime handles reasoning, tool and memory. Voice controller selects exactly one STT/TTS authority. For Hermes profile use Hermes STT/TTS where compatible.
3. **Capabilities**: knowledge retrieval by agent via AKH, device observation/action via ADB. No direct privileged app controls inside AAP.

## Event flow
```mermaid
sequenceDiagram
  participant U as User
  participant V as Visual Avatar
  participant S as Session Controller
  participant H as Hermes
  participant A as Audio Owner
  U->>V: Explicitly activate session
  V->>S: begin + text/transcript
  S->>H: sendTurn(authenticated adapter)
  H-->>S: assistant response/events
  S->>V: thinking → speaking
  alt Hermes owns voice
    H-->>A: audio produced via Hermes voice
    A-->>V: audio playback event/levels (no second TTS)
  else external voice explicitly selected
    S->>A: speak(text)
    A-->>V: audio samples/events
  end
  V-->>U: animated answer and captions
```

## Adapter interfaces
- Agent: `sendTurn({sessionRef,text,signal}) -> {text,audioRef?,events?}`.
- Voice: `speak(text,ctx)` only when session audio authority is external; otherwise attach to Hermes stream or system-audio levels without resynthesis.
- Renderer: `setState(state)` + `renderText(text)` and optional `setAudioLevels(levels)`.
- Device: *never* direct OS APIs in renderer. Commands route via separately authorized Device Bridge capability.
- Identity: deployment/tenant/profile come from authenticated backend session; never trust browser-selected tenant.

## Deployment
Local avatar window and rendering on PC. Hermes remains in its approved runtime. Authenticated link over private secure transport; no new GPU/VPS needed for a test with synthetic visuals. Production may require a small session relay, never anonymous public gateway.

## Critical nuance
ARPA desktop app can lip-sync on selected device output, but if it listens to *all* system audio, it can animate while unrelated videos play. Commercial design must bind lip-sync to the **authorized agent audio stream**, not indiscriminate system loopback.
