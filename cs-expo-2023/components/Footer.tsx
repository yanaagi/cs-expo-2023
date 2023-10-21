import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
          <footer className="fixed bottom-0 right-0 left-0 w-full bg-white text-black py-6">

          <div className="w-full mx-auto flex px-6 py-4">

               <div className="flex flex-col pl-10">
                    <span className="font-bold hover:underline cursor-pointer">CS Expo</span>
                    <span className="hover:underline cursor-pointer">About</span>
                    <span className="hover:underline cursor-pointer">Panelists</span>
                    <span className="hover:underline cursor-pointer">Gallery</span>
               </div>

               <div className="flex flex-col pl-10">
                    <span className="font-bold hover:underline cursor-pointer">Dev Day</span>
                    <span className="hover:underline cursor-pointer">About</span>
                    <span className="hover:underline cursor-pointer">Speakers</span>
                    <span className="hover:underline cursor-pointer">Gallery</span>
               </div>

               <div className="flex flex-col pl-10">
                    <span className="font-bold hover:underline cursor-pointer">Projects</span>
                    <span className="hover:underline cursor-pointer">Hall of Fame</span>
               </div>

               <div className="flex flex-col pl-10">
                    <span className="font-bold hover:underline cursor-pointer">Partners</span>
                    <span className="hover:underline cursor-pointer">Major</span>
                    <span className="hover:underline cursor-pointer">Minor</span>
                    <span className="hover:underline cursor-pointer">Media</span>
     
               </div>

               <div className="flex flex-col pl-10 ml-auto">
                    <Image 
                         src="/cs-expo-logo.png" 
                         alt="Description of your image" 
                         width={160} 
                         height={120}
                    />
               </div>
          </div>

          <hr/>

          <div className="w-full mx-auto flex justify-between items-center px-10 py-4">
               <span className="hover:underline px-6">
                    <Image
                         src="/facebook.svg"
                         alt="Facebook logo"
                         width={40}
                         height={30}
                    />
               </span>
               <span className="hover:underline px-6">
                    <Image
                         src="/twitter-x.svg"
                         alt="X logo"
                         width={40}
                         height={30}
                    />
               </span>
               <span className="hover:underline px-6">
                    <Image
                         src="/instagram.svg"
                         alt="Instagram logo"
                         width={40}
                         height={30}
                    />
               </span>
               <span className="ml-auto">&copy; Copyright 2023</span>
          </div>
        </footer>
    );
}

export default Footer;