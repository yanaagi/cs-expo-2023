import React from 'react';
import { NextPage } from "next";
import PartnerIconsLayout from "../../components/PartnerIconsLayout";
import AlternatingPartnersLayout from '../../components/AlternatingPartnersLayout';
import partnersData from '../../partners.json';
import CircularSidebar from '@/components/PartnersSidebar';

const Partners: NextPage = () => {
  const partnerArray = Object.values(partnersData);
  const partners = partnerArray.map(partnersData => partnersData.imagePath); // Assuming 'imagePath' is the correct property

  return (
    <main className="p-24">
<div className="ms-28 ml-[-4rem] sm:ml-0 lg:ml-28">
  <h1 className="font-regular text-[clamp(48px,3vw,72px)] m-0 mb-[-2.5rem] sm:mb-0 lg:mb-[-2.5rem]">our</h1>
  <h2 className="font-black text-[clamp(48px,10vw,72px)] m-0 mt-[-1rem] sm:mt-0 lg:mt-[-1rem]">PARTNERS</h2>
  <div className="flex items-center justify-center p-24">
    <PartnerIconsLayout partners={partnerArray} />
  </div>
</div>

        <section id="partners-major">
        <h2 id="major" className="font-black text-[clamp(48px,5vw,72px)] m-0  flex justify-center">MAJOR PARTNERS</h2>
        </section>
        <div>
          <AlternatingPartnersLayout partners={partnerArray} />
        </div>
        <div>
        <section id="partners-minor">
          <h2 id="minor" className="font-black text-[clamp(48px,5vw,72px)] m-0 mt-[-1rem] flex justify-center">MINOR PARTNERS</h2>
        </section>
          <div>
            <AlternatingPartnersLayout partners={partnerArray} />
          </div>
        </div>
        <div>
          <section id="partners-media">
          <h2 id="media" className="font-black text-[clamp(48px,5vw,72px)] m-0 mt-[-1rem] flex justify-center">MEDIA PARTNERS</h2>
          </section>
          <div>
            <AlternatingPartnersLayout partners={partnerArray} />
          </div>
        </div>
      <CircularSidebar />
    </main>
  );
}

export default Partners;
