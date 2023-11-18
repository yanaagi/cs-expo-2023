import React from 'react';
import MeetTheCommitteesHeader from '@/components/MeetTheCommitteesHeader';
import CommitteesGrid from '@/components/CommitteesGrid';
import CommitteesPic from '@/components/CommitteesPic';

const EventsCommittees = () => {
  return (
    <main className="flex flex-col items-center justify-center p-24 mt-10">
      <div>
        <MeetTheCommitteesHeader
          headerText="meet the COMMITTEES"
        />

        <CommitteesGrid />
        <CommitteesPic />
      </div>
      
    </main>
  );
};

export default EventsCommittees;