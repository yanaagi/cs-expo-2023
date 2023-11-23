import React from 'react';

interface MeetTheCommitteesProps {
    headerText: string;
}

const MeetTheCommitteesHeader: React.FC<MeetTheCommitteesProps> = ({ headerText,}) => {
    return (
        <div className="flex flex-col w-full justify-center min-w-[300px]">
          <div className="flex justify-center text-center text-zinc-900 text-4xl lg:text-7xl custom-font">
            {headerText}
          </div>
        </div>
      );
};

export default MeetTheCommitteesHeader;
