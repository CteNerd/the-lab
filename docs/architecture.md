# Architecture

## Overview

The Lab Performance & Strength web platform is structured as a monorepo with three primary application boundaries:

| Directory         | Purpose                                          |
|-------------------|--------------------------------------------------|
| `frontend/`       | React + TypeScript + Vite public website         |
| `backend/`        | Future AWS serverless application                |
| `infrastructure/` | AWS infrastructure definitions / documentation   |

## Current Phase

Phase 1 is a static marketing site with a staging and production frontend pipeline. No backend or AWS application resources are active.

## Target Production Architecture (Phase 2+)

```text
Route 53
   |
CloudFront
   |
private S3 frontend
   |
Browser
   |
API Gateway HTTP API
   |
Lambda
   |
   +-- DynamoDB
   +-- SES
   +-- SSM Parameter Store
   +-- Secrets Manager
   +-- Stripe
```

Authentication (later):

```text
Cognito User Pool
   |
API Gateway JWT authorization
   |
Lambda
```

## Environments

| Environment  | Trigger                    | Approval Required |
|-------------|----------------------------|--------------------|
| staging     | Merge to `main`            | No                 |
| production  | Manual promotion from staging | Yes (required reviewer) |

## Frontend Build

- React + TypeScript + Vite
- Output: `frontend/dist/`
- Served via CloudFront → private S3

## Frontend Release Flow

```text
feature branch → pull request → validation → main → staging → manual approval → production
```

See `docs/release-process.md` for the detailed deployment runbook.
