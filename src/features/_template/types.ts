export interface TemplateItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  createdAt: string;
}

export interface TemplateFeatureState {
  items: TemplateItem[];
  selectedItem: TemplateItem | null;
  searchQuery: string;
  filterCategory: string;
}
