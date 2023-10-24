import React from 'react';

interface PartnerIconProps {
  partner: {
    imagePath?:string;
  }
}

const PartnerIcon: React.FC<PartnerIconProps> = ({ partner }) => {
  const backgroundImageStyle = partner.imagePath
    ? { backgroundImage: `url(${partner.imagePath})`, backgroundSize: 'cover' }
    : undefined;
  return (
    <div>
      {partner.imagePath && (
        <div
          className="flex-shrink-0 w-48 h-48 bg-blue-500 rounded-full ml-3"
          style={backgroundImageStyle}
        />
      )}
    </div>
  );
}

interface PartnersIconLayoutProps {
  partners: Array<any>;
}
const PartnerIconsLayout: React.FC<PartnersIconLayoutProps> = ({ partners }) => {
  const partnerIcons: React.JSX.Element[] = [];

  partners.forEach((partner,index) => {
    partnerIcons.push(<PartnerIcon key={index} partner={partner}/>);
  });
  return <>{partnerIcons}</>;
} 

export default PartnerIconsLayout;