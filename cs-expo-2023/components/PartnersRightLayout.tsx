import React from 'react';

interface PartnersRightLayoutProps {
  partner: {
    Web: string;
    facebook: string;
    twitter: string;
    instagram: string;
    intro: string;
  };
}

const PartnersRightLayout: React.FC<PartnersRightLayoutProps> = ({ partner }) => {
  const backgroundImageStyle = partner.imagePath
    ? { backgroundImage: `url(${partner.imagePath})`, backgroundSize: 'cover' }
    : undefined;

  return (
    <div className="flex items-center justify-end p-12">
      <div className="font-regular mr-10 text-2xl">{partner.intro}</div>
      <div className="flex flex-col items-center mr-2">
        <a href={partner.Web} target="_blank" className="w-8 h-8 bg-green-500 rounded-full mb-2"></a>
        <a href={partner.facebook} target="_blank" className="w-8 h-8 bg-green-500 rounded-full mb-2"></a>
        <a href={partner.twitter} target="_blank" className="w-8 h-8 bg-green-500 rounded-full mb-2"></a>
        <a href={partner.instagram} target="_blank" className="w-8 h-8 bg-green-500 rounded-full mb-2"></a>
      </div>
      {partner.imagePath && (
        <div
          className="flex-shrink-0 w-48 h-48 bg-blue-500 s-full"
          style={backgroundImageStyle}
        />
      )}
    </div>
  );
};

export default PartnersRightLayout;
