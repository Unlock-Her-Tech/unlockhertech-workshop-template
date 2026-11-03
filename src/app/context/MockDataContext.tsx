import React, { useState, useEffect, useCallback } from 'react';
import { mockClient } from '../../mocks/mockClient';
import type {
  JobPosting,
  CommunityEvent,
  BlogPost,
  ResourcePlaybook,
  MentorProfile,
} from '../types';
import { MockDataContext } from './useMockData';

export function MockDataProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [events, setEvents] = useState<CommunityEvent[]>([]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [resources, setResources] = useState<ResourcePlaybook[]>([]);
  const [mentors, setMentors] = useState<MentorProfile[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    let isMounted = true;
    Promise.all([
      mockClient.getJobs(),
      mockClient.getEvents(),
      mockClient.getPosts(),
      mockClient.getResources(),
      mockClient.getMentors(),
    ])
      .then(([fetchedJobs, fetchedEvents, fetchedPosts, fetchedResources, fetchedMentors]) => {
        if (!isMounted) return;
        setJobs(fetchedJobs);
        setEvents(fetchedEvents);
        setPosts(fetchedPosts);
        setResources(fetchedResources);
        setMentors(fetchedMentors);
        setLoading(false);
      })
      .catch((err) => {
        console.warn('Failed to load mock data:', err);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
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
