# Backend

Backend implementation is intentionally deferred until after the static site and frontend release pipeline are established.

## Planned Stack

- AWS Lambda
- API Gateway HTTP API
- DynamoDB
- SES
- SSM Parameter Store
- Secrets Manager
- Cognito (authentication — later phase)

## Planned Capabilities

- Training inquiry / contact form submission
- Scheduling integration
- Stripe payments
- Customer accounts
- Session packages
- Trainer/admin operations

## When to Begin

Backend work begins after:

1. The static marketing site is live on production.
2. Pat has reviewed the site and approved the design/content direction.
3. The specific backend business rules are documented.

## References

- `docs/THE-LAB-BASELINE-PLAN.md` §25 — Future Backend Architecture
- `.github/agents/backend-engineer.agent.md`
- `.github/instructions/backend.instructions.md`
- `.github/skills/serverless-api-change/SKILL.md`
