import React from 'react';
import MeetTheCommitteesHeader from '@/components/MeetTheCommitteesHeader';
import CommitteesGrid from '@/components/CommitteesGrid';
import CommitteesPic from '@/components/CommitteesPic';
import Image from 'next/image';

const EventsCommittees = () => {
  return (
    <main className="flex flex-col items-center justify-center p-24 mt-10">
      <div>
        <MeetTheCommitteesHeader
          headerText="meet the COMMITTEES"
        />

        <CommitteesGrid />
        <CommitteesPic 
          committeeName='SECRETARIAT AND AWARDS COMMITTEE'
          committeePic={[
            '/cs-expo-logo-black.png',
            '/cs-expo-logo-black.png',
            '/cs-expo-logo-black.png',
            '/cs-expo-logo-black.png',
            '/cs-expo-logo-black.png',
            '/cs-expo-logo-black.png',
            '/cs-expo-logo-black.png',
            '/cs-expo-logo-black.png',
            '/cs-expo-logo-black.png',
            '/cs-expo-logo-black.png',


          ]}
          />
      </div>
      
    </main>
  );
};

export default EventsCommittees;