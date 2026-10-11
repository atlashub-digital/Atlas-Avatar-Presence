# Security policy

**v0.1.0 is an offline prototype. Do not expose its mock adapters as a production gateway.**

Report vulnerabilities through GitHub private vulnerability reporting (when enabled) or the organization’s established private security channel; never post exploits or sensitive data publicly.

Threats: role/tenant confusion, avatar impersonation, device overreach, second TTS provider leaking text or duplicating audio, unsolicited microphone recording, third-party plugin capture, unlicensed identity/voice use, untrusted renderer commands, token exposure, prompt injection through UI.

Controls must be implemented before production: authenticated agent and renderer sessions, per-tenant grants, signed outbound media/session tokens, local visible consent and revocation, source-allowlisted assets and URLs, no direct shell, no desktop capture except through ADB, provider logging minimization, and security QA.
