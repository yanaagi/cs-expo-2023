'use client';
import React, { useState, useEffect } from 'react';

const CommitteesGrid = () => {
  const committeeNames = [
    'PROGRAMS COMMITTEE',
    'SECRETARIAT COMMITTEE',
    'SPONSORSHIP & PARTNERSHIP COMMITTEE',
    'SPEAKERS & PANELIST COMMITTEE',
    'LOGISTICS COMMITTEE',
    'PUBLICITY & PUBLICATION COMMITTEE',
    'CREATIVES & MEDIA COMMITTEE',
    'DEVELOPERS COMMITTEE',
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleButtonClick = (committeeName: string) => {
    const sectionElement = document.getElementById(committeeName);
    if (sectionElement) {
      // Define your custom target scroll position for each committee section
      let targetScroll = sectionElement.offsetTop - 50; // Adjust as needed

      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center"> {/* Center the columns in smaller screens */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4`}>
        {committeeNames.map((committeeName, index) => (
          <a
            key={index}
            onClick={() => handleButtonClick(committeeName)}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <div
              className={`p-4 bg-coral-pink text-white text-center sm:text-right font-bold relative transform scale-100 hover:scale-105 ${
                hovered === index ? 'scale-105' : ''
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{ minWidth: '200px', maxWidth: '240px', minHeight: '200px', maxHeight: '240px', position: 'relative' }}
            >
              <div className="font-bold text-1xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-2xl">
                {committeeName}
              </div>
              <div className="text-white text-right absolute bottom-4 right-4">
                Learn More &gt;
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CommitteesGrid;
