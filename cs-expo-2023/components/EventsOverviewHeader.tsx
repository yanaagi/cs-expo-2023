import React from 'react'

interface EventsOverviewHeaderProps {
    headerText: string;
    subheaderText: string;
}

const EventsHeader: React.FC<EventsOverviewHeaderProps> = ({ headerText, subheaderText }) => {
  return (
    <main className='flex min-h-screen items-center justify-center mb-lg'>
        <div className='text-center'>
          <h1 className="text-8xl text-eerie-black mb-4 font-bold">{headerText}</h1>
          <p className='text-xl text-eerie-black font-helvetica max-w-xl mx-auto'>{subheaderText}</p>
        </div>
    </main>
  )
}

export default EventsHeader;