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
            <div className="h-screen">
                <h1
                    ref={textElementRef}
                    className="absolute text-[min(4.5vw,10rem)] mt-48 xl:ml-40 text-eerie-black font-helvetica font-bold xl:text-left min-[320px]:text-left min-[320px]:ml-12"
                ></h1>
            </div>

            {/*<details className="group xl:py-32 min-[320px]:py-28 text-lg">
        <summary className="xl:mt-70 min-[320px]:mt-56 shadow-[0_56px_56px_-36px_rgba(0,0,0,0.2)] flex cursor-pointer justify-center flex-row items-center font-bold">
          <svg
            className="xl:translate-y-52 xl:mt-72 min-[320px]:mt-24 xl:h-56 xl:w-20 min-[320px]:h-44 min-[320px]:w-8 rotate-0 transform font-bold text-coral-pink group-open:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
          <div className="absolute mt-56 flex items-center justify-center p-52 top-0 left-0 right-0 z-0 opacity-0 pointer-events-none opacity-100 translate-y-80">
        <PartnerIconsLayout partners={partnersArray} />
        </div>
        </summary>
</details>*/}

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
