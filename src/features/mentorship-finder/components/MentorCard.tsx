import type { MentorProfile } from '../../app/types';
import { Card } from '../../../app/components/Card';
import { Badge } from '../../../app/components/Badge';
import { Button } from '../../../app/components/Button';
import { HiBriefcase, HiSparkles } from 'react-icons/hi2';

export interface MentorCardProps {
  mentor: MentorProfile;
  onBook: (mentor: MentorProfile) => void;
}

export function MentorCard({ mentor, onBook }: Readonly<MentorCardProps>) {
  return (
    <Card interactive className="flex flex-col justify-between h-full">
      <div>
        {/* Mentor Header */}
        <div className="flex items-start gap-4 mb-4">
          <img
            src={mentor.avatarUrl}
            alt={mentor.name}
            className="w-14 h-14 rounded-2xl object-cover border-2 border-brand-coral/20"
          />
          <div>
            <h3 className="font-bold text-gray-900 text-base sm:text-lg">
              {mentor.name}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-brand-coral">
              {mentor.title}
            </p>
            <p className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
              <HiBriefcase className="w-3.5 h-3.5 text-stone-400" />
              <span>{mentor.company}</span>
              <span>•</span>
              <span>{mentor.yearsOfExperience} yrs exp</span>
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 mb-4 leading-relaxed">
          {mentor.bio}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {mentor.skills.map((skill) => (
            <Badge key={skill} variant="neutral" size="sm">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Action */}
      <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
        <span className="text-[11px] text-stone-500 flex items-center gap-1 font-medium">
          <HiSparkles className="w-3.5 h-3.5 text-brand-yellow" />
          {mentor.availableFor[0]}
        </span>
        <Button
          type="button"
          variant="primary"
          size="sm"
          onClick={() => onBook(mentor)}
        >
          Book Session
        </Button>
      </div>
    </Card>
  );
}
