'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};

const Footer: React.FC = () => {
  const [width] = useWindowSize(); 
  const isMobile = width < 768;
    return (
          <footer className="relative bottom-0 right-0 left-0 w-full bg-white text-black py-6">

          <div className="md:justify-center w-full mx-auto flex px-6 py-4 max-sm:grid grid-cols-2 gap-2">

               <div className="flex flex-col">
                    <Link href="/events/cs-expo">
                    <span className="font-bold hover:text-coral-pink cursor-pointer">CS Expo</span>
                    </Link>
                    <a href="/events/cs-expo#cs-expo-about">
                    <span className="hover:text-coral-pink cursor-pointer">About</span>
                    </a>
                    <a href="/events/cs-expo#cs-expo-panelists">
                    <span className="hover:text-coral-pink cursor-pointer">Panelists</span>
                    </a>
                    <a href="/events/cs-expo#cs-expo-gallery">
                    <span className="hover:text-coral-pink cursor-pointer">Gallery</span>
                    </a>
               </div>

               <div className="flex flex-col sm:pl-10">
                    <Link href="/events/dev-day">
                    <span className="font-bold hover:text-coral-pink cursor-pointer">Dev Day</span>
                    </Link>
                    <a href="/events/dev-day#dev-day-about">
                    <span className="hover:text-coral-pink cursor-pointer">About</span>
                    </a>
                    <a href="/events/dev-day#dev-day-speakers">
                    <span className="hover:text-coral-pink cursor-pointer">Speakers</span>
                    </a>
                    <a href="/events/dev-day#dev-day-gallery">
                    <span className="hover:text-coral-pink cursor-pointer">Gallery</span>
                    </a>
               </div>

               <div className="flex flex-col sm:pl-10">
                    <Link href="/projects">
                    <span className="font-bold hover:text-coral-pink cursor-pointer">Projects</span>
                    </Link>
                    <a href="/projects/hall-of-fame">
                    <span className="hover:text-coral-pink cursor-pointer">Hall of Fame</span>
                    </a>
                    <a href="/projects/collections-of-projects">
                    <span className="hover:text-coral-pink cursor-pointer">Collection of Projects</span>
                    </a>
               </div>

               <div className="flex flex-col pr-5 sm:pl-10">
                    <Link href="/partners">
                    <span className="font-bold hover:text-coral-pink cursor-pointer">Partners</span>
                    </Link>
                    <a href="/partners#partners-major">
                    <span className="hover:text-coral-pink cursor-pointer">Major</span>
                    </a>
                    <a href="/partners#partners-minor">
                    <span className="hover:text-coral-pink cursor-pointer">Minor</span>
                    </a>
                    <a href="/partners#partners-media">
                    <span className="hover:text-coral-pink cursor-pointer">Media</span>
                    </a>

     
               </div>

               <div className="flex flex-col ml-auto hidden sm:flex ms:hidden">
               <Link href="/">
                    <Image 
                         src="/cs-expo-logo-black.png" 
                         alt="Description of your image" 
                         width={isMobile ? 90 : 120}
                         height={isMobile ? 60 : 80}
                    />
               </Link>
               </div>
          </div >
          <hr className="w-full"/>
          <div className="relative justify-center flex py-5 pl-10 mx-auto pr-10 sm:hidden ms:flex">
               <Link href="/">
                    <Image 
                         src="/cs-expo-logo-black.png" 
                         alt="Description of your image" 
                         width={isMobile ? 90 : 120}
                         height={isMobile ? 60 : 80}
                    />
               </Link>
               </div>

          <hr className="w-full"/>

          <div className=" relative justify-center mx-auto flex px-10 py-7 ">

               <Link href="https://www.facebook.com/csexpo2023">
               <div className="hover:underline px-6">
                    <Image
                         src="/facebook.svg"
                         alt="Facebook logo"
                         width={40}
                         height={30}
                    />
               </div>
               </Link>
               <Link href="https://twitter.com/@fit_cs_expo">
               <div className="hover:underline px-6">
                    <Image
                         src="/twitter-x.svg"
                         alt="X logo"
                         width={40}
                         height={30}
                    />
               </div>
               </Link>
               <Link href="https://www.instagram.com/fit_cs_expo/">
               <div className="hover:underline px-6 ">
                    <Image
                         src="/instagram.svg"
                         alt="Instagram logo"
                         width={40}
                         height={30}
                    />
               </div>
               </Link>
               <span className="ml-auto hidden sm:flex">&copy; Copyright 2023</span>
          </div>

          <div className=" relative flex w-full mx-auto justify-center">
          <span className="flex py-5 sm:hidden ms:flex">&copy; Copyright 2023</span>
          </div>
        </footer>
    );
}

export default Footer;