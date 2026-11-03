import { useTemplateFeature } from './hooks/useTemplateFeature';
import { TemplateCard } from './components/TemplateCard';
import { TemplateModal } from './components/TemplateModal';
import { Input } from '../../app/components/Input';
import { Button } from '../../app/components/Button';
import { HiMagnifyingGlass, HiAdjustmentsHorizontal } from 'react-icons/hi2';

const CATEGORIES = ['All', 'Engineering', 'Career'];

export function FeatureMain() {
  const {
    items,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedItem,
    setSelectedItem,
  } = useTemplateFeature();

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-wider font-bold text-brand-coral bg-brand-coral/10 px-3 py-1 rounded-full border border-brand-coral/20">
            Boilerplate Feature Scaffold
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-3 mb-2">
            Template Feature Module
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Duplicate this folder (<code className="bg-stone-100 px-1.5 py-0.5 rounded text-xs font-mono">src/features/_template</code>) to start building your assigned feature slice.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="mt-6 pt-6 border-t border-stone-100 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
          <div className="max-w-xs w-full">
            <Input
              id="template-search-input"
              label="Search items"
              hideLabel
              placeholder="Search items by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs text-stone-400 font-semibold flex items-center gap-1">
              <HiAdjustmentsHorizontal className="w-4 h-4" /> Filter:
            </span>
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                type="button"
                variant={selectedCategory === cat ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Item Grid */}
      {items.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-stone-200">
          <HiMagnifyingGlass className="w-10 h-10 text-stone-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-gray-900 mb-1">No items found</h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            Try adjusting your search query or switching category filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <TemplateCard
              key={item.id}
              item={item}
              onSelect={(selected) => setSelectedItem(selected)}
            />
          ))}
        </div>
      )}

      {/* Detail Modal */}
      <TemplateModal
        item={selectedItem}
        isOpen={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}

export default FeatureMain;
