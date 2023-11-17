import React, { useEffect } from 'react';
import { NextPage } from "next";

import CollectionOfProjectsHeader from '../../../components/CollectionOfProjectsHeader';
import GroupCardLayout from '../../../components/GroupCardLayout'
import ThesisProjectsList from '../../../components/ThesisProjectReader';
import thesisData from '../../../thesis-projects.json';
import GroupsData from '../../../thesis-projects.json';

{/* <ThesisProjectsList />
/* Display Group Names
<div>
  <h3>Group Names</h3>
  <ul>
    {Object.keys(thesisDataTyped).map((key) => (
      <li key={key}>{thesisDataTyped[key].groupname}</li> 
    ))}
    </ul> */}

// Define a type for your data
interface ThesisProjectData {
  [key: string]: {
    groupname: string;
    thesisTitle: string;
    abstract: string;
    summary: string;
    members: string[];
    category: string;
    posterFilePath: string;
    AVPLink: string;
  };
}


const CollectionOfProjects: NextPage = () => {
  return (
    <main className="">
      <div className="flex flex-col justify-center items-center p-24">
        <CollectionOfProjectsHeader 
          headerText ="COLLECTION OF PROJECTS" 
          subheaderText="Explore the culmination of the students' academic journey through their impactful thesis projects. Dive into this collection of projects — sorted below by category — which highlights the dedication, creativity, and skill of each thesis group, exemplifying the depth of knowledge these students bring to not only their academic pursuits, but also the advancement of society."/>
        <GroupCardLayout groupData={GroupsData}/>
      </div>
    </main>
  )
}

export default  CollectionOfProjects;
