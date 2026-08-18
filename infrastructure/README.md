# Infrastructure

Infrastructure definitions and documentation are intentionally deferred until after the static site is ready.

## Planned AWS Resources

### Frontend Hosting

- S3 (staging bucket)
- S3 (production bucket)
- CloudFront (staging distribution)
- CloudFront (production distribution)
- CloudFront Origin Access Control (OAC)
- Route 53 hosted zone
- ACM certificates

### GitHub / AWS Trust

- GitHub OIDC IAM identity provider
- Staging deployment IAM role
- Production deployment IAM role

### Future Backend Resources

- API Gateway HTTP API
- Lambda functions
- DynamoDB tables
- SES configuration
- SSM Parameter Store entries
- Secrets Manager secrets
- Cognito User Pool (later phase)

## When to Begin

Run the AWS bootstrap session after the static site is complete.

See `docs/aws-bootstrap.md` for the full bootstrap checklist.

## References

- `docs/THE-LAB-BASELINE-PLAN.md` §17–19, §23
- `docs/aws-bootstrap.md`
- `.github/agents/infrastructure-reviewer.agent.md`
- `.github/instructions/infrastructure.instructions.md`
- `.github/skills/infrastructure-change/SKILL.md`
