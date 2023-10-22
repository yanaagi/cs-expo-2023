// Projects Overview Page: This is the page that will be rendered at /projects

"use client"; // This file will be run on the client only
import React, { useEffect } from "react";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

const Projects = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const ScrollCarousel = require("scroll-carousel");
      new ScrollCarousel(".projects-overview-carousel", {
        speed: 2, // Adjust the speed of the carousel
        smartSpeed: false,
        autoplay: true,
      });
    }
  }, []);

  // Define the categories and the number of thesis titles for each
  const categories = [
    { name: "Internet of Things", count: 3 },
    { name: "Education", count: 5 },
    { name: "Natural Language Processing", count: 3 },
    { name: "Image Processing and Computer Vision", count: 3 },
    { name: "Data Analytics", count: 3 },
    { name: "Health", count: 3 },
  ];

  // Create an array to store all the placeholders for thesis posters
  const thesisTitles = Array.from(
    { length: 20 },
    (_, index) => `Thesis Title ${index + 1}`
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* The title and description of the page */}
      <div className="text-3xl font-bold text-center text-zinc-900 font-['Helvetica Now Text ']">
        PROJECTS
      </div>
      <div className="text-xs text-center text-zinc-900 font-['Helvetica Now Text ']">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        <br />
        tempor incididunt ut labore et dolore magna aliqua. Nisl purus in mollis
        <br />
        nunc sed id semper risus. Volutpat consequat mauris nunc congue nisi
        <br />
        vitae suscipit tellus.
      </div>

      <br />

      {/* The links to the Hall of Fame and Collections of Projects pages */}
      <div className="flex space-x-4">
        <Link
          href="/projects/hall-of-fame"
          className="hall text-xs text-center text-rose-500 font-bold font-['Helvetica Now Text ']"
        >
          Hall of Fame
          <AiOutlineRight className="inline-block" />
        </Link>

        <Link
          href="/projects/collections-of-projects"
          className="collections text-xs text-center text-rose-500 font-bold font-['Helvetica Now Text ']"
        >
          Collections of Projects <AiOutlineRight className="inline-block" />
        </Link>
      </div>

      <br />

      <link
        // The CDN (Content Delivery Network) link for the scroll-carousel stylesheet
        // https://asif-jalil.github.io/scroll-carousel-website/
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/scroll-carousel@1.2.7/dist/scroll.carousel.min.css"
      />

      {/* The carousel that displays the thesis posters */}
      <div className="projects-overview-carousel">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="category-box">
            <h2>{category.name}</h2>
            <div className="category-posters">
              {thesisTitles
                .slice(0, category.count) // Take the specified number of posters for the category
                .map((title, posterIndex) => (
                  <div
                    key={posterIndex}
                    className="category-poster"
                    style={{
                      backgroundColor: posterIndex % 2 === 0 ? "red" : "black",
                      color: "white",
                      height: "300px",
                      width: "300px",
                    }}
                  >
                    {title}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  ); // End of return
}; // End of Projects

export default Projects;
