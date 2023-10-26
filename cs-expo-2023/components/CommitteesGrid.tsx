'use client';
import React, { useState } from 'react';

const CommitteesGrid = () => {
  // Define an array of committee names
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

  const [hovered, setHovered] = useState<number | null>(null); // State to track the index of the hovered square

  const committeeSquareStyle = {
    backgroundColor: 'rgb(255, 90, 95)',
    color: 'white',
    textAlign: 'right' as 'right',
    width: '230px',
    height: '230px',
    padding: '20px',
    fontSize: '2.5rem',
    fontFamily: 'Helvetica Now Text',
    position: 'relative' as 'relative',
    transition: 'transform 0.2s', // Add a transition for smooth hover effect
  };

  const textRightStyle = {
    textAlign: 'right' as 'right',
  };

  const learnMoreStyle = {
    textAlign: 'right' as 'right',
    fontSize: '1rem',
    position: 'absolute' as 'absolute',
    bottom: '10px',
    right: '10px',
    color: 'white',
    textDecoration: 'none', // Remove underline
    cursor: 'pointer',
    fontWeight: 'bold', // Add bold font
  };

  const boldTextStyle = {
    fontWeight: 'bold',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '15px',
    marginLeft: '115px',
    marginTop: '15px',
  };

  const handleMouseEnter = (index: number) => {
    // Set the index of the hovered square
    setHovered(index);
  };

  const handleMouseLeave = () => {
    // Remove the hover effect when the cursor leaves any square
    setHovered(null);
  };

  return (
    <div style={gridStyle} className="committees-grid">
      {committeeNames.map((committeeName, index) => (
        <div
          key={index}
          style={{
            ...committeeSquareStyle,
            transform: hovered === index ? 'scale(1.05)' : 'scale(1)', // Apply the hover effect using transform
          }}
          className="committee-square"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave} // Use the same handler for all squares
        >
          <div style={boldTextStyle}>{committeeName}</div>
          <a href="#" style={learnMoreStyle}>LEARN MORE &gt;</a>
        </div>
      ))}
    </div>
  );
};

export default CommitteesGrid;
