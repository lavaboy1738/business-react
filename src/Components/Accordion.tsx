import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {AccordionItem} from "./AccordionItem";
import {AccordionData} from "../data/AccordionData";
import { useInView } from "react-intersection-observer";
import {useAnimations} from "../Hooks/useAnimations";
import {motion, useAnimation} from "framer-motion";

const AccordionStyles = styled(motion.div)`
width: 90%;
    .accordion-title{
        font-family: Jakarta-display;
        font-weight: 600;
        font-size: 1.7rem;
        h2{
            line-height: 3.2rem;
        }
        .blue{
            color:#768cff;
        }
    }
    .accordion-content{
        padding: 1rem 0;
    }
`

const Accordion = () =>{
    const [openedID, setOpenedID] =useState(0);
    const [element, inView] = useInView({threshold: 0.3})
    const controls = useAnimation();
    const [slowStaggerChildrenAnimation, staggerChildrenAnimation, titleAnimation] = useAnimations();
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
        <AccordionStyles
        variants={slowStaggerChildrenAnimation}
        initial="hidden"
        ref={element}
        animate={controls}
        >
            <motion.div className="accordion-title"
            variants={slowStaggerChildrenAnimation}
            >
                <motion.h2
                variants={titleAnimation}
                >Any Questions?</motion.h2>
                <motion.h2
                variants={titleAnimation}
                className="blue">We Got Answers.</motion.h2>
            </motion.div>
            <motion.div 
            variants={slowStaggerChildrenAnimation}
            className="accordion-content">
                {AccordionData.map((item)=>{
                    return(
                        <AccordionItem key={item.itemID}
                            question={item.question}
                            answer={item.answer}
                            itemID={item.itemID}
                            openedID = {openedID}
                            onChange={setOpenedID}
                        />
                    )

                })}
            </motion.div>
        </AccordionStyles>
    )
}

export {Accordion};