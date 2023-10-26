'use client';
import React, { useState } from 'react';

const CommitteesGrid = () => {
  const committeeNames = [
    'Committee Name 1',
    'Committee Name 2',
    'Committee Name 3',
    'Committee Name 4',
    'Committee Name 5',
    'Committee Name 6',
    'Committee Name 7',
    'Committee Name 8',
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  const committeeSquareStyle =
    'w-60 h-60 p-4 bg-coral-pink text-white text-right text-3xl font-bold relative transition-transform duration-200 transform scale-100 hover:scale-105';

  const learnMoreStyle =
    'text-sm absolute bottom-4 right-4 text-white no-underline cursor-pointer';

  const boldTextStyle = 'font-bold';

  const gridStyle = 'grid grid-cols-4 gap-4 ml-28 mt-4';

  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className={gridStyle}>
      {committeeNames.map((committeeName, index) => (
        <div
          key={index}
          className={`${committeeSquareStyle} ${
            hovered === index ? 'scale-105' : ''
          }`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={boldTextStyle}>{committeeName}</div>
          <a href="#" className={learnMoreStyle}>
            LEARN MORE &gt;
          </a>
        </div>
      ))}
    </div>
  );
};

export default CommitteesGrid;
