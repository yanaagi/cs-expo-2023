import React from 'react'
import { NextPage } from "next";

import CollectionOfProjectsHeader from '@/components/CollectionOfProjectsHeader';
import GroupCardLayout from '@/components/GroupCardLayout'
import GroupsData from '../../../thesis-projects.json';

const CollectionOfProjects: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <CollectionOfProjectsHeader 
        headerText ="COLLECTION OF PROJECTS" 
        subheaderText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic doloribus pariatur sapiente error iste, reiciendis, minima odit tenetur, rerum consequatur harum? Rerum molestiae fugit cupiditate pariatur corrupti, error quo quas."/>

      <GroupCardLayout groupData={GroupsData}/>
    </main>
  )
}

export default CollectionOfProjects