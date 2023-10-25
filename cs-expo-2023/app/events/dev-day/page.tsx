"use client";

import React, { useState, useState, useEffect } from "react";
import PhotoComponent from "@/components/PhotoComponent";
import AboutComponent from "@/components/AboutComponent";
import ButtonComponent from "@/components/ButtonComponent";

import { AiOutlineUp } from 'react-icons/ai';
import { AiOutlineDown } from 'react-icons/ai';

export const EventsDevDay = () => {
    const [currentButton, setCurrentButton] = useState(1);

    const changeButton = (buttonNumber: number) => {
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

    const description = [
        "Photo 1",
        "Photo 2",
        "Photo 3",
        "Photo 4",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const changeButton = (direction) => {
        if (direction === "above") {
            setCurrentIndex((prevIndex) => (prevIndex - 1 >= 0 ? prevIndex - 1 : speakerNames.length - 1));
        } else if (direction === "below") {
            setCurrentIndex((prevIndex) => (prevIndex + 1 < speakerNames.length ? prevIndex + 1 : 0));
        }
         
    };

    useEffect(() => {
        const config = {
            type: "carousel",
            startAt: 0,
            perView: 2,
        };
        const glide2022 = new Glide(".carousel-2022", config);
        glide2022.mount();
        const glide2023 = new Glide(".carousel-2023", config);
        glide2023.mount();
    }, []);

    return (
        <main className="flex min-h-screen flex-col p-24">    

            <div className="ms-28">
                <h1 className="font-black text-8xl" style={{ paddingLeft: '960px', fontFamily: 'Helvetica Now, sans-serif'}}>SPEAKERS</h1>
                <div className="grid grid-cols-12 mt-8 me-12">
                    {/* Profession, Internal or External, Description Grid */}
                    <div className="col-span-4">
                        <h1 className="font-black text-6xl text-center sm:text-right" style={{ fontFamily: 'Helvetica Now, sans-serif' }}>
                            {speakerProfession[currentIndex]}
                        </h1>
                        <h2 className="font-black text-2xl text-center sm:text-right mt-4" style={{ fontFamily: 'Helvetica Now, sans-serif' }}>
                            {intOrExt[currentIndex]}
                        </h2>
                        <h3 className="font-regular text-4x1 text-center sm:text-right mt-8" style={{ fontFamily: 'Helvetica Now, sans-serif' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl purus in mollis nunc sed id semper risus. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus
                        </h3>
                    </div>
                    {/* Photo Grid */}
                    <div className="col-span-4">
                        <div className="photo-holder">
                            {/* Add your photo element here */}
                            <div className="w-[421px] h-[606px] relative">
                                <div className="w-[421px] h-[606px] left-[80px] top-0 absolute bg-timberwolf" />
                                <div className="w-[107.13px] h-[32.83px] left-[230px] top-[270px] absolute text-center text-white text-3xl font-bold" style={{ fontFamily: 'Helvetica Now, sans-serif' }}>
                                    {photoNumber[currentIndex]}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Speaker's Names Grid */}
                    <div className="col-span-4">
                        <div className="text-center text-coral-pink" style={{ paddingLeft: '50px' }}>
                            <button onClick={() => changeButton("above")}><AiOutlineUp style={{ strokeWidth: '100', width: '32px', height: '48px' }}/></button>
                        </div>
                        <h1 className="font-black text-4xl text-center text-coral-pink" style={{ marginTop: '10px', paddingLeft: '190px', fontFamily: 'Helvetica Now, sans-serif', color: 'gray'}}>
                            {speakerNames[(currentIndex - 3 + speakerNames.length) % speakerNames.length]}
                        </h1>
                        <h1 className="font-black text-4xl text-center text-coral-pink" style={{ marginTop: '30px', paddingLeft: '190px', fontFamily: 'Helvetica Now, sans-serif', color: 'gray'}}>
                            {speakerNames[(currentIndex - 2 + speakerNames.length) % speakerNames.length]}
                        </h1>
                        <h1 className="font-black text-4xl text-center text-coral-pink" style={{ marginTop: '30px', paddingLeft: '190px', fontFamily: 'Helvetica Now, sans-serif', color: 'gray'}}>
                            {speakerNames[(currentIndex - 1 + speakerNames.length) % speakerNames.length]}
                        </h1>
                        <h1 className="font-black text-6xl text-center text-coral-pink" style={{ marginTop: '30px', paddingLeft: '50px', fontFamily: 'Helvetica Now, sans-serif'}}>
                            {speakerNames[currentIndex]}
                        </h1>
                        <h1 className="font-black text-4xl text-center text-coral-pink" style={{ marginTop: '30px', paddingLeft: '190px', fontFamily: 'Helvetica Now, sans-serif', color: 'gray'}}>
                            {speakerNames[(currentIndex + 1) % speakerNames.length]}
                        </h1>
                        <h1 className="font-black text-4xl text-center text-coral-pink" style={{ marginTop: '30px', paddingLeft: '190px', fontFamily: 'Helvetica Now, sans-serif', color: 'gray'}}>
                            {speakerNames[(currentIndex + 2) % speakerNames.length]}
                        </h1>
                        <h1 className="font-black text-4xl text-center" style={{ marginTop: '20px', paddingLeft: '190px', fontFamily: 'Helvetica Now, sans-serif', color: 'gray'}}>
                            {speakerNames[(currentIndex + 3) % speakerNames.length]}
                        </h1>
                        <h1 className="font-black text-4xl text-center" style={{ marginTop: '30px', paddingLeft: '190px', fontFamily: 'Helvetica Now, sans-serif', color: 'gray' }}>
                            {speakerNames[(currentIndex + 4) % speakerNames.length]}
                        </h1>
                        <div className="text-center text-coral-pink" style={{ marginTop: '10px', paddingLeft: '50px' }}>
                            <button onClick={() => changeButton("below")}><AiOutlineDown style={{ strokeWidth: '100', width: '32px', height: '48px' }}/></button>
                        </div>
                    </div>
                </div>
            </div>

        

            <div className="ms-28">
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
                                    />
                                    <li
                                        className="glide__slide w-120 h-52"
                                        style={{
                                            backgroundColor:
                                                "var(--timberwolf)",
                                        }}
                                    />
                                    <li
                                        className="glide__slide w-120 h-52"
                                        style={{
                                            backgroundColor:
                                                "var(--timberwolf)",
                                        }}
                                    />
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
                        <h1 className="font-bold text-5xl">2023</h1>
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
                                    />
                                    <li
                                        className="glide__slide w-120 h-52"
                                        style={{
                                            backgroundColor:
                                                "var(--timberwolf)",
                                        }}
                                    />
                                    <li
                                        className="glide__slide w-120 h-52"
                                        style={{
                                            backgroundColor:
                                                "var(--timberwolf)",
                                        }}
                                    />
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