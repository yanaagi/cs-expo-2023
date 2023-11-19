import React from 'react';
import ProjectArticle from '../../../components/ProjectArticle'
import GroupsData from "../../../thesis-projects.json"
import GroupPictures from "../../../group-pictures.json"

interface GroupProps {
  params: {
    groupid: string;
  }
}

const Page: React.FC<GroupProps> = ({params}) => {
  const groupsData = new Map(Object.entries(GroupsData));
  const groupData = groupsData.get(params.groupid);
  const groupPictures = new Map(Object.entries(GroupPictures)).get(groupData!.groupname);
  
  return (
    <main className="">
      <ProjectArticle 
        groupname={groupData?.groupname} 
        thesisTitle={groupData?.thesisTitle} 
        abstract={groupData?.abstract} 
        summary={groupData?.summary} 
        members={groupData?.members} 
        category={groupData?.category} 
        posterFilePath={groupData?.posterFilePath} 
        AVPLink={groupData?.AVPLink}      
        groupPictures={groupPictures}
      />
    </main>
  );
}

export default Page;