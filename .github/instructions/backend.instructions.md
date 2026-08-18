---
applyTo: "backend/**"
---

# Backend Instructions

> Backend implementation is intentionally deferred until after the static site and frontend release pipeline are established.

## Rules (for when backend work begins)

- Keep Lambda handlers thin — delegate to service functions.
- Validate all inputs at the API boundary.
- Business rules belong in service modules.
- Persistence belongs in repository modules.
- Use AWS SDK v3.
- Never log secrets or PII.
- Test all business-critical logic.
- Never hard-code credentials or resource names — use environment variables or SSM.
- Use least-privilege IAM for all Lambda execution roles.
