import { useRouter } from 'next/router'
import { FC } from 'react';
import GroupsData from "../../../thesis-projects.json"

interface GroupProps {
  groupid: string;
}

 
const Page: React.FC<GroupProps> = ({params}) => {
  console.log(params);
  const groupData = GroupsData[params.groupid];
  console.log(groupData);
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        <p>{groupData.thesisTitle}</p>
        <p>{groupData.abstract}</p>
      </div>
    </main>
  );
}

export default Page;