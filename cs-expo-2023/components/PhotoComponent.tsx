import React from "react";

interface PhotoComponentProps {
  currentButton: number;
  customText: string;
}

const PhotoComponent: React.FC<PhotoComponentProps> = ({ currentButton, customText }) => {
  let imageSource = ''; // Define a variable to hold the image source

  if (currentButton === 1) {
    imageSource = '/dev-day/dev-day01.jpg';
  } else if (currentButton === 2) {
    imageSource = '/dev-day/dev-day02.jpg';
  } else if (currentButton === 3) {
    imageSource = '/dev-day/dev-day03.jpg';
  }

  return (
    <div className="p-1 sm:2 text-center font-medium bg-coral-pink w-auto h-auto mt-11 mb-2 ml-6 mr-10 sm:mt-2 sm:mb-4 sm:ml-28 sm:mr-40 relative">
      <div className="hidden"> {currentButton} </div>
    <img
      src={imageSource}
      className="object-cover w-full h-full"
    />
      <div className="absolute bottom-[-2.5rem] right-[-1.5rem] p-4 sm:p-6 font-normal sm:font-medium xs:text-3xs bg-coral-pink text-white mb-6 h-36 sm:h-64 w-36 sm:w-72 text-left sm:bottom-[-3.8rem] sm:right-[-4rem] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        {customText}
      </div>


    </div>
  );
};

export default PhotoComponent;
