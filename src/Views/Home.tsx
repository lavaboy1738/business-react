import React from "react";
import styled from "styled-components";
import {Hero} from "../Components/Hero";
import {Services} from "../Components/Services";
import {Accordion} from "../Components/Accordion";
import {motion} from "framer-motion";
import {useTransitions} from "../Hooks/useTransitions";
import {Homework} from "../Components/Homework";
import {Footer} from "../Components/Footer";


const HomeStyles = styled(motion.div)`
    color: #333;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5vw;
`


const Home = () =>{
    const {HomeTransition} = useTransitions();
    return(
        <HomeStyles variants={HomeTransition} initial="hidden" animate="show" exit="exit">
            <Hero/>
            <Services/>
            <Homework/>
            <Accordion/>
            <Footer/>
        </HomeStyles>
    )
}

export {Home}