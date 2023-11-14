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
  const dotSizes: string[] = ['w-16 h-16 sm:w-16 sm:h-16 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-10 xl:h-10',
                              'w-14 h-14 sm:w-14 sm:h-14 md:w-12 md:h-12 lg:w-10 lg:h-10 xl:w-8 xl:h-8',
                              'w-12 h-12 sm:w-12 sm:h-12 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-6 xl:h-6',
                              'w-10 h-10 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-6 lg:h-6 xl:w-4 xl:h-4'];

  const detailclassName: string = 'text-base font-bold bg-transparent flex my-4 justify-center items-center text-coral-pink';

  return (
    <div className='w-screen'>
      <div className=''>
        {title.map((word, index) => (
          <p
            key={index}
            className={`flex flex-col my-5 text-center text-eerie-black font-bold font-family-helvetica ${
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
      <div className="w-full flex flex-col text-eerie-black text-xl sm:text-xl font-family-montserrat text-center" 
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
      <div className='flex flex-col items-center'>
        <ul className="mx-auto w-[clamp(200px, 50%, 400px)] dots-container flex flex-col items-center space-y-5">
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