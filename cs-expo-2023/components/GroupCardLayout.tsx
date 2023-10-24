import React from 'react';

interface GroupCardProps {
  groupName: string;
  group: {
    thesisTitle: any;
    abstract: any;
    summary: any;
    members: any;
    category: any;
    posterFilePath?: any;
    AVPLink?: any;
  }
}

const GroupCard: React.FC<GroupCardProps> = ({ groupName, group }) => {
  return (
    <div className="flex flex-col w-[300px] h-[400px] bg-stone-400 s-full justify-end">
      <div className="flex s-full">
        <p></p>
      </div>
      <div className="flex h-[100px] bg-rose-500 s-full text-white text-start text-2xl font-bold font-['Helvetica Now Text ']">
        <h1>{groupName}</h1>
      </div>
    </div>
  );
}

interface GroupCardLayoutProps {
  groupData: Map<any,any>;
}
const GroupCardLayout: React.FC<GroupCardLayoutProps> = ({ groupData }) => {
  const groupNames = Object.keys(groupData);
  const groupCards = [];

  groupNames.forEach((groupName, index) => {
    // console.log(groupData[groupName]);
    groupCards.push(
      <GroupCard key={index} groupName={groupName} group={groupData[groupName]}/>
    )
  });

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 content-evenly pt-20">
      <>{groupCards}</>
    </div>
  );
}

export default GroupCardLayout;