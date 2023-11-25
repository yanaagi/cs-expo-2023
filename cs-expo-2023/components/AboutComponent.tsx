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
      <div className="p-1 w-3/4 bg-coral-pink mt-3 mb-12">
        <img src="/dev-day/dev-day04.jpg"/>
      </div>
    </div>
  );
};

export default AboutComponent;
