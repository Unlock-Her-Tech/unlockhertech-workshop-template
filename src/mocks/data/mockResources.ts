import type { ResourcePlaybook } from '../../app/types';

export const MOCK_RESOURCES: ResourcePlaybook[] = [
  {
    id: 'res-1',
    title: 'Senior Engineering Promotion Dossier Template',
    category: 'Career Growth',
    format: 'Template',
    description:
      'A structured framework to document high-impact engineering outcomes, architecture wins, and cross-functional leadership.',
    downloadCount: 1420,
    tags: ['Promotion', 'Leadership', 'Dossier'],
    coverColor: '#B42970',
  },
  {
    id: 'res-2',
    title: 'System Design Interview Cheatsheet',
    category: 'Technical Interview',
    format: 'Cheatsheet',
    description:
      'Quick-reference guide covering back-of-the-envelope calculations, caching patterns, database sharding, and consensus protocols.',
    downloadCount: 2890,
    tags: ['System Design', 'Cheatsheet', 'Architecture'],
    coverColor: '#5F9DE3',
  },
];
