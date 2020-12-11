import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {WorkContent} from "./WorkContent";
import {DefaultButton} from "./DefaultButton";
import {ArrangedProjects} from "../data/ProjectsData";

const HomeworkStyle = styled.div`
    padding: 2rem 0;
    .title{
        font-family: Jakarta-display;
        font-size: 2rem;
        font-weight: 600;
    }
    .subtitle{
        font-family: Jakarta-text;
        font-size: 1.5rem;
        font-weight: 200;
        margin-bottom: 1rem;
    }
    .button-wrapper{
        padding: 2rem;
        text-align:center;
    }
`

const Homework = ()=>{
    return(
        <HomeworkStyle className="wrapper"
        >
            <motion.div className="title">Works</motion.div>
            <motion.div className="subtitle">Look around, you'll be surprised.</motion.div>
            <WorkContent projectsArr={ArrangedProjects.slice(0,3)}/>
            <motion.div className="button-wrapper">
                <DefaultButton text="More Works" url="/works" />
            </motion.div>
        </HomeworkStyle>
    )
}

export {Homework}