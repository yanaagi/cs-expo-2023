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
<<<<<<< HEAD
    imageSource = '/path-to-photo2.jpg'; 
  } else if (currentButton === 3) {
    imageSource = '/path-to-photo3.jpg'; 
  }

  return (
    <div className="p-52 pb-52 text-center font-medium sm:text-3xl bg-timberwolf ml-20 mt-10 mr-16 mb-4 h-62 sm:p-80 sm:ml-14 sm:mt-5 sm:mr-8 sm:mb-2 sm:h-62 relative">
      Sample Photo {currentButton}
      <img
        src={imageSource}
        className="object-cover w-full h-full"
      />
      <div className="absolute bottom-[-2rem] right-[-3rem] p-12 font-medium bg-coral-pink text-white h-36 w-48 text-left sm:text-xl sm:bottom-[-1.5rem] sm:right-[-2rem] sm:p-10 sm:h-72 sm:w-96">
  <div className="absolute top-0 right-[-1rem] w-6 h-10 bg-white transform skew-x-[-320deg] sm:w-3 sm:h-5"></div>
  <div className="absolute bottom-0 left-[-1rem] w-6 h-8 bg-white transform skew-x-[-320deg] sm:w-3 sm:h-4"></div>
        {customText}
=======
    imageSource = '/path-to-photo2.jpg';
  } else if (currentButton === 3) {
    imageSource = '/path-to-photo3.jpg';
  }

  return (
    <div className="p-24 text-center font-medium bg-timberwolf w-auto h-auto mt-11 mb-2 ml-6 mr-10 sm:p-64 sm:mt-2 sm:mb-4 sm:ml-28 sm:mr-40 relative">
    Sample Photo {currentButton}
    <img
      src={imageSource}
      className="object-cover w-full h-full"
    />
   <div className="absolute bottom-[-2.5rem] right-[-1.5rem] p-4 sm:p-6 font-normal sm:font-medium bg-coral-pink text-white mb-6 h-36 sm:h-64 w-36 sm:w-72 text-left sm:bottom-[-3.8rem] sm:right-[-4rem] text-sm sm:text-base md:text-lg lg:text-xl">
    {customText}
>>>>>>> f675e18bcc7bff0dc5d605c99d8f0019755b0804
      </div>
    </div>
  );
};

export default PhotoComponent;
