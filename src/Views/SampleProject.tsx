import React from "react";
import styled from "styled-components";
import SampleHeader from "../assets/images/sample-head.jpg";
import SampleSide from "../assets/images/sample-side.jpg";
import Sample1 from "../assets/images/sample-1.jpg";
import Sample2 from "../assets/images/sample-2.jpg";
import Sample3 from "../assets/images/sample-3.jpg";
import {Footer} from "../Components/Footer";
import {motion} from "framer-motion";
import {useTransitions} from "../Hooks/useTransitions";
import { useScroll } from "../Hooks/useScroll";
import { useAnimations } from "../Hooks/useAnimations";

const SampleProjectStyled = styled(motion.div)`
    padding: 2rem 5vw;
    color: #333;
    section{
        margin-bottom: 3rem;
    }
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
    .sample-image{
        img{
            display: block;
            width: 100%;
        }
    }

    .description-section{
        margin-bottom: 3rem;
        .description-title{
            font-family: Jakarta-display;
            font-size: 1.2rem;
            font-weight: 400;
            margin-bottom: 0.5rem;
        }
        .description-text{
            font-family: Jakarta-text;
            font-size: 1rem;
            font-weight: 200;
        }
    }
    .description-side{
            display: flex;
            margin-bottom: 5rem;
            flex-wrap: wrap;
            :nth-child(odd){
                flex-direction: row;
            }
            :nth-child(even){
                flex-direction: row-reverse;
            }
            justify-content: space-between;
            @media (max-width: 1000px) {
                display: block;
                margin: 0;
            }
            &-text{
                width: 45%;
                @media (max-width: 1000px) {
                    width: 100%;
                    margin: 0;
                }
                display: flex;
                justify-content: center;
                align-items: center;
                p{
                    display: block;
                    font-size: 1rem;
                    width: 65%;
                    @media (max-width: 1000px) {
                        width: 100%;
                    }
                }
            }
            &-picture{
                width: 45%;
                @media (max-width: 1000px) {
                    width: 100%;
                }
                .spacer{
                    height: 25vh;
                    @media (max-width: 1000px) {
                        display: none;
                    }
                }
                img{
                    display: block;
                    width: 100%;
                    @media (max-width: 1000px) {
                        margin: 2rem 0;
                    }
                }
            }
        }


`

const SampleProject = ()=>{
    const {Transition} = useTransitions();
    const firstScroll = useScroll(0.2);
    const secondScroll = useScroll(0.2);
    const thirdScroll = useScroll(0.2);
    const fourthScroll = useScroll(0.2);
    const {titleAnimation, revealAnimation, staggerChildrenAnimation} = useAnimations();
    return (
        <SampleProjectStyled variants={Transition} initial="hidden" animate="show" exit="exit">
            <section 
            className="project-header">
                <div className="title">Sample Project</div>
                <div className="subtitle">This is just a template of a sample project. Use it as a reference.</div>
                <div className="sample-image">
                    <img src={SampleHeader} alt=""/>
                </div>
            </section>
            <section 
            className="project-description">
                <motion.div
                variants={staggerChildrenAnimation}
                initial="hidden"
                ref={firstScroll.element}
                animate={firstScroll.controls}
                className="description-section">
                    <motion.h2 variants={titleAnimation} className="description-title">Brand Story</motion.h2>
                    <motion.p variants={titleAnimation} className="description-text">
                        All of the pictures used on this sample website are sourced from unsplash.com. They are royalty-free and free to use. This paragraph is an attempt to credit all the content creators that created these images.
                        Unsplash.com is a great place to find high quality images to use on any projects that are not monetized. I think there are also a few other websites that provide the same service, however, unsplash is my default option
                        when it comes to this sort of stuff. 
                    </motion.p>
                </motion.div>

                <motion.div 
                variants={staggerChildrenAnimation}
                initial="hidden"
                ref={secondScroll.element}
                animate={secondScroll.controls}
                className="description-section">
                    <motion.h2 variants={titleAnimation} className="description-title">Distribution</motion.h2>
                    <motion.p variants={titleAnimation} className="description-text">Facebook Pixel, Google Ads, Social, Print, Outdoor</motion.p>
                </motion.div>

                <motion.div 
                variants={staggerChildrenAnimation}
                initial="hidden"
                ref={thirdScroll.element}
                animate={thirdScroll.controls}
                className="description-section description-side">
                    <motion.div variants={revealAnimation}  className="description-side-picture">
                        <img src={SampleSide} alt=""/>
                    </motion.div>
                    <motion.div variants={revealAnimation}  className="description-side-text description-text">
                        <p>This is a cool picture of a girl in front of a neon sign. I'm seriously running out of words of what to put here.
                            Recently I acquired a new keyboard because the old one that I've been using for a while often produces input errors, which can 
                            be very inconvenient at times.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div 
                variants={staggerChildrenAnimation}
                initial="hidden"
                ref={fourthScroll.element}
                animate={fourthScroll.controls}
                className="description-section description-side">
                    <motion.div variants={revealAnimation}  className="description-side-picture">
                        <img src={Sample2} alt=""/>
                        <div className="spacer"></div>
                        <img src={Sample3} alt=""/>
                    </motion.div>
                    <motion.div variants={revealAnimation}  className="description-side-picture">
                        <div className="spacer"></div>
                        <img src={Sample1} alt=""/>
                    </motion.div>
                </motion.div>
            </section>
            <Footer/>
        </SampleProjectStyled>
    )
}

export {SampleProject}