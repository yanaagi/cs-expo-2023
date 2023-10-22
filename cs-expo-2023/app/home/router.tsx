import React from "react";
const Router: React.FC = () => {
    return (
        <div className="pt-80">
            <ul>
                <br />
                <li className="text-gray-900 text-8xl mt-300 mb-15 flex flex-col items-center font-black font-family-helvetica">CS EXPO</li>
                <ul className="text-gray-900 text-base mt-5 mb-30 flex flex-col items-center font-family-montserrat">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
                    <li>tempor incididunt ut labore et dolore magna aliqua. Nisi purus in mollis</li>
                    <li>nunc sed id semper risus volutpat consequat mauris nunc congue nisi</li>
                    <li>vitae suscipit tellus</li>
                </ul>
                <li className="mt-5 mb-30 flex flex-col items-center font-family-montserrat">
                    <button type="button" className="bg-hover-black mb-20 text-base bg-coral-pink flex py-4 px-8 lex justify-center items-center text-white">
                        <a href="/events/cs-expo">View event details</a>
                    </button>
                </li>
                <li className="text-gray-900 text-8xl mt-80 mb-15 flex flex-col items-center font-black font-family-helvetica">DEV DAY</li>
                <ul className="text-gray-900 text-base mt-5 mb-30 flex flex-col items-center font-family-montserrat">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</li>
                    <li>tempor incididunt ut labore et dolore magna aliqua. Nisi purus in mollis</li>
                    <li>nunc sed id semper risus volutpat consequat mauris nunc congue nisi</li>
                    <li>vitae suscipit tellus</li>
                </ul>
                <li className="mt-5 mb-40 flex flex-col items-center font-family-montserrat">
                    <button type="button" className="bg-hover-black mb-80 text-base bg-coral-pink flex py-4 px-8 lex justify-center items-center text-white">
                        <a href="/events/dev-day">View event details</a>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Router;
