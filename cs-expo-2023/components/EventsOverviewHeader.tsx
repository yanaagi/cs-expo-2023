'use client'
import React, {useState} from 'react'

interface EventsOverviewHeaderProps {
  title: string[];
  description: string[];
}

const EventsHeader: React.FC<EventsOverviewHeaderProps> = ({ title, description }) => {
  const [currentEvent, setCurrentEvent] = useState<number>(0);

  // Define an array of dot sizes
  const dotSizes: string[] = ['h-10 w-10', 'h-8 w-8', 'h-6 w-6', 'h-4 w-4'];
  const detailclassName: string = "text-base font-bold bg-transparent flex py-4 px-8 lex justify-center items-center text-coral-pink";

  const nextEvent = () => {
    setCurrentEvent((prev) => (prev < 3 ? prev + 1 : 0)); // Assuming there are 4 events
  };

  const prevEvent = () => {
    setCurrentEvent((prev) => (prev > 0 ? prev - 1 : 3)); // Assuming there are 4 events
  };

  return (
    <div className='my-52'>
      <div className="text-slider">
        {title.map((word, index) => (
            <div key={index} className={`text-eerie-black xxs:text-5xl xs:text-7xl sm:text-8xl md:text-8xl lg:text-8xl mb-4 flex flex-col items-center font-bold font-family-helvetica ${  
            index === currentEvent ? 'block' : 'hidden'
        }`}>
            {word}
          </div>
        ))}
      </div>
      <div className="max-w-[75%] mx-auto max-h-[75%] my-auto text-eerie-black text-xl flex flex-col font-family-montserrat text-center">
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
      <ul className="mx-auto dots flex flex-col items-center space-y-5">
        {[0, 1, 2, 3].map((index) => (
          <li
            key={index}
            className={`${
              index === currentEvent ? 'bg-coral-pink' : 'bg-gray-400'
            } ${dotSizes[index]} grow-1 shrink-1 rounded-full my-2 cursor-pointer`}
            onClick={() => setCurrentEvent(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
}

export default EventsHeader;