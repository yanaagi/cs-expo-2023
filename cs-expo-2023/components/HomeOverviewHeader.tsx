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

                <div>
                <p className="text-[min(12vw,7rem)] mt-50 xl:mb-14 text-eerie-black flex flex-col items-center font-bold font-family-helvetica min-[320px]:mt-4">
                    {title}
                </p>
                </div>
                
                <div>
                <p className="text-[min(2vw,2rem)] text-eerie-black text-center mt-5 mb-14 flex flex-col items-center font-family-montserrat xl:leading-5 min-[320px]:leading-12 tracking-widest">
                    {desc}
                </p>
                </div>

                <div className="flex flex-col items-center">
                <div className="border-opacity-50 border border-eerie-black h-16 pt-2.5 w-56 mt-5 mb-56 flex flex-col items-center font-family-helvetica">
                    <a href={button} className="hover:shadow-[inset_13rem_0_0_0] hover:shadow-eerie-black duration-[400ms,700ms] transition-[color,box-shadow] mb-56 text-base bg-coral-pink flex py-2 px-9 justify-center items-center text-white">
                    <div className="absolute left-1/2 w-2 h-10 bg-white -translate-x-28"></div>
                    <div className="absolute right-1/2 w-2 h-10 bg-white translate-x-28"></div>
                        View event details
                    </a>
                </div>
            </div>
        </div>
        );
    };

    export default EventComponent;
