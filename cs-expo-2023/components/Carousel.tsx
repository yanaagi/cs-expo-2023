"use client";

import React, { useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface Slide {
    backgroundColor: string;
}

interface CarouselProps {
    title: string;
    description: string;
    slides: Slide[];
    perView?: number;
    id: string;
}

const Carousel: React.FC<CarouselProps> = ({
    title,
    description,
    slides,
    perView,
    id,
}) => {
    useEffect(() => {
        const config = {
            type: "carousel",
            startAt: 0,
            perView: perView || 3,
        };
        new Glide(`#${id}`, config).mount();
    }, []);

    return (
        <div className="grid grid-cols-12 mt-8 me-12">
            <div className="col-span-3">
                <h1 className="font-bold text-5xl">{title}</h1>
                <p className="font-medium pe-12">{description}</p>
            </div>
            <div className="col-span-9 relative">
                <div
                    className={`carousel-${id} glide w-full overflow-hidden`}
                    id={id}
                >
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides flex">
                            {slides.map((slide, index) => (
                                <li
                                    key={index}
                                    className="glide__slide w-120 h-52"
                                    style={{
                                        backgroundColor:
                                            slide.backgroundColor ||
                                            "var(--timberwolf)",
                                    }}
                                ></li>
                            ))}
                        </ul>
                    </div>
                    <div
                        data-glide-el="controls"
                        style={{ color: "var(--coral-pink)" }}
                    >
                        <button
                            data-glide-dir="<"
                            className="absolute top-16 -left-12 mt-4 text-5xl font-bold"
                        >
                            <span className="flex-auto">
                                <AiOutlineLeft />
                            </span>
                        </button>
                        <button
                            data-glide-dir=">"
                            className="absolute top-16 -right-12 mt-4 text-5xl font-bold"
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
