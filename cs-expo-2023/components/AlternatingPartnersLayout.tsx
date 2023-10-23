import React from 'react';
import PartnersLeftLayout from './PartnersLeftLayout';
import PartnersRightLayout from './PartnersRightLayout';

interface AlternatingPartnersLayoutProps {
  partners: Array<any>; // Adjust the type if needed
}

const AlternatingPartnersLayout: React.FC<AlternatingPartnersLayoutProps> = ({ partners }) => {
  const alternatingPartners = [];
  let i = 0;

  while (i < partners.length) {
    alternatingPartners.push(
      <PartnersLeftLayout key={i} partner={partners[i]} />
    );

    i++;

    if (i < partners.length) {
      alternatingPartners.push(
        <PartnersRightLayout key={i} partner={partners[i]} />
      );
    }

    i++;
  }

  return <>{alternatingPartners}</>;
};

export default AlternatingPartnersLayout;
