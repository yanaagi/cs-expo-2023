"use client";

import React, { useState, useEffect, useRef } from "react";
import HomeHeader from "@/components/HomeOverviewHeader";
import PartnerIconsLayout from "@/components/PartnerIconsLayout";
import partnersData from "@/partners.json";
import { AiOutlineDown } from "react-icons/ai";

export default function Home() {
    const [text, setText] = useState("");
    const textElementRef = useRef(null);
    let timer: ReturnType<typeof setTimeout>;

    const partnersArray = Object.values(partnersData);
    const partners = partnersArray.map(
        (partnersData) => partnersData.imagePath
    );

    useEffect(() => {
        const textToType =
            "PAVING THE NEW TECHNOSPACE \n THROUGH PARADIGM SHIFTING \nINNOVATIONS";
        let index = 0;
        let isCursorVisible = true;

        function typeText() {
            if (index <= textToType.length) {
                const currentText = textToType
                    .slice(0, index)
                    .replace(/\n/g, "<br />");
                if (textElementRef.current) {
                    (
                        textElementRef.current as HTMLElement
                    ).innerHTML = `${currentText}<span class="${
                        isCursorVisible ? "text-coral-pink" : "text-transparent"
                    }">__</span>`;
                }
                isCursorVisible = !isCursorVisible;
                index++;
            } else {
                // Once typing is complete, you can set a timeout to continue blinking the cursor.
                isCursorVisible = true; // Ensure the cursor is visible initially.
                setTimeout(blinkCursor, 500); // Adjust the blinking speed as needed.
            }
            timer = setTimeout(typeText, 65);
        }

        function blinkCursor() {
            isCursorVisible = !isCursorVisible;
            if (textElementRef.current) {
                (
                    textElementRef.current as HTMLElement
                ).innerHTML = `${textToType.replace(
                    /\n/g,
                    "<br />"
                )}<span class="${"text-coral-pink"}">__</span>`;
                //setTimeout(blinkCursor, 500); // Adjust the blinking speed as needed. // Uncomment this line if you want the cursor to keep blinking.
            }
        }

        // Start the animation when the component mounts
        typeText();

        return () => {
            // Clean up the animation when the component unmounts
            clearTimeout(timer);
        };
    }, []);

    // Reset the typewriter animation
    const resetTypewriterAnimation = () => {
        setText("");
    };

    // Toggles for details
    let [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const firstRun = useRef(true);

    const handleDetailsToggle = () => {
        const blur = document.getElementById("details-blur");
        const detailsDownButton = document.getElementById(
            "details-down-button"
        );
        setIsDetailsOpen(!isDetailsOpen);

        if (!firstRun.current && !isDetailsOpen) {
            if (blur) {
                blur.classList.remove("opacity-0");
                blur.classList.add("opacity-100");
            }
            if (detailsDownButton) {
                detailsDownButton.classList.add("opacity-100");
                detailsDownButton.classList.remove("opacity-0");
            }
        } else {
            firstRun.current = false;
            if (blur) {
                blur.classList.remove("opacity-100");
                blur.classList.add("opacity-0");
            }
            if (detailsDownButton) {
                detailsDownButton.classList.remove("opacity-100");
                detailsDownButton.classList.add("opacity-0");
            }

            if (!isDetailsOpen) {
                if (blur) {
                    blur.classList.remove("opacity-100");
                    blur.classList.add("opacity-0");
                }
                if (detailsDownButton) {
                    detailsDownButton.classList.remove("opacity-100");
                    detailsDownButton.classList.add("opacity-0");
                }

                setIsDetailsOpen(isDetailsOpen);
            }
        }
    };

    return (
        <main>
            <div className="h-screen w-screen flex items-center justify-center">
            <h1
                ref={textElementRef}
                className="absolute left-0 top-1/2 ml-10 transform -translate-y-1/2 text-[min(4.5vw,10rem)] text-eerie-black font-helvetica font-bold"/>
            </div>

            <details
                id="details"
                className="cursor-pointer"
                open={isDetailsOpen}
            >
                <summary
                    className="h-[290px] relative"
                    onClick={handleDetailsToggle}
                >
                    <div
                        id="details-down-button"
                        className="absolute inset-0 z-20 h-full flex justify-center items-end opacity-100"
                    >
                        <AiOutlineDown
                            className={`text-7xl text-[var(--coral-pink)]`}
                        />
                    </div>

                    <div
                        id="details-blur"
                        className="absolute bottom-0 w-full bg-white h-28 blur-lg z-10 opacity-100"
                    ></div>

                    <div className="flex justify-evenly">
                        <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                        <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                        <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                        <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                        <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                        <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                        <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                        <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="flex justify-evenly mt-20">
                        <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                        <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                        <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                        <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                        <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                        <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                        <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                        <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                    </div>
                </summary>
                <div className="mt-8 flex justify-evenly">
                    <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                    <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                    <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                    <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                    <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                    <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                    <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                    <div className="scale-[-2] h-16 w-16 rounded-full bg-gray-300"></div>
                </div>
            </details>

            <HomeHeader
                title="CS EXPO"
                description={`The culmination of CS EXPO 2023 V2.0 is a two-day presentation of the students'\n
                projects to internal panelists and industry professionals. All thesis groups\n
                will be represented by a member of their own choosing, with awards granted for\n
                outstanding research and innovation. This event will also feature talks from key\n
                figures in tech, providing a medium for healthy discourse about current trends.`}
                button="/events/cs-expo"
            />

            <HomeHeader
                title="DEV DAY"
                description={`DevDay, the inaugural event of CS EXPO 2023 V2.0 on November 22, 2023, explores\n
                what it means to be a person in technology today. Industry leaders will discuss\n
                innovations, offer insights for the attendees, and guide students on upskilling\n
                and keeping their tech stack relevant in an evolving landscape.`}
                button="/events/dev-day"
            />

            <div className="min-[320px]:mb-60 xl:mb-80"></div>
        </main>
    );
}
