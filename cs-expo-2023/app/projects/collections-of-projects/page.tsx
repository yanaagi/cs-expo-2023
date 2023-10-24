import React from 'react';
import ThesisProjectsList from '../../../components/ThesisProjectReader';
import thesisData from '../../../thesis-projects.json';

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

const CollectionOfProjects = () => {
  // Type assertion for thesisData
  const thesisDataTyped = thesisData as ThesisProjectData;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Collection of Projects</div>
      <div>
        </div>
    </main>
  );
}

export default CollectionOfProjects;
