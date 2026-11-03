import type React from 'react';
import type { FeatureModule } from '../app/types';

// Feature Components
import { FeatureMain as TemplateFeature } from './_template/FeatureMain';
import { FeatureMain as MentorshipFinderFeature } from './mentorship-finder/FeatureMain';

/**
 * FEATURE REGISTRY:
 * Workshop participants register their completed or in-progress feature slices here.
 * The Sandbox page will automatically surface all registered modules in its switcher.
 */
export const FEATURE_REGISTRY: FeatureModule[] = [
  {
    id: 'mentorship-finder',
    title: 'Mentorship Finder',
    description: '1-on-1 engineering mentor directory with skill search and booking workflow.',
    category: 'Community',
    author: 'Unlock Her Tech Core',
    component: MentorshipFinderFeature as React.ComponentType,
  },
  {
    id: 'template-scaffold',
    title: 'Starter Template Scaffold',
    description: 'Empty starter feature slice ready to be cloned for new features.',
    category: 'Tools',
    author: 'Workshop Template',
    component: TemplateFeature as React.ComponentType,
  },
];

export function getFeatureById(id: string): FeatureModule | undefined {
  return FEATURE_REGISTRY.find((f) => f.id === id);
}
