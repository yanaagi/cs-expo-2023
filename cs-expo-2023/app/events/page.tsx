import React from 'react'
import CSExpoOverview from '@/components/CSExpoOverview';
import DevDayOverview from '@/components/DevDayOverview';
import CommitteeOverview from '@/components/CommitteeOverview';

export const EventsOverview = () => {
  return (
    <main className='flex flex-col min-h-screen items-center justify-center p-24 mt-24'>
        <div className='text-center'>
          <h1 className="text-8xl text-eerie-black mb-4 font-bold">EVENTS</h1>
          <p className='text-xl text-eerie-black font-helvetica max-w-xl mx-auto mb-24'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis convallis ex, eget malesuada ligula fermentum 
             cursus. Suspendisse a aliquam sem, at condimentum dolor. Aliquam sed pulvinar lectus. Nam ullamcorper est metus, quis faucibus 
             neque ornare a. Phasellus id faucibus lorem. Donec eu luctus leo. Aenean pulvinar ligula eu elit rhoncus, ut ullamcorper odio 
             vehicula.</p>
        </div>
        <div className=''>
          <CSExpoOverview />
        </div>
        <div className=''>
          <DevDayOverview />
        </div>
        <div className=''>
          <CommitteeOverview />
        </div>
    </main>
  )
}



export default EventsOverview