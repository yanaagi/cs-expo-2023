"use client";

import React, { useState, useEffect } from "react";
import PhotoComponent from "@/components/PhotoComponent";
import AboutComponent from "@/components/AboutComponent";
import ButtonComponent from "@/components/ButtonComponent";
import SpeakerPanelistLayout from '../../../components/SpeakerPanelistLayout'; 


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

    useEffect(() => {
        const config = {
            type: "carousel",
            startAt: 0,
            perView: 2,
        };
        new Glide(".carousel-2022", config).mount();
        new Glide(".carousel-2023", config).mount();
    }, []); 

    return (
        <main className="flex min-h-screen flex-col p-24">
        <div className="container">
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

                <h1 className="font-black text-8xl">PREVIOUS DEV DAYS</h1>
                <div className="grid grid-cols-12 mt-8 me-12">
                    <div className="col-span-3">
                        <h1 className="font-bold text-5xl">2022</h1>
                        <p className="font-medium pe-12">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <div className="col-span-9 relative">
                        <div className="carousel-2022 glide w-full overflow-hidden">
                            <div className="glide__track" data-glide-el="track">
                                <ul className="glide__slides flex">
                                    <li
                                        className="glide__slide w-120 h-52"
                                        style={{
                                            backgroundColor:
                                                "var(--timberwolf)",
                                        }}
                                    ></li>
                                    <li
                                        className="glide__slide w-120 h-52"
                                        style={{
                                            backgroundColor:
                                                "var(--timberwolf)",
                                        }}
                                    ></li>
                                    <li
                                        className="glide__slide w-120 h-52"
                                        style={{
                                            backgroundColor:
                                                "var(--timberwolf)",
                                        }}
                                    ></li>
                                </ul>
                            </div>
                            <div
                                data-glide-el="controls"
                                style={{ color: "var(--coral-pink)" }}
                            >
                                <button
                                    data-glide-dir="<"
                                    className="absolute top-16 -left-12 mt-4  text-5xl font-bold"
                                >
                                    {"<"}
                                </button>
                                <button
                                    data-glide-dir=">"
                                    className="absolute top-16 -right-12 mt-4 text-5xl font-bold"
                                >
                                    {">"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 mt-8 me-12">
                    <div className="col-span-3">
                        <h1 className="font-bold text-5xl">2022</h1>
                        <p className="font-medium pe-12">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <div className="col-span-9 relative">
                        <div className="carousel-2023 glide w-full overflow-hidden">
                            <div className="glide__track" data-glide-el="track">
                                <ul className="glide__slides flex">
                                    <li
                                        className="glide__slide w-120 h-52"
                                        style={{
                                            backgroundColor:
                                                "var(--timberwolf)",
                                        }}
                                    ></li>
                                    <li
                                        className="glide__slide w-120 h-52"
                                        style={{
                                            backgroundColor:
                                                "var(--timberwolf)",
                                        }}
                                    ></li>
                                    <li
                                        className="glide__slide w-120 h-52"
                                        style={{
                                            backgroundColor:
                                                "var(--timberwolf)",
                                        }}
                                    ></li>
                                </ul>
                            </div>
                            <div
                                data-glide-el="controls"
                                style={{ color: "var(--coral-pink)" }}
                            >
                                <button
                                    data-glide-dir="<"
                                    className="absolute top-16 -left-12 mt-4  text-5xl font-bold"
                                >
                                    {"<"}
                                </button>
                                <button
                                    data-glide-dir=">"
                                    className="absolute top-16 -right-12 mt-4 text-5xl font-bold"
                                >
                                    {">"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
  };

export default EventsCSExpo;