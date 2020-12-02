import React from "react";
import {Hero} from "../Components/Hero";
import {Services} from "../Components/Services";
import {Accordion} from "../Components/Accordion";
import styled from "styled-components";

const HomeStyles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`


const Home = () =>{
    return(
        <HomeStyles>
            <Hero/>
            <Services/>
            <Accordion/>
        </HomeStyles>
    )
}

export {Home}