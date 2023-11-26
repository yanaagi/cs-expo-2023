"use client";

import React, { useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Glide from "@glidejs/glide";

interface Slide {
    backgroundImage: string;
}

interface CarouselProps {
    title: string;
    description: string;
    slides: Slide[];
    id: string;
}

const Carousel: React.FC<CarouselProps> = ({
    title,
    description,
    slides,
    id,
}) => {
    useEffect(() => {
        new Glide(`#${id}`, {
            type: "carousel",
            startAt: 0,
            perView: 4,
            autoplay: 2000,
        }).mount();
    }, [id]); // Add 'id' to the dependency array

    return (
        <div className="grid grid-cols-12 mt-8">
            <div className="col-span-12 lg:col-span-3">
                <h1 className="font-bold text-5xl">{title}</h1>
                <p className="font-medium pe-12 pb-10">{description}</p>
            </div>
            <div className="col-span-12 lg:col-span-9 relative">
                <div className={`${id} glide`} id={id}>
                    <div className="mx-12 lg:mx-16 overflow-x-hidden">
                        <div className="w-[1200px] lg:w-[1500px]">
                            <div className="glide__track" data-glide-el="track">
                                <ul className="glide__slides">
                                    {slides.map((slide, index) => (
                                        <li
                                            className="glide__slide"
                                            key={index}
                                        >
                                            <div className="w-[256px] h-[144px] lg:w-[320px] lg:h-[180px]">
                                                <img
                                                    src={slide.backgroundImage}
                                                    alt="image"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div
                        data-glide-el="controls"
                        style={{ color: "var(--coral-pink)" }}
                    >
                        <button
                            data-glide-dir="<"
                            className="absolute top-10 left-0 lg:mt-4 text-5xl font-bold"
                        >
                            <span className="flex-auto">
                                <AiOutlineLeft />
                            </span>
                        </button>
                        <button
                            data-glide-dir=">"
                            className="absolute top-10 right-0 lg:mt-4 text-5xl font-bold"
                        >
                            <span className="flex-auto">
                                <AiOutlineRight />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
