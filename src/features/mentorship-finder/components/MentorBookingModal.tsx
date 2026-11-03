import React, { useState } from 'react';
import type { MentorProfile } from '@/app/types.ts';
import { Modal } from '@/app/components/Modal.tsx';
import { Input } from '@/app/components/Input.tsx';
import { Button } from '@/app/components/Button.tsx';
import { mockClient } from '@/mocks/mockClient.ts';
import { HiCheckCircle } from 'react-icons/hi2';

export interface MentorBookingModalProps {
  mentor: MentorProfile | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MentorBookingModal({
  mentor,
  isOpen,
  onClose,
}: Readonly<MentorBookingModalProps>) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [sessionType, setSessionType] = useState('1-on-1 Mentorship');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!mentor) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!fullName.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }

    setSubmitting(true);
    try {
      await mockClient.bookMentorSession({
        mentorId: mentor.id,
        name: fullName,
        email,
        sessionType,
        notes,
      });
      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Booking failed. Try again.';
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setNotes('');
    setSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={submitted ? 'Booking Confirmed!' : `Book Session with ${mentor.name}`}
      titleId="mentor-booking-modal-title"
    >
      {submitted ? (
        <div className="text-center py-6 space-y-4">
          <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
            <HiCheckCircle className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">
              You're scheduled with {mentor.name}!
            </h3>
            <p className="text-sm text-stone-600 mt-2 max-w-sm mx-auto">
              A calendar invite and preparation notes have been sent to <strong>{email}</strong>.
            </p>
          </div>
          <div className="pt-4">
            <Button type="button" variant="primary" onClick={handleReset} className="w-full">
              Done
            </Button>
          </div>
        </div>
      ) : (
        <form noValidate onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-medium">
              {error}
            </div>
          )}

          <Input
            id="booking-fullname"
            label="Full Name"
            placeholder="Ada Lovelace"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <Input
            id="booking-email"
            type="email"
            label="Work or Personal Email"
            placeholder="ada@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="space-y-1.5">
            <label
              htmlFor="booking-session-type"
              className="block text-xs font-semibold text-gray-700"
            >
              Session Focus Area
            </label>
            <select
              id="booking-session-type"
              value={sessionType}
              onChange={(e) => setSessionType(e.target.value)}
              className="w-full px-4 py-2.5 rounded-2xl bg-white border border-stone-200 text-sm text-gray-900 focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20"
            >
              {mentor.availableFor.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="booking-notes"
              className="block text-xs font-semibold text-gray-700"
            >
              What would you like to discuss? (Optional)
            </label>
            <textarea
              id="booking-notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="E.g. System design interview preparation, transitioning to staff engineer..."
              className="w-full px-4 py-2.5 rounded-2xl bg-white border border-stone-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20"
            />
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-stone-100">
            <Button type="button" variant="outline" onClick={handleReset}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={submitting}
            >
              {submitting ? 'Confirming...' : 'Confirm Booking'}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
}
