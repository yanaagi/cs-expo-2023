import React from 'react';
import Image from 'next/image';

interface PartnerIconProps {
  partner: {
    imagePath?:string;
  }
}

interface PartnersIconLayoutProps {
  partners: Array<any>;
}
const PartnerIconsLayout: React.FC<PartnersIconLayoutProps> = ({ partners }) => {
  const partnerIcons: React.ReactElement[] = [];

  return (
    <div className="grid grid-cols-7 max-2xl:grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1  h-full w-full items-center justify-center place-items-center">
      {
        partners.map((partner,index) => (
          // <div key={index} className="w-[1/2] h-1/2 rounded-full bg-slate-800 "> 
          <div key={index} className="flex h-48 w-48 rounded-full bg-slate-800"> 
            <img src={partner.imagePath} className="rounded-full"></img>
          </div>
        ))
      }
    </div>
  )
} 

export default PartnerIconsLayout;