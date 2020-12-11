import React from "react";
import styled from "styled-components";
import AboutHeader from "../assets/images/about-header.jpg";
import {Footer} from "../Components/Footer";
import {LeadershipCard} from "../Components/LeadershipCard";
import {LeadershipData} from "../data/LeadershipData";
import {motion} from "framer-motion";
import {useTransitions} from "../Hooks/useTransitions";
import {useAnimations} from "../Hooks/useAnimations"
import {useScroll} from "../Hooks/useScroll";


const AboutStyle = styled(motion.div)`
    padding: 2rem 5vw;
    color: #333;

    section{
        margin-bottom: 4rem;
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
    
    .header{
        img{
            display: block;
            width: 100%;
        }
    }

    .main{
        &-text{
            font-family: Jakarta-text;
            font-size: 1rem;
            font-weight: 200;
            p{
                margin: 1rem 0;
            }
        }
    }
    .leadership{
        margin-bottom: -3rem;
        &-content{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding-top: 2rem;
            .leader{
                width: 30%;
                margin-bottom: 3rem;
                @media (max-width: 420px) {
                    width: 100%;
                }
            }
        }
    }

`

const About = ()=>{
    const {Transition} = useTransitions();
    const firstScroll= useScroll(0.2);
    const secondScroll = useScroll(0);
    const {staggerChildrenAnimation, revealAnimation, titleAnimation} = useAnimations();
    return (
        <AboutStyle variants={Transition}  initial="hidden" animate="show" exit="exit">
            <section className="header">
                <div className="title">About Us</div>
                <div className="subtitle">We get it done, by any means necessary.</div>
                <img src={AboutHeader} alt=""/>
            </section>
            <motion.section 
            variants={staggerChildrenAnimation}
            initial="hidden"
            ref={firstScroll.element}
            animate={firstScroll.controls}
            className="main">
                <motion.div 
                variants={titleAnimation}
                className="title"> <span>Idea</span> Matters</motion.div>
                <motion.div 
                variants={titleAnimation}
                className="subtitle">Everything begins with an "ah-ha" moment</motion.div>
                <motion.div 
                variants={revealAnimation}
                className="main-text">
                    <p>Putting some random Drake lyrics here to fill.</p>
                    <p>Everybody has an addiction, mine happens to be success. I was born to make mistakes, not to fake perfection.
                    When writing the story of your life, don’t let anyone else hold the pen.
                    Patience is key for getting over a breakup. That, and trailing off your interaction after the breakup.
                    Haters will broadcast your failures, but whisper your success.
                    Never let success get to your head and never let failure get to your heart.
                    Strength isn’t always shown in what you can hold on to, sometimes it’s shown in what you can let go of.
                    Life can always change, you have to adjust.
                    </p>
                    <p>I'm a reflection of all your insecurities.</p>
                </motion.div>
            </motion.section>
            <motion.section 
            variants={staggerChildrenAnimation}
            initial="hidden"
            ref={secondScroll.element}
            animate={secondScroll.controls}
            className="leadership">
                <motion.div variants={titleAnimation} className="title">Leadership</motion.div>
                <motion.div variants={titleAnimation} className="subtitle">They don't bite. Relax, kid.</motion.div>
                <div 
                className="leadership-content">
                    {LeadershipData.map((card)=>{
                        return(
                            <div className="leader" key={card.id}>
                                <LeadershipCard
                                id={card.id}
                                name={card.name}
                                title={card.title}
                                text={card.text}
                                url={card.url}
                                />
                            </div>
                        )
                    })}
                </div>
            </motion.section>
            <Footer/>
        </AboutStyle>
    )
}

export {About}