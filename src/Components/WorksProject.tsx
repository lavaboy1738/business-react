import React from "react";
import styled from "styled-components";
import {useAnimations} from "../Hooks/useAnimations";
import {motion} from "framer-motion";

const WorksProjectStyles = styled(motion.div)`
    width: 100%;
    position: relative;
    transition: 0.2s all ease;
    overflow: hidden;

    img{
        width: 100%;
        display: block;
        transition: 0.2s all ease;
    }
    &:hover .cover{
        opacity: 1;
        transition: 0.2s all ease;
    }
    &:hover img{
        transform: scale(1.5);
        transition: 0.2s all ease;
    }

    .cover{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 2vw;
        opacity: 0;

        .cover-title{
            color: #333;
            font-family: Jakarta-display;
            font-size: 1rem;
            font-weight: 400;
        }
        .cover-subtitle{
            color: #333;
            font-family: Jakarta-text;
            font-size: 1rem;
            font-weight: 200;
        }
    }
`

type Prop = {
    title: string,
    subtitle: string,
    url : string,
    color: string
}

const WorksProject = (props: Prop) => {
    const [revealAnimation] = useAnimations();
    return(
        <WorksProjectStyles
        variants={revealAnimation}
        >
            <img src={props.url} alt=""/>
            <div className="cover" style={{backgroundColor: props.color}}>
                <div className="cover-title">{props.title}</div>
                <div className="cover-subtitle">{props.subtitle}</div>
            </div>
        </WorksProjectStyles>
    )
}

export {WorksProject}