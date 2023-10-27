"use client";
import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import { AiOutlineRight, AiOutlineUp } from 'react-icons/ai';
import Carousel from "@/components/ProjectArticleCarousel";
import GroupsData from "../../../thesis-projects.json"

interface GroupProps {
  groupid: string;
}

const ProjectArticle: React.FC<GroupProps> = ( groupid ) => {
  const [isReadMore, setReadMoreState] = useState(false);

  const abstract = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quo neque veniam est recusandae fugiat  \
  blanditiis ratione mollitia, sunt repellendus, nisi ut ipsam. Quibusdam accusantium labore eius doloribus officia iure! \
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quo neque veniam est recusandae fugiat  \
  blanditiis ratione mollitia, sunt repellendus, nisi ut ipsam. Quibusdam accusantium labore eius doloribus officia iure! \
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quo neque veniam est recusandae fugiat  \
  blanditiis ratione mollitia, sunt repellendus, nisi ut ipsam. Quibusdam accusantium labore eius doloribus officia iure! \
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quo neque veniam est recusandae fugiat  \
  blanditiis ratione mollitia, sunt repellendus, nisi ut ipsam. Quibusdam accusantium labore eius doloribus officia iure!";

  const toggleReadMore = () => {
    setReadMoreState(!isReadMore);
  };

  return (
    <div className="flex flex-row justify-center max-w-full w-screen">
      <div className="grid gird-rows-6 w-screen pt-24">
        <div className="flex flex-col  row-span-4 items-center justify-center pt-5">
          <div className="relative bg-timberwolf h-[550px] w-[400px] s-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <div className="absolute top-[80px] right-[-60px] bg-red-200 h-[250px] w-[250px]">

            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 row-span-2">
          <div className="col-start-3 col-span-3 grid grid-rows-10 place-content-start">
            <div className="text-5xl font-bold text-end row-start-1">THESIS TITLE</div>
            <div className="text-2xl font-bold text-end row-start-2">GROUP</div>
          </div>
        </div>
      </div>
      <div className="flex bg-timberwolf w-screen pt-24">
        <div className="flex flex-col px-6">
          <div className="flex flex-col">
            <div className="flex flex-row"> 
              <div className="flex items-center justify-center w-full">
                <div className="text-2xl font-bold">Abstract</div>
                <hr className="w-full h-px border-0 dark:bg-gray-700 ml-7"/>
              </div>
            </div>
              { isReadMore ? (
              <div id="abstract" className="max-h-none overflow-visible">
                  {abstract}
              </div>
              ): (
                <div id="abstract" className="max-h-20 overflow-visible">
                  {abstract}
                </div>
              )}
            <div>
              <div className="w-full h-2 bg-timberwolf opacity-60"></div>
              <div className="flex flex-row justify-end w-full bg-timberwolf pb-4">
                <button onClick={toggleReadMore} className="flex items-center text-coral-pink font-bold cursor-pointer">
                  {isReadMore?(<>Read less</>):(<>Read more</>)}
                  <span className="ml-2">
                    {isReadMore?(<AiOutlineUp/>):(<AiOutlineRight/>)}
                  </span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-5 bg-timberwolf gap-3 place-items-stretch">
              <div className="h-[200px] bg-zinc-400 s-full">
              </div>
              <div className="h-[200px] bg-zinc-400 s-full">
              </div>
              <div className="h-[200px] bg-zinc-400 s-full">
              </div>
              <div className="h-[200px] bg-zinc-400 s-full">
              </div>
              <div className="h-[200px] bg-zinc-400 s-full">
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-timberwolf">
            <div className="flex flex-row py-5"> 
                <div className="flex items-center justify-center w-full">
                <div className="text-2xl font-bold font-['Helvetica Now Text']">Gallery</div>
                  <hr className="w-full h-px border-0 dark:bg-gray-700 ml-7"/>
                </div>
            </div>
            <div className="grid grid-cols-10 h-[300px] bg-timberwolf gap-20 place-items-stretch">
              <div className="flex col-span-7 bg-zinc-800 s-full text-timberwolf text-3xl font-bold justify-center items-center">
                <p>AVP</p>
              </div>
              <div className="col-span-3 bg-zinc-400 s-full ">
                
              </div>
            </div>
          </div>

          <div className="bg-timberwolf h-10"></div>
        </div>

      </div>
    </div>
  );
}

export default ProjectArticle;
