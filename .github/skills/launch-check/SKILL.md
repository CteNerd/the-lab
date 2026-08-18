# Skill: launch-check

Run this skill before approving a production deployment.

## Checklist

### Build & Tests

- [ ] `npm run build` succeeds inside `frontend/`.
- [ ] All available tests pass.

### Routing

- [ ] All defined routes render without errors.
- [ ] Browser refresh on nested routes returns the correct page (SPA fallback).
- [ ] 404 page renders for unknown routes.

### Navigation

- [ ] Mobile navigation opens and closes correctly.
- [ ] Desktop navigation links work.
- [ ] All navigation links resolve.

### Content

- [ ] No broken images.
- [ ] All video clips load and do not autoplay audio.
- [ ] No visible placeholder text that should be replaced before launch.
- [ ] No invented claims, prices, or client results.

### SEO & Accessibility

- [ ] Every page has a unique `<title>`.
- [ ] Every page has a meta description.
- [ ] Heading hierarchy is correct (single `<h1>` per page).
- [ ] All images have meaningful `alt` text.
- [ ] All links have descriptive labels.
- [ ] Visible focus states are present on interactive elements.

### Environment

- [ ] Staging URL resolves.
- [ ] Production configuration does not reference staging URLs.
- [ ] No secrets committed to the repository.
- [ ] No AWS credentials or role ARNs in source files.
