import { createContext, useContext } from 'react';
import type {
  JobPosting,
  CommunityEvent,
  BlogPost,
  ResourcePlaybook,
  MentorProfile,
} from '../types';

export interface MockDataContextType {
  jobs: JobPosting[];
  events: CommunityEvent[];
  posts: BlogPost[];
  resources: ResourcePlaybook[];
  mentors: MentorProfile[];
  loading: boolean;
  refreshData: () => Promise<void>;
}

export const MockDataContext = createContext<MockDataContextType | undefined>(undefined);

export function useMockData() {
  const context = useContext(MockDataContext);
  if (!context) {
    throw new Error('useMockData must be used within a MockDataProvider');
  }
  return context;
}
