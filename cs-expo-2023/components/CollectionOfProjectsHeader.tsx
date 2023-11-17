import React from 'react';

interface CollectionOfProjectsProps {
    headerText: string;
    subheaderText: string;
}

const CollectionOfProjectsHeader: React.FC<CollectionOfProjectsProps> = ({ headerText, subheaderText}) => {
  return (
    <div className="flex flex-col w-full justify-center min-w-[300px]">
      <div className="flex justify-center text-center text-zinc-900 text-5xl custom-font">
        {headerText}
      </div>
      <div className="flex justify-center text-center md:w-4/5 lg:w-4/5 mx-auto text-zinc-900 max-sm:text-base md:text-lg lg:text-xl font-normal font-['Helvetica Now Text ']">
        {subheaderText}
      </div>
    </div>
  );
};
export default CollectionOfProjectsHeader;