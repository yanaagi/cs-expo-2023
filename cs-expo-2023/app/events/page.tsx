import React from 'react'
import EventsHeader from "@/components/EventsOverviewHeader";


const titles = ["EVENTS", "CS EXPO", "DEV DAY", "COMMITTEES"];
const desc = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi purus in mollis nunc sed id semper risus volutpat consequat mauris nunc congue nisi vitae suscipit tellus", 
              "Melon ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi purus in mollis nunc sed id semper risus volutpat consequat mauris nunc congue nisi vitae suscipit tellus", 
              "Rolem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi purus in mollis nunc sed id semper risus volutpat consequat mauris nunc congue nisi vitae suscipit tellus", 
              "Erlom ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi purus in mollis nunc sed id semper risus volutpat consequat mauris nunc congue nisi vitae suscipit tellus"];

const EventsOverviewHeader = () => {
  return (
    <main className='h-screen justify-center flex flex-col'>
      <EventsHeader title={titles} description={desc}></EventsHeader>
      </main>
  )
}

export default EventsOverviewHeader;