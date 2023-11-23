"use client";

import React, { useState } from "react";
import Carousel from "@/components/Carousel";
import PhotoComponent from "@/components/PhotoComponent";
import AboutComponent from "@/components/AboutComponent";
import ButtonComponent from "@/components/ButtonComponent";
import SpeakerPanelistLayout from "../../../components/SpeakerPanelistLayout";
import panelistsData from '@/panelists.json'; 

const EventsCSExpo = () => {
    const [currentButton, setCurrentButton] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeButton = (buttonNumber: number) => {
        setCurrentButton(buttonNumber);
    };

    const speakers = panelistsData.panelists;
    const speakerNames = speakers.map(panelist => panelist.name);
    const photoNumber = speakers.map(panelist => panelist.photoNumber);
    const speakerProfession = speakers.map(panelist => panelist.profession);
    const intOrExt = speakers.map(panelist => panelist.intOrExt);
    const description = speakers.map(panelists => panelists.description);
    const photo = speakers.map(panelists => panelists.photo);

    const changeSpeaker = (direction: string) => {
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
        <main className="flex min-h-screen flex-col sm:p-8 lg:p-12">
            <div className="my-24 mx-2 sm:mx-24 sm:my-3 border-l border-black">
                <PhotoComponent
                    currentButton={currentButton}
                    customText="Join us at DevDay, the first event of CS EXPO 2023 V2.0. Discover what it's like to be in the tech world today as experts talk about new ideas, share tips, and help students."
                />
                <ButtonComponent
                    currentButton={currentButton}
                    changeButton={changeButton}
                />
                <h1 className="custom-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-10 sm:mb-20">
                    CS EXPO
                </h1>
                <hr className="border-t-1 border-black mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
                <AboutComponent
                    customText="DevDay is the official kick-off event of CS EXPO 2023 V2.0, happening on November 22, 2023. Respected thought leaders and industry professionals will grace the stage to share their experiences and shed light on what is required to galvanize a paradigm shift."
                    sampleText="Sample Photo"
                />
                <hr className="border-t-1 border-black mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
                <SpeakerPanelistLayout
                    speakerNames={speakerNames}
                    photoNumber={photoNumber}
                    speakerProfession={speakerProfession}
                    intOrExt={intOrExt}
                    description={description}
                    photo={photo}
                    panelOrSpeaker="PANELISTS"
                />
                  <hr className="border-t-1 border-black mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
                <div className="mx-4 lg:mx-11">
                    <h1 className="custom-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mt-5 mb-10 sm:mb-20">
                        PREVIOUS CS EXPO
                    </h1>

                    {/* 2022 */}
                    <Carousel
                        title="2022"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        // Don't forget to change the type of the slides in the Carousel component when changing it to photos
                        slides={[
                            { backgroundColor: "var(--timberwolf)" },
                            { backgroundColor: "var(--timberwolf)" },
                            { backgroundColor: "var(--timberwolf)" },
                            { backgroundColor: "var(--timberwolf)" },
                            { backgroundColor: "var(--timberwolf)" },
                        ]}
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
                            { backgroundColor: "var(--timberwolf)" },
                            { backgroundColor: "var(--timberwolf)" },
                        ]}
                        id="carousel-2023"
                    />
                    </div>
            </div>
        </main>
    );
};

export default EventsCSExpo;
