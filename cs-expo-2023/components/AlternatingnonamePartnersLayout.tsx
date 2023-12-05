import Image from 'next/image';
import React, { useEffect, useState } from 'react';



interface PartnersLayoutProps {
  partner: {
    name: string;
    facebook: string;
    imagePath?: string; // Add imagePath as an optional property
  };
}

const PartnersLeftLayout: React.FC<PartnersLayoutProps> = ({ partner }) => {
  const backgroundImageStyle = partner.imagePath
    ? { backgroundImage: `url(${partner.imagePath})`, backgroundSize: 'cover' }
    : undefined;

return (
  <div className="flex items-center p-12 flex-col md:flex-row">
    <div className="flex items-center">
      {partner.imagePath && (
        <div
          className="flex-shrink-0 w-48 h-48 bg-blue-500"
          style={backgroundImageStyle}
        />
      )}
      <div className="flex flex-col items-start ml-2 md:ml-4">
        <a href={partner.facebook} target="_blank" className="w-9 h-9 bg-coral-pink rounded-full mb-2 grid place-items-center"> 
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
        </a>
        
      </div>
    </div>
    <div className="flex flex-col ml-4">
      <div className="font-bold text-2xl">{partner.name}</div>
    </div>
  </div>
);
      };
const PartnersRightLayout: React.FC<PartnersLayoutProps> = ({ partner }) => {
  const backgroundImageStyle = partner.imagePath
    ? { backgroundImage: `url(${partner.imagePath})`, backgroundSize: 'cover' }
    : undefined;

    return (
        <div className="justify-end flex items-center p-12 flex-col md:flex-row">
          <div className="flex flex-col mr-4">
            <div className="font-bold text-2xl">{partner.name}</div>
          </div>
          <div className="flex items-center">
            <a href={partner.facebook} target="_blank" className="w-9 h-9 bg-coral-pink rounded-full mb-2 grid place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </a>
          </div>
          {partner.imagePath && (
            <div
              className="flex-shrink-0 w-48 h-48 mr-4"
              style={backgroundImageStyle}
            />
          )}
        </div>
      );
    
    
    
};

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};

interface AlternatingPartnersLayoutProps {
  partners: Array<any>;
}

const AlternatingnonamePartnersLayout: React.FC<AlternatingPartnersLayoutProps> = ({ partners }) => {
  const [width] = useWindowSize();
  const isMobile = width < 768;

  const alternatingPartners = partners.map((partner, index) => {
    if (isMobile) {
      return <PartnersRightLayout key={index} partner={partner} />;
    } else {
      if ((index + 1) % 2 === 1) {
        return <PartnersLeftLayout key={index} partner={partner} />;
      } else {
        return <PartnersRightLayout key={index} partner={partner} />;
      }
    }
  });

  return <>{alternatingPartners}</>;
};

export default AlternatingnonamePartnersLayout;