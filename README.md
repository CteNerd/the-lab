# The Lab Performance & Strength

The official web platform for **The Lab Performance & Strength**.

The Lab is a performance training brand focused on athletic development, strength, coaching, and measurable improvement.

This repository contains the public website and the foundation for future serverless application capabilities including training inquiries, scheduling, payments, customer accounts, session packages, and trainer operations.

## Current Milestone

The project is currently focused on the static marketing site and release pipeline.

The first milestone includes:

- React + TypeScript frontend
- Responsive public website
- Home
- About
- Training
- Success Stories
- Media
- Contact
- Booking/inquiry placeholder
- SEO foundation
- Staging deployment
- Production deployment with manual approval

The following are intentionally deferred:

- Authentication
- Payments
- Live scheduling
- Customer accounts
- Session packages
- Trainer/admin tools
- Merchandise checkout
- Backend AWS resources

See `docs/THE-LAB-BASELINE-PLAN.md` for the full implementation plan.

## Repository Structure

```text
frontend/        Public React website
backend/         Future serverless application
infrastructure/  AWS infrastructure definitions/documentation
docs/            Product and architecture documentation
.github/         CI/CD and GitHub Copilot configuration
```

## Frontend

The frontend uses:

- React
- TypeScript
- Vite

Primary responsibilities:

- Public marketing pages
- Training program content
- Success stories
- Training media
- Contact information
- SEO
- Responsive/mobile experience

## Backend

Backend implementation is deferred until after the static site and frontend release pipeline are established.

The future backend is expected to use a low-idle-cost AWS serverless architecture.

Potential services include:

- API Gateway HTTP API
- Lambda
- DynamoDB
- SES
- SSM Parameter Store
- Secrets Manager
- Cognito

## Environments

The project maintains:

- `staging`
- `production`

Target release flow:

```text
feature branch
    ↓
pull request
    ↓
validation
    ↓
main
    ↓
staging
    ↓
manual approval
    ↓
production
```

## Local / Codespaces Development

```bash
cd frontend
npm install
npm run dev
```

## AI-Assisted Development

Before making changes, GitHub Copilot and other coding agents should read:

- `AGENTS.md`
- `.github/copilot-instructions.md`
- `docs/THE-LAB-BASELINE-PLAN.md`

Path-specific instructions live under:

```text
.github/instructions/
```

Reusable task procedures live under:

```text
.github/skills/
```

Specialized agents live under:

```text
.github/agents/
```

## Development Principles

1. Keep the platform simple while the business is small.
2. Keep frontend, backend, and infrastructure concerns separated.
3. Do not invent unresolved business rules.
4. Prefer low-idle-cost AWS services when backend work begins.
5. Maintain staging before production.
6. Require manual approval for production releases.
7. Keep public pages responsive and accessible.
8. Do not commit secrets.
9. Avoid unnecessary dependencies.
10. Build business complexity only when the business needs it.