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
  const dotSizes: string[] = ['w-9 h-9 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12',
                              'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10',
                              'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8',
                              'w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6'];

  const detailclassName: string = 'text-base font-bold bg-transparent flex my-4 justify-center items-center text-coral-pink';

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