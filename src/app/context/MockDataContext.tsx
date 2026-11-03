import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockClient } from '../../mocks/mockClient';
import type {
  JobPosting,
  CommunityEvent,
  BlogPost,
  ResourcePlaybook,
  MentorProfile,
} from '../types';

interface MockDataContextType {
  jobs: JobPosting[];
  events: CommunityEvent[];
  posts: BlogPost[];
  resources: ResourcePlaybook[];
  mentors: MentorProfile[];
  loading: boolean;
  refreshData: () => Promise<void>;
}

const MockDataContext = createContext<MockDataContextType | undefined>(undefined);

export function MockDataProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [events, setEvents] = useState<CommunityEvent[]>([]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [resources, setResources] = useState<ResourcePlaybook[]>([]);
  const [mentors, setMentors] = useState<MentorProfile[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const [fetchedJobs, fetchedEvents, fetchedPosts, fetchedResources, fetchedMentors] =
        await Promise.all([
          mockClient.getJobs(),
          mockClient.getEvents(),
          mockClient.getPosts(),
          mockClient.getResources(),
          mockClient.getMentors(),
        ]);
      setJobs(fetchedJobs);
      setEvents(fetchedEvents);
      setPosts(fetchedPosts);
      setResources(fetchedResources);
      setMentors(fetchedMentors);
    } catch (err) {
      console.warn('Failed to load mock data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <MockDataContext.Provider
      value={{
        jobs,
        events,
        posts,
        resources,
        mentors,
        loading,
        refreshData: loadData,
      }}
    >
      {children}
    </MockDataContext.Provider>
  );
}

export function useMockData() {
  const context = useContext(MockDataContext);
  if (!context) {
    throw new Error('useMockData must be used within a MockDataProvider');
  }
  return context;
}
