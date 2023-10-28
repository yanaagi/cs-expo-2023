"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import ProjectsHeader from "@/components/ProjectsHeader";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import { title } from "process";

const Projects = () => {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <ProjectsHeader
                headerText="PROJECTS"
                subheaderText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, optio. Nam numquam ratione laboriosam architecto commodi?"
            />

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

            <ProjectsCarousel
                slides={[
                    {
                        title: "Data Analytics",
                        imageLink: "/data-analytics/chart-pie-solid.svg",
                        backgroundColor: "pink",
                    },
                    {
                        title: "Education",
                        imageLink: "/education/book-open-solid.svg",
                        backgroundColor: "black",
                    },
                    {
                        title: "Health",
                        imageLink: "/health/heart-pulse-solid.svg",
                        backgroundColor: "pink",
                    },
                    {
                        title: "Image Processing / Computer Vision",
                        imageLink: "/imgproc-cv/eye-solid.svg",
                        backgroundColor: "black",
                    },
                    {
                        title: "Internet of Things",
                        imageLink: "/iot/microchip-solid.svg",
                        backgroundColor: "pink",
                    },
                    {
                        title: "Natural Language Processing",
                        imageLink: "/nlp/comments-solid.svg",
                        backgroundColor: "black",
                    },
                ]}
            />
        </main>
    );
};

export default Projects;
