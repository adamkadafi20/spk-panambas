# AGENTS.md — Panambas Front-end Contract

## Mission
Build and maintain the front-end prototype for the Panambas indoor ornamental plant decision-support website. Follow `docs/SOT.md` as the source of truth.

## Scope guardrails
- Front-end only: React + Vite + Tailwind CSS.
- Use dummy/local data unless the owner explicitly approves a new scope.
- Do not add backend, database, API, real authentication, deployment, payment, or unrelated features.
- Do not describe simulated ranking as a validated TOPSIS result.
- Keep customer and admin flows represented in the UI.

## Product requirements
- Customer: demo login/logout, catalog browsing, room-preference form, recommendation ranking.
- Admin: demo login/logout, dashboard statistics, CRUD criteria/weights, CRUD plant alternatives, editable decision matrix.
- Responsive desktop sidebar and mobile navigation.
- Indonesian UI copy; botanical green + near-black visual identity.
- Accessible labels for form controls and buttons; preserve keyboard-operable native controls.

## Engineering conventions
- Use functional React components and hooks.
- Prefer small reusable components over duplicating layout patterns.
- Keep dummy data clearly separated from view components when practical.
- Use Tailwind utility classes plus `src/styles.css` for reusable visual primitives.
- Use Lucide React icons; do not add a second icon library without approval.
- Avoid adding dependencies unless required and justified.
- Keep IDs stable for existing dummy records.
- Validate required fields in forms; show clear feedback for actions.
- Do not add localStorage persistence unless explicitly approved.
- Do not claim a UI action succeeded if it did not update the visible local state.

## TOPSIS correctness boundary
The current ranking is only a visual simulation. Before implementing real TOPSIS:
1. Confirm criterion direction (`Benefit` or `Cost`), weights, and score-scale semantics.
2. Normalize weights or reject invalid total according to an agreed rule.
3. Implement vector normalization, weighted normalized matrix, ideal positive/negative, distances, and preference coefficient.
4. Add unit tests for edge cases and a known small example.
5. Label the result as TOPSIS only after calculation and tests are correct.

## Commands
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Definition of done
- Relevant SOT acceptance criteria are met.
- `npm run build` passes.
- No console errors are introduced by the changed feature.
- Desktop and mobile layout are checked.
- Dummy-data limitations remain visible.
- Scope changes are documented before implementation.
