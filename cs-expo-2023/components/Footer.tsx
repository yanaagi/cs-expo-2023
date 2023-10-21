import React from 'react';
<<<<<<< Updated upstream
=======
import Link from 'next/link';
>>>>>>> Stashed changes
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
<<<<<<< Updated upstream
          <footer className="fixed bottom-0 right-0 left-0 w-full bg-white text-black py-6">

          <div className="w-full mx-auto flex px-6 py-4">

               <div className="flex flex-col pl-10">
=======
        <footer className="fixed bottom-0 right-0 left-0 bg-white text-black py-6 border-yellow-100 border-2">

            <div className="container w-full mr-auto grid grid-cols-5 pb-10 border-orange-100 border-2">

                <div className="flex flex-col items-start pl-10">
>>>>>>> Stashed changes
                    <span className="font-bold hover:underline cursor-pointer">CS Expo</span>
                    <span className="hover:underline cursor-pointer">About</span>
                    <span className="hover:underline cursor-pointer">Panelists</span>
                    <span className="hover:underline cursor-pointer">Gallery</span>
<<<<<<< Updated upstream
               </div>

               <div className="flex flex-col pl-10">
=======
                </div>

                <div className="flex flex-col items-start pl-10">
>>>>>>> Stashed changes
                    <span className="font-bold hover:underline cursor-pointer">Dev Day</span>
                    <span className="hover:underline cursor-pointer">About</span>
                    <span className="hover:underline cursor-pointer">Speakers</span>
                    <span className="hover:underline cursor-pointer">Gallery</span>
<<<<<<< Updated upstream
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
=======
                </div>

                <div className="flex flex-col items-start pl-10">
                    <span className="font-bold hover:underline cursor-pointer">Projects</span>
                    <span className="hover:underline cursor-pointer">Hall of Fame</span>
                </div>

                <div className="flex items-start pl-10 border-red-100 border-2">
                    <div className="flex flex-col">
                        <span className="font-bold hover:underline cursor-pointer">Partners</span>
                        <span className="hover:underline cursor-pointer">Major</span>
                        <span className="hover:underline cursor-pointer">Minor</span>
                        <span className="hover:underline cursor-pointer">Media</span>
                    </div>
                </div>

                <div className="flex flex-col items-start pl-10">
                    <Image 
                         src="/cs-expo-logo.png" 
                         alt="Description of your image" 
                         width={200} 
                         height={200}
                         className='border-blue-100 border-2 items-end'
                    />
                </div>
            </div>

            <hr/>

            <div className="mt-4 mr-auto text-right pr-10">
                <div className="flex pl-10 space-x-4">
                    <span className="hover:underline">Facebook</span>
                    <span className="hover:underline">Twitter</span>
                    <span className="hover:underline">Instagram</span>
                </div>
                <p className="font-bold mt-7">&copy; Copyright 2023</p>
            </div>
>>>>>>> Stashed changes
        </footer>
    );
}

export default Footer;