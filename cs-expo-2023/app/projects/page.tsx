import React from 'react';
import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';
import ProjectsHeader from '@/components/ProjectsHeader';
import ThesisPosterCard from '@/components/ThesisPosterCard';

const Projects = () => {
  return (
  <main className='flex flex-col items-center justify-between p-24'>
    <ProjectsHeader/> 
    <div className="flex justify-center p-4 w-full">
      <Link href="/projects/hall-of-fame" className="flex items-center cursor-pointer ml-4 font-medium text-coral-pink">Hall of Fame <span className="flex-auto"><AiOutlineRight /></span></Link>
      <Link href="/projects/collections-of-projects" className="flex items-center cursor-pointer ml-4 font-medium text-coral-pink">Collections of Projects <span><AiOutlineRight /></span></Link>
    </div>
    <ThesisPosterCard/>
    </main>
  );
};

export default Projects;
