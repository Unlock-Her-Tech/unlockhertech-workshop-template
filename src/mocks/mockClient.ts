import { MOCK_JOBS } from './data/mockJobs';
import { MOCK_EVENTS } from './data/mockEvents';
import { MOCK_POSTS } from './data/mockPosts';
import { MOCK_RESOURCES } from './data/mockResources';
import { MOCK_MENTORS } from './data/mockMentors';
import type {
  JobPosting,
  CommunityEvent,
  BlogPost,
  ResourcePlaybook,
  MentorProfile,
} from '../app/types';

const SIMULATED_LATENCY_MS = 120;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const mockClient = {
  /**
   * Fetch job listings with simulated latency and optional search/remote filters
   */
  async getJobs(params?: {
    query?: string;
    remoteOnly?: boolean;
    department?: string;
  }): Promise<JobPosting[]> {
    await sleep(SIMULATED_LATENCY_MS);
    let jobs = [...MOCK_JOBS];

    if (params?.remoteOnly) {
      jobs = jobs.filter((j) => j.isRemote);
    }
    if (params?.department) {
      jobs = jobs.filter(
        (j) => j.department.toLowerCase() === params.department?.toLowerCase()
      );
    }
    if (params?.query) {
      const q = params.query.toLowerCase();
      jobs = jobs.filter(
        (j) =>
          j.title.toLowerCase().includes(q) ||
          j.company.toLowerCase().includes(q) ||
          j.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    return jobs;
  },

  /**
   * Fetch community events with optional search/category filters
   */
  async getEvents(params?: {
    query?: string;
    category?: string;
  }): Promise<CommunityEvent[]> {
    await sleep(SIMULATED_LATENCY_MS);
    let events = [...MOCK_EVENTS];

    if (params?.category) {
      events = events.filter(
        (e) => e.category.toLowerCase() === params.category?.toLowerCase()
      );
    }
    if (params?.query) {
      const q = params.query.toLowerCase();
      events = events.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.speaker.name.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q)
      );
    }
    return events;
  },

  /**
   * Fetch editorial blog posts
   */
  async getPosts(params?: { query?: string; tag?: string }): Promise<BlogPost[]> {
    await sleep(SIMULATED_LATENCY_MS);
    let posts = [...MOCK_POSTS];

    if (params?.tag) {
      posts = posts.filter((p) =>
        p.tags.some((t) => t.toLowerCase() === params.tag?.toLowerCase())
      );
    }
    if (params?.query) {
      const q = params.query.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.author.name.toLowerCase().includes(q)
      );
    }
    return posts;
  },

  /**
   * Fetch downloadable career playbooks & guides
   */
  async getResources(params?: { category?: string }): Promise<ResourcePlaybook[]> {
    await sleep(SIMULATED_LATENCY_MS);
    let resources = [...MOCK_RESOURCES];
    if (params?.category) {
      resources = resources.filter(
        (r) => r.category.toLowerCase() === params.category?.toLowerCase()
      );
    }
    return resources;
  },

  /**
   * Fetch mentorship directory profiles
   */
  async getMentors(params?: {
    query?: string;
    skill?: string;
  }): Promise<MentorProfile[]> {
    await sleep(SIMULATED_LATENCY_MS);
    let mentors = [...MOCK_MENTORS];

    if (params?.skill) {
      mentors = mentors.filter((m) =>
        m.skills.some((s) => s.toLowerCase() === params.skill?.toLowerCase())
      );
    }
    if (params?.query) {
      const q = params.query.toLowerCase();
      mentors = mentors.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.title.toLowerCase().includes(q) ||
          m.company.toLowerCase().includes(q) ||
          m.skills.some((s) => s.toLowerCase().includes(q))
      );
    }
    return mentors;
  },

  /**
   * Simulate a serverless lead/newsletter submission
   */
  async submitLead(payload: {
    email: string;
    name?: string;
    resourceId?: string;
  }): Promise<{ success: boolean; message: string; confirmationId: string }> {
    await sleep(SIMULATED_LATENCY_MS * 1.5);
    if (!payload.email || !payload.email.includes('@')) {
      throw new Error('Please enter a valid email address.');
    }
    return {
      success: true,
      message: 'Subscription confirmed! Welcome to Unlock Her Tech.',
      confirmationId: `mock-lead-${crypto.randomUUID()}`,
    };
  },

  /**
   * Simulate mentor booking
   */
  async bookMentorSession(payload: {
    mentorId: string;
    name: string;
    email: string;
    sessionType: string;
    notes?: string;
  }): Promise<{ success: boolean; bookingId: string }> {
    await sleep(SIMULATED_LATENCY_MS * 1.5);
    if (!payload.email.includes('@')) {
      throw new Error('Invalid email provided.');
    }
    return {
      success: true,
      bookingId: `booking-${crypto.randomUUID()}`,
    };
  },
};
