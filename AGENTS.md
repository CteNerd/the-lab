# Agent Operating Guide

Before making changes:

1. Read `docs/THE-LAB-BASELINE-PLAN.md`.
2. Read `.github/copilot-instructions.md`.
3. Identify whether the work is frontend, backend, infrastructure, documentation, or cross-cutting.
4. Inspect the current implementation before proposing changes.
5. Do not invent unresolved business rules or customer-facing claims.
6. Prefer the smallest change that satisfies the request.
7. Run validation for every affected application.
8. State assumptions when requirements are incomplete.
9. Do not silently introduce infrastructure or dependencies with meaningful recurring cost.
10. Keep staging and production behavior explicit.

Current product priority:

> Build the static site and frontend release pipeline first.

Authentication, payments, booking, customer history, packages, and admin capabilities are intentionally deferred.
