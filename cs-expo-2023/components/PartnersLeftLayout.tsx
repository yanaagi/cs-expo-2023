import React from 'react';

interface PartnersLeftLayoutProps {
  partner: {
    Web: string;
    facebook: string;
    twitter: string;
    instagram: string;
    intro: string;
  };
}

const PartnersLeftLayout: React.FC<PartnersLeftLayoutProps> = ({ partner }) => {
  const backgroundImageStyle = partner.imagePath
    ? { backgroundImage: `url(${partner.imagePath})`, backgroundSize: 'cover' }
    : undefined;

  return (
    <div className="flex items-center p-12">
      {partner.imagePath && (
        <div
          className="flex-shrink-0 w-48 h-48 bg-blue-500 s-full"
          style={backgroundImageStyle}
        />
      )}
      <div className="flex flex-col items-center ml-2">
        <a href={partner.Web} target="_blank" className="w-8 h-8 bg-green-500 rounded-full mb-2"></a>
        <a href={partner.facebook} target="_blank" className="w-8 h-8 bg-green-500 rounded-full mb-2"></a>
        <a href={partner.twitter} target="_blank" className="w-8 h-8 bg-green-500 rounded-full mb-2"></a>
        <a href={partner.instagram} target="_blank" className="w-8 h-8 bg-green-500 rounded-full mb-2"></a>
      </div>
      <div className="font-regular ml-10 text-2xl">{partner.intro}</div>
    </div>
  );
};


export default PartnersLeftLayout;
