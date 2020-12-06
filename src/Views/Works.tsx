import React from "react";
import styled from "styled-components";
import {ArrangedProjects} from "../data/ProjectsData";
import {WorkContent} from "../Components/WorkContent";
import {motion} from "framer-motion";
import {Transition} from "../Transition";
import {Footer} from "../Components/Footer";

const WorksStyles = styled(motion.div)`
    padding: 2rem 5vw;
    color: #333;
    .works-title{
        width: 100%;
        margin-bottom: 2rem;
        &-main{
            font-family: Jakarta-display;
            font-size: 2rem;
            font-weight: 600;
        }
        &-sub{
            font-family: Jakarta-text;
            font-size: 1.5rem;
            font-weight: 400;
            span{
                color: #fa5b28;
            }
        }
    }
`

const Works = () =>{

    return(
        <>
        <WorksStyles variants={Transition} initial="hidden" animate="show" exit="exit">
            <div className="works-title">
                <div className="works-title-main">Works</div>
                <div className="works-title-sub">Creativity, Quality, <span>Perfection.</span></div>
            </div>
            <WorkContent projectsArr={ArrangedProjects} />
        </WorksStyles>
        <Footer/>
        </>
    )
}

export {Works}