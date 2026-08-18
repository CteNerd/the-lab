# Release Process

## Overview

The Lab uses a two-environment frontend release pipeline.

```text
feature branch → pull request → validation → main → staging → manual approval → production
```

## Environments

| Environment | URL                              | Deployment Trigger      | Approval     |
|-------------|----------------------------------|-------------------------|--------------|
| staging     | TBD (set after AWS bootstrap)    | Merge to `main`         | Automatic    |
| production  | TBD (set after AWS bootstrap)    | Manual promotion        | Required reviewer |

## Pull Request Validation

All pull requests that affect `frontend/**` run:

1. Checkout
2. Node setup
3. `npm ci`
4. `npm run build`
5. `npm test` (when tests exist)

Pull requests must pass before merge.

## Staging Deployment

Triggered automatically on merge to `main`.

Steps:

1. Build frontend.
2. Authenticate to AWS via GitHub OIDC (staging role).
3. Sync `frontend/dist/` to staging S3 bucket.
4. Invalidate staging CloudFront distribution.

## Production Deployment

Triggered manually after staging validation.

Steps:

1. A required reviewer approves the `production` GitHub environment.
2. Build frontend.
3. Authenticate to AWS via GitHub OIDC (production role).
4. Sync `frontend/dist/` to production S3 bucket.
5. Invalidate production CloudFront distribution.

## Required GitHub Secrets / Variables

These are populated during the AWS bootstrap session.

| Name                             | Environment  | Description                         |
|----------------------------------|--------------|-------------------------------------|
| `AWS_STAGING_ROLE_ARN`           | staging      | IAM role ARN for staging deployment (**secret**) |
| `AWS_PRODUCTION_ROLE_ARN`        | production   | IAM role ARN for production deployment (**secret**) |
| `STAGING_S3_BUCKET`              | staging      | Staging S3 bucket name (variable)   |
| `PRODUCTION_S3_BUCKET`           | production   | Production S3 bucket name (variable) |
| `STAGING_CLOUDFRONT_DISTRIBUTION_ID`    | staging | CloudFront distribution ID (variable) |
| `PRODUCTION_CLOUDFRONT_DISTRIBUTION_ID` | production | CloudFront distribution ID (variable) |
| `AWS_REGION`                     | both         | Target AWS region (variable, e.g. `us-east-1`) |

> **Important:** `AWS_STAGING_ROLE_ARN` and `AWS_PRODUCTION_ROLE_ARN` must be stored as GitHub Actions **secrets** (not variables) because they contain the AWS account ID.
> The `production` environment must have a **required reviewer** configured before any merge to `main` triggers the pipeline. Set this in GitHub → Settings → Environments → production → Required reviewers.

## Hotfix Process

1. Branch from `main`.
2. Make fix.
3. Open pull request.
4. Pass validation.
5. Merge to `main`.
6. Staging deploys automatically.
7. Validate on staging.
8. Approve production.

## Launch Check

Run the `.github/skills/launch-check/SKILL.md` procedure before approving production for the first time or after significant changes.
