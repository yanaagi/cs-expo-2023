"use client";
import React, { useState, useEffect, useRef, MouseEvent } from 'react';
import { AiOutlineRight, AiOutlineUp } from 'react-icons/ai';
import ProjectArticleCarousel from "../components/ProjectArticleCarousel";

interface ProjectArticleProps {
  groupname: string | undefined;
  thesisTitle: string | undefined;
  abstract: string | undefined;
  summary: string | undefined;
  members: string[] | undefined;
  category: string | undefined;
  posterFilePath: string | undefined;
  AVPLink: string | undefined;
}

const ProjectArticle: React.FC<ProjectArticleProps> = ({
  groupname,
  thesisTitle,
  abstract,
  summary,
  members,
  category,
  posterFilePath,
  AVPLink
}) => {
  const [isReadMore, setReadMoreState] = useState(false);

  const abs = "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis aliquid modi! Praesentium dicta impedit pariatur adipisci dolorem deserunt vitae ea nobis provident? Quos voluptatum officia nulla nemo obcaecati eligendi!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis aliquid modi! Praesentium dicta impedit pariatur adipisci dolorem deserunt vitae ea nobis provident? Quos voluptatum officia nulla nemo obcaecati eligendi!"

  const toggleReadMore = () => {
    setReadMoreState(!isReadMore);
  };

  return (
    <div className="flex lg:flex-row md:flex-col sm:flex-col min-[100px]:flex-col max-w-full">
      <div className="flex flex-col w-screen pt-24">
        <div className="flex flex-col items-center justify-start pt-5">
          <div className="relative bg-timberwolf h-[550px] w-[400px] s-full shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            
            <div className="absolute top-[80px] right-[-60px] bg-red-200 h-[250px] w-[250px]">
              
            </div>
          </div>
        </div>
        <div className="flex flex-col mr-10 mt-10">
          <div className="text-3xl font-bold text-end row-start-1">{thesisTitle}</div>
          <div className="text-2xl font-bold text-end row-start-2">{"-"+groupname}</div>
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
              <div id="abstract" className="max-h-none overflow-ellipsis text-xl">
                  {abstract}
              </div>
              ): (
                <div id="abstract" className="max-h-20 overflow-ellipsis text-xl">
                  {abstract}
                </div>
              )}
            <div>
              <div className="w-full h-[25px] bg-timberwolf opacity-60"></div>
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

          <div className="flex flex-col bg-timberwolf h-full">
            <div className="flex flex-row py-5"> 
                <div className="flex items-center justify-center w-full">
                <div className="text-2xl font-bold">Gallery</div>
                  <hr className="w-full h-px border-0 dark:bg-gray-700 ml-7"/>
                </div>
            </div>
            <div className="grid grid-cols-4 h-[300px] bg-timberwolf gap-10 place-items-stretch mb-10">
              <div className="flex col-span-3 bg-zinc-800 s-full text-timberwolf text-3xl font-bold justify-center items-center">
                <p>AVP</p>
              </div>
              <div className="flex flex-col col-span-1 bg-zinc-400 s-full">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectArticle;
