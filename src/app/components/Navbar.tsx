import { Link, useLocation } from 'react-router';
import { HiSparkles, HiCodeBracket } from 'react-icons/hi2';

export function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-coral-deep to-brand-coral flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
            <HiSparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-gray-900 tracking-tight text-lg">
                Unlock Her Tech
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-brand-coral/10 text-brand-coral border border-brand-coral/20">
                Workshop Template
              </span>
            </div>
            {/* 5-Dot Flourish */}
            <div className="flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-coral" />
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            </div>
          </div>
        </Link>

        {/* Navigation Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/sandbox"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              location.pathname === '/sandbox'
                ? 'bg-brand-coral text-white shadow-xs'
                : 'bg-stone-100 text-gray-700 hover:bg-stone-200'
            }`}
          >
            <HiCodeBracket className="w-4 h-4" />
            <span>Sandbox Preview</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
