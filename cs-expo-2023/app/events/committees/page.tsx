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

<CommitteesGrid/>
<CommitteesPic 
          committeeName='PROGRAMS'
          committeePic={[
            '/group-images/Quinta/10.jpg',
            '/group-images/Codebebs/10.jpg',
            '/group-images/Codebebs/8.jpg',
            '/group-images/Teasis/14.jpg',
            '/group-images/Peaky Blinders/5.jpg',
            '/group-images/Techniq/17.jpg',
            '/group-images/Hello World/14.jpg',
            '/group-images/Teasis/5.jpg',
            '/group-images/Hello World/4.jpg',
            '/group-images/Hello World/new11.jpg',


          ]}
          />

        <CommitteesPic 
          committeeName='SECRETARIAT AND AWARDS COMMITTEE'
          committeePic={[
            '/group-images/Adorables/15.jpg',
            '/group-images/Quinta/20.jpg',
            '/group-images/Quinta/13.jpg',
            '/group-images/Softyware/5.jpg',
            '/group-images/Engeenz/17.jpg',
            '/group-images/Adorables/7.jpg',
            '/group-images/Engeenz/11.jpg',
            '/group-images/Engeenz/9.jpg',
            '/group-images/Midnight Coders/12.jpg',
            


          ]}
          />
        <CommitteesPic 
          committeeName='SPONSORSHIP AND PARTNERSHIP'
          committeePic={[
            '/group-images/Array Co/16.jpg',
            '/group-images/Array Co/20.jpg',
            '/group-images/Softyware/14.jpg',
            '/group-images/Softyware/',

          ]}
          />

<CommitteesPic 
          committeeName='SPEAKERS AND PANELIST'
          committeePic={[
            '/group-images/Deos/5.jpg',
            '/group-images/Deos/9.jpg',
            '/group-images/-/-',
            '/group-images/-/-',
            '/group-images/-/-',
          ]}
          />

<CommitteesPic 
          committeeName='CREATIVES AND MEDIA'
          committeePic={[
            '/group-images/Deos/18.jpg',
            '/group-images/Innov8/9.jpg',
            '/group-images/Hello World/9.jpg',
            '/group-images/Teasis/12.jpg',
            '/group-images/Teasis/9.jpg',
            '/group-images/Peaky Blinders/9.jpg',
            '/group-images/Engeenz/13.jpg',
            '/group-images/Peaky Blinders/ne11.jpg',
            '/group-images/Quinta/new17.jpg',
            '/group-images/Stark/16.jpg',


          ]}
          />

          <CommitteesPic 
          committeeName='PUBLICITY AND PUBLICATIONS'
          committeePic={[
            '/group-images/Rob_lux/8.jpg',
            '/group-images/Rob_lux/6.jpg',
            '/group-images/Rob_lux/14.jpg',
            '/group-images/Softyware/8.jpg',
            '/group-images/Peaky Blinders/13.jpg',
            '/group-images/Yaymiko/10.jpg',
            '/group-images/Yaymiko/9.jpg',
            '/group-images/Yaymiko/5.jpg',
            '/group-images/Quinta/21.jpg',
            '/group-images/Innov8/19.jpg',


          ]}
          />

<CommitteesPic 
          committeeName='LOGISTICS AND FACILITIES'
          committeePic={[
            '/group-images/Innov8/6.jpg',
            '/group-images/Midnight Coders/13.jpg',
            '/group-images/Softyware/new17.jpg',
            '/group-images/Aim/7.jpg',
            '/group-images/Aim/10.jpg',
            '/group-images/Aim/12.jpg',
            '/group-images/Aim/new15.jpg',
            '/group-images/Stark/19.jpg',
            '/group-images/Midnight Coders/7.jpg',
            '/group-images/Techniq/6.jpg',
            '/group-images/Techniq/12.jpg',
            '/group-images/Techniq/15.jpg',
            '/group-images/Codebebs/13.jpg',
            '/group-images/Codebebs/4.jpg',
            '/group-images/Softies/11.jpg',
            '/group-images/Softies/9.jpg',
            '/group-images/Softies/15.jpg',
            '/group-images/Softies/18.jpg',
            '/group-images/Innov8/16.jpg',
            '/group-images/Return to_sleep/5.jpg',
            '/group-images/Return to_sleep/9.jpg',
            '/group-images/Return to_sleep/10.jpg',
            '/group-images/Return to_sleep/13.jpg',
            '/group-images/Codebebs/16.jpg',
            '/group-images/Rob_lux/13.jpg',
          ]}
          />

<CommitteesPic 
          committeeName='DEVELOPERS'
          committeePic={[
            '/group-images/Array Co/9.jpg',
            '/group-images/Javangers/13.jpg',
            '/group-images/Javangers/4.jpg',
            '/group-images/Stark/6.jpg',
            '/group-images/-/Regie',
            '/group-images/Javangers/11.jpg',
            '/group-images/Midnight Coders/5.jpg',
            '/group-images/Javangers/8.jpg',
            '/group-images/Adorables/4.jpg',
            '/group-images/Adorables/11.jpg',
            '/group-images/Engeenz/5.jpg',
            '/group-images/Deos/15.jpg',
            '/group-images/Array Co/14.jpg',
            '/group-images/Stark/12.jpg',
            '/group-images/Stark/9.jpg',


          ]}
          />
      </div>
      
    </main>
  );
};

export default EventsCommittees;