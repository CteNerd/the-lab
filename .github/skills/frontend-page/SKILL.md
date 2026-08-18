# Skill: frontend-page

Use this skill when creating or updating a public-facing page.

## Procedure

1. Read `docs/content-requirements.md` for content relevant to the page.
2. Identify the route for the page (see `docs/THE-LAB-BASELINE-PLAN.md` §7).
3. Create or update the page component in `frontend/src/pages/`.
4. Add or update shared components in `frontend/src/components/` only where genuine reuse exists.
5. Add page `<title>` and meta description.
6. Add the route to the router in `frontend/src/App.tsx` if it is new.
7. Add navigation link if the page should appear in the header or footer.
8. Verify responsive layout on a mobile viewport (≤ 375 px wide).
9. Verify accessibility: semantic heading hierarchy, image alt text, link labels, visible focus states.
10. Run `npm run build` inside `frontend/` and confirm it succeeds with no errors.
