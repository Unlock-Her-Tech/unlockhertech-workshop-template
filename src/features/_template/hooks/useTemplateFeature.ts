import { useState, useMemo } from 'react';
import type { TemplateItem } from '../types';

const INITIAL_MOCK_ITEMS: TemplateItem[] = [
  {
    id: 'item-1',
    title: 'Sample Feature Item One',
    category: 'Engineering',
    description: 'This is an example boilerplate item demonstrating feature encapsulation.',
    tags: ['React', 'TypeScript'],
    createdAt: '2026-11-01',
  },
  {
    id: 'item-2',
    title: 'Sample Feature Item Two',
    category: 'Career',
    description: 'Demonstrating responsive card layout and modal detail viewer.',
    tags: ['Community', 'Mentorship'],
    createdAt: '2026-11-02',
  },
];

export function useTemplateFeature() {
  const [items] = useState<TemplateItem[]>(INITIAL_MOCK_ITEMS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<TemplateItem | null>(null);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [items, searchQuery, selectedCategory]);

  return {
    items: filteredItems,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedItem,
    setSelectedItem,
  };
}
