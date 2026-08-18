# The Lab — Codespaces Baseline Build Plan

## Goal

The immediate objective is intentionally narrow:

> Get **The Lab Performance & Strength** repository established, build the static marketing site in GitHub Codespaces, and put reliable **staging and production frontend pipelines** in place so Pat can begin reviewing the site and iterating on content/design.

AWS-backed application features, Stripe, scheduling, customer accounts, packages, and trainer/admin capabilities come **after** the static site and release workflow are working.

This document is the primary handoff plan for working in GitHub Codespaces.

---

# 1. What Success Looks Like

The first milestone is complete when all of the following are true:

- A GitHub repository exists for The Lab.
- The repository has clear frontend, backend, infrastructure, docs, and GitHub automation boundaries.
- GitHub Copilot has repository instructions, path-specific instructions, agents, and reusable skills.
- The static frontend is built with React + TypeScript + Vite.
- Core pages exist and are responsive.
- The supplied Lab branding is represented with black, white, and neon green.
- Local/Codespaces development works with one documented command.
- Pull requests run validation.
- Merge to `main` deploys the static site to staging.
- Production deployment requires manual approval.
- Pat can view the production website and begin giving feedback.
- No backend, Stripe, authentication, or scheduling features are required for this milestone.

---

# 2. Current Phase Boundaries

## Build Now

During the first phase, build only:

- Repository foundation.
- GitHub Copilot customization.
- Frontend application.
- Static pages.
- Responsive design.
- Brand system.
- Reusable page/layout components.
- SEO/meta foundation.
- Static training/program content.
- Static success-story content.
- Static media sections.
- Contact information.
- Inquiry/contact UI shell if desired.
- Pull-request CI.
- Staging frontend pipeline.
- Production frontend pipeline.
- Deployment documentation.

## Explicitly Defer

Do not implement yet:

- Lambda.
- API Gateway.
- DynamoDB.
- SES.
- Cognito.
- Stripe.
- Customer authentication.
- Booking engine.
- Session packages.
- Payment history.
- Trainer/admin portal.
- Merchandise checkout.
- Custom scheduling.
- AWS secrets.
- Production backend infrastructure.

The frontend should be designed so these can be added later without restructuring the site.

---

# 3. Manual Repository Creation

Repository creation is the one step that should be done manually in GitHub.

Recommended values:

```text
Owner: CteNerd
Repository: the-lab
Visibility: Private
Initialize with README: No
.gitignore: No
License: No
```

Create the repository completely empty.

After creation:

1. Open the repository.
2. Choose **Code**.
3. Choose **Codespaces**.
4. Create a Codespace on `main`.
5. Use the Codespace terminal for the remaining bootstrap work.

---

# 4. Recommended Repository Structure

Use this structure from the beginning:

```text
the-lab/
├── .github/
│   ├── agents/
│   │   ├── frontend-builder.agent.md
│   │   ├── backend-engineer.agent.md
│   │   └── infrastructure-reviewer.agent.md
│   │
│   ├── instructions/
│   │   ├── frontend.instructions.md
│   │   ├── backend.instructions.md
│   │   └── infrastructure.instructions.md
│   │
│   ├── skills/
│   │   ├── frontend-page/
│   │   │   └── SKILL.md
│   │   ├── frontend-release/
│   │   │   └── SKILL.md
│   │   ├── serverless-api-change/
│   │   │   └── SKILL.md
│   │   ├── infrastructure-change/
│   │   │   └── SKILL.md
│   │   └── launch-check/
│   │       └── SKILL.md
│   │
│   ├── workflows/
│   │   ├── pull-request.yml
│   │   └── frontend-deploy.yml
│   │
│   ├── CODEOWNERS
│   └── copilot-instructions.md
│
├── docs/
│   ├── THE-LAB-BASELINE-PLAN.md
│   ├── architecture.md
│   ├── aws-bootstrap.md
│   ├── content-requirements.md
│   └── release-process.md
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   └── types/
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── backend/
│   └── README.md
│
├── infrastructure/
│   └── README.md
│
├── AGENTS.md
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

The `backend/` and `infrastructure/` folders intentionally exist before implementation. They establish boundaries without forcing those systems to be built yet.

---

# 5. Initial README.md

Use the following as the first repository README.

```markdown
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
```

---

# 6. Codespaces Bootstrap

Once the empty repository is open in Codespaces:

## Step 1 — Create the frontend

From the repo root:

```bash
npm create vite@latest frontend -- --template react-ts
```

Then:

```bash
cd frontend
npm install
npm run dev
```

Confirm the Vite site loads in the Codespaces forwarded port.

## Step 2 — Add initial dependencies

Start light.

Recommended:

```bash
npm install react-router-dom
```

Do not add a large UI framework initially.

Use normal CSS, CSS Modules, or a similarly lightweight styling strategy.

## Step 3 — Create the empty backend/infrastructure boundaries

From the repo root:

```bash
mkdir -p backend infrastructure docs
```

Add a small README to each explaining that implementation is intentionally deferred.

## Step 4 — Add repository documentation

Create:

```text
README.md
AGENTS.md
docs/THE-LAB-BASELINE-PLAN.md
docs/architecture.md
docs/aws-bootstrap.md
docs/content-requirements.md
docs/release-process.md
```

## Step 5 — Add GitHub Copilot customization

Create:

```text
.github/copilot-instructions.md
.github/instructions/
.github/agents/
.github/skills/
```

These should be established before asking Copilot to generate substantial code.

---

# 7. Static Frontend Scope

## Initial Routes

Use:

```text
/
 /about
 /training
 /training/personal
 /training/group
 /success-stories
 /media
 /contact
 /book
 /privacy
 /terms
```

Do not create account/admin routes yet.

---

# 8. Initial Page Requirements

## Home

Include:

1. Hero.
2. Primary Lab message.
3. Strong CTA.
4. Short training media section.
5. Training program preview.
6. Why The Lab.
7. Success stories.
8. Patrick Robertson introduction.
9. Contact/location preview.
10. Final CTA.

Primary CTA:

```text
Book Training
```

Secondary CTA:

```text
Explore Programs
```

## About

Include:

- Patrick Robertson bio.
- Playing/coaching background.
- The Lab origin story.
- Mission.
- Coaching philosophy.
- Training methodology.

Use placeholders where content has not yet been supplied.

Do not invent claims.

## Training

Provide reusable cards for:

- Personal training.
- Group training.

Additional offerings should not be invented.

## Success Stories

Build the content structure now even if final stories are not ready.

Suggested shape:

```ts
type SuccessStory = {
  name: string;
  athleteType?: string;
  goal?: string;
  challenge?: string;
  result?: string;
  quote?: string;
  image?: string;
};
```

## Media

Support:

- Images.
- Short video clips.
- Poster image.
- Lazy loading.

Do not autoplay audio.

## Contact

Static version should include:

- Phone.
- Email.
- Address.
- Google Maps link.
- Apple Maps link.
- Social links.

A contact form may be styled now, but it must clearly remain non-functional until the backend exists.

## Book

For the first release:

- Present a clear "booking coming soon" or inquiry path.
- Do not represent the page as a confirmed reservation system.

---

# 9. Brand Foundation

Current visual identity:

- Black background.
- White typography.
- Neon/chemical green accent.
- Laboratory/performance theme.
- Strength + science visual language.

Suggested tokens:

```css
:root {
  --lab-bg: #000000;
  --lab-surface: #101010;
  --lab-surface-alt: #171717;
  --lab-text: #ffffff;
  --lab-text-muted: #bdbdbd;
  --lab-border: #2a2a2a;
  --lab-accent: #66ff4d;
}
```

The final accent green should be sampled from the approved logo asset before launch.

Create a reusable global token file rather than hard-coding colors throughout components.

---

# 10. Frontend Architecture

Recommended source shape:

```text
frontend/src/
├── assets/
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Hero/
│   ├── CTA/
│   ├── ProgramCard/
│   ├── SuccessStoryCard/
│   └── MediaCard/
├── constants/
├── layouts/
│   └── MarketingLayout/
├── pages/
│   ├── Home/
│   ├── About/
│   ├── Training/
│   ├── PersonalTraining/
│   ├── GroupTraining/
│   ├── SuccessStories/
│   ├── Media/
│   ├── Contact/
│   ├── Book/
│   ├── Privacy/
│   ├── Terms/
│   └── NotFound/
├── services/
├── styles/
├── types/
├── App.tsx
└── main.tsx
```

Keep page-specific content readable rather than abstracting every paragraph into configuration.

---

# 11. Repository-Wide Copilot Instructions

Create:

```text
.github/copilot-instructions.md
```

Fundamental rules:

```markdown
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
```

---

# 12. AGENTS.md

Create a root `AGENTS.md`.

Recommended content:

```markdown
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
```

---

# 13. Path-Specific Instructions

## Frontend

`.github/instructions/frontend.instructions.md`

Key rules:

```text
Apply to frontend/**

- React + TypeScript.
- Functional components.
- Mobile-first.
- Accessible markup.
- Use shared design tokens.
- Optimize images/video.
- No hard-coded API URLs.
- No invented prices/content.
- Avoid large UI frameworks.
- Build before completion.
```

## Backend

`.github/instructions/backend.instructions.md`

For future use:

```text
Apply to backend/**

- Keep Lambda handlers thin.
- Validate requests at the boundary.
- Business rules belong in services.
- Persistence belongs in repositories.
- AWS SDK v3.
- Never log secrets.
- Test business-critical logic.
```

## Infrastructure

`.github/instructions/infrastructure.instructions.md`

Apply to:

```text
infrastructure/**
backend/serverless.yml
.github/workflows/**
```

Rules:

```text
- Prefer declarative resources.
- Use GitHub OIDC.
- No permanent deployment credentials.
- Use least privilege.
- Keep staging/prod isolated.
- Avoid EC2, RDS, NAT Gateway, ECS, EKS, OpenSearch, or similar baseline-cost services unless explicitly approved.
- Describe cost impact before adding infrastructure.
```

---

# 14. Fundamental Custom Agents

Start with only three.

## Frontend Builder

File:

```text
.github/agents/frontend-builder.agent.md
```

Purpose:

- React.
- TypeScript.
- Vite.
- Responsive pages.
- Accessibility.
- SEO.
- Performance.
- Lab visual system.

Use for customer-facing site work.

## Backend Engineer

File:

```text
.github/agents/backend-engineer.agent.md
```

Purpose:

- Future Lambda/API work.
- Validation.
- DynamoDB.
- SES.
- AWS SDK v3.
- Unit tests.

This exists from day one but should not be used in the initial milestone.

## Infrastructure Reviewer

File:

```text
.github/agents/infrastructure-reviewer.agent.md
```

Purpose:

- AWS architecture.
- IAM.
- CloudFront/S3.
- Route 53.
- ACM.
- GitHub OIDC.
- Cost review.
- Environment isolation.

Require this agent to identify:

```text
Resources added
Resources changed
IAM changes
Staging impact
Production impact
Recurring cost class
Secrets/config needed
Rollback plan
```

---

# 15. Fundamental Skills

## 1. frontend-page

Use when creating/updating public pages.

Procedure:

1. Read relevant content requirements.
2. Identify route.
3. Create/update page.
4. Add shared components only where reuse exists.
5. Add metadata.
6. Add navigation if appropriate.
7. Verify mobile.
8. Verify accessibility.
9. Build frontend.

## 2. frontend-release

Use for changes affecting deployment.

Procedure:

1. Build.
2. Test.
3. Verify environment variables.
4. Verify output directory.
5. Validate staging target.
6. Confirm production approval remains required.
7. Document deployment change.

## 3. serverless-api-change

Future use.

Procedure:

1. Define API contract.
2. Validation.
3. Handler.
4. Service.
5. Repository.
6. IAM review.
7. Tests.
8. Frontend contract review.

## 4. infrastructure-change

Future and release work.

Before making infrastructure changes report:

```text
Resources added
Resources changed
IAM changes
Staging impact
Production impact
Estimated recurring-cost class
Secrets/config required
Rollback approach
```

## 5. launch-check

Run before production promotion.

Validate:

- Build.
- Tests.
- Routes.
- Mobile navigation.
- Desktop navigation.
- Images.
- Video loading.
- Broken links.
- SEO titles/descriptions.
- Accessibility basics.
- Staging URL.
- Production configuration.
- No staging URLs embedded in production.
- No secrets committed.

---

# 16. Pull Request Pipeline

Before AWS deployment exists, create:

```text
.github/workflows/pull-request.yml
```

It should run for pull requests that affect the frontend.

Required actions:

```text
checkout
setup Node
npm ci
npm run build
npm test (if tests exist)
```

This pipeline is safe to build entirely in Codespaces.

---

# 17. Staging / Production Frontend Pipeline

The target architecture remains:

```text
GitHub
   |
   v
GitHub Actions
   |
   +---- staging
   |
manual approval
   |
   v
production
```

The frontend pipeline should eventually:

1. Build/test.
2. Build staging.
3. Authenticate to AWS using GitHub OIDC.
4. Sync frontend output to the staging S3 bucket.
5. Invalidate staging CloudFront.
6. Wait on GitHub `production` environment approval.
7. Build production.
8. Sync to production S3.
9. Invalidate production CloudFront.

Do not put backend deployment into this pipeline yet.

---

# 18. AWS Work That Can Wait Until the Static Site Is Ready

Code first.

Defer actual creation/configuration of:

- Route 53 hosted zone.
- Domain registration.
- ACM certificates.
- S3 staging bucket.
- S3 production bucket.
- CloudFront staging distribution.
- CloudFront production distribution.
- CloudFront OAC.
- DNS records.
- GitHub OIDC IAM provider.
- Staging deployment IAM role.
- Production deployment IAM role.
- GitHub environment secrets/variables.
- AWS Budget.

This creates a clean stopping point:

> Finish the site first, then spend one deliberate session wiring AWS hosting.

---

# 19. AWS Bootstrap Checklist

Create `docs/aws-bootstrap.md` with this checklist.

## Account

- [ ] Confirm target AWS account.
- [ ] Confirm target region.
- [ ] Enable MFA for root/account administrators.
- [ ] Create AWS Budget.
- [ ] Create monthly budget alert.

## Domain / DNS

- [ ] Finalize primary domain.
- [ ] Register or transfer domain.
- [ ] Configure Route 53 hosted zone.
- [ ] Decide canonical root vs `www`.

## TLS

- [ ] Create staging ACM certificate.
- [ ] Create production ACM certificate.
- [ ] Validate certificates.

## Frontend Storage

- [ ] Create private staging S3 bucket.
- [ ] Create private production S3 bucket.
- [ ] Enable Block Public Access.
- [ ] Configure production versioning if desired.

## CloudFront

- [ ] Create staging distribution.
- [ ] Create production distribution.
- [ ] Configure OAC.
- [ ] Configure SPA fallback.
- [ ] Configure HTTPS redirect.
- [ ] Attach certificates.
- [ ] Configure custom domains.

## GitHub / AWS Trust

- [ ] Configure GitHub OIDC provider.
- [ ] Create staging deployment role.
- [ ] Create production deployment role.
- [ ] Limit trust to the repository.
- [ ] Limit staging role to staging resources.
- [ ] Limit production role to production resources.

## GitHub Environments

- [ ] Create `staging`.
- [ ] Create `production`.
- [ ] Add required reviewer to `production`.
- [ ] Add staging role ARN.
- [ ] Add production role ARN.
- [ ] Add staging bucket name.
- [ ] Add production bucket name.
- [ ] Add staging CloudFront distribution ID.
- [ ] Add production CloudFront distribution ID.
- [ ] Add public URL values.

## Validation

- [ ] Deploy staging.
- [ ] Open staging URL.
- [ ] Verify navigation.
- [ ] Verify refresh on nested routes.
- [ ] Verify TLS.
- [ ] Verify mobile.
- [ ] Approve production.
- [ ] Verify production.
- [ ] Confirm CloudFront origin bucket is not public.

---

# 20. Domain Decision

Shortlist:

```text
thelabperformance.com
trainatthelab.com
enterthelab.com
thelabstrength.com
thelabathleticperformance.com
thelabperformancetx.com
```

Preferred order:

1. `thelabperformance.com`
2. `trainatthelab.com`
3. `enterthelab.com`

Do not wire deployment configuration to a permanent domain until Pat approves the name.

---

# 21. Content Needed From Pat

Create `docs/content-requirements.md`.

Track:

- [ ] Official business name.
- [ ] Final logo.
- [ ] Approved accent color.
- [ ] Patrick bio.
- [ ] The Lab story.
- [ ] Mission.
- [ ] Coaching philosophy.
- [ ] Training offerings.
- [ ] Personal training description.
- [ ] Group training description.
- [ ] Pricing decision.
- [ ] Phone.
- [ ] Email.
- [ ] Address.
- [ ] Social accounts.
- [ ] Training images.
- [ ] Training clips.
- [ ] Success stories.
- [ ] Permission to publish client names/images.
- [ ] Primary domain.

The static site should use obvious placeholders rather than guessed information.

---

# 22. Travel / Codespaces Work Plan

## Session 1 — Repo Foundation

Complete:

- README.
- Baseline plan.
- AGENTS.md.
- Copilot instructions.
- Path instructions.
- Agents.
- Skills.
- `.gitignore`.
- `.env.example`.
- Empty backend/infrastructure boundaries.

## Session 2 — Frontend Foundation

Complete:

- Vite React TypeScript project.
- Router.
- Marketing layout.
- Header.
- Footer.
- Design tokens.
- Typography.
- Responsive navigation.
- 404.

## Session 3 — Home / About

Complete:

- Home hero.
- Training preview.
- Success-story preview.
- Patrick section.
- About page.
- Placeholder content clearly marked.

## Session 4 — Training / Stories / Media

Complete:

- Training landing page.
- Personal training.
- Group training.
- Success stories.
- Media page.

## Session 5 — Contact / Book / Legal

Complete:

- Contact.
- Book/inquiry placeholder.
- Privacy.
- Terms.
- Map links once location is known.

## Session 6 — Quality

Complete:

- Responsive review.
- Accessibility pass.
- Image optimization.
- Video behavior.
- Metadata.
- Basic tests.
- Build.
- Broken-link pass.

## Session 7 — Pipelines

Complete:

- Pull-request workflow.
- Frontend deployment workflow structure.
- GitHub environments.
- Deployment docs.
- Leave AWS values as variables/secrets until bootstrap.

---

# 23. Home / Deliberate AWS Session

When ready to establish AWS:

1. Finalize domain.
2. Configure Route 53.
3. Configure ACM.
4. Create S3 buckets.
5. Create CloudFront distributions/OAC.
6. Configure GitHub OIDC.
7. Create least-privilege staging/prod deploy roles.
8. Populate GitHub environment configuration.
9. Deploy staging.
10. Validate.
11. Approve production.
12. Show Pat the live site.

After this point, routine frontend deployments should happen through GitHub rather than manual AWS actions.

---

# 24. Phase 2 — After Pat Can See the Site

Once Pat can review staging/production, begin iteration.

Priority order:

1. Real content.
2. Real imagery/video.
3. Brand refinement.
4. Training offering refinement.
5. Pricing presentation.
6. Contact/inquiry backend.
7. Scheduling discovery.
8. Stripe.
9. Customer accounts.
10. Trainer/admin tooling.

Do not begin Stripe, custom scheduling, or authentication before the actual operating rules are documented.

---

# 25. Future Backend Architecture

When Phase 2 begins, the intended low-cost architecture is:

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

Authentication later:

```text
Cognito User Pool
   |
API Gateway JWT authorization
   |
Lambda
```

This is deliberately deferred until the static experience is live.

---

# 26. Copilot Kickoff Prompt for Codespaces

Use this as the first serious Copilot prompt:

```text
Read the following files before making changes:

- docs/THE-LAB-BASELINE-PLAN.md
- .github/copilot-instructions.md
- AGENTS.md

We are in Phase 1.

The goal is to build The Lab Performance & Strength static marketing site and establish the frontend development foundation.

Do not implement:
- AWS backend resources
- authentication
- Stripe
- live scheduling
- customer accounts
- session packages
- trainer/admin functionality

Start by validating the repository structure and then bootstrap the frontend with React, TypeScript, and Vite if it does not already exist.

Create the initial marketing route structure:
- /
- /about
- /training
- /training/personal
- /training/group
- /success-stories
- /media
- /contact
- /book
- /privacy
- /terms

Establish:
- shared marketing layout
- responsive header/navigation
- footer
- global design tokens
- black/white/neon-green visual system
- accessible page structure
- responsive behavior
- 404 route

Do not invent unresolved business claims, prices, customer results, or policies.

Use placeholders where required and clearly identify them.

Before completing the work:
- run the frontend build
- report any tests that do not exist
- summarize files changed
- identify content still needed from Patrick
```

---

# 27. Definition of Done for This Baseline

The baseline is finished when:

```text
Repository exists
↓
Codespaces works
↓
Copilot context is established
↓
Static site is built
↓
Pull requests validate
↓
Staging deploys
↓
Production requires approval
↓
Production deploys
↓
Pat can view the site
↓
Iteration begins
```

That is the target.

Everything else is a later extension.
