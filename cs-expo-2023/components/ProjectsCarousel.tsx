import React from "react";
import { useEffect } from "react";
import Image from "next/image";

interface Slide {
    title: string;
    imageLink: string;
    backgroundColor: string;
}

interface ProjectsCarouselProps {
    slides: Slide[];
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ slides }) => {
    useEffect(() => {
        new ScrollCarousel(".my-carousel", {
            speed: 1,
            autoplay: true,
        });
    }, []);

    return (
        <main className="w-screen overflow-x-hidden flex justify-center">
            <div className="w-[1800px]">
                <div className="my-carousel">
                    {slides.map((slide, index) => {
                        let foreBackgroundColor;
                        let midBackgroundColor;
                        let backBackgroundColor;
                        switch (slide.backgroundColor) {
                            case "pink":
                                foreBackgroundColor = "var(--coral-pink)";
                                midBackgroundColor = "#B43E41";
                                backBackgroundColor = "#973235";
                                break;
                            case "black":
                                foreBackgroundColor = "#353535";
                                midBackgroundColor = "#5C5C5C";
                                backBackgroundColor = "#7E7E7E";
                                break;
                            default:
                                foreBackgroundColor = "var(--timberwolf)";
                                midBackgroundColor = "#D0D0D0";
                                backBackgroundColor = "#B7B7B7";
                                break;
                        }

                        const imageStyles = {
                            filter: "invert(1)",
                        };

                        return (
                            <div
                                key={index}
                                className="my-slide w-[300px] h-[400px] flex justify-center items-center relative"
                            >
                                <div
                                    className="w-[250px] h-[333.33px] bg-slate-200 absolute left-10 bottom-10"
                                    style={{
                                        backgroundColor: backBackgroundColor,
                                    }}
                                ></div>
                                <div
                                    className="w-[250px] h-[333.33px] bg-slate-300 absolute"
                                    style={{
                                        backgroundColor: midBackgroundColor,
                                    }}
                                ></div>
                                <div
                                    className="w-[250px] h-[333.33px] absolute left-3 bottom-6 flex flex-col justify-center items-center"
                                    style={{
                                        backgroundColor: foreBackgroundColor,
                                    }}
                                >
                                    <Image
                                        src={slide.imageLink}
                                        className="justify-center"
                                        width={200}
                                        height={200}
                                        alt={slide.title}
                                        style={imageStyles}
                                    />

                                    <h1 className="font-medium uppercase text-white text-center w-60 mt-5">
                                        {slide.title}
                                    </h1>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};
export default ProjectsCarousel;
