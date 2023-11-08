"use client";
import React, { useState } from "react";
import Carousel from "@/components/Carousel";
import PhotoComponent from "@/components/PhotoComponent";
import AboutComponent from "@/components/AboutComponent";
import ButtonComponent from "@/components/ButtonComponent";
import SpeakerPanelistLayout from "../../../components/SpeakerPanelistLayout";

export const EventsDevDay = () => {
    const [currentButton, setCurrentButton] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeButton = (buttonNumber) => {
        setCurrentButton(buttonNumber);
    };

    const speakerNames = [
        "SPEAKER 1",
        "SPEAKER 2",
        "SPEAKER 3",
        "SPEAKER 4",
        "SPEAKER 5",
        "SPEAKER 6",
        "SPEAKER 7",
        "SPEAKER 8",
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

    const description = ["Photo 1", "Photo 2", "Photo 3", "Photo 4"];

    const changeSpeaker = (direction) => {
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
        <main className="flex min-h-screen flex-col p-24">
            <div className="ms-28">
                <div className="container">
                    <PhotoComponent
                        currentButton={currentButton}
                        customText="DEV DAY Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />
                    <ButtonComponent
                        currentButton={currentButton}
                        changeButton={changeButton}
                    />
                    <h1 className="font-black text-8xl text-center mb-20">
                        DEV DAY
                    </h1>
                    <section id="dev-day-about">
                    <hr className="border-t-1 border-white mb-20" /> 
                    </section>
                    <hr className="border-t-1 border-black mb-4" />
                    <AboutComponent
                        customText="DEV DAY Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        sampleText="Sample Photo"
                    />
                    
                    <section id="dev-day-speakers">
                    <hr className="border-t-1 border-white mb-20" /> 
                    </section>
                    <hr className="border-t-1 border-white mb-20" /> 
                    <SpeakerPanelistLayout
                        speakerNames={speakerNames}
                        photoNumber={photoNumber}
                        speakerProfession={speakerProfession}
                        intOrExt={intOrExt}
                        panelOrSpeaker="SPEAKER"
                    />
                </div>
            </div>

            <div className="ms-28">
                <section id="dev-day-gallery">
                <hr className="border-t-1 border-white mb-20" /> 
                </section>
                <hr className="border-t-1 border-white mb-20" /> 

                <h1 className="font-black text-8xl">PREVIOUS DEV DAYS</h1>

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

export default EventsDevDay;
