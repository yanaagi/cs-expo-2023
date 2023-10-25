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
      <main className="">
        <div className="text-center">
          <h1 ref={textElementRef} className="mt-52 mr-96 whitespace-pre-line text-left inline-block leading-normal h-96 text-gray-900 p-40 text-7xl font-helvetica font-bold">
          </h1>
        </div>
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
