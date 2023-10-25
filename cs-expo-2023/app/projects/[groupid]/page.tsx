import React from 'react';

import GroupsData from "../../../thesis-projects.json"

interface GroupProps {
  params: {
    groupid: string;
  }
}

const Page: React.FC<GroupProps> = ({params}) => {
  const groupsData = new Map(Object.entries(GroupsData));
  const groupData = groupsData.get(params.groupid);
  console.log(groupData);
  return (
    <main className="flex items-center justify-center p-24">
      <div className="">
        <p>{groupData?.groupName}</p>
        <p>{groupData?.thesisTitle}</p>
        <p>{groupData?.members}</p>
      </div>
    </main>
  );
}

export default Page;