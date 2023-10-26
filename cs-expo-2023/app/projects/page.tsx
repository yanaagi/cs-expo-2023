// Projects Overview Page: This is the page that will be rendered at /projects

"use client"; // This file will be run on the client only
import React, { useEffect } from "react";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import ProjectsHeader from "@/components/ProjectsHeader";
import ThesisPoster from "@/components/ThesisPosterCard";
//import ScrollCarousel from "scroll-carousel";
//import 'node_modules/scroll-carousel/dist/scroll.carousel.min.css';

const Projects = () => {
  /* The `useEffect` hook is used to perform side effects in functional components. In this case, it is
  used to initialize a new instance of the `ScrollCarousel` class and configure its options. */
  useEffect(() => {
    new ScrollCarousel(".my-carousel", {
      autoplay: true,
      speed: 14,
      smartSpeed: true,
      direction: "rtl",
    });
  }, []);

  // Create an array to store all the placeholders for thesis posters
  const thesisTitles = Array.from(
    { length: 20 },
    (_, index) => `Thesis Title ${index + 1}`
  );

  return (
    <main className="flex flex-col items-center justify-between p-24">
      {/* PROJECTS title*/}
      <ProjectsHeader headerText="PROJECTS" subheaderText="LOREM" />

      <div className="flex justify-center p-4 w-full">
        {/* Hall of Fame link */}
        <Link
          href="/projects/hall-of-fame"
          className="flex items-center cursor-pointer ml-4 font-medium text-coral-pink"
        >
          Hall of Fame{" "}
          <span className="flex-auto">
            <AiOutlineRight />
          </span>
        </Link>

        {/* Collections of Projects link */}
        <Link
          href="/projects/collections-of-projects"
          className="flex items-center cursor-pointer ml-4 font-medium text-coral-pink"
        >
          Collections of Projects{" "}
          <span>
            <AiOutlineRight />
          </span>
        </Link>
      </div>

      {/* Call the ThesisPosterCard.tsx component*/}
      <ThesisPoster />
    </main>
  );
};

export default Projects;
