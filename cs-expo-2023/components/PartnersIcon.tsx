import React from 'react'
import Image from 'next/image'

export interface PartnersInterface {
  src: string;
}

const PartnersItemLayout = (partner: PartnersInterface) => {
  return (
    <div className="inline-block ml-1"> {/* Note the use of 'className' */}
      <Image className="h-auto max-w-full rounded-full p-3" src={partner.src} width={200} height={200}/>
    </div>
  );
} 

export default PartnersItemLayout;