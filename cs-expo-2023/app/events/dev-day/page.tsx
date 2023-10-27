"use client";
import React, { useState } from "react";
import Carousel from "@/components/Carousel";
import PhotoComponent from "@/components/PhotoComponent";
import AboutComponent from "@/components/AboutComponent";
import ButtonComponent from "@/components/ButtonComponent";
import SpeakerPanelistLayout from "../../../components/SpeakerPanelistLayout";
import speakersData from '@/speakers.json'; 


export const EventsDevDay = () => {
    const [currentButton, setCurrentButton] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeButton = (buttonNumber) => {
        setCurrentButton(buttonNumber);
    };

    const speakers = speakersData.speakers;

    const speakerNames = speakers.map(speaker => speaker.name);
    const photoNumber = speakers.map(speaker => speaker.photoNumber);
    const speakerProfession = speakers.map(speaker => speaker.profession);
    const intOrExt = speakers.map(speaker => speaker.intOrExt);

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
                    <hr className="border-t-1 border-black mb-4" />
                    <AboutComponent
                        customText="DEV DAY Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        sampleText="Sample Photo"
                    />

                    <SpeakerPanelistLayout
                        speakerNames={speakerNames}
                        photoNumber={photoNumber}
                        speakerProfession={speakerProfession}
                        intOrExt={intOrExt}
                        panelOrSpeaker="SPEAKER"
                    />

            <div className="ms-28">
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
