import React from 'react';

interface HomeOverviewHeaderProps {
    title: string;
    description: string;
    button: string;
}

const EventComponent: React.FC<HomeOverviewHeaderProps> = ({ title, description, button }) => {
    const desc = description.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

    return (
        <div className="align-center mt-64">
            <br />
            <p className="mt-50 mb-14 text-eerie-black text-8xl flex flex-col items-center font-bold font-family-helvetica">
                {title}
            </p>
            <p className="leading-3 tracking-widest text-eerie-black text-base text-center mt-5 mb-14 flex flex-col items-center font-family-montserrat">
                {desc}
            </p>
            <p className="mt-5 mb-56 flex flex-col items-center font-family-helvetica">
                <a href={button} className="hover:shadow-[inset_13rem_0_0_0] hover:shadow-eerie-black duration-[400ms,700ms] transition-[color,box-shadow] mb-56 text-base bg-coral-pink flex py-2 px-9 lex justify-center items-center text-white">
                    View event details
                </a>
            </p>
        </div>
    );
};

export default EventComponent;
