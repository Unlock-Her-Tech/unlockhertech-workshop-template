## Workshop Feature Submission

### 1. Feature Overview
- **Feature Name / Directory:** `src/features/<feature-name>/`
- **Author(s):** @<github-handle>
- **Objective & Summary:** Brief 1-2 sentence description of what this feature does.

---

### 2. Screenshots / Screen Recording
<!-- Attach screenshots or GIF demonstrating desktop and mobile views -->

| Desktop View | Mobile View |
| :---: | :---: |
| *(drop screenshot here)* | *(drop screenshot here)* |

---

### 3. Engineering Quality Checklist

Please confirm all criteria are met before requesting a mentor review:

- [ ] **Feature Isolation:** All custom logic, components, and hooks reside strictly within `src/features/<feature-name>/`.
- [ ] **Sandbox Registration:** Feature is registered in `src/features/registry.ts` and renders cleanly in `/sandbox`.
- [ ] **Explicit Button Types:** Every `<button>` declares `type="button"`, `type="submit"`, or `type="reset"`.
- [ ] **Readonly Props:** All component prop parameters are wrapped with `Readonly<Props>`.
- [ ] **Accessible Modals & Forms:** Modals use native HTML5 `<dialog open ...>` and form inputs have matching `<label htmlFor="...">`.
- [ ] **Zero Hardcoded Secrets:** No external production keys or live write endpoints are used (strictly uses `mockClient` / `src/mocks/`).
- [ ] **Automated Tests:** Unit tests in `FeatureMain.test.tsx` pass with `npm run test`.
- [ ] **CI Pass:** `npm run typecheck`, `npm run lint`, `npm run test`, and `npm run build` pass with 0 errors.
