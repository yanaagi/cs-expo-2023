import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Horse } from "phosphor-react";


const NavBar: React.FC = () => (
  <header className="w-full absolute z-10">
    <nav className="w-full mx-auto flex justify-between items-center px-6 py-4 bg-transparent">
      <Link href="/">
        <Image
          src="/cs-expo-logo.png"
          alt="logo"
          width={117}
          height={85}
          className="object-contain"
        />
      </Link>
      <div className="ml-auto">
        <Link href="/events" className="px-4">Events</Link>
        <Link href="/projects" className="px-4">Projects</Link>
        <Link href="/partners" className="px-4">Partners</Link>
      </div>
    </nav>
  </header>
);

export default NavBar;
