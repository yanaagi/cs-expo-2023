import React from "react";
import { useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link"; // Import Link from next

/* The `interface Slide` defines the structure of an object that represents a slide in the
ProjectsCarousel component. It has three properties: `title`, `imageLink`, and `backgroundColor`,
all of which are of type string. These properties define the content and styling of each slide in
the carousel. */
interface Slide {
  title: string;
  imageLink: string;
  backgroundColor: string;
}

/* The `interface ProjectsCarouselProps` defines the structure of the props that can be passed to the
`ProjectsCarousel` component. It has one property called `slides`, which is an array of objects of
type `Slide`. This allows the parent component to pass an array of slides to the `ProjectsCarousel`
component, specifying the content and styling for each slide in the carousel. */
interface ProjectsCarouselProps {
  slides: Slide[];
}

// Configuration options for the Glide.js carousel.
const config = {
  type: "carousel",
  autoplay: 4000,
  hoverpause: true,
  startAt: 0,
  peek: {
    before: 100,
    after: 50,
  },
  perView: 7, // number of slides to show at once in desktop, 7 is an allowance for smooth transition
  swipeThreshold: 80,
  gap: 0,
  breakpoints: {
    1200: {
      perView: 6, // number of slides to show at once for large screens
    },
    1024: {
      perView: 5, // number of slides to show at once for medium screens
    },
    480: {
      perView: 1,
    },
    320: {
      perView: 1,
      peek: {
        before: 0,
        after: 0, // amount of next slide visible
      },
    },
  },
};

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ slides }) => {
  useEffect(() => {
    new Glide(".glide", config).mount(); // Glide is called from `layout.tsx` as a CDN, so don't worry about "Cannot find name 'Glide'"
  }, []);

  const handleSlideClick = (category: string) => {
    // No need for router.push, use Link for navigation
  };

  return (
    <main className="flex justify-center mt-4">
      {/* Structure of Glide.js*/}
      <div className="glide sm:p-8 relative cursor-pointer">
        <div className="w-screen ps-12 me-12 sm:ps-40 sm:me-40">
          <div className="flex justify-center overflow-hidden sm:text-base">
            <div className="w-[1400px] sm:w-[2500px] max-[320px]:ps-8 ps-2 pe-11">
              <div className="glide__track w-full" data-glide-el="track">
                <ul className="glide__slides h-[210px] sm:h-[300px]">
                  {/* Data Analytics*/}
                  <li
                    className="glide__slide w-[120px] h-[350px] sm:w-[25px] sm:h-[150px] flex justify-center items-start relative"
                    onClick={() => handleSlideClick("data-analytics")}
                  >
                    <Image
                      src="/data-analytics/DATAANALYTICS.svg" // path to image
                      className="justify-center"
                      fill={true}
                      alt="Data Analytics"
                    />
                  </li>{" "}
                  {/* End of Data Analytics */}
                  {/* Education*/}
                  <li
                    className="glide__slide w-[120px] h-[350px] sm:w-[25px] sm:h-[150px] flex justify-center items-start relative mx-0"
                    onClick={() => handleSlideClick("education")}
                  >
                    <Image
                      src="/education/EDUCATION.svg" // path to image
                      className="justify-center"
                      fill={true}
                      alt="Education"
                    />
                  </li>{" "}
                  {/* End of Education */}
                  {/* Health*/}
                  <li
                    className="glide__slide w-[120px] h-[350px] sm:w-[25px] sm:h-[150px] flex justify-center items-start relative"
                    onClick={() => handleSlideClick("health")}
                  >
                    <Image
                      src="/health/HEALTH.svg" // path to image
                      className="justify-center"
                      fill={true}
                      alt="Health"
                    />
                  </li>{" "}
                  {/* End of Health */}
                  {/* Image Processing / Computer Vision*/}
                  <li
                    className="glide__slide w-[120px] h-[350px] sm:w-[25px] sm:h-[150px] flex justify-center items-start relative"
                    onClick={() => handleSlideClick("imgproc-cv")}
                  >
                    <Image
                      src="/imgproc-cv/IMAGEPROCESSING.svg" // path to image
                      className="justify-center"
                      fill={true}
                      alt="Image Processing / Computer Vision"
                    />
                  </li>{" "}
                  {/* End of Image Processing / Computer Vision*/}
                  {/* Internet of Things*/}
                  <li
                    className="glide__slide w-[120px] h-[350px] sm:w-[25px] sm:h-[150px] flex justify-center items-start relative"
                    onClick={() => handleSlideClick("iot")}
                  >
                    <Image
                      src="/iot/IOT.svg"
                      className="justify-center"
                      fill={true}
                      alt="Internet of Things"
                    />
                  </li>{" "}
                  {/* End of Internet of Things*/}
                  {/* Natural Language Processing*/}
                  <li
                    className="glide__slide w-[120px] h-[350px] sm:w-[25px] sm:h-[150px] flex justify-center items-start relative"
                    onClick={() => handleSlideClick("nlp")}
                  >
                    <Image
                      src="/nlp/NLP.svg"
                      className="justify-center"
                      fill={true}
                      alt="Natural Language Processing"
                    />
                  </li>{" "}
                  {/* End of Natural Language Processing */}
                  {/* 🚧🚧🚧ANOTHER LIST <li> to smoothen the transition between the last (NLP) and first (Data Analytics) slides */}
                  {/* Data Analytics*/}
                  <li
                    className="glide__slide w-[120px] h-[350px] sm:w-[25px] sm:h-[150px] flex justify-center items-start relative"
                    onClick={() => handleSlideClick("data-analytics")}
                  >
                    <Image
                      src="/data-analytics/DATAANALYTICS.svg" // path to image
                      className="justify-center"
                      fill={true}
                      alt="Data Analytics"
                    />
                  </li>{" "}
                  {/* End of Data Analytics */}
                  {/* Education*/}
                  <li
                    className="glide__slide w-[120px] h-[350px] sm:w-[25px] sm:h-[150px] flex justify-center items-start relative mx-0"
                    onClick={() => handleSlideClick("education")}
                  >
                    <Image
                      src="/education/EDUCATION.svg" // path to image
                      className="justify-center"
                      fill={true}
                      alt="Education"
                    />
                  </li>{" "}
                  {/* End of Education */}
                  {/* Health*/}
                  <li
                    className="glide__slide w-[120px] h-[350px] sm:w-[25px] sm:h-[150px] flex justify-center items-start relative"
                    onClick={() => handleSlideClick("health")}
                  >
                    <Image
                      src="/health/HEALTH.svg" // path to image
                      className="justify-center"
                      fill={true}
                      alt="Health"
                    />
                  </li>{" "}
                  {/* End of Health */}
                  {/* Image Processing / Computer Vision*/}
                  <li
                    className="glide__slide w-[120px] h-[350px] sm:w-[25px] sm:h-[150px] flex justify-center items-start relative"
                    onClick={() => handleSlideClick("imgproc-cv")}
                  >
                    <Image
                      src="/imgproc-cv/IMAGEPROCESSING.svg" // path to image
                      className="justify-center"
                      fill={true}
                      alt="Image Processing / Computer Vision"
                    />
                  </li>{" "}
                  {/* End of Image Processing / Computer Vision*/}
                  {/* Internet of Things*/}
                  <li
                    className="glide__slide w-[120px] h-[350px] sm:w-[25px] sm:h-[150px] flex justify-center items-start relative"
                    onClick={() => handleSlideClick("iot")}
                  >
                    <Image
                      src="/iot/IOT.svg"
                      className="justify-center"
                      fill={true}
                      alt="Internet of Things"
                    />
                  </li>{" "}
                  {/* End of Internet of Things*/}
                  {/* Natural Language Processing*/}
                  <li
                    className="glide__slide w-[120px] h-[350px] sm:w-[25px] sm:h-[150px] flex justify-center items-start relative"
                    onClick={() => handleSlideClick("nlp")}
                  >
                    <Image
                      src="/nlp/NLP.svg"
                      className="justify-center"
                      fill={true}
                      alt="Natural Language Processing"
                    />
                  </li>{" "}
                </ul>{" "}
                {/* End of glide__slides */}
              </div>{" "}
            </div>
          </div>
        </div>
        {/* End of glide__track w-full */}
        {/* Arrow buttons for Glide.js */}
        <div
          className="glide__arrows w-screen absolute -bottom-2 sm:top-[calc(50%-2rem)]" // sm:block hidden is for hiding the arrows on small screens
          data-glide-el="controls"
        >
          <button
            className="glide__arrow glide__arrow--left absolute left-8 sm:left-24 text-5xl sm:text-5xl sm:m-2 sm:p-2"
            data-glide-dir="<"
            style={{ color: "var(--coral-pink)" }} // color of left arrow
          >
            <span className="flex-auto">
              <AiOutlineLeft />
            </span>
          </button>
          <button
            className="glide__arrow glide__arrow--right absolute -right-4 sm:-right-14 text-5xl sm:text-5xl sm:m-0 sm:p-0"
            data-glide-dir=">"
            style={{ color: "var(--coral-pink)" }} // color of right arrow
          >
            <span className="flex-auto">
              <AiOutlineRight />
            </span>
          </button>
        </div>
      </div>{" "}
      {/* End of glide__arrows */}
    </main>
  );
};

export default ProjectsCarousel;
