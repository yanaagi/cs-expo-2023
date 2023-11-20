"use client";

import {AiOutlineUp,  AiOutlineDown, AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
import React, { useState, useEffect, useRef } from 'react';
import Splide, {Options, PaginationItem } from '@splidejs/splide';
// import { Splide, SplideSlide, Options } from '@splidejs/react-splide';


interface GallerySliderProps {
  slides: string[];
}

const GallerySlider: React.FC<GallerySliderProps> = ({
    slides,
  }) => {
    const [isMaxSlideLeft, setIsMaxSlideLeft] = useState(true);
    const [isMaxSlideRight, setIsMaxSlideRight] = useState(false);

    const splideOptions: Options = {
      type: 'slide',
      arrows: false,
      perPage  : 2,
      focus    : 'center',
      trimSpace: false,
      gap: 20,
      pagination:true,
      paginationDirection: 'ltr',
      classes: {
        pagination: 'splide__pagination custompagination',
		    page: 'splide__pagination__page custompage',
      },
      direction: 'ltr',
      mediaQuery: 'max',
      breakpoints: {
        420: {
          width: "210px",
        },
        640: {
          perPage:1
        }
      },
    };

    useEffect(() => {
      const splide = new Splide('#splide',splideOptions);
      const slideUp = document.getElementById('slideup');
      const slideDown = document.getElementById('slidedown');
      
      slideUp?.addEventListener("click", () => {
        splide.go('-1');
      });
  
      slideDown?.addEventListener("click", () => {
        splide.go('+1');
      });

      splide.on( 'pagination:mounted', function ( data ) {
        // data.list.classList.add( 'custompage' );
      
        // // `items` contains all dot items
        // data.items.forEach( function ( item ) {
        //   (item as HTMLButtonElement).
        // });
      } );
  
      splide.on(["mounted", "move"], () => {
        const currentIndex = splide.index;
        
        const slideElements = document.querySelectorAll(
          '#slide-card'
        );

        const paginationButtons = document.querySelectorAll(
          '.custompage'
        );

        slideElements.forEach((slide, index) => {
          slide.classList.remove(
              "border-4",
              "border-coral-pink"
          );
          
          (paginationButtons[index] as HTMLButtonElement).style.border="2px solid var(--coral-pink)";
          (paginationButtons[index] as HTMLButtonElement).style.backgroundColor="";

          if (index === currentIndex) {
            slide.classList.add(
                "border-4",
                "border-coral-pink"
            );
            (paginationButtons[index] as HTMLButtonElement).style.border="";
            (paginationButtons[index] as HTMLButtonElement).style.backgroundColor="var(--coral-pink)";
          }
        });
        
        setIsMaxSlideLeft(currentIndex === 0);
        setIsMaxSlideRight(slideElements.length === currentIndex+1);
      });
  
      splide.on(["click"], (slide: { index: any; },e: any) =>{
        splide.go(slide.index);
      });
  
      splide.mount();

      return () => {
        splide.destroy();
      }
    },[]);

  return (
    <div className="flex flex-row items-center justify-center w-full h-full">
                
      {/* <div id="splide" className="splide overflow-hidden w-[120px] h-[300px] max-sm:h-[100px] max-sm:w-[100px]"> */}
      <div id="splide" className="splide flex flex-col h-11/12">
        <div className="flex flex-row items-center">
          <div id="slideup" className=" s-full h-[30px] w-[30px]">
            <button className={`flex items-top justify-center text-coral-pink cursor-pointer text-3xl font-bold ${isMaxSlideLeft && "invisible"}`}>
              <AiOutlineLeft/>
            </button>
          </div>

          <div className="splide__track">
            <ul className="splide__list">
              {
                slides.map((slide, index)=>(
                  <li key={index} className="splide__slide grid">
                    <div id="slide-card" className="grid bg-slate-600 items-center">
                      <img src={slide}></img>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>

          <div id="slidedown" className="h-[30px] w-[30px]">
            <button className={`flex items-top justify-center text-coral-pink cursor-pointer text-3xl font-bold ${isMaxSlideRight && "invisible"}`}>
                <AiOutlineRight/>
            </button>
          </div>
        </div>

        <div className="pt-10">
          <ul className="splide__pagination custompagination flex items-center justify-center">
          </ul>
        </div>
      </div>

    </div>
  );
};

export default GallerySlider;