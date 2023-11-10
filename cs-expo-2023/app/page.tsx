'use client';

import React, { useState, useEffect, useRef } from 'react';
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
      const currentText = textToType.slice(0, index).replace(/\n/g, "<br />");
      if (textElementRef.current) {
        (textElementRef.current as HTMLElement).innerHTML = `${currentText}<span class="${isCursorVisible ? 'text-coral-pink' : 'text-transparent'}">__</span>`;
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
      (textElementRef.current as HTMLElement).innerHTML = `${textToType.replace(/\n/g, "<br />")}<span class="${'text-coral-pink'}">__</span>`;
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


return (
    <main>
      <div>
          <h1 ref={textElementRef} className="absolute text-[min(4.5vw,10rem)] mt-48 xl:ml-40 text-eerie-black font-helvetica font-bold xl:text-left min-[320px]:text-center min-[320px]:ml-12">
          </h1>
      </div>

      <details className="group xl:py-64 min-[320px]:py-28 text-lg">
        <summary class="xl:mt-80 min-[320px]:mt-56 shadow-2xl flex cursor-pointer justify-center flex-row items-center font-bold text-coral-pink marker:[font-size:0px]">
          <svg
            className="xl:mt-72 min-[320px]:mt-24 xl:h-56 xl:w-20 min-[320px]:h-44 min-[320px]:w-8 rotate-0 transform font-bold text-coral-pink group-open:rotate-180"
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
        </summary>
          <p className="xl:mt-72 min-[320px]:mt-48 text-eerie-black xl:text-5xl min-[320px]:text-xs font-bold font-family-helvetica text-center absolute xl:top-96 min-[320px]:top-60 left-0 right-0 bg-white z-0 opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out transform translate-y-[-110%] group-open:opacity-100 group-open:translate-y-0">
            SPONSORS
          </p>
      </details>;

      <HomeHeader
          title="CS EXPO"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n
        tempor incididunt ut labore et dolore magna aliqua. Nisi purus in mollis\n
        nunc sed id semper risus volutpat consequat mauris nunc congue nisi\n
        vitae suscipit tellus.`}
          button="/events/cs-expo"
      />
      <HomeHeader title="DEV DAY"
                  description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n
        tempor incididunt ut labore et dolore magna aliqua. Nisi purus in mollis\n
        nunc sed id semper risus volutpat consequat mauris nunc congue nisi\n
        vitae suscipit tellus.`}
                  button="/events/dev-day" />
    </main>
);
}

