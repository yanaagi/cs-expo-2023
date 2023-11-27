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
          committeeName='PROJECT HEAD'
          committeePic={[
            '/group-images/Array Co/5.jpg',
          ]}
           memberName={[
            'Micah Sophia Tan',
          ]}
          />

<div id="PROGRAMS COMMITTEE">
<CommitteesPic 
          committeeName='PROGRAMS COMMITTEE'
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
          memberName={[
            'Michaella Gonzales',
            'Noriel Joy Embudo',
            'Art Eli Bautista',
            'John Dominic Contreras',
            'Francis Nino Santos',
            'Rico Ray Alido',
            'Andre Martee Valerio',
            'Kenneth Bryce Lim',
            'Allan Jr. Magtibay',
            'Randel Jason Espiritu',
          ]}
          />
</div>

<div id="SECRETARIAT COMMITTEE">
        <CommitteesPic 
          committeeName='SECRETARIAT COMMITTEE'
          committeePic={[
            '/group-images/Adorables/15.jpg',
            '/group-images/Quinta/20.jpg',
            '/group-images/Quinta/13.jpg',
            '/group-images/Softyware/5.jpg',
            '/group-images/Engeenz/17.jpg',
            '/group-images/Adorables/7.jpg',
            '/group-images/Engeenz/11.jpg',
            '/group-images/Engeenz/9.jpg',
            '/solo-images/3_vicencio.jpg',
            '/group-images/Midnight Coders/12.jpg',
          ]}
          memberName={[
            'Erica Francia Evangelista',
            'Maria Evangelicalyn Ong',
            'Alkier Gabriel Magallanes',
            'Varon James Medenilla',
            'Gerard Gueco',
            'Clintt Adora',
            'Gerardo Joshua Dela Cruz',
            'Curt Russel Celeste',
            'Vernon Gabriel Angelo Vicencio',
            'Phoebe Kelly Liwanag',
          ]}
          />
</div>
<div id="SPONSORSHIP & PARTNERSHIP COMMITTEE">
        <CommitteesPic 
          committeeName='SPONSORSHIP & PARTNERSHIP COMMITTEE'
          committeePic={[
            '/group-images/Array Co/16.jpg',
            '/group-images/Array Co/20.jpg',
            '/group-images/Softyware/14.jpg',
            '/group-images/Softyware/11.jpg',
          ]}
          memberName={[
            'Bianca Goldman',
            'John Angelo Yap',
            'Drennix Jean-Roe Guerrero',
            'Daniel Marco Rafanan'
          ]}
          />
</div>
<div id="SPEAKERS & PANELIST COMMITTEE">
<CommitteesPic 
          committeeName='SPEAKERS & PANELIST COMMITTEE'
          committeePic={[
            '/group-images/Deos/5.jpg',
            '/group-images/Deos/9.jpg',
           
          ]}
          memberName={[
            'Wilem Joshua Offemaria',
            'Christian Dale Selisana',
            
          ]}
          />
</div>
<div id="LOGISTICS COMMITTEE">
<CommitteesPic 
          committeeName='LOGISTICS COMMITTEE' 
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
          memberName={[
            'Rhuzzel Paramio',
            'Mark Wilson Bucsit',
            'Micko Alhwin Andrada',
            'Franco Gian Ramos',
            'Kyle Austin Dimabasa',
            'Juan Alfonso Magpantay',
            'Jan Miguel Pinlac',
            'Kyle Rainiel Baltazar',
            'Jewel Anne Panela',
            'Gabrielle Rose Gacula',
            'Patrick Wayne Tantay',
            'Kyle Dominic Vallo',
            'Seth Johann Esteban',
            'Gavino Othello Angeles',
            'Daniel Joseph Alvarez',
            'Michael John Rola',
            'John Onel Bulos',
            'Alijah Ethan Mazo',
            'Yunno Honesto Rico Belleza',
            'Jed Marco Mendizabal',
            'Carlo Eraño Cruz', 
            'Fhiel Nichole Ashley Nanalig',
            'Zedric James Ramoso',
            'Paul Andre Gabriel',
            'Brylle Miguel Andres',
          ]}
          />
</div>
<div id="PUBLICITY & PUBLICATION COMMITTEE">
          <CommitteesPic 
          committeeName='PUBLICITY & PUBLICATIONS COMMITTEE'
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
          memberName={[
            'Jose Ian Miguel De Leon',
            'Leigh Reign Ascaño', 
            'Mark Revin Fragata',
            'Jeremie Calinisan',
            'Dioshua Sapnu',
            'Ivan Dominic Albano',
            'Kyle Sebastian Claveria',
            'Charles Dmitri Peñaranda', 
            'Charles Christian Sapida',
            'Cyrill James Dela Cruz',
          ]}
          />
</div>
<div id="CREATIVES & MEDIA COMMITTEE">
<CommitteesPic 
          committeeName='CREATIVES & MEDIA COMMITTEE'
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
          memberName={[
            'John Felix Agda',
            'Jude Michael Francia',
            'Carl Anthony Lar Carandan',
            'Edra Abel Gomez',
            'Joshua Azarcon',
            'John Florenz Reyes',
            'Miguel Angelo Fesalbon',
            'Marvin Simsiman',
            'Dhancovic Ivan Mendoza',
            'Sally Jr. Segundo',
          ]}
          />
</div>
<div id="DEVELOPERS COMMITTEE">
<CommitteesPic 
          committeeName='DEVELOPERS COMMITTEE'
          committeePic={[
            '/group-images/Array Co/9.jpg',
            '/group-images/Javangers/13.jpg',
            '/group-images/Javangers/4.jpg',
            '/group-images/Stark/6.jpg',
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
          memberName={[
            'Jericho John Almoro',
            'Alan Gabriel Limyu',
            'Nichole Anne Marie Avañez', 
            'Ralph Henrik Cajipe',
            'Vence Carl Esquivel',
            'Lorenzo Miguel Dela Cruz',
            'Richard Lyndon Espino',
            'Jeri-Michael Joseph Advincula',
            'Zeno Gilrence Donato',
            'David John Bas',
            'Patrick Nicolae Agbayani',
            'Francis Dale Cañon', 
            'Kyle Christian Español', 
            'Charles Andrew Santos',
          ]}
          />
      </div>
      </div>
    </main>
  );
};

export default EventsCommittees;