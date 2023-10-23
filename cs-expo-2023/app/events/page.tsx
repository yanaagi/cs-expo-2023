import React from 'react'
import EventsHeader from "@/components/EventsOverviewHeader";


const EventsOverviewHeader = () => {
  return (
    <main className=''>
      <EventsHeader headerText ="EVENTS" subheaderText="Lorem ipsum"></EventsHeader>
      <EventsHeader headerText ="CS EXPO" subheaderText="Lorem ipsum"></EventsHeader>
      <EventsHeader headerText ="DEV DAY" subheaderText="Lorem ipsum"></EventsHeader>
      <EventsHeader headerText ="COMMITTEES" subheaderText="Lorem ipsum"></EventsHeader>
    </main>
  )
}

export default EventsOverviewHeader