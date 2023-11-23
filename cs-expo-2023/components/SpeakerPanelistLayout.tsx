<<<<<<< HEAD
  import React, { useState } from "react";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
=======
import React, { useState } from "react";
import { AiOutlineUp, AiOutlineDown, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";

>>>>>>> f675e18bcc7bff0dc5d605c99d8f0019755b0804


interface SpeakerPanelistLayoutProps {
  speakerNames: string[];
<<<<<<< HEAD
  photoNumber: string[];
=======
>>>>>>> f675e18bcc7bff0dc5d605c99d8f0019755b0804
  speakerProfession: string[];
  intOrExt: string[];
  panelOrSpeaker: string;
  description: string[];
<<<<<<< HEAD
  photo: string [];
=======
  photo: string[];
>>>>>>> f675e18bcc7bff0dc5d605c99d8f0019755b0804
  
}

const SpeakerPanelistLayout: React.FC<SpeakerPanelistLayoutProps> = ({
  speakerNames,
<<<<<<< HEAD
  photoNumber,
=======
>>>>>>> f675e18bcc7bff0dc5d605c99d8f0019755b0804
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
<<<<<<< HEAD
      <div className="md:ms-1 md:me-1">
        {/* TITLE */}
        <hr className="border-t-1 border-black mb-4 ml-20"></hr>
        <h1 className="font-black text-5xl sm:text-8xl mb-20 text-right">
          {panelOrSpeaker}
        </h1>
        {/*Wrapper*/}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 mr-10">
          {/* Profession and Description Grid */}  
          <div className="max-w-6xl col-span-1 p-4 ml-20 sm:p-12 mb-14 text-center sm:text-left"> 
            <h1 className="font-black text-4xl sm:text-6xl mb-20 text-right">
=======
    <div>
      {/* WEB VIEW */}
      <div className="mx-10 hidden md:hidden lg:block">
        {/* Title */}
        <h1 className="custom-font text-8xl mb-5 ml-10 text-right">{panelOrSpeaker}</h1>

        {/* Grid Wrapper */}
        <div className="grid grid-cols-12">

          {/* Profession and Description Grid */}  
          <div className="col-span-4 p-4 ml-20 mb-14 text-right"> 
            <h1 className="font-black text-6xl">
>>>>>>> f675e18bcc7bff0dc5d605c99d8f0019755b0804
              {speakerProfession[currentIndex]}
            </h1>
            <h2 className="font-black text-2xl text-right mt-4 font-sans">
              {intOrExt[currentIndex]}
            </h2>
<<<<<<< HEAD
            <p className="font-medium text-base sm:text-2x1 text-right mt-10">
=======
            <p className="font-medium text-2x1 text-justify mt-10">
>>>>>>> f675e18bcc7bff0dc5d605c99d8f0019755b0804
              {description[currentIndex]}
            </p>
          </div>

          {/* Photo Grid */}
<<<<<<< HEAD
          <div className="col-span-1 relative flex justify-center items-center">
            <div className="p-5 sm:p-5 bg-timberwolf sm:w-80 sm:h-80 lg:w-80 lg:h-96 relative">
              {photo && photo.length > 0 && (
                <img
                  src={photo[currentIndex]}
                  alt="Speaker's Photo"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
=======
          <div className="col-span-4 relative flex justify-center items-center">
            <div className="p-5 bg-timberwolf w-80 h-96 ml-10 relative">
              {photo && photo.length > 0 && (
                <img
                  src={photo[currentIndex]}
                  alt="Photo"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover scale-90"
>>>>>>> f675e18bcc7bff0dc5d605c99d8f0019755b0804
                />
              )}
            </div>
          </div>


          {/* Panelist's Names Grid */}
<<<<<<< HEAD
          <div className="col-span-1 p-5 justfiy-center">
            <div className="text-right pr-40 text-coral-pink">  
              <button onClick={() => changeButton("above")}><AiOutlineUp className="stroke-current w-10 h-12" /></button>
            </div>
            <h1 className="font-black text-4xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-right mt-1 mr-10 font-sans opacity-10">
              {speakerNames[(currentIndex - 3 + speakerNames.length) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-right mt-7 mr-10 font-sans opacity-25">
              {speakerNames[(currentIndex - 2 + speakerNames.length) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-right mt-7 mr-10 font-sans opacity-50">
              {speakerNames[(currentIndex - 1 + speakerNames.length) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-5xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl text-right text-coral-pink mt-7 mr-10 font-sans">
              {speakerNames[currentIndex]}
            </h1>
            <h1 className="font-black text-4xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-right mt-7 mr-10 font-sans opacity-50">
              {speakerNames[(currentIndex + 1) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-right mt-7 mr-10 font-sans opacity-50">
              {speakerNames[(currentIndex + 2) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-right mt-7 mr-10 font-sans opacity-25">
              {speakerNames[(currentIndex + 3) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-right mt-7 mr-10 font-sans opacity-10">
              {speakerNames[(currentIndex + 4) % speakerNames.length]}
            </h1>
            <div className="text-right pr-40 text-coral-pink ml-5">
              <button onClick={() => changeButton("below")}><AiOutlineDown className="stroke-current w-10 h-12" /></button>
            </div>
          </div>
        </div>
        <hr className="border-t-1 border-black mb-4 ml-20"></hr>
      </div>
    
=======
          <div className="col-span-4 p-5 ml-10 justfiy-center">
            <div className="text-right pr-40 text-coral-pink ml-20">  
              <button onClick={() => changeButton("above")}><AiOutlineUp className="stroke-current w-10 h-12" /></button>
            </div>
            <h1 className="font-black text-2xl text-right mt-1 font-sans opacity-10">
              {speakerNames[(currentIndex - 3 + speakerNames.length) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-2xl text-right mt-7 font-sans opacity-25">
              {speakerNames[(currentIndex - 2 + speakerNames.length) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-2xl text-right mt-7 font-sans opacity-50">
              {speakerNames[(currentIndex - 1 + speakerNames.length) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl text-coral-pink mt-5 mb-3 ml-10 text-right font-sans">
              {speakerNames[currentIndex]}
            </h1>
            <h1 className="font-black text-2xl text-right mt-7 font-sans opacity-50">
              {speakerNames[(currentIndex + 1) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-2xl text-right mt-7 font-sans opacity-50">
              {speakerNames[(currentIndex + 2) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-2xl text-right mt-7 font-sans opacity-25">
              {speakerNames[(currentIndex + 3) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-2xl text-right mt-7 font-sans opacity-10">
              {speakerNames[(currentIndex + 4) % speakerNames.length]}
            </h1>
            <div className="text-right pr-40 text-coral-pink ml-20">
              <button onClick={() => changeButton("below")}><AiOutlineDown className="stroke-current w-10 h-12" /></button>
            </div>
          </div>
        </div>
        
      </div>

      {/* TABLET VIEW */}
      <div className="md:ms-1 md:me-1 mx-7 mb-10 hidden sm:hidden md:block lg:hidden">
        {/* Title */}
        <h1 className="font-black text-5xl text-center">{panelOrSpeaker}</h1>

        {/* Grid Wrapper */}
        <div className="grid grid-cols-1 grid-cols-1">

          {/* Panelist's Names Grid */}
          <div className="col-span-1 justfiy-center">
            <div className="grid grid-cols-8 pb-4 pt-2">
              <div className="col-span-1 text-center text-coral-pink">
                <button onClick={() => changeButton("above")}><AiOutlineLeft className="stroke-current w-12 h-12" /></button>
              </div>
              <h1 className="col-span-6 font-black text-2xl pt-2 text-coral-pink text-center font-sans">
                {speakerNames[currentIndex]}
              </h1>
              <div className="col-span-1 text-center text-coral-pink">
                <button onClick={() => changeButton("below")}><AiOutlineRight className="stroke-current w-12 h-12" /></button>
              </div> 
            </div>
          </div>

          {/* Photo Grid */}
          <div className="col-span-4 relative flex justify-center items-center">
            <div className="p-5 bg-timberwolf w-80 h-96 ml-10 relative">
              {photo && photo.length > 0 && (
                <img
                  src={photo[currentIndex]}
                  alt="Photo"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover scale-90"
                />
              )}
            </div>
          </div>

          {/* Profession and Description Grid */}  
          <div className="col-span-1 pt-4 mb-1 text-center"> 
            <h1 className="font-black text-2xl text-center">
              {speakerProfession[currentIndex]}
            </h1>
            <h2 className="font-black text-2xl text-center font-sans">
              {intOrExt[currentIndex]}
            </h2>
            <p className="font-medium text-2x1 text-justify">
              {description[currentIndex]}
            </p>
          </div>

        </div>
      </div>
      
      {/* MOBILE VIEW */}
      <div className="md:ms-1 md:me-1 mx-7 mb-10 sm:block xs:block md:hidden lg:hidden">
        {/* Title */}
        <h1 className="font-black text-5xl text-center">{panelOrSpeaker}</h1>

        {/* Grid Wrapper */}
        <div className="grid grid-cols-1 grid-cols-1">

          {/* Panelist's Names Grid */}
          <div className="col-span-1 justfiy-center">
            <div className="grid grid-cols-8 pb-4 pt-2">
              <div className="col-span-1 text-center text-coral-pink">
                <button onClick={() => changeButton("above")}><AiOutlineLeft className="stroke-current w-12 h-12" /></button>
              </div>
              <h1 className="col-span-6 font-black text-2xl pt-2 text-coral-pink text-center font-sans">
                {speakerNames[currentIndex]}
              </h1>
              <div className="col-span-1 text-center text-coral-pink">
                <button onClick={() => changeButton("below")}><AiOutlineRight className="stroke-current w-12 h-12" /></button>
              </div> 
            </div>
          </div>

          {/* Photo Grid */}
          <div className="col-span-4 relative flex justify-center items-center">
            <div className="p-5 bg-timberwolf w-80 h-96 ml-10 relative">
              {photo && photo.length > 0 && (
                <img
                  src={photo[currentIndex]}
                  alt="Photo"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover scale-90"
                />
              )}
            </div>
          </div>

          {/* Profession and Description Grid */}  
          <div className="col-span-1 pt-4 mb-1 text-center"> 
            <h1 className="font-black text-2xl text-center">
              {speakerProfession[currentIndex]}
            </h1>
            <h2 className="font-black text-2xl text-center font-sans">
              {intOrExt[currentIndex]}
            </h2>
            <p className="font-medium text-2x1 text-justify">
              {description[currentIndex]}
            </p>
          </div>

        </div>
      </div>
    </div>
>>>>>>> f675e18bcc7bff0dc5d605c99d8f0019755b0804
  );
};

export default SpeakerPanelistLayout;