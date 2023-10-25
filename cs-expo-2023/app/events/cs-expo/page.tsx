"use client";

import React from 'react';
import SpeakerPanelistLayout from '../../../components/SpeakerPanelistLayout'; 

const EventsCSExpo = () => {

  const speakerNames = [
    "PANELIST 1",
    "PANELIST 2",
    "PANELIST 3",
    "PANELIST 4",
    "PANELIST 5",
    "PANELIST 6",
    "PANELIST 7",
    "PANELIST 8",
  ];

  const photoNumber = [
    "Photo 1",
    "Photo 2",
    "Photo 3",
    "Photo 4",
    "Photo 5",
    "Photo 6",
    "Photo 7",
    "Photo 8",
  ];

  const speakerProfession = [
    "Software Engineer",
    "Software Analyst",
    "Game Developer",
    "Cyber Security",
    "Computer Technician",
    "Computer Engineer",
    "Data Scientist",
    "Software Consultant",
  ];

  const intOrExt = [
    "INTERNAL",
    "EXTERNAL",
    "INTERNAL",
    "EXTERNAL",
    "INTERNAL",
    "EXTERNAL",
    "INTERNAL",
    "EXTERNAL",
  ];

  return (
    <main className="flex min-h-screen flex-col p-24">
      <SpeakerPanelistLayout
        speakerNames={speakerNames}
        photoNumber={photoNumber}
        speakerProfession={speakerProfession}
        intOrExt={intOrExt}
        panelOrSpeaker="PANELIST"
      />
    </main>
  );
};

export default EventsCSExpo;
