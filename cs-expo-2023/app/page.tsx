"use client";

import React, { useState, useEffect, useRef } from "react";
import HomeHeader from "@/components/HomeOverviewHeader";

export default function Home() {
    const [text, setText] = useState('');
    const textElementRef = useRef<HTMLDivElement>(null); // Add type assertion here
    let timer: NodeJS.Timeout | null = null;
  
    useEffect(() => {
      const textToType = 'PAVING THE NEW TECHNOSPACE \n THROUGH PARADIGM SHIFTING \nINNOVATIONS';
      let index = 0;
      let isCursorVisible = true;
  
      function typeText() {
        if (index <= textToType.length) {
          const currentText = textToType.slice(0, index).replace(/\n/g, '<br />');
          if (textElementRef.current) {
            textElementRef.current.innerHTML = `${currentText}<span class="${isCursorVisible ? 'text-coral-pink' : 'text-transparent'}">__</span>`;
          }
          isCursorVisible = !isCursorVisible;
          index++;
        } else {
          // Clear the interval once the full text is typed
          if (timer) clearInterval(timer);
  
          // Set up blinking cursor forever
          timer = setInterval(blinkCursor, 500); // Adjust the blinking speed as needed.
        }
      }
  
      function blinkCursor() {
        isCursorVisible = !isCursorVisible;
        if (textElementRef.current) {
          textElementRef.current.innerHTML = `${textToType.replace(/\n/g, '<br />')}<span class="${isCursorVisible ? 'text-coral-pink' : 'text-transparent'}">__</span>`;
        }
      }
  
      // Start the animation when the component mounts
      timer = setInterval(typeText, 90);
  
      // Clean up the animation when the component unmounts
      return () => {
        if (timer) clearInterval(timer);
      };
    }, []);

    // Reset the typewriter animation
    const resetTypewriterAnimation = () => {
        setText("");
    };

    const handleDetailsToggle = () => {
        // Disable details toggle
        const details = document.getElementById("details");
        if (details) {
            details.classList.add("pointer-events-none");
        }

        // Hide the blur
        const blur = document.getElementById("details-blur");
        if (blur) {
            blur.classList.remove("opacity-100");
            blur.classList.add("opacity-0");
        }

        // Hide the button
        const detailsDownButton = document.getElementById(
            "details-down-button"
        );
        if (detailsDownButton) {
            detailsDownButton.classList.remove("opacity-100");
            detailsDownButton.classList.add("opacity-0");
        }
    };

    return (
        <main>
            <div className="h-screen">
                <h1
                    ref={textElementRef}
                    className="absolute text-[min(5vw,4rem)] mt-48 xl:ml-40 text-eerie-black font-helvetica font-bold xl:text-left min-[320px]:text-left min-[320px]:ml-10"
                ></h1>
            </div>

            <details
                id="details"
                className="min-[320px]:-mt-80 xl:mt-32 min-[320px]:-mb-44 xl:mb-48"
            >
                <summary
                    className="h-[180px] md:h-[240px] relative list-none"
                    onClick={handleDetailsToggle}
                >
                    <div
                        id="details-down-button"
                        className="cursor-pointer absolute inset-0 z-20 h-full flex justify-center items-end opacity-100"
                    >
                        <svg
                            className="xl:scale-[-1] min-[320px]:scale-[-1] h-20 rotate-180 transform text-coral-pink group-open:rotate-0"
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
                        className="absolute -bottom-4 w-full bg-white h-20 blur-lg z-10 opacity-100"
                    ></div>

                    <div className="mx-4 lg:mx-12 grid grid-cols-8 gap-y-2 gap-y-2">
                        <div className="col-span-2 lg:col-span-1 flex justify-center">
                            <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                        </div>
                        <div className="col-span-2 lg:col-span-1 flex justify-center">
                            <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                        </div>
                        <div className="col-span-2 lg:col-span-1 flex justify-center">
                            <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                        </div>
                        <div className="col-span-2 lg:col-span-1 flex justify-center">
                            <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                        </div>

                        <div className="col-span-2 lg:col-span-1 flex justify-center">
                            <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                        </div>
                        <div className="col-span-2 lg:col-span-1 flex justify-center">
                            <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                        </div>
                        <div className="col-span-2 lg:col-span-1 flex justify-center">
                            <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                        </div>
                        <div className="col-span-2 lg:col-span-1 flex justify-center">
                            <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                        </div>

                        {/* BLOCK: These will disappear when medium or below viewport */}
                        <div className="col-span-2 lg:col-span-1 lg:flex justify-center hidden">
                            <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                        </div>
                        <div className="col-span-2 lg:col-span-1 lg:flex justify-center hidden">
                            <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                        </div>
                        <div className="col-span-2 lg:col-span-1 lg:flex justify-center hidden">
                            <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                        </div>
                        <div className="col-span-2 lg:col-span-1 lg:flex justify-center hidden">
                            <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                        </div>

                        <div className="col-span-2 lg:col-span-1 lg:flex justify-center hidden">
                            <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                        </div>
                        <div className="col-span-2 lg:col-span-1 lg:flex justify-center hidden">
                            <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                        </div>
                        <div className="col-span-2 lg:col-span-1 lg:flex justify-center hidden">
                            <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                        </div>
                        <div className="col-span-2 lg:col-span-1 lg:flex justify-center hidden">
                            <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                        </div>
                        {/* ENDBLOCK */}
                    </div>
                </summary>
                <div className="mx-4 lg:mx-12 grid grid-cols-8 gap-y-2">
                    {/* BLOCK: This will appear when medium or below viewport */}
                    <div className="col-span-2 lg:col-span-1 flex justify-center visible lg:hidden">
                        <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex justify-center visible lg:hidden">
                        <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex justify-center visible lg:hidden">
                        <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex justify-center visible lg:hidden">
                        <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                    </div>

                    <div className="col-span-2 lg:col-span-1 flex justify-center visible lg:hidden">
                        <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex justify-center visible lg:hidden">
                        <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex justify-center visible lg:hidden">
                        <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex justify-center visible lg:hidden">
                        <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                    </div>
                    {/* ENDBLOCK */}

                    <div className="col-span-2 lg:col-span-1 flex justify-center">
                        <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex justify-center">
                        <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex justify-center">
                        <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex justify-center">
                        <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                    </div>

                    <div className="col-span-2 lg:col-span-1 flex justify-center">
                        <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex justify-center">
                        <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex justify-center">
                        <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex justify-center">
                        <div className="h-20 md:h-28 aspect-square rounded-full bg-gray-300"></div>
                    </div>
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