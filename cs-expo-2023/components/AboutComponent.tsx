import React from "react";

interface AboutComponentProps {
  customText: string;
  imageSource: string;
}

const AboutComponent: React.FC<AboutComponentProps> = ({ customText, imageSource }) => {
  return (
    <div className="flex flex-col 2xl:flex-row ml-auto lg:space-x-20">
    <div className="mb-2 mr-7 text-center ml-6 mt-3">
     <h1 className="font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-16 custom-font">ABOUT</h1>
      <p className="font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-justify mx-2 sm:mx-4 md:mx-8 lg:mx-10 xl:mx-16">
        {customText}
      </p>
    </div>
    <div className="p-1.5 text-center font-medium bg-coral-pink w-auto sm:w-auto md:w-auto lg:w-auto xl:w-auto 2xl:w-full h-auto sm:h-auto md:h-72 lg:h-80 xl:h-120 2xl:h-full mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5 2xl:mt-6 mb-5 sm:mb-5 md:mb-5 lg:mb-6 xl:mb-6 2xl:mb-7 ml-5 sm:ml-6 md:ml-20 lg:ml-28 xl:ml-36 2xl:ml-40 mr-1 sm:mr-2 md:mr-3 lg:mr-4 xl:mr-14 2xl:mr-10 relative">
      <img src={imageSource} className="object-cover w-full h-full sm:order-last"/>
    </div>
  </div>
  );
};

export default AboutComponent;
