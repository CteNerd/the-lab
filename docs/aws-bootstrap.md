# AWS Bootstrap Checklist

Complete this checklist during the deliberate AWS setup session after the static site is ready.

See `docs/THE-LAB-BASELINE-PLAN.md` §18–19 for full context.

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
