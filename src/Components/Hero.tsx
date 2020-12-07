import React from "react";
import HeroImage from "../assets/images/Hero.png";
import styled from "styled-components";
import {DefaultButton} from "./DefaultButton";
import {motion} from "framer-motion";
import {useAnimations} from "../Hooks/useAnimations";

const HeroStyles = styled(motion.div)`
    min-height: 90vh;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333;
    .hero-description{
        width: 50%;
        .title{
            font-family: Jakarta-display;
            font-weight: bold;
            font-size: 1.6rem;
            margin-bottom: 1.2rem;
            .hide{
                overflow: hidden;
                span{
                    color: #768cff;
                }
            }
        }
        .subtitle{
            font-family: Jakarta-text;
            font-weight: regular;
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }
        button{
            font-family: Jakarta-text;
            font-weight: lighter;
            font-size: 1rem;
            border: 1px solid #768cff;
            padding: 0.5rem 1rem;
            transition: 0.3s all ease;
            border-radius: 5px;
            a{
                color: #333;
            }
            &:hover{
                background-color: #768cff;
                transition: 0.3s all ease;
                cursor: pointer;
                a{
                    color: rgb(250, 250, 250);
                }
            }
        }
    }
    .hero-photo{
        width: 45%;
        overflow: hidden;
        img{
            width: 100%;
        }
    }
`

const Hero = () =>{
    const [staggerChildrenAnimation, pictureAnimation, titleAnimation, lineContainerAnimation] = useAnimations();

    return(
        <HeroStyles variants={staggerChildrenAnimation} initial="hidden" animate="show">
            <motion.div 
            variants={staggerChildrenAnimation}
            initial="hidden"
            animate="show"
            className="hero-description">
                <motion.div className="title">
                    <motion.div 
                    variants={lineContainerAnimation}
                    className="hide">
                        <motion.h2 
                        variants={titleAnimation}
                         >We Solve Business Problems</motion.h2>
                    </motion.div>
                    <motion.div 
                    variants={lineContainerAnimation}
                    className="hide">
                        <motion.h2
                        variants={titleAnimation}
                        >with <span>Creative and Innovative</span></motion.h2>
                    </motion.div>
                    <motion.div 
                    variants={lineContainerAnimation}
                    className="hide">
                        <motion.h2
                        variants={titleAnimation}
                        >Digital Solutions</motion.h2>
                    </motion.div>
                </motion.div>
                <motion.div 
                variants={titleAnimation}
                className="subtitle">
                    <p>I don't know what to put here. I write good copies but the purpose of this project is to build a business website that looks legit.</p>
                </motion.div>
                <motion.div
                    variants={titleAnimation}
                >
                    <DefaultButton text="Learn More" url="/about" />
                </motion.div>
            </motion.div>
            <motion.div 
            variants={pictureAnimation}
            initial= "hidden"
            animate="show"
            className="hero-photo">
                <img src={HeroImage} alt=""/>
            </motion.div>
        </HeroStyles>
    )
}

export {Hero};