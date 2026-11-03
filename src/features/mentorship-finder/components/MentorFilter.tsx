import { Input } from '../../../app/components/Input';
import { Button } from '../../../app/components/Button';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';

export interface MentorFilterProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  skills: string[];
  selectedSkill: string;
  onSelectSkill: (skill: string) => void;
}

export function MentorFilter({
  searchQuery,
  onSearchChange,
  skills,
  selectedSkill,
  onSelectSkill,
}: Readonly<MentorFilterProps>) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
      <div className="max-w-xs w-full">
        <Input
          id="mentor-search-input"
          label="Search mentors"
          hideLabel
          placeholder="Search by name, company, skill..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
        <span className="text-xs text-stone-400 font-semibold flex items-center gap-1 shrink-0">
          <HiAdjustmentsHorizontal className="w-4 h-4" /> Skill:
        </span>
        {skills.map((skill) => (
          <Button
            key={skill}
            type="button"
            variant={selectedSkill === skill ? 'primary' : 'outline'}
            size="sm"
            onClick={() => onSelectSkill(skill)}
          >
            {skill}
          </Button>
        ))}
      </div>
    </div>
  );
}
