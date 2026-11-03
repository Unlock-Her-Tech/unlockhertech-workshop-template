import { useMentorDirectory } from './hooks/useMentorDirectory';
import { MentorCard } from './components/MentorCard';
import { MentorFilter } from './components/MentorFilter';
import { MentorBookingModal } from './components/MentorBookingModal';
import { HiUserGroup, HiSparkles } from 'react-icons/hi2';

export function FeatureMain() {
  const {
    mentors,
    loading,
    allSkills,
    searchQuery,
    setSearchQuery,
    selectedSkill,
    setSelectedSkill,
    bookingMentor,
    setBookingMentor,
  } = useMentorDirectory();

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-bold text-brand-coral bg-brand-coral/10 px-3 py-1 rounded-full border border-brand-coral/20">
            <HiSparkles className="w-3.5 h-3.5" />
            <span>Community Directory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-3 mb-2">
            Find Your Engineering Mentor
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Connect 1-on-1 with experienced tech leads, staff engineers, and engineering directors for career strategy, architecture pairing, and mock interviews.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mt-6 pt-6 border-t border-stone-100">
          <MentorFilter
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            skills={allSkills}
            selectedSkill={selectedSkill}
            onSelectSkill={setSelectedSkill}
          />
        </div>
      </div>

      {/* Grid or Loading State */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['skeleton-1', 'skeleton-2', 'skeleton-3'].map((slotId) => (
            <div
              key={slotId}
              className="bg-white rounded-3xl p-6 border border-stone-200 animate-pulse space-y-4 h-64"
            >
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-stone-200" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-stone-200 rounded w-2/3" />
                  <div className="h-3 bg-stone-100 rounded w-1/2" />
                </div>
              </div>
              <div className="h-3 bg-stone-100 rounded w-full" />
              <div className="h-3 bg-stone-100 rounded w-4/5" />
            </div>
          ))}
        </div>
      ) : mentors.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-stone-200">
          <HiUserGroup className="w-12 h-12 text-stone-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-gray-900 mb-1">
            No mentors found matching criteria
          </h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            Try resetting your search query or selecting "All" skills to view all available community mentors.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <MentorCard
              key={mentor.id}
              mentor={mentor}
              onBook={(m) => setBookingMentor(m)}
            />
          ))}
        </div>
      )}

      {/* Booking Modal */}
      <MentorBookingModal
        mentor={bookingMentor}
        isOpen={Boolean(bookingMentor)}
        onClose={() => setBookingMentor(null)}
      />
    </div>
  );
}

export default FeatureMain;
