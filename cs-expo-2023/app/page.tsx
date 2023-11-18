"use client";

import React, { useState, useEffect, useRef } from "react";
import HomeHeader from "@/components/HomeOverviewHeader";

export default function Home() {
    const [text, setText] = useState("");
    const textElementRef = useRef(null);

    let timer: ReturnType<typeof setTimeout>;

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
                    ).innerHTML = `${currentText}<span class="${isCursorVisible ? "text-coral-pink" : "text-transparent"
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
                detailsDownButton.classList.remove("cursor-pointer");
                detailsDownButton.classList.add("cursor-default");
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
            <div className="h-screen">
                <h1
                    ref={textElementRef}
                    className="absolute text-[min(3.5vw,10rem)] mt-48 xl:ml-40 text-eerie-black font-helvetica font-bold xl:text-left min-[320px]:text-left min-[320px]:ml-10"
                ></h1>
            </div>

            <details
                id="details"
                className="min-[320px]:-mt-80 xl:mt-32 min-[320px]:-mb-44 xl:mb-48"
                open={isDetailsOpen}
            >
                <summary
                    className="h-[290px] relative list-none"
                    onClick={handleDetailsToggle}
                >
                    <div
                        id="details-down-button"
                        className="cursor-pointer min-[320px]:-mt-32 xl:mt-24 absolute inset-0 z-20 h-full flex justify-center items-end opacity-100"
                    >
                        <svg
                            className="xl:scale-[-1] min-[320px]:scale-[-1] mt-96 h-20 rotate-180 transform text-coral-pink group-open:rotate-0"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="4"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="square"
                                stroke-linejoin="square"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </div>

                    <div
                        id="details-blur"
                        className="absolute bottom-0 w-full bg-white h-28 blur-lg z-10 opacity-100"
                    ></div>

                    {/*<div className="min-[320px]:mb-0.5 min-[320px]:mt-20 xl:-mt-20 flex justify-evenly"></div>*/}

                    <div className="min-[320px]:mb-0.5 mt-[min(8vw,8rem)] flex justify-evenly">
                        <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 min-[320px]:ml-8 rounded-full bg-gray-300"></div>
                        <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 rounded-full bg-gray-300"></div>
                        <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 rounded-full bg-gray-300"></div>
                        <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 rounded-full bg-gray-300"></div>
                        <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 rounded-full bg-gray-300"></div>
                        <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 rounded-full bg-gray-300"></div>
                        <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 rounded-full bg-gray-300"></div>
                        <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 min-[320px]:mr-8 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="flex justify-evenly xl:mt-28 min-[320px]:-mt-2">
                        <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 min-[320px]:ml-8 rounded-full bg-gray-300"></div>
                        <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 rounded-full bg-gray-300"></div>
                        <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 rounded-full bg-gray-300"></div>
                        <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 rounded-full bg-gray-300"></div>
                        <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 rounded-full bg-gray-300"></div>
                        <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 rounded-full bg-gray-300"></div>
                        <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 rounded-full bg-gray-300"></div>
                        <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 min-[320px]:mr-8 rounded-full bg-gray-300"></div>
                    </div>
                
                </summary>
                <div className="min-[320px]:-mt-56 xl:mt-20 flex justify-evenly">
                    <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 min-[320px]:ml-8 rounded-full bg-gray-300"></div>
                    <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 rounded-full bg-gray-300"></div>
                    <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 rounded-full bg-gray-300"></div>
                    <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 rounded-full bg-gray-300"></div>
                    <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 rounded-full bg-gray-300"></div>
                    <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 rounded-full bg-gray-300"></div>
                    <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 rounded-full bg-gray-300"></div>
                    <div className="xl:scale-[-2] min-[320px]:-scale-50 xl:h-16 xl:w-16 min-[320px]:h-[min(12vw,4rem)] min-[320px]:w-16 min-[320px]:mr-8 rounded-full bg-gray-300"></div>
                </div>
            </details>

            <HomeHeader
                title="CS EXPO"
                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n
        tempor incididunt ut labore et dolore magna aliqua. Nisi purus in mollis\n
        nunc sed id semper risus volutpat consequat mauris nunc congue nisi\n
        vitae suscipit tellus.`}
                button="/events/cs-expo"
            />

            <HomeHeader
                title="DEV DAY"
                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n
        tempor incididunt ut labore et dolore magna aliqua. Nisi purus in mollis\n
        nunc sed id semper risus volutpat consequat mauris nunc congue nisi\n
        vitae suscipit tellus.`}
                button="/events/dev-day"
            />

            <div className="min-[320px]:mb-60 xl:mb-80"></div>
        </main>
    );
}
