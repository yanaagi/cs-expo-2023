import React from "react";

interface PhotoComponentProps {
  currentButton: number;
  customText: string;
}

const PhotoComponent: React.FC<PhotoComponentProps> = ({ currentButton, customText }) => {
  let imageSource = ''; // Define a variable to hold the image source

  if (currentButton === 1) {
    imageSource = '/dev-day/devday.jpg';
  } else if (currentButton === 2) {
    imageSource = '/dev-day/devday2.jpg';
  } else if (currentButton === 3) {
    imageSource = '/dev-day/devday3.jpg';
  }

  return (
    <div className="text-center font-medium bg-timberwolf mb-2 ml-6 mr-20 sm:mt-2 sm:mb-4 sm:ml-96 sm:mr-40 relative sm:w-1/2">
  {currentButton !== 1 && currentButton !== 2 && currentButton !== 3 && (
    <div className="hidden">{currentButton}</div>
  )}
  <img
    src={imageSource}
    className="object-cover"
    alt="Your Alt Text Here"
  />
   <div className="absolute bottom-[-2.5rem] right-[-1.5rem] p-4 sm:p-6 font-normal sm:font-medium bg-coral-pink text-white mb-6 h-36 sm:h-64 w-36 sm:w-72 text-left sm:bottom-[-3.8rem] sm:right-[-4rem] text-xs sm:text-sm md:text-base lg:text-lg">
    {customText}
      </div>
    </div>
  );
};

export default PhotoComponent;
