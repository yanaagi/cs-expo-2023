import React from "react";

interface PhotoComponentProps {
  currentButton: number;
  customText: string;
}

const PhotoComponent: React.FC<PhotoComponentProps> = ({ currentButton, customText }) => {
  let imageSource = ''; // Define a variable to hold the image source

  if (currentButton === 1) {
    imageSource = '/path-to-photo1.jpg';
  } else if (currentButton === 2) {
    imageSource = '/path-to-photo2.jpg'; 
  } else if (currentButton === 3) {
    imageSource = '/path-to-photo3.jpg'; 
  }

  return (
    <div className="p-72 pb-72 text-center font-medium sm:text-3xl bg-timberwolf ml-28 mt-10 mr-16 mb-4 h-62 relative">
      Sample Photo {currentButton}
      <img
        src={imageSource}
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-[-2rem] right-[-3rem] p-12 font-medium bg-coral-pink text-white h-72 w-96 text-left sm:text-xl sm:bottom-[-3rem] sm:right-[-4rem]">
        <div className="absolute top-0 right-[-1rem] w-6 h-10 bg-white transform skew-x-[-320deg]"></div>
        <div className="absolute bottom-0 left-[-1rem] w-6 h-8 bg-white transform skew-x-[-320deg]"></div>
        {customText}
      </div>
    </div>
  );
};

export default PhotoComponent;
