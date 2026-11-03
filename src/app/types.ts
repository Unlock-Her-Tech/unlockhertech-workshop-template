import type React from 'react';

export interface JobPosting {
  id: string;
  title: string;
  company: string;
  location: string;
  isRemote: boolean;
  salaryMin?: number;
  salaryMax?: number;
  currency: string;
  department: string;
  employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  tags: string[];
  applyUrl: string;
  postedDate: string;
  description: string;
}

export interface CommunityEvent {
  id: string;
  title: string;
  slug: string;
  date: string;
  time: string;
  location: string;
  category: 'Workshop' | 'Panel' | 'Hackathon' | 'Networking' | 'Pair Programming';
  isLive: boolean;
  speaker: {
    name: string;
    role: string;
    company: string;
    avatarUrl?: string;
  };
  registrationUrl: string;
  description: string;
  capacity?: number;
  registeredCount: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
  };
  publishedAt: string;
  readTimeMinutes: number;
  tags: string[];
  excerpt: string;
  content: string;
}

export interface ResourcePlaybook {
  id: string;
  title: string;
  category: string;
  format: 'PDF Guide' | 'Cheatsheet' | 'Template';
  description: string;
  downloadCount: number;
  tags: string[];
  coverColor: string;
}

export interface MentorProfile {
  id: string;
  name: string;
  title: string;
  company: string;
  yearsOfExperience: number;
  avatarUrl: string;
  skills: string[];
  bio: string;
  availableFor: ('1-on-1 Mentorship' | 'Resume Review' | 'Mock Interview' | 'Architecture Pairing' | 'Career Strategy')[];
  calendlyUrl: string;
}

export interface FeatureModule {
  id: string;
  title: string;
  description: string;
  category: 'Community' | 'Career' | 'Learning' | 'Tools';
  author: string;
  component: React.ComponentType;
}
