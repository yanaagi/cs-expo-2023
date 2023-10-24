'use client';

import React, {useState} from 'react';
//import Navbar from "@/components/NavBar";
//import Footer from "@/components/Footer";

export default function Events() {
    const [currentEvent, setCurrentEvent] = useState(0);
    const events = [
        {
            title: 'EVENTS',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n tempor incididunt ut labore et dolore magna aliqua. Nisi purus in mollis\n nunc sed id semper risus volutpat consequat mauris nunc congue nisi\n vitae suscipit tellus',
        },
        {
            title: 'CS EXPO',
            description: 'Melon ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n tempor incididunt ut labore et dolore magna aliqua. Nisi purus in mollis\n nunc sed id semper risus volutpat consequat mauris nunc congue nisi\n vitae suscipit tellus',
        },
        {
            title: 'DEV DAY',
            description: 'Nolem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n tempor incididunt ut labore et dolore magna aliqua. Nisi purus in mollis\n nunc sed id semper risus volutpat consequat mauris nunc congue nisi\n vitae suscipit tellus',
        },
        {
            title: 'COMMITTEES',
            description: 'Rolem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n tempor incididunt ut labore et dolore magna aliqua. Nisi purus in mollis\n nunc sed id semper risus volutpat consequat mauris nunc congue nisi\n vitae suscipit tellus',
        },
    ];
// Define an array of dot sizes
    const dotSizes = ['h-8 w-8', 'h-6 w-6', 'h-4 w-4', 'h-2 w-2'];
    const nextEvent = () => {
        setCurrentEvent((prev) => (prev < events.length - 1 ? prev + 1 : 0));
    };

    const prevEvent = () => {
        setCurrentEvent((prev) => (prev > 0 ? prev - 1 : events.length - 1));
    };

    return (
        <div className="">
            <Navbar />
            <div className="text-slider">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`text-eerie-black text-8xl mt-52 mb-8 flex flex-col items-center font-bold font-family-helvetica ${
                            index === currentEvent ? 'block' : 'hidden'
                        }`}
                    >
                        {event.title}
                    </div>
                ))}
            </div>
            <div className="text-slider-description whitespace-pre-line text-eerie-black text-base mt-2 mb-16 flex flex-col items-center font-family-montserrat text-center">
                {events[currentEvent].description}
                {currentEvent === 0 && (
                    <p className="mb-14"></p>
                )}
                {currentEvent === 1 && (
                    <a href="/events/cs-expo" className="text-base bg-transparent flex py-4 px-8 lex justify-center items-center text-coral-pink">View event details &gt;</a>
                )}
                {currentEvent === 2 && (
                    <a href="/events/dev-day" className="text-base bg-transparent flex py-4 px-8 lex justify-center items-center text-coral-pink">View event details &gt;</a>
                )}
                {currentEvent === 3 && (
                    <a href="/events/committees" className="text-base bg-transparent flex py-4 px-8 lex justify-center items-center text-coral-pink">View event details &gt;</a>
                )}
            </div>
            <ul className="dots mb-36 flex flex-col items-center space-y-5">
                {events.map((_, index) => (
                    <li
                        key={index}
                        className={`${
                            index === currentEvent ? 'bg-coral-pink' : 'bg-gray-400'
                        } ${dotSizes[index]} rounded-full my-2 cursor-pointer`}
                        onClick={() => setCurrentEvent(index)}
                    ></li>
                ))}
            </ul>
            <button onClick={prevEvent} className="prev-button">
                &lt;
            </button>
            <button onClick={nextEvent} className="next-button">
                &gt;
            </button>
            <Footer />
        </div>
    );
}