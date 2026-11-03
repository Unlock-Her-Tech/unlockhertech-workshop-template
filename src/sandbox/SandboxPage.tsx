import { useState } from 'react';
import { FEATURE_REGISTRY } from '../features/registry';
import { useMockData } from '../app/context/MockDataContext';
import { Button } from '../app/components/Button';
import { Badge } from '../app/components/Badge';
import {
  HiCodeBracket,
  HiDevicePhoneMobile,
  HiDeviceTablet,
  HiComputerDesktop,
  HiArrowsPointingOut,
  HiCircleStack,
  HiCheckCircle,
  HiSparkles,
} from 'react-icons/hi2';

type ViewportMode = 'full' | 'desktop' | 'tablet' | 'mobile';

export function SandboxPage() {
  const [activeFeatureId, setActiveFeatureId] = useState<string>(
    FEATURE_REGISTRY[0]?.id ?? 'mentorship-finder'
  );
  const [viewportMode, setViewportMode] = useState<ViewportMode>('full');
  const [showDataInspector, setShowDataInspector] = useState(false);
  const [activeDataTab, setActiveDataTab] = useState<'mentors' | 'jobs' | 'events' | 'posts'>('mentors');

  const mockData = useMockData();
  const currentFeature =
    FEATURE_REGISTRY.find((f) => f.id === activeFeatureId) ?? FEATURE_REGISTRY[0];

  const FeatureComponent = currentFeature?.component;

  const viewportWidthClass = {
    full: 'w-full',
    desktop: 'max-w-5xl mx-auto',
    tablet: 'max-w-md mx-auto',
    mobile: 'max-w-xs mx-auto',
  }[viewportMode];

  return (
    <div className="min-h-screen bg-stone-50 py-8 px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Sandbox Controller Bar */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-stone-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-coral bg-brand-coral/10 px-3 py-1 rounded-full border border-brand-coral/20">
                Interactive Showcase
              </span>
              <Badge variant="blue">{FEATURE_REGISTRY.length} Features Registered</Badge>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2 tracking-tight">
              Workshop Feature Sandbox
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
              Preview feature modules in real-time, test responsive viewports, and inspect mock API responses with zero production dependencies.
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Viewport Switcher */}
            <div className="flex items-center bg-stone-100 p-1 rounded-2xl border border-stone-200">
              <button
                type="button"
                onClick={() => setViewportMode('full')}
                className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewportMode === 'full' ? 'bg-white text-gray-900 shadow-xs' : 'text-stone-500 hover:text-gray-900'
                }`}
                title="Full Responsive"
              >
                <HiArrowsPointingOut className="w-4 h-4" />
                <span className="hidden sm:inline">Full</span>
              </button>
              <button
                type="button"
                onClick={() => setViewportMode('desktop')}
                className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewportMode === 'desktop' ? 'bg-white text-gray-900 shadow-xs' : 'text-stone-500 hover:text-gray-900'
                }`}
                title="Desktop (1024px)"
              >
                <HiComputerDesktop className="w-4 h-4" />
                <span className="hidden sm:inline">Desktop</span>
              </button>
              <button
                type="button"
                onClick={() => setViewportMode('tablet')}
                className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewportMode === 'tablet' ? 'bg-white text-gray-900 shadow-xs' : 'text-stone-500 hover:text-gray-900'
                }`}
                title="Tablet (448px)"
              >
                <HiDeviceTablet className="w-4 h-4" />
                <span className="hidden sm:inline">Tablet</span>
              </button>
              <button
                type="button"
                onClick={() => setViewportMode('mobile')}
                className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  viewportMode === 'mobile' ? 'bg-white text-gray-900 shadow-xs' : 'text-stone-500 hover:text-gray-900'
                }`}
                title="Mobile (320px)"
              >
                <HiDevicePhoneMobile className="w-4 h-4" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
            </div>

            {/* Mock Data Inspector Toggle */}
            <Button
              type="button"
              variant={showDataInspector ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setShowDataInspector(!showDataInspector)}
            >
              <HiCircleStack className="w-4 h-4" />
              <span>Mock Data</span>
            </Button>
          </div>
        </div>

        {/* Feature Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider shrink-0 mr-2">
            Module:
          </span>
          {FEATURE_REGISTRY.map((feature) => (
            <button
              key={feature.id}
              type="button"
              onClick={() => setActiveFeatureId(feature.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2 border ${
                activeFeatureId === feature.id
                  ? 'bg-brand-coral text-white border-brand-coral shadow-xs'
                  : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
              }`}
            >
              <span>{feature.title}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeFeatureId === feature.id
                    ? 'bg-white/20 text-white'
                    : 'bg-stone-200 text-stone-600'
                }`}
              >
                {feature.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mock Data Inspector Drawer */}
      {showDataInspector && (
        <div className="max-w-7xl mx-auto bg-neutral-900 text-stone-200 rounded-3xl p-6 border border-neutral-800 shadow-xl space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <HiCircleStack className="w-5 h-5 text-brand-yellow" />
              <h3 className="font-bold text-white text-sm">
                Mock Data Store Inspector (Local Fixtures)
              </h3>
            </div>
            <div className="flex items-center gap-2">
              {(['mentors', 'jobs', 'events', 'posts'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveDataTab(tab)}
                  className={`text-xs px-3 py-1 rounded-xl font-medium transition-colors cursor-pointer ${
                    activeDataTab === tab
                      ? 'bg-brand-coral text-white'
                      : 'bg-neutral-800 text-stone-400 hover:text-white'
                  }`}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="max-h-72 overflow-y-auto bg-black/60 rounded-2xl p-4 font-mono text-xs text-green-400 border border-neutral-800">
            <pre>
              {JSON.stringify(
                activeDataTab === 'mentors'
                  ? mockData.mentors
                  : activeDataTab === 'jobs'
                    ? mockData.jobs
                    : activeDataTab === 'events'
                      ? mockData.events
                      : mockData.posts,
                null,
                2
              )}
            </pre>
          </div>
        </div>
      )}

      {/* Viewport Frame */}
      <main className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-300 ${viewportWidthClass} ${
            viewportMode !== 'full'
              ? 'p-4 sm:p-6 bg-stone-200/50 rounded-3xl border-2 border-dashed border-stone-300'
              : ''
          }`}
        >
          {FeatureComponent ? (
            <FeatureComponent />
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-stone-200">
              <p className="text-stone-500">Feature not found.</p>
            </div>
          )}
        </div>
      </main>

      {/* Workshop Guidelines & Checklist Footer Info */}
      <section className="max-w-7xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80">
        <h3 className="text-base font-bold text-gray-900 flex items-center gap-2 mb-4">
          <HiSparkles className="w-5 h-5 text-brand-coral" />
          Workshop Developer Guide & Quality Rules
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-600">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-1.5">
            <h4 className="font-bold text-gray-900 text-sm flex items-center gap-1.5">
              <HiCodeBracket className="w-4 h-4 text-brand-coral" />
              1. Feature Encapsulation
            </h4>
            <p>
              Keep all code inside <code className="font-mono bg-stone-200 px-1 py-0.5 rounded">src/features/&lt;your-feature&gt;/</code>. Do not edit core application context files.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-1.5">
            <h4 className="font-bold text-gray-900 text-sm flex items-center gap-1.5">
              <HiCircleStack className="w-4 h-4 text-brand-yellow" />
              2. Use Mock Client
            </h4>
            <p>
              Use <code className="font-mono bg-stone-200 px-1 py-0.5 rounded">mockClient</code> from <code className="font-mono bg-stone-200 px-1 py-0.5 rounded">src/mocks/</code>. Never make live network requests to production endpoints.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-100 space-y-1.5">
            <h4 className="font-bold text-gray-900 text-sm flex items-center gap-1.5">
              <HiCheckCircle className="w-4 h-4 text-brand-green" />
              3. CI & Quality Gates
            </h4>
            <p>
              Run <code className="font-mono bg-stone-200 px-1 py-0.5 rounded">npm run test</code> and <code className="font-mono bg-stone-200 px-1 py-0.5 rounded">npm run typecheck</code> before opening your pull request.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SandboxPage;
