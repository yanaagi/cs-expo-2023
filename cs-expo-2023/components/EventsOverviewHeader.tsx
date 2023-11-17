'use client'
import React, {useState} from 'react'
import Link from 'next/link';

interface EventsOverviewHeaderProps {
  title: string[];
  description: string[];
}

const EventsHeader: React.FC<EventsOverviewHeaderProps> = ({ title, description }) => {
  const [currentEvent, setCurrentEvent] = useState<number>(0);

  // Define an array of dot sizes
  const dotSizes: string[] = ['h-10 w-10', 'h-8 w-8', 'h-6 w-6', 'h-4 w-4'];
  const detailclassName: string = "text-base bg-transparent flex py-4 px-8 lex justify-center items-center text-coral-pink";

  const nextEvent = () => {
    setCurrentEvent((prev) => (prev < 3 ? prev + 1 : 0)); // Assuming there are 4 events
  };

  const prevEvent = () => {
    setCurrentEvent((prev) => (prev > 0 ? prev - 1 : 3)); // Assuming there are 4 events
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col'>
        {title.map((word, index) => (
          <p
            key={index}
            className={`flex flex-col text-eerie-black font-bold font-family-helvetica ${
              index === currentEvent ? 'block' : 'hidden'
            }`}
            style={{
              fontSize: index === 3 ? 'clamp(48px, 5vw, 128px)' : 'clamp(48px, 5vw, 128px)',
            }}
            >
            {word}
          </p>
        ))}
      </div>
      <div className="w-screen flex flex-col text-eerie-black text-xl sm:text-xl font-family-montserrat text-center" 
        style={{
          paddingLeft: 'clamp(20px, 30vw, 900px)',
          paddingRight: 'clamp(20px, 30vw, 900px)',
        }}>
        {description[currentEvent].split('\n').map((line, index) => (
          <p key={index}>{line}</p>
          ))}
          {currentEvent === 0 && <p className="mb-14"></p>}
          {currentEvent === 1 && (
          <Link href="/events/cs-expo" className={detailclassName}>
            View event details &gt;
          </Link>
        )}
        {currentEvent === 2 && (
          <Link href="/events/dev-day" className={detailclassName}>
            View event details &gt;
          </Link>
        )}
        {currentEvent === 3 && (
          <Link href="/events/committees" className={detailclassName}>
            View event details &gt;
          </Link>
        )}
      </div>
      <div className='flex flex-col'>
        <ul className="w-[clamp(200px, 50%, 400px)] flex flex-col items-center space-y-5">
          {[0, 1, 2, 3].map((index) => (
            <li
              key={index}
              className={`dot ${
                index === currentEvent ? 'bg-coral-pink' : 'bg-gray-400'
              } ${dotSizes[index]} rounded-full my-2 cursor-pointer`}
              onClick={() => setCurrentEvent(index)}>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EventsHeader;