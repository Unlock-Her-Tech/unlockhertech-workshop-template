# Example Pull Request Submission

Below is a complete example of how a workshop participant should fill out the Pull Request template when submitting their feature.

---

## Workshop Feature Submission

### 1. Feature Overview
- **Feature Name / Directory:** `src/features/mentorship-finder/`
- **Author(s):** @alexandra-coder
- **Objective & Summary:** Added an interactive mentorship discovery dashboard allowing community members to search mentors by technical skills, filter by session availability (e.g., 1-on-1 mentorship, resume reviews), and schedule sessions directly via modal booking integration.

---

### 2. Screenshots / Screen Recording

| Desktop View | Mobile View |
| :---: | :---: |
| ![Desktop Mentor Finder Screenshot](https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80) | ![Mobile Mentor Finder Screenshot](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80) |

---

### 3. Engineering Quality Checklist

Please confirm all criteria are met before requesting a mentor review:

- [x] **Feature Isolation:** All custom logic, components, and hooks reside strictly within `src/features/mentorship-finder/`.
- [x] **Sandbox Registration:** Feature is registered in `src/features/registry.ts` and renders cleanly in `/sandbox`.
- [x] **Explicit Button Types:** Every `<button>` declares `type="button"`, `type="submit"`, or `type="reset"`.
- [x] **Readonly Props:** All component prop parameters are wrapped with `Readonly<Props>`.
- [x] **Accessible Modals & Forms:** Modals use native HTML5 `<dialog open ...>` and form inputs have matching `<label htmlFor="...">`.
- [x] **Zero Hardcoded Secrets:** No external production keys or live write endpoints are used (strictly uses `mockClient` / `src/mocks/`).
- [x] **Automated Tests:** Unit tests in `FeatureMain.test.tsx` pass with `npm run test`.
- [x] **CI Pass:** `npm run typecheck`, `npm run lint`, `npm run test`, and `npm run build` pass with 0 errors.
