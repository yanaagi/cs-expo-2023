import React, { useState } from "react";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";


interface SpeakerPanelistLayoutProps {
  speakerNames: string[];
  photoNumber: string[];
  speakerProfession: string[];
  intOrExt: string[];
  panelOrSpeaker: string;
  description: string[];
  photo: string [];
  
}

const SpeakerPanelistLayout: React.FC<SpeakerPanelistLayoutProps> = ({
  speakerNames,
  photoNumber,
  speakerProfession,
  intOrExt,
  panelOrSpeaker,
  description,
  photo
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
        <hr className="border-t-1 border-black mb-4 ml-20"></hr>
        <h1 className="font-black text-8xl text-right mr-20 mt-10">
          {panelOrSpeaker}
        </h1>
        <div className="grid grid-cols-3 mr-20">
          {/* Profession and Description Grid */}
          <div className="col-span-1 p-5">
            <h1 className="font-black text-6xl text-right font-sans">
              {speakerProfession[currentIndex]}
            </h1>
            <h2 className="font-black text-2xl text-right mt-4 font-sans">
              {intOrExt[currentIndex]}
            </h2>
            <p className="font-medium text-base sm:text-2x1 text-right mt-10">
              {description[currentIndex]}
            </p>
          </div>

          {/* Photo Grid */}
          <div className="col-span-1 relative flex justify-center items-center">
            <div className="p-10 bg-timberwolf h-[500px] w-[360px] relative"> 
            {photo && photo.length > 0 && (
              <img
                src={photo[currentIndex]}
                alt="Speaker's Photo"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
              />
            )}
            </div>
          </div>


          {/* Panelist's Names Grid */}
          <div className="col-span-1 p-5 justfiy-center">
            <div className="text-right pr-40 text-coral-pink">
              <button onClick={() => changeButton("above")}><AiOutlineUp className="stroke-current w-10 h-12" /></button>
            </div>
            <h1 className="font-black text-4xl text-right mt-1 mr-10 font-sans opacity-10">
              {speakerNames[(currentIndex - 3 + speakerNames.length) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl text-right mt-7 mr-10 font-sans opacity-25">
              {speakerNames[(currentIndex - 2 + speakerNames.length) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl text-right mt-7 mr-10 font-sans opacity-50">
              {speakerNames[(currentIndex - 1 + speakerNames.length) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-6xl text-right text-coral-pink mt-7 mr-10 font-sans">
              {speakerNames[currentIndex]}
            </h1>
            <h1 className="font-black text-4xl text-right mt-7 mr-10 font-sans opacity-50">
              {speakerNames[(currentIndex + 1) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl text-right mt-7 mr-10 font-sans opacity-50">
              {speakerNames[(currentIndex + 2) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl text-right mt-7 mr-10 font-sans opacity-25">
              {speakerNames[(currentIndex + 3) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl text-right mt-7 mr-10 font-sans opacity-10">
              {speakerNames[(currentIndex + 4) % speakerNames.length]}
            </h1>
            <div className="text-right pr-40 text-coral-pink ml-5">
              <button onClick={() => changeButton("below")}><AiOutlineDown className="stroke-current w-10 h-12" /></button>
            </div>
          </div>
        </div>
        <hr className="border-t-1 border-black mb-4 ml-20"></hr>
      </div>
    
  );
};

export default SpeakerPanelistLayout;