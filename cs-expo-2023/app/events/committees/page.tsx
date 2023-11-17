import React from 'react';
import MeetTheCommitteesHeader from '@/components/MeetTheCommitteesHeader';
import CommitteesGrid from '@/components/CommitteesGrid';
import CommitteesPic from '@/components/CommitteesPic';
import Image from 'next/image';

const EventsCommittees = () => {
  return (
    <main className="flex min-h-screen justify-between p-24">
      <div>
      <MeetTheCommitteesHeader
          headerText="meet the"
          subheaderText="COMMITTEES"
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
        {/*<CommitteesPic 
          committeeName='SPONSORSHIP AND PARTNERSHIP COMMITTEE'
          committeePic={[
            '/cs-expo-logo-white.png',
            '/cs-expo-logo-white.png',
            '/cs-expo-logo-white.png',
            '/cs-expo-logo-white.png',
            '/cs-expo-logo-white.png',
            '/cs-expo-logo-white.png',
            '/cs-expo-logo-white.png',
            '/cs-expo-logo-white.png',
          ]}
        />
        <CommitteesPic 
          committeeName='SPEAKERS AND PANELISTS COMMITTEE'
          committeePic={[
            '/cs-expo-logo-white.png',
            '/cs-expo-logo-white.png',
          ]}
        />
        <CommitteesPic 
          committeeName='CREATIVE AND MEDIA COMMITTEE'
          committeePic={[
            '/cs-expo-logo-white.png',
            '/cs-expo-logo-white.png',
          ]}
        />
        <CommitteesPic 
          committeeName='PUBLICITY AND PUBLICATIONS COMMITTEE'
          committeePic={[
            '/cs-expo-logo-white.png',
            '/cs-expo-logo-white.png',
          ]}
        />
        <CommitteesPic 
          committeeName='LOGISTICS COMMITTEE'
          committeePic={[
            '/cs-expo-logo-white.png',
            '/cs-expo-logo-white.png',
          ]}
        />
        <CommitteesPic 
          committeeName='DEVELOPERS COMMITTEE'
          
        />*/}
      </div>
      
    </main>
  );
};

export default EventsCommittees;