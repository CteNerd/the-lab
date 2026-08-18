---
applyTo: "infrastructure/**, backend/serverless.yml, .github/workflows/**"
---

# Infrastructure Instructions

## Rules

- Prefer declarative resource definitions.
- Use GitHub OIDC for AWS authentication — no permanent deployment credentials.
- Apply least-privilege IAM to all roles and policies.
- Keep staging and production environments fully isolated (separate buckets, distributions, roles).
- Do not use EC2, RDS, NAT Gateway, ECS, EKS, OpenSearch, or similar always-on services unless explicitly approved.
- Before adding any infrastructure, describe:
  - Resources added
  - Resources changed
  - IAM changes
  - Staging impact
  - Production impact
  - Estimated recurring-cost class (zero-idle / low / medium / high)
  - Secrets/config required
  - Rollback approach
- Never commit AWS credentials, secrets, or account IDs.
