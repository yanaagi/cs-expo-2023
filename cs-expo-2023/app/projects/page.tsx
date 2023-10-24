// Projects Overview Page: This is the page that will be rendered at /projects

"use client"; // This file will be run on the client only
import React, { useEffect } from "react";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import ProjectsHeader from "@/components/ProjectsHeader";
import ThesisPoster from "@/components/ThesisPosterCard";

const Projects = () => {
    useEffect(() => {
        new ScrollCarousel(".my-carousel", {
            autoplay: true,
        });
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
        <main className="flex flex-col items-center justify-between p-24">
            <ProjectsHeader headerText="PROJECTS" subheaderText="LOREM" />
            <div className="flex justify-center p-4 w-full">
                <Link
                    href="/projects/hall-of-fame"
                    className="flex items-center cursor-pointer ml-4 font-medium text-coral-pink"
                >
                    Hall of Fame{" "}
                    <span className="flex-auto">
                        <AiOutlineRight />
                    </span>
                </Link>
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

            <div className="w-[1400px]">
                <div className="my-carousel">
                    <div className="my-slide w-[300px] h-[400px] bg-slate-100">
                        1
                    </div>
                    <div className="my-slide w-[300px] h-[400px] bg-slate-100">
                        2
                    </div>
                    <div className="my-slide w-[300px] h-[400px] bg-slate-100">
                        3
                    </div>
                    <div className="my-slide w-[300px] h-[400px] bg-slate-100">
                        4
                    </div>
                    <div className="my-slide w-[300px] h-[400px] bg-slate-100">
                        5
                    </div>
                    <div className="my-slide w-[300px] h-[400px] bg-slate-100">
                        6
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Projects;
