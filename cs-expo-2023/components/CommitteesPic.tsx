import React from 'react'
import Image from 'next/image';

interface CommitteesPicProps {
  committeeName: string;
  committeePic?: string[];
}

const EventsCommittees: React.FC<CommitteesPicProps> = ({committeeName, committeePic}) => {
  return (
  <main className="flex min-h-screen flex-col px-10 -mx-10 pt-10">
  
   {/* WEB VIEW */}
   <div className="mt-5 justify-center hidden lg:block">
        <div className="grid grid-cols-1">
          <div className="col-span-1 font-black text-center text-6xl">
            {committeeName}
          </div>
        </div>
        <div className="flex justify-center flex-wrap -mx-10 my-10"> {/* Decreased margin */}
          {committeePic && committeePic.map((path, index) => (
            <div key={index} className="w-1/4 p-10 md:w-1/5"> {/* Changed width to 1/4 and 1/5 for different breakpoints */}
              <div className="h-64 w-44 p-4 bg-timberwolf relative">
                <Image
                  src={path}
                  alt={`${committeeName} Image ${index + 1}`}
                  fill
                  className="w-full h-auto mb-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    
<div className="mt-10 hidden md:block lg:hidden">
  <div className="grid grid-cols-1">
    <div className="col-span-1 font-black text-center text-5xl">  
      {committeeName}
    </div>
  </div>
  <div className="flex justify-center flex-wrap -mx-10 my-10">
    {committeePic && committeePic.map((path, index) => (
      <div key={index} className="w-1/3 p-10">
        <div className="h-64 w-44 p-4 bg-timberwolf relative">
          <Image
            src={path}
            alt={`${committeeName} Image ${index + 1}`}
            fill
            className="w-full h-auto mb-2"
          />
        </div>
      </div>
    ))}
  </div>
</div>


<div className="mt-10 md:hidden"> 
  <div className="grid grid-cols-1">
    <div className="col-span-1 font-black text-center text-3xl">
      {committeeName}
    </div>
  </div>
  <div className="flex justify-center flex-wrap -mx-10 my-10">
    {committeePic && committeePic.map((path, index) => (
      <div key={index} className="w-1/1 p-10">
        <div className="h-64 w-44 p-4 bg-timberwolf relative">
          <Image
            src={path}
            alt={`${committeeName} Image ${index + 1}`}
            fill
            className="w-full h-auto mb-2"
          />
        </div>
      </div>
    ))}
  </div>
    </div>

</main>
  )
}

export default EventsCommittees;