"use client";

import React, { useState } from "react";
import Carousel from "@/components/Carousel";
import PhotoComponent from "@/components/PhotoComponent";
import AboutComponent from "@/components/AboutComponent";
import ButtonComponent from "@/components/ButtonComponent";
import SpeakerPanelistLayout from "../../../components/SpeakerPanelistLayout";
import panelistsData from '@/panelists.json'; 
<<<<<<< HEAD

=======
>>>>>>> f675e18bcc7bff0dc5d605c99d8f0019755b0804

const EventsCSExpo = () => {
    const [currentButton, setCurrentButton] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeButton = (buttonNumber: number) => {
        setCurrentButton(buttonNumber);
    };

    const speakers = panelistsData.panelists;

    const speakerNames = speakers.map(panelist => panelist.name);
<<<<<<< HEAD
    const photoNumber = speakers.map(panelist => panelist.photoNumber);
=======
>>>>>>> f675e18bcc7bff0dc5d605c99d8f0019755b0804
    const speakerProfession = speakers.map(panelist => panelist.profession);
    const intOrExt = speakers.map(panelist => panelist.intOrExt);
    const description = speakers.map(panelists => panelists.description);
    const photo = speakers.map(panelists => panelists.photo);
<<<<<<< HEAD
=======

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
>>>>>>> f675e18bcc7bff0dc5d605c99d8f0019755b0804

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
<<<<<<< HEAD
        <main className="flex min-h-screen flex-col p-24">
            <div className="my-1 ms-20 border-l border-black">
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
            <hr className="border-t-1 border-black mb-4 ml-20" />
            <AboutComponent
                customText="CS Expo 2023 V.2.0, hosted by Far Eastern University Institute of Technology's fourth-year students,
                is a three-day event showcasing groundbreaking thesis projects and their impact on the ever-changing tech landscape.
                With the theme Paving The New Technospace Through Paradigm Shifting Innovations participants aim to challenge the status quo
                with fresh technology and approaches. The event kicks off on November 22, 2023 with DevDay, A symposium featuring talks from industry
                experts. The main event happens on November 28 and 29, where students present their projects to faculty and industry professionals,
                with awards recognizing innovation and research edxcellence. A must attend for all FEU Tech Computer Science students."
                sampleText="Sample Photo"
            />

            <SpeakerPanelistLayout
                speakerNames={speakerNames}
                photoNumber={photoNumber}
                speakerProfession={speakerProfession}
                intOrExt={intOrExt}
                description={description}
                photo={photo}
                panelOrSpeaker="PANELISTS"
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
=======
        <main className="flex min-h-screen flex-col mt-0 p-1 sm:mt-14 sm:p-8 lg:p-12">
            <div className="my-24 mx-2 sm:mx-24 sm:my-3 border-l border-black">
                <PhotoComponent
                    currentButton={currentButton}
                    customText="Join us at DevDay, the first event of CS EXPO 2023 V2.0. Discover what it's like to be in the tech world today as experts talk about new ideas, share tips, and help students."
>>>>>>> f675e18bcc7bff0dc5d605c99d8f0019755b0804
                />
                <ButtonComponent
                    currentButton={currentButton}
                    changeButton={changeButton}
                />
<<<<<<< HEAD
=======
                <h1 className="custom-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-10 sm:mb-20">
                    DEV DAY
                </h1>
                <hr className="border-t-1 border-black mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
                <AboutComponent
                    customText="DevDay is the official kick-off event of CS EXPO 2023 V2.0, happening on November 22, 2023. Respected thought leaders and industry professionals will grace the stage to share their experiences and shed light on what is required to galvanize a paradigm shift."
                    sampleText="Sample Photo"
                />
                <hr className="border-t-1 border-black mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
                <SpeakerPanelistLayout
                    speakerNames={speakerNames}
                    speakerProfession={speakerProfession}
                    intOrExt={intOrExt}
                    description={description}
                    photo={photo}
                    panelOrSpeaker="PANELISTS"
                />
                <hr className="border-t-1 border-black mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
                <div className="mx-4 lg:mx-11">
                    <h1 className="custom-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mt-5 mb-10 sm:mb-20">
                        PREVIOUS DEV DAY
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
>>>>>>> f675e18bcc7bff0dc5d605c99d8f0019755b0804
                </div>
            </div>
        </main>
    );
};

export default EventsCSExpo;
