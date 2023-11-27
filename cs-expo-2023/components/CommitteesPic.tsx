import React from 'react'
import Image from 'next/image';

interface CommitteesPicProps {
  committeeName: string;
  committeePic?: string[];
  memberName?: string[];
}

const EventsCommittees: React.FC<CommitteesPicProps> = ({committeeName, committeePic, memberName}) => {
  return (
  <main className="flex mb-5 flex-col px-10 -mx-10 pt-10">
  
   {/* WEB VIEW */}
   <div className="mt-5 justify-center hidden lg:block">
    <div className="grid grid-cols-1">
      <div className="col-span-1 custom-font text-center text-5xl">
        {committeeName}
      </div>
    </div>
    <div className="flex justify-center flex-wrap -mx-10 my-10"> {/* Decreased margin */}
      {committeePic && committeePic.map((path, index) => (
        <div key={index} className="w-1/4 md:w-1/5 p-10 flex flex-col items-center"> {/* Adjusted width and added flex styles */}
          <div className="h-64 w-44 p-4 bg-timberwolf relative flex items-center justify-center"> {/* Centering image */}
            <Image
              src={path}
              alt={`${committeeName} Image ${index + 1}`}
              fill
              className="w-full h-auto mb-2"
            />
          </div>
          <h1 className='text-center mt-2 custom-font'>{memberName && memberName[index]}</h1> {/* Adjusted margin top */}
        </div>
      ))}
    </div>
  </div>


    
<div className="mt-10 hidden md:block lg:hidden">
  <div className="grid grid-cols-1">
    <div className="col-span-1 custom-font text-center text-5xl">  
      {committeeName}
    </div>
  </div>
  <div className="flex justify-center flex-wrap -mx-10 my-10">
    {committeePic && committeePic.map((path, index) => (
      <div key={index} className="w-1/3 p-10 flex flex-col items-center">
        <div className="h-64 w-44 p-4 bg-timberwolf relative flex items-center justify-center">
          <Image
            src={path}
            alt={`${committeeName} Image ${index + 1}`}
            fill
            className="w-full h-auto mb-2"
          />
        </div>
        <h1 className='text-center mt-2 custom-font'>{memberName && memberName[index]}</h1> {/* Adjusted margin top */}
      </div>
    ))}
  </div>
</div>


<div className="mt-10 md:hidden"> 
  <div className="grid grid-cols-1">
    <div className="col-span-1 custom-font text-center text-3xl">
      {committeeName}
    </div>
  </div>
  <div className="flex justify-center flex-wrap -mx-10 my-10">
    {committeePic && committeePic.map((path, index) => (
      <div key={index} className="w-1/1 p-10 flex flex-col items-center">
        <div className="h-64 w-44 p-4 bg-timberwolf relative flex items-center justify-center">
          <Image
            src={path}
            alt={`${committeeName} Image ${index + 1}`}
            fill
            className="w-full h-auto mb-2"
          />
        </div>
        <h1 className='text-center mt-2 custom-font'>{memberName && memberName[index]}</h1> {/* Adjusted margin top */}
      </div>
    ))}
  </div>
    </div>

</main>
  )
}

export default EventsCommittees;