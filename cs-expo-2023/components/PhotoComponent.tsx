import React from "react";
import Link from "next/link";

const PhotoComponent = ({ currentButton, customText }) => {
  return (
    <div className="p-72 pb-80 text-center font-medium bg-timberwolf m-10 h-56 relative">
      Sample Photo {currentButton}
      <div className="absolute bottom-[-4rem] right-[-3rem] p-14 font-medium bg-coral-pink text-white w-64 text-left">
      <div className="absolute top-0 right-[-1rem] w-6 h-10 bg-white transform skew-x-[-320deg]"></div>
      <div className="absolute bottom-0 left-[-1rem] w-6 h-10 bg-white transform skew-x-[-320deg]"></div>
        {customText}
        </div>
    </div>
  );
};

export default PhotoComponent