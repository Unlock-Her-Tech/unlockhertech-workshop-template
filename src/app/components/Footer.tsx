export function Footer() {
  return (
    <footer className="bg-neutral-900 text-stone-300 py-12 border-t border-neutral-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-white text-base">
                Unlock Her Tech
              </span>
              <span className="text-xs text-stone-400">
                — Feature Engineering Workshop
              </span>
            </div>
            <p className="text-xs text-stone-400 max-w-md">
              Where Skills Grow And Voices Are Heard. Building inclusive tech tools
              with isolated local mock architectures.
            </p>
          </div>

          {/* 5-Color Flourish Bar */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-6 h-1 rounded-full bg-brand-coral" />
              <span className="w-6 h-1 rounded-full bg-brand-yellow" />
              <span className="w-6 h-1 rounded-full bg-brand-pink" />
              <span className="w-6 h-1 rounded-full bg-brand-green" />
              <span className="w-6 h-1 rounded-full bg-brand-blue" />
            </div>
            <span className="text-[11px] text-stone-400">
              Isolated Template Environment • Node 22+ & React 19
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
