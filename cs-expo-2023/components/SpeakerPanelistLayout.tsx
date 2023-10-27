import React, { useState } from "react";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

interface SpeakerPanelistLayoutProps {
  speakerNames: string[];
  photoNumber: string[];
  speakerProfession: string[];
  intOrExt: string[];
  panelOrSpeaker: string;
}

const SpeakerPanelistLayout: React.FC<SpeakerPanelistLayoutProps> = ({
  speakerNames,
  photoNumber,
  speakerProfession,
  intOrExt,
  panelOrSpeaker,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeButton = (direction: string) => {
    if (direction === "above") {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 >= 0 ? prevIndex - 1 : speakerNames.length - 1
      );
    } else if (direction === "below") {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 < speakerNames.length ? prevIndex + 1 : 0
      );
    }
  };

  return (
    
      <div className="md:ms-1 md:me-1">
        <h1 className="font-black text-8xl text-right">
          {panelOrSpeaker}
        </h1>
        <div className="grid grid-cols-12 mt-10 mb-10 me-15">

          {/* Profession, Internal or External, Description Grid */}
          <div className="col-span-4">
            <h1 className="font-black text-6xl text-right font-sans">
              {speakerProfession[currentIndex]}
            </h1>
            <h2 className="font-black text-2xl text-right mt-4 font-sans">
              {intOrExt[currentIndex]}
            </h2>
            <h3 className="font-regular text-6x1 text-right mt-8 font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl purus in mollis nunc sed id semper risus. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus
            </h3>
          </div>

          {/* Photo Grid */}
          <div className="col-span-4 ml-10 mr-10 mb-10 mt-10 relative flex justify-center items-center">
            <div className="p-10 bg-timberwolf h-[520px] w-[350px] relative">
              <img
                src="your-placeholder-image-url.jpg"
                alt="Speaker's Photo"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Panelist's Names Grid */}
          <div className="col-span-4">
            <div className="text-center text-coral-pink ml-5">
              <button onClick={() => changeButton("above")}><AiOutlineUp className="stroke-current w-10 h-12" /></button>
            </div>
            <h1 className="font-black text-4xl text-right mt-5 font-sans">
              {speakerNames[(currentIndex - 3 + speakerNames.length) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl text-right mt-5 font-sans">
              {speakerNames[(currentIndex - 2 + speakerNames.length) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl text-right mt-5 font-sans">
              {speakerNames[(currentIndex - 1 + speakerNames.length) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-6xl text-right text-coral-pink mt-5 font-sans">
              {speakerNames[currentIndex]}
            </h1>
            <h1 className="font-black text-4xl text-right mt-5 font-sans">
              {speakerNames[(currentIndex + 1) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl text-right mt-5 font-sans">
              {speakerNames[(currentIndex + 2) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl text-right mt-5 font-sans">
              {speakerNames[(currentIndex + 3) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl text-right mt-5 font-sans">
              {speakerNames[(currentIndex + 4) % speakerNames.length]}
            </h1>
            <div className="text-center text-coral-pink mt-2 ml-5">
              <button onClick={() => changeButton("below")}><AiOutlineDown className="stroke-current w-10 h-12" /></button>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default SpeakerPanelistLayout;