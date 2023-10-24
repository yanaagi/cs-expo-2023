import React from "react";
import Link from "next/link";

const AboutComponent = ({ customText, sampleText }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="flex-shrink-0 max-w-2xl p-12 mb-10">
        <h1 className="font-black text-8xl mb-7">ABOUT</h1>
        <p className="font-medium text-base">
          {customText}
        </p>
      </div>
      <div className="p-60 bg-timberwolf ml-40">
        {sampleText}
      </div>
    </div>
  );
};

export default AboutComponent;