import type { BlogPost } from '../../app/types';

export const MOCK_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Deconstructing Frontend Architecture: Avoiding Monolithic State in React',
    slug: 'frontend-architecture-monolithic-state',
    author: {
      name: 'Sarah Chen',
      role: 'Staff Frontend Engineer',
    },
    publishedAt: '2026-10-15',
    readTimeMinutes: 7,
    tags: ['React', 'Architecture', 'State Management', 'TypeScript'],
    excerpt:
      'Why co-locating state by feature boundaries outperforms giant global stores in maintainability and velocity.',
    content:
      'Feature-slice architecture promotes modularity, testability, and isolated deployment workflows.',
  },
  {
    id: 'post-2',
    title: 'Cracking the System Design Interview: A Framework for Women in Tech',
    slug: 'system-design-interview-framework',
    author: {
      name: 'Kavita Patel',
      role: 'Lead Cloud Architect',
    },
    publishedAt: '2026-10-22',
    readTimeMinutes: 10,
    tags: ['System Design', 'Interviews', 'Career Growth', 'Cloud'],
    excerpt:
      'A repeatable, structured 4-step framework to navigate open-ended system design questions with confidence.',
    content:
      'Step 1: Clarify constraints & scope. Step 2: High-level architectural diagram. Step 3: Deep dive. Step 4: Bottleneck mitigation.',
  },
];
