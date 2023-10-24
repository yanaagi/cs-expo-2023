"use client";

import React, { useState, useEffect } from "react";
import PhotoComponent from "@/components/PhotoComponent";
import AboutComponent from "@/components/AboutComponent";
import ButtonComponent from "@/components/ButtonComponent";


export const EventsDevDay = () => {
    const [currentButton, setCurrentButton] = useState(1);

    const changeButton = (buttonNumber) => {
        setCurrentButton(buttonNumber);
    };

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
                    customText="DEV DAY Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
            <ButtonComponent 
                    currentButton={currentButton} 
                    changeButton={changeButton} 
                />
                <h1 className="font-black text-8xl text-center mb-20">DEV DAY</h1>
                <hr className="border-t-1 border-black mb-4" />
            <AboutComponent
                    customText="DEV DAY Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    sampleText="Sample Photo"
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

export default EventsDevDay;