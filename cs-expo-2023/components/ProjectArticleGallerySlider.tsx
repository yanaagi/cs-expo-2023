"use client";

import {AiOutlineUp,  AiOutlineDown, AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
import React, { useState, useEffect, useRef } from 'react';


interface Slide {
  link: string;
}

interface GallerySliderProps {
  slides: Slide[];
}

const GallerySlider: React.FC<GallerySliderProps> = ({
    slides,
  }) => {
    const [isMaxSlideUp, setIsMaxSlideUp] = useState(true);
    const [isMaxSlideDown, setIsMaxSlideDown] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);
    const [isMobileMode, setIsMobileMode] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }
    useEffect(()=> {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      }
    }, []);

    useEffect(()=>{
      setWindowWidth(window.innerWidth);

      if (windowWidth > 640 && isMobileMode) {
        setIsMobileMode(false);
      }
      else if (windowWidth <= 640 && !isMobileMode) {
        setIsMobileMode(true);
      }
      console.log(windowWidth);
    }, [windowWidth]);

    useEffect(() => {
      setWindowWidth(window.innerWidth);
      let splideOptions = {
        type: 'slide',
        arrows: false,
        gap: 20,
        // width : '390px',
        height : '100px',
        direction: isMobileMode?'ltr':'ttb',
      };
      const splide = new Splide('#my_splide',splideOptions);
      const slideUp = document.getElementById('slideup');
      const slideDown = document.getElementById('slidedown');
      
      slideUp?.addEventListener("click", () => {
        splide.go('-1');
        setCurrentSlide(splide.index);
      });
  
      slideDown?.addEventListener("click", () => {
        splide.go('+1');
        setCurrentSlide(splide.index);
      });
  
      splide.on(["mounted", "move"], () => {
        const currentIndex = splide.index;
  
        const slideElements = document.querySelectorAll(
          '#slide-card'
        );
      
        slideElements.forEach((slide, index) => {
          slide.classList.remove(
              "border-4",
              "border-coral-pink"
          );
  
          if (index === currentIndex) {
              slide.classList.add(
                  "border-4",
                  "border-coral-pink"
              );
          }
        });
        
        setIsMaxSlideUp(currentIndex === 0);
        setIsMaxSlideDown(slideElements.length === currentIndex+1);
      });
  
      splide.on(["click"], (slide: { index: any; },e: any) =>{
        splide.go(slide.index);
      });
  
      splide.mount();

      splide.go(currentSlide);
      return () => {
        splide.destroy();
      }
    },[isMobileMode]);

  return (
    <div className="flex flex-col max-sm:flex-row items-center justify-center w-2/12 max-sm:w-full max-sm:h-1/12">
      <div id="slideup" className="flex justify-center h-[30px] w-[30px]">
        { 
        !isMaxSlideUp && (
          <button className="flex items-top justify-center text-coral-pink cursor-pointer text-3xl font-bold">
            {
              isMobileMode ? (<AiOutlineLeft/>) : (<AiOutlineUp/>)
            }
          </button>
        )}
      </div>
                
      <div id="my_splide" className="splide overflow-hidden w-[120px] h-[300px] max-sm:h-[100px] max-sm:w-[100px]">
        <div className="splide__track">
          <ul className="splide__list flex flex-col max-sm:flex-row h-[100px] items-center">
            {
              slides.map((slide, index)=>(
                <li key={index} className="splide__slide flex justify-center">
                  <div id="slide-card" className="h-[100px] w-[100px]">
                    <img src={slide.link} className=""></img>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      <div id="slidedown" className="flex justify-center h-[30px] w-[30px]">
        { 
        !isMaxSlideDown && (
          <button className="flex items-top justify-center text-coral-pink cursor-pointer text-3xl font-bold">
            {
              isMobileMode ? (<AiOutlineRight/>) : (<AiOutlineDown/>)
            }
          </button>
        )}
      </div>
    </div>
  );
};

export default GallerySlider;