"use client";

import React, { useState } from "react";
import Carousel from "@/components/Carousel";
import PhotoComponent from "@/components/PhotoComponent";
import AboutComponent from "@/components/AboutComponent";
import ButtonComponent from "@/components/ButtonComponent";
import SpeakerPanelistLayout from "../../../components/SpeakerPanelistLayout";
import speakersData from "@/panelists.json";
import speakersData1 from "@/speakers-csexpo.json";

const EventsDevDay = () => {
    const [currentButton, setCurrentButton] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeButton = (buttonNumber: number) => {
        setCurrentButton(buttonNumber);
    };

    {
        /** INTERNAL AND EXTERNAL PANELISTS */
    }
    const speakers = speakersData.panelists;
    const speakerNames = speakers.map((speaker) => speaker.name);
    const speakerProfession = speakers.map((speaker) => speaker.profession);
    const intOrExt = speakers.map((speaker) => speaker.intOrExt);
    const description = speakers.map((speakers) => speakers.description);
    const photo = speakers.map((speakers) => speakers.photo);
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

    {
        /** SPEAKERS */
    }
    const speakers1 = speakersData1.speakers;
    const speakerNames1 = speakers1.map((speaker) => speaker.name);
    const speakerProfession1 = speakers1.map((speaker) => speaker.profession);
    const intOrExt1 = speakers1.map((speaker) => speaker.intOrExt);
    const description1 = speakers1.map((speakers) => speakers.description);
    const photo1 = speakers1.map((speakers) => speakers.photo);
    const changeSpeaker1 = (direction: string) => {
        if (direction === "above") {
            setCurrentIndex((prevIndex) =>
                prevIndex - 1 >= 0 ? prevIndex - 1 : speakerNames1.length - 1
            );
        } else if (direction === "below") {
            setCurrentIndex((prevIndex) =>
                prevIndex + 1 < speakerNames1.length ? prevIndex + 1 : 0
            );
        }
    };

    return (
        <main className="flex min-h-screen flex-col mt-0 p-1 sm:mt-14 sm:p-8 lg:p-12">
            <div className="my-24 mx-2 sm:mx-24 sm:my-3 border-l border-black">
                <PhotoComponent
                    currentButton={currentButton}
                    customText="Join us on CS-EXPO V2 2023, a two-day event featuring projects with meaningful talks from tech leaders and experience the best in student innovation."
                    filePath="/events/cs-expo/page.tsx"
                    />
                <ButtonComponent
                    currentButton={currentButton}
                    changeButton={changeButton}
                />
                <h1 className="custom-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mt-5 mb-10 sm:mb-20"> 
                    CS EXPO
                </h1>
                <section id="cs-expo-about">
                <hr className="border-t-1 border-black mt-12 mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
                 </section>
                 <hr className="border-t-1 border-white mt-20 mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
                <AboutComponent
                    customText="The main event of CS EXPO 2023 V2.0 will showcase student projects over two days to a group of panelists composed of faculty members and industry professionals. Awards will be given for exceptional research and innovation. Current tech trends will be discussed by industry leaders."
                    imageSource="/cs-expo/cs-expo04.jpg"
                />
                 <section id="cs-expo-panelists">
                <hr className="border-t-1 border-white mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
                </section>
                <hr className="border-t-1 border-white mt-12 mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
                <hr className="border-t-1 border-black mt-12 mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
                <SpeakerPanelistLayout
                    speakerNames={speakerNames}
                    speakerProfession={speakerProfession}
                    intOrExt={intOrExt}
                    description={description}
                    photo={photo}
                    panelOrSpeaker="PANELISTS"
                />
                <section id="cs-expo-speakers">
                </section>
                <hr className="border-t-1 border-white mt-12 mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
                <hr className="border-t-1 border-white mt-12 mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
                <hr className="border-t-1 border-black mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
    
                <SpeakerPanelistLayout
                    speakerNames={speakerNames1}
                    speakerProfession={speakerProfession1}
                    intOrExt={intOrExt1}
                    description={description1}
                    photo={photo1}
                    panelOrSpeaker="SPEAKERS"
                />
                   <div className="mx-4 lg:mx-11">
                   <section id="cs-expo-gallery">
                   <hr className="border-t-1 border-white mt-12 mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
                <hr className="border-t-1 border-white mt-12 mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
                <hr className="border-t-1 border-black mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
                    <h1 className="custom-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mt-5 mb-10 sm:mb-20">
                        PREVIOUS CS EXPO
                    </h1>
                    </section>
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
                        link = "https://cs-expo.tech/#"
                        linkName = "CS EXPO 2023 WEBSITE"
                    />
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
                        link = "https://feutech.acm.org/csexpo2022/"
                        linkName = "CS EXPO 2022 WEBSITE"
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
                        link = ""
                        linkName = ""
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
                        link = ""
                        linkName = ""
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
                        link = ""
                        linkName = ""
                    />
                </div>
            </div>
        </main>
    );
};

export default EventsDevDay;
