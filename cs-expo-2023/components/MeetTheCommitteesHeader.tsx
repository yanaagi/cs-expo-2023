import React from 'react';

interface MeetTheCommitteesProps {
    headerText: string;
}

const MeetTheCommitteesHeader: React.FC<MeetTheCommitteesProps> = ({ headerText }) => {
    return (
        <main>
            <div className="w-full text-left ml-[13%]">
                <div className="w-full top-0 text-zinc-900 text-5xl font-['Helvetica Now Text']">
                    <p>
                        <span className="text-left text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"> {/* Larger font for "meet the" on large screens */}
                            meet the
                        </span>
                        <br />
                        <span className="text-left custom-font text-5xl sm:text-4xl md-text-5xl lg:text-6xl xl:text-7xl"> {/* Larger font for headerText on large screens */}
                            {headerText}
                        </span>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default MeetTheCommitteesHeader;
