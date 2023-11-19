"use client";

import React, { useState, useEffect, useRef } from "react";
import HomeHeader from "@/components/HomeOverviewHeader";
import PartnerIconsLayout from "@/components/PartnerIconsLayout";
import partnersData from "@/partners.json";
import { AiOutlineDown } from "react-icons/ai";

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

    return (
        <main>
            <div className="h-screen w-screen flex items-center justify-center">
            <h1
                ref={textElementRef}
                className="absolute left-0 top-1/2 ml-10 transform -translate-y-1/2 text-[min(5vw,5rem)] text-eerie-black font-helvetica font-bold"/>
            </div>

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
