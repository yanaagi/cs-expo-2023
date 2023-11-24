"use client";

import React, { useState } from "react";
import Carousel from "@/components/Carousel";
import PhotoComponent from "@/components/PhotoComponent";
import AboutComponent from "@/components/AboutComponent";
import ButtonComponent from "@/components/ButtonComponent";
import SpeakerPanelistLayout from "../../../components/SpeakerPanelistLayout";
import panelistsData from "@/panelists.json";

const EventsCSExpo = () => {
    const [currentButton, setCurrentButton] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeButton = (buttonNumber: number) => {
        setCurrentButton(buttonNumber);
    };

    const speakers = panelistsData.panelists;

    const speakerNames = speakers.map((panelist) => panelist.name);
    const speakerProfession = speakers.map((panelist) => panelist.profession);
    const intOrExt = speakers.map((panelist) => panelist.intOrExt);
    const description = speakers.map((panelists) => panelists.description);
    const photo = speakers.map((panelists) => panelists.photo);

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
        <main className="flex min-h-screen flex-col mt-0 p-1 sm:mt-14 sm:p-8 lg:p-12">
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
                        PREVIOUS CS EXPO
                    </h1>

                    {/* 2023 */}
                    <Carousel
                        title="2023"
                        description="Catalyzing Change in Society Through Cutting-Edge System Applications"
                        slides={[
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2023/2023-1.jpg",
                            },
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2023/2023-2.jpg",
                            },
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2023/2023-3.jpg",
                            },
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2023/2023-4.jpg",
                            },
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2023/2023-5.jpg",
                            },
                        ]}
                        id="carousel-2023"
                    />

                    {/* 2022 */}
                    <Carousel
                        title="2022"
                        description="Leveraging Communities to Greater Possibilities with Computing Technologies"
                        slides={[
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2022/2022-1.jpg",
                            },
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2022/2022-2.png",
                            },
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2022/2022-3.jpg",
                            },
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2022/2022-4.png",
                            },
                        ]}
                        id="carousel-2022"
                    />

                    {/* 2021 */}
                    <Carousel
                        title="2019"
                        description="CS EXPO 2019"
                        slides={[
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2019/2019-1.jpg",
                            },
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2019/2019-2.jpg",
                            },
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2019/2019-3.jpg",
                            },
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2019/2019-4.jpg",
                            },
                        ]}
                        id="carousel-2019"
                    />

                    {/* 2018 */}
                    <Carousel
                        title="2018"
                        description="CSCON 2018"
                        slides={[
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2018/2k18-1.jpg",
                            },
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2018/2k18-2.jpg",
                            },
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2018/2k18-3.jpg",
                            },
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2018/2k18-4.jpg",
                            },
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2018/2k18-6.jpg",
                            },
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2018/2k18-8.jpg",
                            },
                        ]}
                        id="carousel-2018"
                    />

                    {/* 2017 */}
                    <Carousel
                        title="2017"
                        description="CSCON 2017"
                        slides={[
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2017/2k17-1.jpg",
                            },
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2017/2k17-2.png",
                            },
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2017/2k17-3.jpg",
                            },
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2017/2k17-4.png",
                            },
                            {
                                backgroundImage:
                                    "/prev-cs-expo/2017/2k17-5.jpg",
                            },
                        ]}
                        id="carousel-2017"
                    />
                </div>
            </div>
        </main>
    );
};

export default EventsCSExpo;
