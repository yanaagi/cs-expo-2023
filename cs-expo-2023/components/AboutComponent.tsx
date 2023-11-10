import React from "react";

interface AboutComponentProps {
  customText: string;
  sampleText: string;
}

const AboutComponent: React.FC<AboutComponentProps> = ({ customText, sampleText }) => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start m-10 p-1 sm:m-20 sm:p-4 mb-14">
      <div className="max-w-2xl mb-2 mr-1 text-center sm:mb-0 sm:mr-0">
        <h1 className="font-black text-5xl sm:text-8xl mb-8">ABOUT</h1>
        <p className="font-medium text-base sm:text-2xl text-justify">
          {customText}
        </p>
      </div>
      <div className="p-20 sm:p-48 bg-timberwolf mt-3 ml-1 sm:ml-40">
      <img src="/samplePhoto.png" alt="SamplePhoto2" className="w-auto h-auto" />
      </div>
    </div>
  );
};

export default AboutComponent;
