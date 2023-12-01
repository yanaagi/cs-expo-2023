import React from "react";

interface PhotoComponentProps {
  currentButton: number;
  customText: string;
  filePath: string;
}

const PhotoComponent: React.FC<PhotoComponentProps> = ({ currentButton, customText, filePath }) => {
  let imageSource = ''; // Define a variable to hold the image source

  if (filePath.includes('/dev-day/')) {
    // Check if the file path includes '/dev-day/'
    if (currentButton === 1) {
      imageSource = '/dev-day/dev-day01.jpg';
    } else if (currentButton === 2) {
      imageSource = '/dev-day/dev-day02.jpg';
    } else if (currentButton === 3) {
      imageSource = '/dev-day/dev-day03.jpg';
    }
  } else if (filePath.includes('/cs-expo/')) {
    // Check if the file path includes '/cs-expo/'
    if (currentButton === 1) {
      imageSource = '/cs-expo/cs-expo01.jpg';
    } else if (currentButton === 2) {
      imageSource = '/cs-expo/cs-expo02.jpg';
    } else if (currentButton === 3) {
      imageSource = '/cs-expo/cs-expo03.jpg';
    }
  }

  return (
    <div className="p-1.5 text-center font-medium bg-coral-pink w-auto h-auto mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5 2xl:mt-6 mb-0.5 sm:mb-1 md:mb-1.5 lg:mb-2 xl:mb-2.5 2xl:mb-3 ml-5 sm:ml-6 md:ml-20 lg:ml-28 xl:ml-36 2xl:ml-40 mr-1 sm:mr-2 md:mr-3 lg:mr-4 xl:mr-14 2xl:mr-10 relative">
  <div className="hidden">{currentButton}</div>
  <img src={imageSource} className="object-cover w-full h-full" />
  <div className="absolute bottom-[-2.5rem] right-[-0.5rem] p-3 lg:p-4 font-normal sm:font-medium xs:text-2xs sm:text-xs bg-coral-pink text-white mb-6 h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 2xl:h-72 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-72 text-left lg:bottom-[-3.8rem] lg:right-[-4rem] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl overflow-ellipsis overflow-hidden transition-all duration-300">
        {customText}
      </div>
    </div>
  );
};

export default PhotoComponent;
