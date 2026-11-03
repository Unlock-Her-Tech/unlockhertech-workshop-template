# How to Contribute to the Workshop Template

Welcome to the **Unlock Her Tech** Workshop! We are thrilled to have you here. This hands-on guide walks you through every step of building and submitting high-impact UI features for our website while mastering real-world open-source contribution workflows.

Contributing to this project provides dual value: you build production-ready UI components for the community, and you create verifiable, public open-source contributions directly visible on your GitHub profile and CV.

---

## 📋 Table of Contents
1. [Prerequisites](#1-prerequisites)
2. [Step 1: Fork the Repository](#step-1-fork-the-repository)
3. [Step 2: Clone Locally & Install Dependencies](#step-2-clone-locally--install-dependencies)
4. [Step 3: Create a Feature Branch](#step-3-create-a-feature-branch)
5. [Step 4: Develop Your UI Feature](#step-4-develop-your-ui-feature)
6. [Step 5: Verify Code Quality](#step-5-verify-code-quality)
7. [Step 6: Commit & Push Your Changes](#step-6-commit--push-your-changes)
8. [Step 7: Open a Pull Request](#step-7-open-a-pull-request)
9. [Step 8: Review Process & Portfolio Showcasing](#step-8-review-process--portfolio-showcasing)
10. [Helpful Git Commands Cheat Sheet](#helpful-git-commands-cheat-sheet)

---

## 1. Prerequisites

Ensure your local development environment has:
- **Git:** [Download & install Git](https://git-scm.com/)
- **Node.js:** `v22.0.0` or higher ([Download Node.js](https://nodejs.org/))
- **npm:** `v10.0.0` or higher (bundled with Node.js)
- A modern code editor (such as VS Code or WebStorm)
- A [GitHub](https://github.com/) account

Verify your installations in your terminal:
```bash
node -v
npm -v
git --version
```

---

## Step 1: Fork the Repository

Forking creates a standalone, independent copy of the workshop repository under your personal GitHub account. This enables you to work freely, publish commits to your personal profile, and showcase your contributions to future employers and recruiters.

1. Navigate to the official Workshop Template repository:  
   👉 `https://github.com/unlockhertech/uht-workshop-template`
2. In the top-right corner of the page, click the **Fork** button.
3. Under **Owner**, select your personal GitHub username.
4. Leave the repository name as `uht-workshop-template` (or customize it if desired).
5. Ensure **"Copy the `main` branch only"** is checked.
6. Click **Create fork**.

GitHub will redirect you to your newly created fork at:  
`https://github.com/<your-username>/uht-workshop-template`

---

## Step 2: Clone Locally & Install Dependencies

Next, download your forked repository to your local machine and start the development environment.

### 1. Clone your fork
Replace `<your-username>` with your GitHub handle:
```bash
git clone https://github.com/<your-username>/uht-workshop-template.git
cd uht-workshop-template
```

### 2. Configure the upstream remote
Connecting your local repo to the original workshop repository ("upstream") makes it simple to pull future updates and sync changes:
```bash
git remote add upstream https://github.com/unlockhertech/uht-workshop-template.git
```

Verify your remotes are configured correctly:
```bash
git remote -v
```
*(You should see `origin` pointing to your fork and `upstream` pointing to `unlockhertech/uht-workshop-template`.)*

### 3. Install project dependencies
```bash
npm install
```

### 4. Launch the local development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. Navigate to `/sandbox` to explore the interactive component sandbox!

---

## Step 3: Create a Feature Branch

Always build new features in dedicated branches rather than working directly on `main`. This isolates your changes, keeps your history clean, and makes opening Pull Requests seamless.

1. Ensure your local `main` branch is clean and up to date:
   ```bash
   git checkout main
   git pull origin main
   ```

2. Create and switch to a descriptive feature branch (e.g., `feat/resource-library` or `feat/event-filters`):
   ```bash
   git checkout -b feat/<your-feature-name>
   ```

---

## Step 4: Develop Your UI Feature

We provide a self-contained feature architecture designed for rapid, conflict-free collaboration.

### 1. Scaffold your feature
Duplicate the starter template in `src/features/_template/` into a new folder named after your feature:
```bash
# Example for a resources filter feature:
cp -r src/features/_template src/features/<your-feature-name>
```

### 2. Implement your component logic
Keep all code, subcomponents, hooks, and tests encapsulated within `src/features/<your-feature-name>/`:
- `FeatureMain.tsx`: The primary container component for your feature.
- `components/`: Smaller modular subcomponents.
- `hooks/`: Custom state management and simulated API querying.
- `types.ts`: TypeScript data structures and component prop contracts.
- `FeatureMain.test.tsx`: Vitest and Testing Library unit tests.

### 3. Access simulated data
Use the built-in mock data layer (`src/mocks/` or `useMockData()`) to populate your UI with realistic jobs, events, mentors, and resources without needing backend credentials or live API keys.

### 4. Register your feature in the Sandbox
Open `src/features/registry.ts` and add your feature to `FEATURE_REGISTRY`:
```tsx
import { FeatureMain as MyFeature } from './<your-feature-name>/FeatureMain';

export const FEATURE_REGISTRY: FeatureModule[] = [
  // ...other features
  {
    id: '<your-feature-name>',
    title: 'My Feature Title',
    description: 'A brief description of what this feature does.',
    category: 'Community', // 'Career' | 'Mentorship' | 'Learning' | 'Community' | 'Tools'
    author: 'Your Name (@your-github-username)',
    component: MyFeature,
  },
];
```

Visit [http://localhost:5173/sandbox](http://localhost:5173/sandbox) to preview and test your feature in desktop, tablet, and mobile viewports.

---

## Step 5: Verify Code Quality

Before committing and submitting your work, run our automated quality checks. Passing these locally ensures your Pull Request succeeds immediately in our Continuous Integration (CI) pipeline.

Run each of the following commands:

```bash
# 1. Typecheck: Verify strict TypeScript compilation
npm run typecheck

# 2. Lint: Validate code style and ESLint rules
npm run lint

# 3. Test: Run automated unit and integration tests
npm run test

# 4. Build: Ensure the production bundle compiles cleanly
npm run build
```

### Core Standards Checklist:
- ✅ **Component Props:** Wrap component prop definitions with `Readonly<Props>`.
- ✅ **Accessible Controls:** Form inputs must have matching `<label htmlFor="...">` and buttons must specify `type="button"` or `type="submit"`.
- ✅ **No Hardcoded Secrets:** Rely exclusively on mock data fixtures (`mockClient` / `useMockData`).
- ✅ **Isolated Scope:** All custom styles and components should reside in your feature folder.

---

## Step 6: Commit & Push Your Changes

When your code is tested and ready, commit your changes using clear, descriptive messages following conventional commit standards.

1. Stage your changes:
   ```bash
   git add .
   ```

2. Check staged files to ensure only intended changes are included:
   ```bash
   git status
   ```

3. Commit with a meaningful message:
   ```bash
   git commit -m "feat(<your-feature-name>): add interactive filter controls and responsive UI"
   ```

4. Push your branch to your GitHub fork:
   ```bash
   git push -u origin feat/<your-feature-name>
   ```

---

## Step 7: Open a Pull Request

Now you are ready to propose your changes to the main Workshop Template repository!

1. Go to your fork on GitHub: `https://github.com/<your-username>/uht-workshop-template`.
2. A yellow banner will appear showing your recently pushed branch. Click **"Compare & pull request"**.  
   *(If you don't see the banner, switch to the **Pull requests** tab and click **New pull request**.)*
3. Verify the base and head branches:
   - **Base repository:** `unlockhertech/uht-workshop-template`
   - **Base branch:** `main`
   - **Head repository:** `<your-username>/uht-workshop-template`
   - **Compare branch:** `feat/<your-feature-name>`
4. Title your PR clearly, e.g., `feat(ui): add <your-feature-name> component`.
5. Complete the pre-filled **Pull Request Template**:
   - Provide a concise summary of your feature.
   - Attach desktop and mobile screenshots or a short GIF/screen recording.
   - Complete the quality checklist.
6. Click **Create pull request**.

### Example Pull Request Description

Here is an example of how your filled Pull Request description should look (also available in [`.github/PULL_REQUEST_TEMPLATE_EXAMPLE.md`](./.github/PULL_REQUEST_TEMPLATE_EXAMPLE.md)):

```markdown
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
```

---

## Step 8: Review Process & Portfolio Showcasing

### Continuous Integration (CI) Checks
Once opened, GitHub Actions will automatically run the CI workflow (`typecheck`, `lint`, `test`, `build`). If any check fails, click **Details** in GitHub to view logs, fix the issue locally, and push an update:
```bash
# Make fixes locally, then:
git add .
git commit -m "fix: resolve lint and test warnings"
git push origin feat/<your-feature-name>
```
*(Your PR will automatically update with new commits.)*

### Mentor Review & Feedback
Workshop mentors will review your code, provide helpful feedback, and approve your submission. Feel free to ask questions directly in the PR comments!

### Showcase Your Achievement
After your PR is reviewed and merged:
- 🌟 **Star the repository** to support the community.
- 💼 **Add to your CV/Portfolio:** Include a link to your fork and merged PR as concrete evidence of your open-source React, TypeScript, and Tailwind CSS development skills.
- 📢 **Share on LinkedIn / X (Twitter):** Share a screenshot of your feature in the Sandbox and tag **Unlock Her Tech**!

---

## Helpful Git Commands Cheat Sheet

| Action | Command |
| :--- | :--- |
| **Check current status** | `git status` |
| **Switch to a new branch** | `git checkout -b feat/<name>` |
| **Switch to an existing branch** | `git checkout <branch-name>` |
| **Sync `main` with upstream** | `git checkout main && git fetch upstream && git merge upstream/main` |
| **Push new branch to fork** | `git push -u origin feat/<name>` |
| **View configured remotes** | `git remote -v` |
| **Discard local unstaged edits** | `git restore .` |

---

Thank you for contributing your time, creativity, and talent to the **Unlock Her Tech** community! If you need any assistance during the workshop, reach out to any mentor or organizer. Happy coding!
