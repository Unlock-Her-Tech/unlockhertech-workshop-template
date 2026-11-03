# Unlock Her Tech — Workshop Feature Template Repository

> **Official Workshop Boilerplate & Developer Guide**  
> An isolated, dependency-free development template for building and testing features to contribute to [Unlock Her Tech](https://unlockhertech.com).

---

## 🎯 Purpose & Overview

This repository is designed for workshop participants (up to 25 developers) to build production-ready features without requiring access to our core production repository, CMS credentials, or live databases.

### Key Capabilities Included
- **Mock Data Layer (`src/mocks/`):** Type-safe JSON fixtures for jobs, events, blog posts, career playbooks, and mentor profiles.
- **In-Memory Mock Client (`src/mocks/mockClient.ts`):** Lightweight query methods simulating latency, search, filtering, and serverless form actions.
- **Interactive Sandbox (`/sandbox`):** Real-time feature previewer with responsive viewport switching (Desktop, Tablet, Mobile) and live data inspector.
- **Scaffold Template (`src/features/_template/`):** Pre-built feature boilerplate with types, custom hooks, accessible modals, and unit tests.
- **Reference Feature (`src/features/mentorship-finder/`):** Working example demonstrating best practices for filtering, dialogs, and test suites.
- **Automated CI Workflow (`.github/workflows/ci.yml`):** Automatic validation on pull requests (typecheck, lint, test, and build).

---

## 🚀 Quick Start

### 1. Requirements
- **Node.js:** `v22.0.0` or higher
- **npm:** `v10.0.0` or higher

### 2. Installation & Running Locally

```bash
# 1. Clone your generated repository
git clone <your-workshop-repo-url>
cd unlockhertech-workshop-template

# 2. Install dependencies
npm install

# 3. Launch Vite development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser. Navigate to **Sandbox Preview** (`/sandbox`) to see live features.

---

## 🛠️ Developer Commands

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server (`http://localhost:5173`) |
| `npm run typecheck` | Validates TypeScript types across the codebase |
| `npm run lint` | Runs ESLint to check for code style and quality rules |
| `npm run test` | Executes unit tests via Vitest and Testing Library |
| `npm run test:watch` | Runs Vitest in interactive watch mode |
| `npm run build` | Compiles production-ready bundle to `dist/` |
| `npm run preview` | Previews production build locally |

---

## 📁 Repository Directory Structure

```text
workshop-template/
├── .github/
│   ├── workflows/
│   │   └── ci.yml                     # Automated CI pipeline (typecheck, lint, test, build)
│   └── pull_request_template.md       # Standardized PR checklist and screenshot requirements
├── public/                            # Static assets and favicon
├── src/
│   ├── app/                           # Core Design System & Shared UI Primitives
│   │   ├── components/                # Accessible Button, Card, Badge, Modal, Input, Navbar, Footer
│   │   ├── context/                   # MockDataProvider providing reactive mock state
│   │   ├── routes.ts                  # Route paths constants
│   │   └── types.ts                   # Core domain TypeScript interfaces
│   ├── features/                      # Pluggable Feature Slices
│   │   ├── _template/                 # Starter scaffold for new features (copy this!)
│   │   │   ├── components/            # Feature-specific subcomponents
│   │   │   ├── hooks/                 # Custom state and query hooks
│   │   │   ├── types.ts               # Feature interface extensions
│   │   │   ├── FeatureMain.tsx        # Feature root entry container
│   │   │   └── FeatureMain.test.tsx   # Vitest unit & integration tests
│   │   ├── mentorship-finder/         # Complete working reference feature
│   │   └── registry.ts                # Central feature registry for Sandbox discovery
│   ├── mocks/                         # Static Fixtures & Simulated API Client
│   │   ├── data/                      # mockJobs, mockEvents, mockPosts, mockResources, mockMentors
│   │   └── mockClient.ts              # In-memory query resolver with artificial latency
│   ├── sandbox/                       # Workshop Interactive Sandbox Route
│   │   └── SandboxPage.tsx            # Viewport frame, module switcher, and JSON data inspector
│   ├── test/                          # Test Setup & Environment Configuration
│   │   ├── setup.ts                   # JSDOM and Testing Library setup
│   │   └── App.test.tsx               # Root App smoke tests
│   ├── App.tsx                        # Application layout with Router and Navbar
│   ├── index.css                      # Tailwind v4 theme variables and brand palette
│   └── main.tsx                       # Vite React 19 entry point
├── eslint.config.js                   # Flat ESLint configuration
├── package.json                       # Project manifest
├── tsconfig.json                      # Strict TypeScript root configuration
└── vite.config.ts                     # Bundler, Tailwind v4, and Vitest configuration
```

---

## 🧩 Step-by-Step: Building Your Feature

### Step 1: Duplicate the Feature Template
Copy `src/features/_template/` into a new folder named after your feature:

```bash
# Example for a bookmarks feature:
cp -r src/features/_template src/features/my-feature-name
```

### Step 2: Encapsulate Your Feature Code
Keep all subcomponents, hooks, and test files inside your feature folder (`src/features/<my-feature-name>/`).
- Define your data contracts in `types.ts`.
- Fetch or manipulate data using `mockClient` or `useMockData()`.
- Assemble your UI inside `FeatureMain.tsx`.

### Step 3: Register into the Sandbox
Open `src/features/registry.ts` and register your new module:

```tsx
import { FeatureMain as MyFeature } from './my-feature-name/FeatureMain';

export const FEATURE_REGISTRY: FeatureModule[] = [
  // ...existing features
  {
    id: 'my-feature-name',
    title: 'My Custom Feature',
    description: 'Brief description of what this feature does.',
    category: 'Community',
    author: 'Your Name (@github-username)',
    component: MyFeature,
  },
];
```

Open `/sandbox` in your browser and select your feature from the top module bar to preview it immediately!

### Step 4: Write Unit Tests
Add tests in `src/features/<my-feature-name>/FeatureMain.test.tsx`. Run `npm run test` to ensure they pass.

---

## 🛡️ Code Quality & Accessibility Standards

To ensure smooth merging into the live Unlock Her Tech codebase, follow these rules:

1. **Explicit Button `type`:** Always write `type="button"` or `type="submit"` on `<button>` elements.
2. **Readonly Props:** Type component props as `Readonly<Props>` (e.g. `export function MyCard({ title }: Readonly<MyCardProps>)`).
3. **Form Controls:** Every `<input>` or `<textarea>` must have an `id` matching a `<label htmlFor="...">`.
4. **Native Dialog Modals:** Modals must use `<dialog open ... aria-labelledby="...">` (use the provided `Modal` component).
5. **No Hardcoded Production Secrets:** Only use `mockClient` and local fixtures. Never add real API keys or endpoints.
6. **No Array Index Keys:** Use unique IDs (`key={item.id}`) when rendering lists with `.map()`.

---

## ⚙️ GitHub Template Repository Setup Instructions (For Organizers)

To publish this folder as a standalone GitHub Template Repository:

1. **Initialize Git & Push to GitHub:**
   ```bash
   cd workshop-template
   git init
   git add .
   git commit -m "feat: initial workshop template repository"
   git remote add origin https://github.com/unlockhertech/workshop-template.git
   git branch -M main
   git push -u origin main
   ```
2. **Enable Template Mode in GitHub:**
   - In GitHub, go to your repository **Settings** > **General**.
   - Check the **Template repository** box.
3. **Participant Access:**
   - Share the repository URL with attendees.
   - Instruct attendees to click the green **"Use this template"** button to generate their own personal workspace repository.
