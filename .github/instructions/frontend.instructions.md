---
applyTo: "frontend/**"
---

# Frontend Instructions

## Stack

- React + TypeScript
- Vite
- CSS Modules or plain CSS (no large UI framework)

## Rules

- Use functional components only.
- Build mobile-first, responsive layouts.
- Use shared design tokens from `frontend/src/styles/tokens.css`.
- Maintain accessible markup: semantic HTML, ARIA where needed, visible focus states.
- Optimize images (use appropriate formats and sizes).
- No hard-coded API URLs — use environment variables.
- No invented prices, claims, client results, or policies.
- Avoid adding new dependencies without clear justification.
- Run `npm run build` inside `frontend/` before marking a task complete.
- Verify responsive behavior on mobile viewport.
