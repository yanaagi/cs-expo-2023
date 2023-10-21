// currently a CSR component
'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineDown } from 'react-icons/ai';

const NavBar: React.FC = () => {
  const [showEventsDropdown, setShowEventsDropdown] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleEventsDropdown = () => {
    setShowEventsDropdown(!showEventsDropdown);
    setShowProjectsDropdown(false);
  };

  const toggleProjectsDropdown = () => {
    setShowProjectsDropdown(!showProjectsDropdown);
    setShowEventsDropdown(false);
  };

  const handleDropdownLinkClick = () => {
    setShowEventsDropdown(false);
    setShowProjectsDropdown(false);
  };

  const ref = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as HTMLElement)) {
        handleDropdownLinkClick();
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  return (
    <header className="w-full absolute z-10 top-0 right-0 left-0">
      <nav className="w-full mx-auto flex justify-between items-center px-6 py-4 bg-transparent">
        <Link href="/">
          <Image
            src="/cs-expo-logo.png" alt="logo" width={117} height={85}
            className="object-contain"
          />
        </Link>
        <div className="ml-auto flex">
          <div className="relative group">
            <button onClick={toggleEventsDropdown} className="flex items-center cursor-pointer font-medium">
              Events <span className="pl-2"><AiOutlineDown /></span>
            </button>
            {showEventsDropdown && (
              <div ref={dropdownRef} className="absolute mt-2 bg-white border shadow-lg rounded-md text-left font-normal min-w-[150px]">
                <Link href="/events/dev-day" className="block px-4 py-2" onClick={handleDropdownLinkClick}>
                  Dev Day
                </Link>
                <Link href="/events/cs-expo" className="block px-4 py-2" onClick={handleDropdownLinkClick}>
                  CS Expo
                </Link>
                <Link href="/events/committees" className="block px-4 py-2" onClick={handleDropdownLinkClick}>
                  Committees
                </Link>
              </div>
            )}
          </div>

          <div className="relative group">
            <button onClick={toggleProjectsDropdown} className="flex items-center cursor-pointer ml-4 font-medium">
              Projects <span className="pl-2"><AiOutlineDown /></span>
            </button>
            {showProjectsDropdown && (
              <div ref={dropdownRef} className="absolute mt-2 bg-white border shadow-lg rounded-md font-normal min-w-[150px]">
                <Link href="/projects/hall-of-fame" className="block px-4 py-2" onClick={handleDropdownLinkClick}>
                  Hall of Fame
                </Link>
              </div>
            )}
          </div>

          <Link href="/partners" className="cursor-pointer ml-4 font-medium">Partners</Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
