import type { MentorProfile } from '../../app/types';

export interface MentorshipFilterState {
  searchQuery: string;
  selectedSkill: string;
  selectedTrack: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  sessionType: string;
  goals: string;
}

export type { MentorProfile };
