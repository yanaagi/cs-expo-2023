import React from "react";

interface AboutComponentProps {
  customText: string;
  sampleText: string;
}

const AboutComponent: React.FC<AboutComponentProps> = ({ customText, sampleText }) => {
  return (
    <div className="flex flex-col items-center sm:flex-row right-0 ml-auto lg:space-x-20">
      <div className="mb-2 mr-7 text-center ml-6">
        <h1 className="font-black text-5xl sm:text-8xl mb-8 custom-font">ABOUT</h1>
        <p className="font-medium text-base sm:text-2xl text-justify mx-10 ">
          {customText}
        </p>
      </div>
      <div className="p-1.5 text-center font-medium bg-coral-pink w-auto sm:w-2/3 2xl:w-full sm:h-24 md:h-32 lg:h-48 xl:h-60 2xl:h-full mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5 2xl:mt-6 mb-5 sm:mb-5 md:mb-5 lg:mb-6 xl:mb-8 2xl:mb-10 ml-5 sm:ml-6 md:ml-20 lg:ml-28 xl:ml-36 2xl:ml-40 mr-1 sm:mr-2 md:mr-3 lg:mr-4 xl:mr-14 2xl:mr-10 relative">
        <img src="/dev-day/dev-day04.jpg " className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default AboutComponent;
