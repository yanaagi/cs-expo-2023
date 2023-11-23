'use client';

// Import necessary modules
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Define the NotFound component
export default function NotFound() {
  const [text, setText] = useState('');
  const textElementRef = useRef<HTMLDivElement>(null); // Add type assertion here
  let timer: NodeJS.Timeout | null = null;

  useEffect(() => {
    const textToType = 'ERROR: 404';
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
    timer = setInterval(typeText, 120);

    // Clean up the animation when the component unmounts
    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center text-center sm:flex-col">
        <h1
            ref={textElementRef}
            className="whitespace-pre-line inline-block leading-normal text-gray-900 text-4xl sm:text-5xl 
            md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-helvetica font-bold m-0 p-0">
        </h1>
        <h2 className="text-2xl sm:text-4xl">Page not found.</h2>
        <p className="text-base sm:text-lg p-2">
          Go back to{' '}
          <Link href="/" style={{ color: '#ff5a5f' }}>
            CS EXPO 2023 2.0
          </Link>
        </p>
      </div>
    </main>
  );
}
