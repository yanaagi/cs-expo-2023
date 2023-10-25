"use client";

import React from 'react';
import SpeakerPanelistLayout from '../../../components/SpeakerPanelistLayout'; 

const EventsDevDay = () => {

  const speakerNames = [
    "SPEAKER 1",
    "SPEAKER 2",
    "SPEAKER 3",
    "SPEAKER 4",
    "SPEAKER 5",
    "SPEAKER 6",
    "SPEAKER 7",
    "SPEAKER 8",
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
        panelOrSpeaker="SPEAKER"
      />
    </main>
  );
};

export default EventsDevDay;