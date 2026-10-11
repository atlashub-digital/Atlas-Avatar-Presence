# AAP-INTEGRATION-001 · Device Bridge and Knowledge Hub

**Status:** future integration; neither live integration exists in this repository.

## Device Bridge
[Atlas Device Bridge](https://github.com/atlashub-digital/Atlas-Device-Bridge) owns desktop observation, UI automation, pairing, consent, approval, stop switch and audit. Avatar merely presents a visible consent request and visualizes action result. Do not implement raw desktop capture or arbitrary click through renderer. ADB remains optional: AAP works as a passive conversational avatar without it.

## Knowledge Hub
[Atlas Knowledge Hub](https://github.com/atlashub-digital/Atlas-Knowledge-Hub) provides tenant/governance-aware retrieval to the *agent*. Avatar does **not** read the database or Notion/Drive/GitHub directly; it renders approved citations/links returned by the agent. AKH is optional for presence POC.

## Example: real-estate client
User: "Show the latest listings". AAP displays thinking state. Hermes uses approved KB of property nomenclature and client's live CRM listing tool. AAP receives text and references to permitted media; ADB not required. No cross-client listing exposure.

## Example: medical receptionist
Hermes may answer clinic-approved administrative questions but must avoid independent medical diagnosis and misuse of patient data. AAP never records speech into persistent memory without explicit authorized policy.

## Example: tutor TV
Owned app with permissioned learning media, supervised interactions, age-appropriate defaults. App cannot assume it controls third-party TV/YouTube apps.

## Example: LIA
LIA brand, voice and personality manifests isolated from Helena; knowledge comes from LeveLab-authorized sources. Marketing approval and health rules are outside AAP.
