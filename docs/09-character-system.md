# AAP-CHAR-001 · Character identity, files, licenses and animation

**Status:** proposed asset registry; synthetic sample manifest included.

## Three identity layers
1. **Agent identity:** agent ID, Hermes profile, role and permitted capabilities. Owned by AI Workforce/Hermes; *not cloned into this repo*.
2. **Visual identity:** branded name, character manifest, model VRM and motions, colors, wardrobe, poses, facial animation.
3. **Voice identity:** voice provider, approved voice, language, consent/license, ownership mode. Voice defaults to **Hermes-controlled** per client session.

## Helena as first candidate
Approved still portraits exist in AtlasHub Drive under a separate media collection; they are **not** a ready 3D rig. Begin with a fully licensed generic test VRM and record model source/license. Adapt Helena's approved likeness only after 2D rig/VRM production and explicit internal likeness/voice rights approval. Do not put the original portrait or generated high-res digital likeness into this public repo by default.

## Proposed file architecture
```text
characters/
  synthetic-test-character.json
  character-manifest.schema.json -> ../contracts/
assets/
  architecture.svg
# Approved large 3D/voice/animation binaries stay in a controlled DAM or
# approved Git LFS when license/visibility conditions are satisfied.
```

## Asset manifest
Character has ID, visual renderer, preferred rig type (VRM, 2D), logical authorized asset reference, SHA256, provenance, author/license, distribution scope, approval state, supported emotions and voice profile binding (reference, **not credentials**).

## Performance optimization
One loaded model per active avatar; throttled render when idle/unfocused; avoid unbounded animation overlays; sample UI for reduced-motion support; user-controlled transparency/size, hide/pause, accessibility captions.

## UI emotions
Idle, greeting, listening, thinking, speaking, success, caution, apology, hand-off. Emotion is a *rendering hint*, never inferred with sensitive emotion profiling by default.

## Alternative media pipeline
- For VRM test: VRoid Studio, licensed VRM from owner, optional VRMA motions → trial in ARPA.
- For branded 2.5D: independent facial rigs and transparent animation, preserves photo-like likeness better but adds rigging.
- For photorealism: defer full-body real-time human until validated demand.
