import React from "react";
import styled from "styled-components";
import {Project} from "../data/ProjectsData";
import {WorksProject} from "./WorksProject";
import {Link} from "react-router-dom";
import {useAnimations} from "../Hooks/useAnimations";
import {motion} from "framer-motion";
import {useScroll} from "../Hooks/useScroll";

const WorkProjectContainerStyle = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.8vw;
    @media (max-width: 420px) {
        flex-wrap: wrap;
        margin-bottom: 0;
    }

    :nth-child(odd){
        a{
            width: 49%;
            @media (max-width: 420px) {
                width: 100%;
                margin: 1rem 0;
            }
        }
    }
    :nth-child(even){
        a{
            width: 32%;
            @media (max-width: 420px) {
                width: 100%;
                margin: 1rem 0;
            }
        }
    }
`

type Prop = {
    arr: Project[]
}

const WorkProjectContainer = (props: Prop)=>{
    const {element, controls} = useScroll(0.4);
    const {staggerChildrenAnimation} = useAnimations();
    return (
        <WorkProjectContainerStyle
        variants={staggerChildrenAnimation}
        initial="hidden"
        ref={element}
        animate={controls}
        >
            {props.arr.map((project)=>{
                return (<Link to="/works/sample-project" key={project.id}>
                    <WorksProject title={project.title} color={project.color} url={project.url}
                    subtitle={project.subtitle}
                    />
                </Link>)
            })}
        </WorkProjectContainerStyle>
    )
}

export {WorkProjectContainer}