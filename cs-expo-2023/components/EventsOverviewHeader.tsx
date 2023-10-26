'use client'

import React, {useState} from 'react'

interface EventsOverviewHeaderProps {
  title: string[];
  description: string[];
}

const EventsHeader: React.FC<EventsOverviewHeaderProps> = ({ title, description }) => {
  const [currentEvent, setCurrentEvent] = useState<number>(0);

  // Define an array of dot sizes
  const dotSizes: string[] = ['h-9 w-9', 'h-7 w-7', 'h-5 w-5', 'h-3 w-3'];

  const detailclassName: string = "text-base bg-transparent flex py-4 px-8 lex justify-center items-center text-coral-pink";

  const nextEvent = () => {
    setCurrentEvent((prev) => (prev < 3 ? prev + 1 : 0)); // Assuming there are 4 events
  };

  const prevEvent = () => {
    setCurrentEvent((prev) => (prev > 0 ? prev - 1 : 3)); // Assuming there are 4 events
  };

  return (
    <div>
      <div className="text-slider">
        {title.map((word, index) => (
          <div key={index} className={`text-eerie-black text-7xl mt-72 mb-8 flex flex-col items-center font-bold font-family-helvetica ${
            index === currentEvent ? 'block' : 'hidden'
        }`}>
            {word}
          </div>
        ))}
      </div>
      <div className="tracking-widest text-slider-description whitespace-pre-line text-eerie-black text-base mt-2 mb-16 flex flex-col items-center font-family-montserrat text-center">
      {description[currentEvent].split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        {currentEvent === 0 && <p className="mb-14"></p>}
        {currentEvent === 1 && (
          <a href="/events/cs-expo" className={detailclassName}>
            View event details &gt;
          </a>
        )}
        {currentEvent === 2 && (
          <a href="/events/dev-day" className={detailclassName}>
            View event details &gt;
          </a>
        )}
        {currentEvent === 3 && (
          <a href="/events/committees" className={detailclassName}>
            View event details &gt;
          </a>
        )}
      </div>
      <ul className="dots flex flex-col items-center space-y-5 mb-56">
        {[0, 1, 2, 3].map((index) => (
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
    </div>
  );
}

export default EventsHeader;