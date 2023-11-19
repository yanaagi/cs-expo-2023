'use client';
import React from 'react'
import EventsHeader from "@/components/EventsOverviewHeader";

const titles = ["EVENTS", "CS EXPO", "DEV DAY", "COMMITTEES"];
const desc = ["CS EXPO 2023 V2.0 is the 11th iteration of the annual capstone event by Far Eastern University Institute of Technology's fourth-year BS Computer Science students. This three-day event highlights their groundbreaking thesis projects and their impact on society. The tagline, \"Paving The New Technospace Through Paradigm Shifting Innovations,\" reflects students' commitment to challenging the status quo with novel approaches to existing problems in society.", 
              "The culmination of CS EXPO 2023 V2.0 is a two-day presentation of the students’ projects to internal panelists and industry professionals. All thesis groups will be represented by a member of their own choosing, with awards granted for outstanding research and innovation. This event will also feature talks from key figures in tech, providing a medium for healthy discourse about current trends.", 
              "DevDay, the inaugural event of CS EXPO 2023 V2.0 on November 22, 2023, explores what it means to be a person in technology today. Industry leaders will discuss innovations, offer insights for the attendees, and guide students on upskilling and keeping their tech stack relevant in an evolving landscape.", 
              "This paradigm would not shift without the tireless effort of the committees behind the event. These are the malcontents who will spark the change and spearhead the technosphere of tomorrow. Their dedication and passion fuel the engine of progress, making events like CS EXPO a driving force in shaping the future of technology."];

const EventsOverviewHeader = () => {
  return (
    <main className='min-h-screen justify-center text-center items-center flex flex-col'>
      <EventsHeader title={titles} description={desc}></EventsHeader>
    </main>
  )
}

export default EventsOverviewHeader;