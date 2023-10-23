import React from 'react'
import Image from 'next/image'

export interface PartnersInterface {
  src: string;
}

const PartnerItemLayout = (partner:PartnersInterface) => {
  return (
    <div class="inline-block ml-1">
      <Image class="h-auto max-w-full rounded-full p-3" src={partner.src} width={200} height={200}/>
    </div>
  );
} 

export default PartnerItemLayout;
