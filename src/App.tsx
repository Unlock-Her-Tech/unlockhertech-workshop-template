import { Routes, Route, Link } from 'react-router';
import { Navbar } from './app/components/Navbar';
import { Footer } from './app/components/Footer';
import { MockDataProvider } from './app/context/MockDataContext';
import { SandboxPage } from './sandbox/SandboxPage';
import { FEATURE_REGISTRY } from './features/registry';
import { Card } from './app/components/Card';
import { Badge } from './app/components/Badge';
import { Button } from './app/components/Button';
import {
  HiSparkles,
  HiCodeBracket,
  HiCommandLine,
  HiRocketLaunch,
  HiCheckBadge,
} from 'react-icons/hi2';

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto space-y-6 pt-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-coral/10 border border-brand-coral/20 text-brand-coral text-xs font-bold uppercase tracking-wider">
          <HiSparkles className="w-4 h-4" />
          <span>Workshop Contributor Workspace</span>
        </div>

        <h1
          className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]"
          style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
        >
          Unlock Her Tech <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral via-brand-yellow to-brand-coral-light">
            Feature Development Template
          </span>
        </h1>

        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
          A zero-friction, isolated workspace for building and testing features locally with mock data fixtures, strict TypeScript contracts, and automated CI pipelines.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link to="/sandbox">
            <Button type="button" variant="primary" size="lg">
              <HiCodeBracket className="w-5 h-5 mr-2" />
              Open Workshop Sandbox
            </Button>
          </Link>
          <a
            href="https://github.com/unlockhertech"
            target="_blank"
            rel="noreferrer"
          >
            <Button type="button" variant="outline" size="lg">
              View Community Docs
            </Button>
          </a>
        </div>
      </section>

      {/* Quickstart 3-Step Guide */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            How to Build & Ship Your Feature
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Follow this 3-step workflow to develop locally and submit clean pull requests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-coral/10 text-brand-coral flex items-center justify-center font-black text-sm">
              01
            </div>
            <h3 className="font-bold text-gray-900 text-base">
              Duplicate Feature Scaffold
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Copy <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">src/features/_template/</code> to <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">src/features/&lt;your-feature&gt;/</code>.
            </p>
          </Card>

          <Card className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center font-black text-sm">
              02
            </div>
            <h3 className="font-bold text-gray-900 text-base">
              Register into Sandbox
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Add your feature container to <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">src/features/registry.ts</code> to preview it live in <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">/sandbox</code>.
            </p>
          </Card>

          <Card className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-green/10 text-green-700 flex items-center justify-center font-black text-sm">
              03
            </div>
            <h3 className="font-bold text-gray-900 text-base">
              Test & Submit PR
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Write unit tests in your feature folder and run <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">npm run test</code> before submitting your pull request.
            </p>
          </Card>
        </div>
      </section>

      {/* Available Registered Features Spotlight */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Registered Feature Modules
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              Explore reference features currently running inside the template.
            </p>
          </div>
          <Link to="/sandbox">
            <Button type="button" variant="outline" size="sm">
              Preview All in Sandbox →
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURE_REGISTRY.map((feature) => (
            <Card key={feature.id} interactive className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="coral">{feature.category}</Badge>
                  <span className="text-xs text-stone-400">by {feature.author}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>

              <Link to="/sandbox">
                <Button type="button" variant="primary" size="sm" className="w-full">
                  Launch in Sandbox
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Terminal Cheat Sheet */}
      <section className="bg-neutral-900 text-stone-200 rounded-3xl p-6 sm:p-8 border border-neutral-800 space-y-4 shadow-xl">
        <div className="flex items-center gap-2">
          <HiCommandLine className="w-5 h-5 text-brand-green" />
          <h3 className="font-bold text-white text-base sm:text-lg">
            Essential Workshop Commands
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
          <div className="bg-black/50 p-3.5 rounded-2xl border border-neutral-800 space-y-1">
            <span className="text-stone-400 block font-sans text-[11px]">Start Dev Server</span>
            <code className="text-green-400">npm run dev</code>
          </div>
          <div className="bg-black/50 p-3.5 rounded-2xl border border-neutral-800 space-y-1">
            <span className="text-stone-400 block font-sans text-[11px]">Run Unit Tests</span>
            <code className="text-green-400">npm run test</code>
          </div>
          <div className="bg-black/50 p-3.5 rounded-2xl border border-neutral-800 space-y-1">
            <span className="text-stone-400 block font-sans text-[11px]">Typecheck Code</span>
            <code className="text-green-400">npm run typecheck</code>
          </div>
          <div className="bg-black/50 p-3.5 rounded-2xl border border-neutral-800 space-y-1">
            <span className="text-stone-400 block font-sans text-[11px]">Lint Standards</span>
            <code className="text-green-400">npm run lint</code>
          </div>
        </div>
      </section>
    </div>
  );
}

export function App() {
  return (
    <MockDataProvider>
      <div className="min-h-screen flex flex-col bg-stone-50 text-gray-900">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sandbox" element={<SandboxPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </MockDataProvider>
  );
}

export default App;
