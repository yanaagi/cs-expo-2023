'use client'
import React from 'react';
import { NextPage } from "next";
import PartnerIconsLayout from "../../components/PartnerIconsLayout";
import AlternatingPartnersLayout from '../../components/AlternatingPartnersLayout';
import goldData from '../../goldSpons.json';
import bronzeData from '../../bronzeSpons.json';
import CircularSidebar from '@/components/PartnersSidebar';


const Partners: NextPage = () => {
  const goldArray = Object.values(goldData);
  const bronzeArray = Object.values(bronzeData);
  

  return (
    <main className="p-24">
<div className="ms-28 ml-[-4rem] sm:ml-0 lg:ml-28">
  <h1 className="font-regular text-[clamp(48px,3vw,72px)] m-0 mb-[-2.5rem] sm:mb-0 lg:mb-[-2.5rem]">our</h1>
  <h2 className="custom-font text-[clamp(48px,10vw,72px)] m-0 mt-[-1rem] sm:mt-0 lg:mt-[-1rem]">PARTNERS</h2>

</div>
        <section id="gold-spons">
        <h2 id="gold" className="custom-font text-[clamp(48px,5vw,72px)] m-0  flex justify-center">GOLD SPONSORS</h2>
        </section>
        <div>
          <AlternatingPartnersLayout partners={goldArray} />
        </div>
        <section id="bronze-spons">
        <h2 id="bronze" className="custom-font text-[clamp(48px,5vw,72px)] m-0  flex justify-center">BRONZE SPONSORS</h2>
        </section>
        <div>
          <AlternatingPartnersLayout partners={bronzeArray} />
        </div>
        <section id="partners-major">
        <h2 id="major" className="custom-font text-[clamp(48px,5vw,72px)] m-0  flex justify-center">MAJOR PARTNERS</h2>
        </section>
        <div>
          <AlternatingPartnersLayout partners={bronzeArray} />
        </div>
        <div>
        <section id="partners-minor">
          <h2 id="minor" className="custom-font text-9xl m-0 mt-[-1rem] flex justify-center p-24">MINOR PARTNERS</h2>
        </section>
          <div>
            <AlternatingPartnersLayout partners={bronzeArray} />
          </div>
        </div>
        <div>
          <section id="partners-media">
          <h2 id="media" className="custom-font text-9xl m-0 mt-[-1rem] flex justify-center p-24">MEDIA PARTNERS</h2>
          </section>
          <div>
            <AlternatingPartnersLayout partners={bronzeArray} />
          </div>
        </div>
    </main>
  );
}

export default Partners;
