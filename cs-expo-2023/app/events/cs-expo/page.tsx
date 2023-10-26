"use client";

import React, { useState } from "react";
import Carousel from "@/components/Carousel";
import PhotoComponent from "@/components/PhotoComponent";
import AboutComponent from "@/components/AboutComponent";
import ButtonComponent from "@/components/ButtonComponent";
import SpeakerPanelistLayout from "../../../components/SpeakerPanelistLayout";

export const EventsCSExpo = () => {
    const [currentButton, setCurrentButton] = useState(1);

    const changeButton = (buttonNumber: number) => {
        setCurrentButton(buttonNumber);
    };

    const speakerNames = [
        "PANELIST 1",
        "PANELIST 2",
        "PANELIST 3",
        "PANELIST 4",
        "PANELIST 5",
        "PANELIST 6",
        "PANELIST 7",
        "PANELIST 8",
    ];

    const photoNumber = [
        "Photo 1",
        "Photo 2",
        "Photo 3",
        "Photo 4",
        "Photo 5",
        "Photo 6",
        "Photo 7",
        "Photo 8",
    ];

    const speakerProfession = [
        "Software Engineer",
        "Software Analyst",
        "Game Developer",
        "Cyber Security",
        "Computer Technician",
        "Computer Engineer",
        "Data Scientist",
        "Software Consultant",
    ];

    const intOrExt = [
        "INTERNAL",
        "EXTERNAL",
        "INTERNAL",
        "EXTERNAL",
        "INTERNAL",
        "EXTERNAL",
        "INTERNAL",
        "EXTERNAL",
    ];

    return (
        <main className="flex min-h-screen flex-col p-24">
            <PhotoComponent
                currentButton={currentButton}
                customText="CS EXPO Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <ButtonComponent
                currentButton={currentButton}
                changeButton={changeButton}
            />
            <h1 className="font-black text-8xl text-center mb-20">CS EXPO</h1>
            <hr className="border-t-1 border-black mb-4" />
            <AboutComponent
                customText="CS EXPO Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    CS EXPO Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                sampleText="Sample Photo"
            />

            <SpeakerPanelistLayout
                speakerNames={speakerNames}
                photoNumber={photoNumber}
                speakerProfession={speakerProfession}
                intOrExt={intOrExt}
                panelOrSpeaker="PANELIST"
            />

            <div className="ms-28">
                <h1 className="font-black text-8xl">PREVIOUS CS EXPOS</h1>

                {/* 2022 */}
                <Carousel
                    title="2022"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    // Don't forget to change the type of the slides in the Carousel component when changing it to photos
                    slides={[
                        { backgroundColor: "var(--timberwolf)" },
                        { backgroundColor: "var(--timberwolf)" },
                        { backgroundColor: "var(--timberwolf)" },
                    ]}
                    perView={2}
                    id="carousel-2022"
                />

                {/* 2023 */}
                <Carousel
                    title="2023"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    slides={[
                        { backgroundColor: "var(--timberwolf)" },
                        { backgroundColor: "var(--timberwolf)" },
                        { backgroundColor: "var(--timberwolf)" },
                    ]}
                    perView={2}
                    id="carousel-2023"
                />
            </div>
        </main>
    );
};

export default EventsCSExpo;
