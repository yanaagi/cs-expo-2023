
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
    panelOrSpeaker
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
        <div className="ms-28">
        <h1 className="font-black text-8xl" style={{ paddingLeft: "960px", fontFamily: "Helvetica Now, sans-serif" }}>
            {panelOrSpeaker}
        </h1>
        <div className="grid grid-cols-12 mt-8 me-12">
            {/* Profession, Internal or External, Description Grid */}
            <div className="col-span-4">
            <h1 className="font-black text-6xl text-center sm:text-right" style={{ fontFamily: "Helvetica Now, sans-serif" }}>
                {speakerProfession[currentIndex]}
            </h1>
            <h2 className="font-black text-2xl text-center sm:text-right mt-4" style={{ fontFamily: "Helvetica Now, sans-serif" }}>
                {intOrExt[currentIndex]}
            </h2>
            <h3 className="font-regular text-4x1 text-center sm:text-right mt-8" style={{ fontFamily: "Helvetica Now, sans-serif" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl purus in mollis nunc sed id semper risus. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus
            </h3>
            </div>
            {/* Photo Grid */}
            <div className="col-span-4">
            <div className="photo-holder">
                {/* Add your photo element here */}
                <div className="w-[421px] h-[606px] relative">
                <div className="w-[421px] h-[606px] left-[80px] top-0 absolute bg-timberwolf" />
                <div className="w-[107.13px] h-[32.83px] left-[230px] top-[270px] absolute text-center text-white text-3xl font-bold" style={{ fontFamily: "Helvetica Now, sans-serif" }}>
                    {photoNumber[currentIndex]}
                </div>
                </div>
            </div>
            </div>
            {/* Panelist's Names Grid */}
            <div className="col-span-4">
            <div className="text-center text-coral-pink" style={{ paddingLeft: "50px" }}>
                <button onClick={() => changeButton("above")}><AiOutlineUp style={{ strokeWidth: "100", width: "32px", height: "48px" }} /></button>
            </div>
            <h1 className="font-black text-4xl text-center text-coral-pink" style={{ marginTop: "10px", paddingLeft: "190px", fontFamily: "Helvetica Now, sans-serif", color: "gray" }}>
                {speakerNames[(currentIndex - 3 + speakerNames.length) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl text-center text-coral-pink" style={{ marginTop: "30px", paddingLeft: "190px", fontFamily: "Helvetica Now, sans-serif", color: "gray" }}>
                {speakerNames[(currentIndex - 2 + speakerNames.length) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl text-center text-coral-pink" style={{ marginTop: "30px", paddingLeft: "190px", fontFamily: "Helvetica Now, sans-serif", color: "gray" }}>
                {speakerNames[(currentIndex - 1 + speakerNames.length) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-6xl text-center text-coral-pink" style={{ marginTop: "30px", paddingLeft: "50px", fontFamily: "Helvetica Now, sans-serif" }}>
                {speakerNames[currentIndex]}
            </h1>
            <h1 className="font-black text-4xl text-center text-coral-pink" style={{ marginTop: "30px", paddingLeft: "190px", fontFamily: "Helvetica Now, sans-serif", color: "gray" }}>
                {speakerNames[(currentIndex + 1) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl text-center text-coral-pink" style={{ marginTop: "30px", paddingLeft: "190px", fontFamily: "Helvetica Now, sans-serif", color: "gray" }}>
                {speakerNames[(currentIndex + 2) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl text-center" style={{ marginTop: "20px", paddingLeft: "190px", fontFamily: "Helvetica Now, sans-serif", color: "gray" }}>
                {speakerNames[(currentIndex + 3) % speakerNames.length]}
            </h1>
            <h1 className="font-black text-4xl text-center" style={{ marginTop: "30px", paddingLeft: "190px", fontFamily: "Helvetica Now, sans-serif", color: "gray" }}>
                {speakerNames[(currentIndex + 4) % speakerNames.length]}
            </h1>
            <div className="text-center text-coral-pink" style={{ marginTop: "10px", paddingLeft: "50px" }}>
                <button onClick={() => changeButton("below")}><AiOutlineDown style={{ strokeWidth: "100", width: "32px", height: "48px" }} /></button>
            </div>
            </div>
        </div>
        </div>
    );
};

export default SpeakerPanelistLayout;
