import React from 'react';
import ProjectArticle from '../../../components/ProjectArticle'

interface GroupProps {
  params: {
    groupid: string;
  }
}

const Page: React.FC<GroupProps> = ({params}) => {
  return (
    <main className="flex items-center justify-center static ">
      <ProjectArticle groupid={params.groupid}/>
    </main>
  );
}

export default Page;