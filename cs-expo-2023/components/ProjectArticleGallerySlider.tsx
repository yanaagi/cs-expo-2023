"use client";

import {AiOutlineUp,  AiOutlineDown, AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
import React, { useState, useEffect } from 'react';

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
  
    useEffect(() => {
      const splideOptions = {
        type: 'slide',
        arrows: false,
        gap: 20,
        width : '390px',
        height : '130px',
        direction: 'ltr',
      };
      const splide = new Splide('#my_splide', splideOptions);
      const slideUp = document.getElementById('slideup');
      const slideDown = document.getElementById('slidedown');
      
  
      slideUp?.addEventListener("click", () => {
        splide.go('-1');
      });
  
      slideDown?.addEventListener("click", () => {
        splide.go('+1');
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
    },[]);

  return (
    <div className="flex flex-row items-center justify-center w-full h-1/12">
      <div id="slideup" className="flex justify-center h-[30px] w-[30px]">
        { 
        !isMaxSlideUp && (
          <button className="flex items-top justify-center text-coral-pink cursor-pointer text-3xl font-bold">
            <AiOutlineLeft/>
          </button>
        )}
      </div>
                
      <div id="my_splide" className="splide overflow-hidden h-[134px] max-sm:w-[130px]">
        <div className="splide__track">
          <ul className="splide__list flex flex-row h-[130px] items-center">
            {
              slides.map((slide, index)=>(
                <li key={index} className="splide__slide flex justify-center">
                  <div id="slide-card" className="h-[130px] w-[130px]">
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
            <AiOutlineRight/>
          </button>
        )}
      </div>
    </div>
  );
};

export default GallerySlider;