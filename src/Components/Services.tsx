import React, { useEffect, useRef } from "react";
import Skate from "../assets/images/Skate.png";
import {motion, useAnimation} from "framer-motion";
import {Wave} from "./Wave";
import {ServiceCard} from "./ServiceCard";
import {ServiceCardsData} from "../data/ServiceCardsData"
import styled from "styled-components";
import {useAnimations} from "../Hooks/useAnimations";
import { useInView } from "react-intersection-observer";

const ServicesStyles = styled(motion.div)`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 90vh;
    color: #333;
    position: relative;
    .services-left{
        width: 45%;
        img{
            width: 100%;
        }
    }
    .services-right{
        width: 50%;
        height: 75vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .services-description{
            font-family: Jakarta-display;
            font-weight: 600;
            font-size: 1.5rem;
            padding: 1rem 0;
        }
        .services-cards{
            flex-grow: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }
    }
`

const Services = () =>{
    const [element, inView] = useInView({threshold: 0.3})
    const controls = useAnimation();
    const [slowStaggerChildrenAnimation, pictureAnimation, titleAnimation] = useAnimations();
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
        <ServicesStyles 
            variants={slowStaggerChildrenAnimation}
            initial="hidden"
            ref={element}
            animate={controls}
        >
            <motion.div  
            variants={pictureAnimation}
            className="services-left">
                <img src={Skate} alt=""/>
            </motion.div>
            <motion.div 
            variants={slowStaggerChildrenAnimation}
            className="services-right">
                <motion.div
                variants={titleAnimation}
                className="services-description">
                    <h2>Quality Services, Timely Turnaround</h2>
                </motion.div>
                <div className="services-cards">
                    {
                        ServiceCardsData.map((card)=>{
                            return(
                                <ServiceCard
                                key={card.id}
                                iconURL={card.iconURL}
                                text={card.text}
                                title={card.title}
                                />
                            )
                        })
                    }
                </div>
            </motion.div>
            <Wave/>
        </ServicesStyles>
    )
}

export {Services};