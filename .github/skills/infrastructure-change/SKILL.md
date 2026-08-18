# Skill: infrastructure-change

Use this skill before making any infrastructure or deployment pipeline change.

## Required Pre-Change Report

Before implementing, produce a report with:

```text
Resources added:
Resources changed:
IAM changes:
Staging impact:
Production impact:
Recurring-cost class: (zero-idle / low / medium / high)
Secrets/config required:
Rollback plan:
```

## Procedure

1. Complete the pre-change report above.
2. Make the infrastructure change.
3. Verify staging deployment succeeds.
4. Validate staging (navigation, TLS, SPA fallback on nested routes, mobile).
5. If production is affected, present the report to the team before proceeding.
6. Obtain manual approval for any production change.
7. Apply to production.
8. Validate production.
9. Update `docs/release-process.md` or `docs/aws-bootstrap.md` if the change affects the documented process.
