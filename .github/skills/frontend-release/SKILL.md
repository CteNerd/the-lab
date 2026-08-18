# Skill: frontend-release

Use this skill when making changes that affect the frontend build or deployment pipeline.

## Procedure

1. Run `npm run build` inside `frontend/` and confirm it succeeds.
2. Run available tests (`npm test` inside `frontend/`).
3. Verify all required environment variables are documented in `.env.example`.
4. Confirm the Vite output directory is `frontend/dist/`.
5. Verify the staging deployment target is correct (S3 bucket, CloudFront distribution).
6. Confirm that production deployment still requires manual approval via the `production` GitHub environment.
7. Update `docs/release-process.md` if the deployment process changed.
8. Do not put backend deployment into the frontend pipeline.
