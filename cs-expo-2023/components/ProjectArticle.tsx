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
      <div className="grid gird-rows-4 w-screen pt-24">
        <div className="bg-zinc-800 row-span-3">

        </div>
        <div className="bg-zinc-400 grid grid-cols-2">
          <div className="col-start-2">
            FUCKER
          </div>
        </div>
      </div>
      <div className="flex bg-timberwolf w-screen pt-24">
        <div className="flex flex-col px-6">
          <div className="flex flex-col">
            <div className="flex flex-row"> 
              <div className="flex items-center justify-center w-full">
                <div className="text-2xl font-bold font-['Helvetica Now Text']">Abstract</div>
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
              <div className="h-[160px] bg-zinc-400 s-full">
              </div>
              <div className="h-[160px] bg-zinc-400 s-full">
              </div>
              <div className="h-[160px] bg-zinc-400 s-full">
              </div>
              <div className="h-[160px] bg-zinc-400 s-full">
              </div>
              <div className="h-[160px] bg-zinc-400 s-full">
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
            <div className="grid grid-cols-4 h-[220px] bg-timberwolf gap-3 place-items-stretch">
              <div className="flex col-span-3 mr-10 bg-zinc-800 s-full text-timberwolf text-3xl font-bold justify-center items-center">
                <p>AVP</p>
              </div>
              <div className="bg-zinc-400 s-full">
                
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
