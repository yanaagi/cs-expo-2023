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
                <p className="text-[min(12vw,7rem)] min-[320px]:py-2 xl:mb-14 text-eerie-black flex flex-col items-center custom-font">
                    {title}
                </p>
                </div>
                
                
                <div>
                <p className="text-[min(1.5vw,8rem)] text-eerie-black text-center mt-3 xl:mb-14 min-[320px]:mb-8 flex flex-col items-center font-family-montserrat xl:leading-4 min-[320px]:leading-16 tracking-tight">
                    {desc}
                </p>
                </div>

                <div className="min-[320px]:mb-2 flex flex-col items-center">
                <div className="border-opacity-50 border border-eerie-black h-16 pt-2.5 w-56 xl:mt-5 flex flex-col items-center font-family-helvetica">
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
