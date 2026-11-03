import type { CommunityEvent } from '../../app/types';

export const MOCK_EVENTS: CommunityEvent[] = [
  {
    id: 'event-1',
    title: 'She Leads Tech: System Design & Microservices Mastery',
    slug: 'system-design-microservices',
    date: '2026-11-12',
    time: '18:00 GMT',
    location: 'Live on Zoom & Discord Stage',
    category: 'Workshop',
    isLive: false,
    speaker: {
      name: 'Maya Lin',
      role: 'Principal Systems Architect',
      company: 'Cloudflare',
    },
    registrationUrl: 'https://luma.com/unlockhertech-sysdesign',
    description:
      'Learn how to design low-latency, fault-tolerant distributed systems through real-world architectural case studies.',
    capacity: 100,
    registeredCount: 84,
  },
  {
    id: 'event-2',
    title: 'Breaking Into Senior Engineering: Salary & Offer Negotiation',
    slug: 'salary-negotiation-masterclass',
    date: '2026-11-19',
    time: '19:00 GMT',
    location: 'Virtual Workshop',
    category: 'Panel',
    isLive: false,
    speaker: {
      name: 'Amina Yusuf',
      role: 'VP of Engineering',
      company: 'Fintech Vanguard',
    },
    registrationUrl: 'https://luma.com/unlockhertech-negotiation',
    description:
      'Demystifying equity grants, bonus structures, and negotiation tactics for engineering leadership transitions.',
    capacity: 150,
    registeredCount: 142,
  },
  {
    id: 'event-3',
    title: 'Frontend Architecture Pairing: React 19 & Next-Gen Patterns',
    slug: 'react-19-pairing',
    date: '2026-11-26',
    time: '17:30 GMT',
    location: 'Discord Voice & Visual Studio Live Share',
    category: 'Pair Programming',
    isLive: true,
    speaker: {
      name: 'Elena Rostova',
      role: 'Staff UI Architect',
      company: 'Figma',
    },
    registrationUrl: 'https://discord.gg/7yC78Yhem6',
    description:
      'Hands-on interactive pair programming session building modern React 19 component patterns with zero regressions.',
    capacity: 50,
    registeredCount: 48,
  },
];
