import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useAnimations} from "../Hooks/useAnimations";

const ServiceCardStyle = styled(motion.div)`
width: 45%;
    .card-title{
        margin-bottom: 1rem;
        margin-top:  0.5rem;
        font-family: Jakarta-display;
        font-weight: 600;
        font-size: 1.2rem;
    }
    .card-text{
        font-family: Jakarta-text;
        font-weight: regular;
        font-size: 1rem;
    }

`

export type Prop = {
    iconURL: string,
    title: string,
    text: string,
}

export const ServiceCard = (props: Prop)=>{
    const [titleAnimation] = useAnimations();
    return(
        <ServiceCardStyle 
        variants={titleAnimation}
        className="services-cards-card">
                        <div className="card-icon">
                            <img src={props.iconURL} alt=""/>
                        </div>
                        <div className="card-title">{props.title}</div>
                        <p className="card-text">{props.text}</p>
        </ServiceCardStyle>
    )
}

