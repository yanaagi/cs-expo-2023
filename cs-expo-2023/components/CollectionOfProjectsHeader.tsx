import React from 'react';

interface CollectionOfProjectsProps {
    headerText: string;
    subheaderText: string;
}

const CollectionOfProjectsHeader: React.FC<CollectionOfProjectsProps> = ({ headerText, subheaderText}) => {
  return (
    <main>

        <div className="w-full self-center relative">
            <div className="w-full top-0 text-center text-zinc-900 text-5xl font-bold font-['Helvetica Now Text ']">
              {headerText}
            </div>
            <div className="flex w-4/12 mx-auto text-center text-zinc-900 text-xl font-normal font-['Helvetica Now Text ']">
              {subheaderText}
            </div>
        </div>
    </main>
  );
};
export default CollectionOfProjectsHeader;