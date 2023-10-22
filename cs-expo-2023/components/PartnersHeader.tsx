import React from 'react';
import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';

const PartnersHeader = () => {
  return (
    <main>
      <div className="w-full relative">
        <div className="w-full self-center top-[95px] relative">
          <div className="w-full">
            <div className="w-full top-0 text-center text-zinc-900 text-5xl font-bold font-['Helvetica Now Text ']">PROJECTS</div>
            <div className="flex w-4/12 mx-auto text-center text-zinc-900 text-xl font-normal font-['Helvetica Now Text ']">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl purus in mollis nunc sed id semper risus. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.
            </div>
          </div>
          <div className="flex justify-center w-full top-[200px]">
            <Link href="/projects/hall-of-fame" className="flex items-center cursor-pointer ml-4 font-medium text-coral-pink">Hall of Fame <span className="flex-auto"><AiOutlineRight /></span></Link>
            <Link href="/projects/collections-of-projects" className="flex items-center cursor-pointer ml-4 font-medium text-coral-pink">Collections of Projects <span><AiOutlineRight /></span></Link>
          </div>
        </div>
      </div>
    </main>
  );
};
export default PartnersHeader;