import React, {useEffect, useRef} from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import {Hero} from "../Components/Hero";
import {Services} from "../Components/Services";
import {Accordion} from "../Components/Accordion";
import {WorkContent} from "../Components/WorkContent";
import {ArrangedProjects} from "../data/ProjectsData";
import {DefaultButton} from "../Components/DefaultButton";
import {motion, useAnimation} from "framer-motion";
import {HomeTransition} from "../Transition";
import {Footer} from "../Components/Footer";
import {useAnimations} from "../Hooks/useAnimations";
import {Homework} from "../Components/Homework";


const HomeStyles = styled(motion.div)`
    color: #333;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`


const Home = () =>{
    return(
        <>
        <HomeStyles variants={HomeTransition} initial="hidden" animate="show" exit="exit">
            <Hero/>
            <Services/>
            <Homework/>
            <Accordion/>
        </HomeStyles>
        <Footer/>
        </>
    )
}

export {Home}