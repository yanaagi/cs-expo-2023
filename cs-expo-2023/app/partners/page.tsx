'use client'
import React from 'react';
import { NextPage } from "next";
import PartnerIconsLayout from "../../components/PartnerIconsLayout";
import AlternatingPartnersLayout from '../../components/AlternatingPartnersLayout';
import goldData from '../../goldSpons.json';
import bronzeData from '../../bronzeSpons.json';
import CircularSidebar from '@/components/PartnersSidebar';
import Nodesc from '../../components/AlternatingnonamePartnersLayout';
import majorData from '../../majorPartner.json'
import minorData from '../../minorPartners.json'
import mediaData from '../../mediaPartners.json'


const Partners: NextPage = () => {
  const goldArray = Object.values(goldData);
  const bronzeArray = Object.values(bronzeData);
  const majorArray = Object.values(majorData);
  const minorArray = Object.values(minorData);
  const mediaArray = Object.values(mediaData);

  const allPartnersArray = [
    ...goldArray,
    ...bronzeArray,
    ...mediaArray,
    ...majorArray,
    ...minorArray,
  
  ];

  return (
    <main className="">

<div className="custom-font text-[clamp(48px,3vw,72px)] m-0 flex flex-col items-start sm:items-center lg:items-start mt-32 ml-12 ">
  <h1 className="custom-font text-[clamp(35px,10vw,72px)] m-0">our</h1>
  <h2 className="custom-font text-[clamp(38px,10vw,72px)] m-0">PARTNERS</h2>
</div>



  <div className="">
          <PartnerIconsLayout partners={allPartnersArray} />
      </div>


        <section id="gold-spons">
        <h2 id="gold" className="custom-font text-[clamp(43px,5vw,72px)] m-0  flex justify-center ml-3">GOLD SPONSORS</h2>
        </section>
        <div>
          <AlternatingPartnersLayout partners={goldArray} />
        </div>
        <section id="bronze-spons">
        <h2 id="bronze" className="custom-font text-[clamp(43px,5vw,72px)] m-0  flex justify-center ml-3">BRONZE SPONSORS</h2>
        </section>
        <div>
          <AlternatingPartnersLayout partners={bronzeArray} />
        </div>
        <div>
          <section id="partners-media">
          <h2 id="media" className="custom-font text-[clamp(43px,5vw,72px)] m-0  flex justify-center ml-3">MEDIA PARTNERS</h2>
          </section>
          <div>
            <Nodesc partners={mediaArray} />
          </div>
        </div>
        <section id="partners-major">
        <h2 id="major" className="custom-font text-[clamp(43px,5vw,72px)] m-0  flex justify-center ml-3">MAJOR PARTNERS</h2>
        </section>
        <div>
          <Nodesc partners={majorArray} />
        </div>
        <div>
        <section id="partners-minor">
          <h2 id="minor" className="custom-font text-[clamp(43px,5vw,72px)] m-0  flex justify-center ml-3">MINOR PARTNERS</h2>
        </section>
          <div>
            <Nodesc partners={minorArray} />
          </div>
        </div>
        
    </main>
  );
}

export default Partners;
