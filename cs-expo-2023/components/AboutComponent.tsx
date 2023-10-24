import React from "react";

interface AboutComponentProps {
  customText: string;
  sampleText: string;
}

const AboutComponent: React.FC<AboutComponentProps> = ({ customText, sampleText }) => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start mb-4 mx-4 sm:mx-0 mt-20 mb-52">
      <div className="max-w-2xl p-4 sm:p-12 mb-10">
        <h1 className="font-black text-5xl sm:text-8xl mb-20">ABOUT</h1>
        <p className="font-medium text-base sm:text-2xl">
          {customText}
        </p>
      </div>
      <div className="p-20 sm:p-72 bg-timberwolf mt-8 sm:mt-0 ml-0 sm:ml-40 sm:text-2xl font-medium">
        {sampleText}
      </div>
    </div>
  );
};

export default AboutComponent;