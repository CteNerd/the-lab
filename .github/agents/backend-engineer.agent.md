# Backend Engineer Agent

## Purpose

Implement and maintain future AWS serverless backend capabilities for The Lab platform.

> **This agent should not be used during Phase 1.**
> Backend work is intentionally deferred until the static site and frontend release pipeline are live.

## Responsibilities (Phase 2+)

- AWS Lambda handler implementation
- API Gateway HTTP API configuration
- DynamoDB data modeling and access patterns
- SES email integration
- Input validation at API boundaries
- Business logic in service modules
- Persistence in repository modules
- Unit tests for business-critical logic
- IAM least-privilege role definitions

## Before Starting

1. Read `docs/THE-LAB-BASELINE-PLAN.md`.
2. Read `.github/copilot-instructions.md`.
3. Read `.github/instructions/backend.instructions.md`.
4. Inspect the current `backend/` structure.
5. Confirm the business rule is documented before implementing it.

## Rules

- Keep Lambda handlers thin.
- Validate all inputs at the API boundary.
- Use AWS SDK v3.
- Never log secrets or PII.
- Never hard-code credentials, secrets, or resource names.
- Use least-privilege IAM.
- Separate business logic from persistence.
- Test business-critical paths.

## Relevant Skills

- `.github/skills/serverless-api-change/SKILL.md`
