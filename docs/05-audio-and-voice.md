# AAP-AUDIO-001 · Ownership and low-cost voice architecture

**Critical decision:** AAP must not generate another TTS stream if Hermes is already generating or playing speech. Audio ownership is a **per-session technical invariant**; visual renderer is not owner of the microphone.

## Supported modes (target)

| Mode | STT | LLM/agent | TTS/playback | Lip sync | Cost |
| --- | --- | --- | --- | --- | --- |
| Hermes-owned (recommended) | Hermes Desktop/voice | Hermes profile | **Hermes** | sample/level mirror of *agent's* stream | existing Hermes/provider usage |
| Hermes text + external voice | approved client STT or text | Hermes | one dedicated TTS adapter | same audio stream output | provider dependent |
| OpenClaw alternate | configured service | OpenClaw | chosen session audio owner | same | per provider |
| Offline demo | no STT | deterministic fake | optional local browser speechSynthesis | CSS illustrative, not real lip sync | $0 service |

## Hermes currently documents
- STT local Faster-Whisper, and provider options; TTS default Edge and other providers (provider support/version must be checked on deployment).
- Desktop voice can use client-direct STT/TTS for supported providers or gateway relay for local/Edge / older servers.
- Voice sessions and text streaming have different wire semantics; **do not assume profile credentials should be copied into this renderer**.
- External audio mirroring and control must be implemented with a scoped companion adapter, not raw Hermes credential pass-through.

See official [Hermes voice mode](https://hermes-agent.nousresearch.com/docs/user-guide/features/voice-mode) and [Hermes repository](https://github.com/NousResearch/hermes-agent).

## STT → think → TTS model
Browser client requests mic explicitly and shows recording state. AAP sends transcript to trusted adapter. Hermes handles response and TTS where configured. If audio is remote at Hermes, negotiate safe playback/audio-level events; if desktop-direct, integrate supported local audio event without duplicating synthesis.

## Lip sync tiers
- Tier 0 (offline): fake mouth movement while status is `speaking`. **Only proof of animation**, not synchronized to sound.
- Tier 1: audio amplitude/VAD driven animation from actual *agent voice* output.
- Tier 2: phoneme/viseme timeline from known TTS provider, mapped to VRM blendshapes.
- Tier 3: facial expressiveness / emotion / pause handling with stable timing.
Each tier needs own measured acceptance tests and assets with valid rights.

## Audio failure safety
No always-on mic; never save voice by default. One active turn stream per session; cancel/interrupt should stop current playback (when adapter supports interruption), reset mouth and show state. Do not play personal or medical text through public device speakers without clear user intent.

## Design rule
**Renderer ≠ recorder ≠ TTS engine.** Existing Hermes voice stays selectable as source of truth. The app may run silent or text-only when speech is unavailable.
