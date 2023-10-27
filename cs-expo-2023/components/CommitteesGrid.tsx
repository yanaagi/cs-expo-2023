'use client';
import React, { useState } from 'react';

const CommitteesGrid = () => {
  const committeeNames = [
    'COMMITTEE NAME 1',
    'COMMITTEE NAME 2',
    'COMMITTEE NAME 3',
    'COMMITTEE NAME 4',
    'COMMITTEE NAME 5',
    'COMMITTEE NAME 6',
    'COMMITTEE NAME 7',
    'COMMITTEE NAME 8',
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="grid grid-cols-4 gap-4 ml-28 mt-4">
      {committeeNames.map((committeeName, index) => (
        <div
          key={index}
          className={`p-4 bg-coral-pink text-white text-right font-bold relative transform scale-100 hover:scale-105 ${
            hovered === index ? 'scale-105' : ''
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{ width: '100%', maxWidth: '250px', minHeight: '250px' }}
        >
          <div className="font-bold text-3xl">{committeeName}</div>
          <a href="#" className="text-sm absolute bottom-4 right-4 text-white no-underline cursor-pointer font-bold">
            LEARN MORE &gt;
          </a>
        </div>
      ))}
    </div>
  );
};

export default CommitteesGrid;
