# The Lab Copilot Instructions

## Product

This repository contains The Lab Performance & Strength website and future application platform.

The current milestone is the static marketing website plus staging and production frontend deployment.

Do not implement future backend capabilities unless explicitly requested.

## Repository Boundaries

- `frontend/` contains the public React application.
- `backend/` is reserved for future AWS serverless behavior.
- `infrastructure/` is reserved for infrastructure definitions.
- `docs/` contains architecture and product decisions.

Always identify which area a task affects before editing.

## Frontend

- Use React + TypeScript + Vite.
- Build responsive/mobile-first layouts.
- Maintain accessibility.
- Preserve the black/white/neon-green Lab identity.
- Avoid large dependencies without justification.
- Do not hard-code environment URLs.
- Keep marketing copy human-readable.
- Do not invent business claims, prices, policies, or customer results.

## Backend

Backend implementation is intentionally deferred.

If backend work is requested later:

- Keep handlers thin.
- Validate all API boundaries.
- Use AWS SDK v3.
- Separate business logic from persistence.
- Never hard-code secrets.

## Infrastructure

- Prefer declarative infrastructure.
- Prefer low-idle-cost serverless services.
- Keep staging and production isolated.
- Use GitHub OIDC rather than permanent AWS access keys.
- Flag infrastructure that introduces meaningful recurring cost.

## Validation

For frontend changes:

- Run the frontend build.
- Run available tests.
- Verify routing.
- Verify responsive behavior.
- Maintain accessible headings, links, labels, and image alt text.

## Change Style

- Make the smallest change that solves the request.
- Avoid broad framework changes.
- Read `docs/THE-LAB-BASELINE-PLAN.md` before architectural changes.
- Do not resolve unresolved business decisions by guessing.
