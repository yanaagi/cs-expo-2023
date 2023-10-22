import React from 'react'
import Link from 'next/link'
import { AiOutlineRight } from 'react-icons/ai';
const PartnersHeader = () => {
  return (
   <main>
    <div className="ProjectsOverview w-[1920px] h-[1259px] relative bg-white">
    <div className="Description w-[700px] left-[610px] top-[95px] absolute">
      <div className="Group24 w-[700px] h-[130px] left-0 top-0 absolute">
        <div className="Projects w-[385px] h-[50px] left-[157px] top-0 absolute text-center text-zinc-900 text-5xl font-bold font-['Helvetica Now Text ']">PROJECTS</div>
        <div className=" w-[700px] h-20 left-0 top-[50px] absolute text-center text-zinc-900 text-xl font-normal font-['Helvetica Now Text ']">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl purus in mollis nunc sed id semper risus. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.</div>
      </div>
      <div className="Group127 w-[402px] h-[29px] left-[149px] top-[175px] absolute">
        <div className="Group31 w-[145px] h-[29px] left-0 top-0 absolute">
    
          <Link href="/projects/hall-of-fame" className="flex items-center pl-1 left-0 top-0 absolute text-center text-rose-500 text-xl font-bold font-['Helvetica Now Text ']">Hall of Fame  <AiOutlineRight/>  </Link>
          
        </div>
        <div className="Group32 w-[229px] h-[29px] left-[173px] top-0 absolute">
          
          <Link href="/project/collection-of-project" className="flex items-center left-0 top-0 absolute text-center text-rose-500 text-xl font-bold font-['Helvetica Now Text ']">Collection of Projects  <AiOutlineRight/>  </Link>
          
        </div>
      </div>
    </div>
    </div>
   </main>
  )
}

export default PartnersHeader