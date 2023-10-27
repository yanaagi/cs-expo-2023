'use client';
import React, { useState, useEffect } from 'react';

const Sidebar = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBoxClick = (boxNumber) => {
    console.log(`Clicked on Box ${boxNumber}`);
    // Action
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setShowArrow(offset > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-center">
      {showArrow && (
        <div
          className="text-2xl cursor-pointer mb-4"
          onClick={handleScrollUp}
        >
          &uarr;
        </div>
      )}
      <div className="mb-2 mr-5 ml-5 flex-col text-white items-center justify-center">
        {[1, 2, 3, 4, 5, 6, 7].map((boxNumber) => (
          <div
            key={boxNumber}
            className="w-40 h-10 bg-coral-pink mb-2 flex items-center justify-center cursor-pointer"
            onClick={() => handleBoxClick(boxNumber)}
          >
            Category {boxNumber}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
