<<<<<<< HEAD
    "use client";
=======
"use client";

>>>>>>> f675e18bcc7bff0dc5d605c99d8f0019755b0804
import React, { useState } from "react";
import Carousel from "@/components/Carousel";
import PhotoComponent from "@/components/PhotoComponent";
import AboutComponent from "@/components/AboutComponent";
import ButtonComponent from "@/components/ButtonComponent";
import SpeakerPanelistLayout from "../../../components/SpeakerPanelistLayout";
<<<<<<< HEAD
import speakersData from '@/speakers.json'; 

=======
import speakersData from "@/speakers.json";
>>>>>>> f675e18bcc7bff0dc5d605c99d8f0019755b0804

const EventsDevDay = () => {
    const [currentButton, setCurrentButton] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);

    const changeButton = (buttonNumber: number) => {
        setCurrentButton(buttonNumber);
    };

    const speakers = speakersData.speakers;

<<<<<<< HEAD
    const speakerNames = speakers.map(speaker => speaker.name);
    const photoNumber = speakers.map(speaker => speaker.photoNumber);
    const speakerProfession = speakers.map(speaker => speaker.profession);
    const intOrExt = speakers.map(speaker => speaker.intOrExt);
    const description = speakers.map(speakers => speakers.description);
    const photo = speakers.map(speakers => speakers.photo);

    const changeSpeaker = (direction) => {
=======
    const speakerNames = speakers.map((speaker) => speaker.name);
    const speakerProfession = speakers.map((speaker) => speaker.profession);
    const intOrExt = speakers.map((speaker) => speaker.intOrExt);
    const description = speakers.map((speakers) => speakers.description);
    const photo = speakers.map((speakers) => speakers.photo);

    const changeSpeaker = (direction: string) => {
>>>>>>> f675e18bcc7bff0dc5d605c99d8f0019755b0804
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
                        customText="DEV DAY Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />
                    <ButtonComponent
                        currentButton={currentButton}
                        changeButton={changeButton}
                    />
                    <h1 className="font-black text-8xl text-center mb-20">
                        DEV DAY
                    </h1>
                    <hr className="border-t-1 border-black mb-4 ml-20" />
                    <AboutComponent
                        customText="DEV DAY Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        sampleText="SamplePhoto2"
                    />
                    <SpeakerPanelistLayout
                        speakerNames={speakerNames}
                        photoNumber={photoNumber}
                        speakerProfession={speakerProfession}
                        intOrExt={intOrExt}
                        description={description}
                        photo={photo}
                        panelOrSpeaker="SPEAKERS"
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
=======
        <main className="flex min-h-screen flex-col mt-0 p-1 sm:mt-14 sm:p-8 lg:p-12">
            <div className="my-24 mx-2 sm:mx-24 sm:my-3 border-l border-black">
                <PhotoComponent
                    currentButton={currentButton}
                    customText="Experience the best in student innovation at CS EXPO 2023 V2.0. Join us for an exciting two-day showcase, featuring projects and meaningful talks from tech leaders."
                />
                <ButtonComponent
                    currentButton={currentButton}
                    changeButton={changeButton}
                />
                <h1 className="custom-font text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mt-5 mb-10 sm:mb-20">
                    CS EXPO
                </h1>
                <hr className="border-t-1 border-black mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
                <AboutComponent
                    customText="The main event of CS EXPO 2023 V2.0 will showcase student projects over two days to a group of panelists composed of faculty members and industry professionals. Each thesis group will have a representative, and awards will be given for exceptional research and innovation. Beyond that, there will also be talks from tech leaders, fostering discussions on current tech trends."
                    sampleText="SamplePhoto2"
                />
                <hr className="border-t-1 border-black mb-2 ml-4 sm:mb-4 sm:ml-4 md:ml-8 lg:ml-12" />
                <SpeakerPanelistLayout
                    speakerNames={speakerNames}
                    speakerProfession={speakerProfession}
                    intOrExt={intOrExt}
                    description={description}
                    photo={photo}
                    panelOrSpeaker="SPEAKERS"
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
>>>>>>> f675e18bcc7bff0dc5d605c99d8f0019755b0804
            </div>
        </main>
    );
};

export default EventsDevDay;
	