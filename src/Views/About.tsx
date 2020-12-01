import React from "react";
import {Hero} from "../Components/Hero";
import {Services} from "../Components/Services";
import {Accordion} from "../Components/Accordion";
import styled from "styled-components";

const AboutStyles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(250,250,250, 1);
`


const About = () =>{
    return(
        <AboutStyles>
            <Hero/>
            <Services/>
            <Accordion/>
        </AboutStyles>
    )
}

export {About}