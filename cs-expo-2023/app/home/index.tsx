'use client';

import React from "react";
import { TypeAnimation } from 'react-type-animation';
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Router from "./router";

function Home() {
    return (
        <div className= "bg-white">
            <Navbar />
            <TypeAnimation
                cursor={false}
                className="cursor type type_animation"
                sequence={[
                    `PAVING THE NEW TECHNOSPACE\nTHROUGH PARADIGM SHIFTING\nINNOVATIONS`
                ]}
                speed={30}
                repeat={3}
            />
            <Router />
            <Footer />
        </div>
    );
}
export default Home;
