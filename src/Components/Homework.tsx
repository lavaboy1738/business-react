import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {WorkContent} from "./WorkContent";
import {DefaultButton} from "./DefaultButton";
import {ArrangedProjects} from "../data/ProjectsData";
import {useAnimations} from "../Hooks/useAnimations";
import { useInView } from "react-intersection-observer";

const HomeworkStyle = styled(motion.div)`
    padding: 2rem 5vw;
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
    const [element, inView] = useInView({threshold: 0.2})
    const controls = useAnimation();
    const [staggerChildrenAnimation] = useAnimations();
    let count = useRef(0);
    useEffect(()=>{
        if(count.current<3){
            if(inView){
                controls.start("show")
            }else{
                controls.start("hidden")
            }
        }
        count.current+=1;
    })

    return(
        <HomeworkStyle className="wrapper"
        variants={staggerChildrenAnimation}
        initial="hidden"
        ref={element}
        animate={controls}
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