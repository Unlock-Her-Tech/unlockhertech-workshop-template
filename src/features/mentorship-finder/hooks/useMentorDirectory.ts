import { useState, useMemo, useEffect } from 'react';
import { mockClient } from '../../../mocks/mockClient';
import type { MentorProfile } from '../../app/types';

export function useMentorDirectory() {
  const [mentors, setMentors] = useState<MentorProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('All');
  const [bookingMentor, setBookingMentor] = useState<MentorProfile | null>(null);

  useEffect(() => {
    let isMounted = true;
    mockClient
      .getMentors()
      .then((data) => {
        if (isMounted) {
          setMentors(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.warn('Failed to load mentors:', err);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const allSkills = useMemo(() => {
    const set = new Set<string>();
    mentors.forEach((m) => m.skills.forEach((s) => set.add(s)));
    return ['All', ...Array.from(set)];
  }, [mentors]);

  const filteredMentors = useMemo(() => {
    return mentors.filter((mentor) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        mentor.name.toLowerCase().includes(q) ||
        mentor.company.toLowerCase().includes(q) ||
        mentor.title.toLowerCase().includes(q) ||
        mentor.skills.some((s) => s.toLowerCase().includes(q));

      const matchesSkill =
        selectedSkill === 'All' || mentor.skills.includes(selectedSkill);

      return matchesSearch && matchesSkill;
    });
  }, [mentors, searchQuery, selectedSkill]);

  return {
    mentors: filteredMentors,
    loading,
    allSkills,
    searchQuery,
    setSearchQuery,
    selectedSkill,
    setSelectedSkill,
    bookingMentor,
    setBookingMentor,
  };
}
