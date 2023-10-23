import React from 'react';
import { NextPage } from "next";
import PartnersItemLayout from "../../components/PartnersItemLayout";
import AlternatingPartnersLayout from '../../components/AlternatingPartnersLayout';
import partnersData from '../../partners.json';

const Partners: NextPage = () => {
  const partnerArray = Object.values(partnersData);
  const partners = partnerArray.map(partnersData => partnersData.imagePath); // Assuming 'imagePath' is the correct property

  return (
    <main className="p-24">
      <div className="ms-28">
        <h1 className="font-regular text-7xl m-0 mb-[-1.5rem]">our</h1>
        <h2 className="font-black text-8xl m-0 mt-[-1rem]">PARTNERS</h2>
        <div className="flex items-center justify-center p-24">
          {partners.map((item, index) => (
            <PartnersItemLayout key={index} src={item} />
          ))}
        </div>
        <div>
          <AlternatingPartnersLayout partners={partnerArray} />
        </div>
        <div>
          <h2 className="font-black text-9xl m-0 mt-[-1rem] flex justify-center p-24">MINOR PARTNERS</h2>
          <div>
            <AlternatingPartnersLayout partners={partnerArray} />
          </div>
        </div>
        <div>
          <h2 className="font-black text-9xl m-0 mt-[-1rem] flex justify-center p-24">MEDIA PARTNERS</h2>
          <div>
            <AlternatingPartnersLayout partners={partnerArray} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Partners;
