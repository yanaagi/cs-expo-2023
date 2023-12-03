import React from 'react';
import Image from 'next/image';

interface PartnersIconLayoutProps {
  partners: Array<any>;
}
const PartnerIconsLayout: React.FC<PartnersIconLayoutProps> = ({ partners }) => {
  const partnerIcons: React.ReactElement[] = [];

  return (
    <div className="mx-4 lg:mx-12 grid grid-cols-6 gap-y-2 gap-x-2 items-center justify-center">
      {
        partners.map((partner,index) => (
          <div key={index} className="col-span-2 lg:col-span-1 flex justify-center"> 
            <img src={partner.imagePath} className="shadow-lg h-20 md:h-28 aspect-square object-cover rounded-full bg-timberwolf"></img>
          </div>
        ))
      }
    </div>
  )
} 

export default PartnerIconsLayout;