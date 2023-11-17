"use client"
import Link from '@/node_modules/next/link';
import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/ProjectsSidebar';

interface GroupCardProps {
  groupId:string;
  group: {
    thesisTitle: any;
    abstract: any;
    summary: any;
    members: any;
    category: any;
    posterFilePath?: any;
    AVPLink?: any;
    groupName:string
  },

  allFilter: any;
  filterState: any;
}

const GroupCard: React.FC<GroupCardProps> = ({ groupId, group, allFilter, filterState} ) => {
  return (
    
      (allFilter || filterState) && (
      <Link href={groupId}>
        <div className="flex flex-col bg-stone-300 s-full max-sm:min-w-[300px]">
          <div className="flex h-3/4">
            <img src={group.posterFilePath} className="w-auto h-auto"></img>
          </div>
          <div className="flex flex-col h-[140px] bg-coral-pink s-full text-white text-start py-3 px-2 pr-2 pt-1">
            <div className="text-2xl font-bold">{group.groupName}</div>
            <div className="text-md overflow-y-auto">{group.thesisTitle}</div>
          </div>
        </div>
      </Link>
      )
  );
}

interface GroupCardLayoutProps {
  groupData: any;
}
const GroupCardLayout: React.FC<GroupCardLayoutProps> = ({ groupData }) => {
  const groupNames = Object.keys(groupData);
  const groupCards: React.JSX.Element[] = [];
  
  const [allFilter, setAllFilter] = useState(true);
  const [dataanalyticFilter, setDataanalyticFilter] = useState(false);
  const [educationFilter, setEducationFilter] = useState(false);
  const [healthFilter, setHealthFilter] = useState(false);
  const [imgproccvFilter, setImageprooccvFilter] = useState(false);
  const [iotFilter, setIotFilter] = useState(false);
  const [nlpFilter, setNlpFilter] = useState(false);

  const [currentFilter, setCurrentFilter] = useState(()=> {
    if (typeof localStorage !== 'undefined') {
      const filterData = localStorage.getItem('currentFilter');
      return filterData ? Number(JSON.parse(filterData)) : 0;
    } 
    else 
    {
      return 0
    }
  });
  const updateCurrentFilter = (filter:number) => {
    setCurrentFilter(filter);
    localStorage.setItem("currentFilter", JSON.stringify(filter));
  }

  useEffect(() => {
    filterProjects(currentFilter);
  }, []);

  const filterProjects = (category:number) => {
    let tmp = 1<<category;
    setAllFilter(Boolean((tmp >> 0) & 0x1));
    setDataanalyticFilter(Boolean((tmp >> 1) & 0x1));
    setEducationFilter(Boolean((tmp >> 2) & 0x1));
    setHealthFilter(Boolean((tmp >> 3) & 0x1));
    setImageprooccvFilter(Boolean((tmp >> 4) & 0x1));
    setIotFilter(Boolean((tmp >> 5) & 0x1));
    setNlpFilter(Boolean((tmp >> 6) & 0x1));
    updateCurrentFilter(category);
  }

  const sideBarCallback = (m:number) => {
    filterProjects(m);
  }

  let gCategoryFilter:boolean = false;
  groupNames.forEach((groupId, index) => {
    const group = groupData[groupId];
    const category = group["category"];

    if (category === "IoT") {
      gCategoryFilter = iotFilter;
    }
    else if (category === "Health") {
      gCategoryFilter = healthFilter;
    }
    else if (category === "Img proc/CV") {
      gCategoryFilter = imgproccvFilter;
    }
    else if (category === "NLP") {
      gCategoryFilter = nlpFilter;
    }
    else if (category === "Data analytics") {
      gCategoryFilter = dataanalyticFilter;
    }
    else if (category === "Educ") {
      gCategoryFilter = educationFilter;
    }
    groupCards.push(
      <GroupCard key={index} groupId={groupId} group={group} allFilter={allFilter} filterState={gCategoryFilter}/>
    )
  });

  return (
    <div className="grid gap-10 pt-20 justify-items-center 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      {groupCards}
      <Sidebar sideBarCallback={sideBarCallback}/>
    </div>
  );
}

export default GroupCardLayout;