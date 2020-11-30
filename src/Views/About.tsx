import React from "react";
import {Hero} from "../Components/Hero";
import {Services} from "../Components/Services";
import {Accordion} from "../Components/Accordion";

const About = () =>{
    return(
        <div>
            <Hero/>
            <Services/>
            <Accordion/>
        </div>
    )
}

export {About}