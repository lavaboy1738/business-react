import React from "react";
import HeroImage from "../assets/images/Hero.png";
import styled from "styled-components";

const HeroStyles = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 5rem 5rem;
    color: #333;
    .hero-description{
        width: 45%;
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
            &:hover{
                background-color: #768cff;
                color: rgb(250, 250, 250);
                transition: 0.3s all ease;
                cursor: pointer;
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
    return(
        <HeroStyles>
            <div className="hero-description">
                <div className="title">
                    <div className="hide">
                        <h2>We Solve Business Problems</h2>
                    </div>
                    <div className="hide">
                        <h2>with <span>Creative and Innovative</span></h2>
                    </div>
                    <div className="hide">
                        <h2>Digital Solutions</h2>
                    </div>
                </div>
                <div className="subtitle">
                    <p>I don't know what to put here. I can write good copies but the purpose of this project is to build a business website that looks legit.</p>
                </div>
                <button>Contact Us</button>
            </div>
            <div className="hero-photo">
                <img src={HeroImage} alt=""/>
            </div>

        </HeroStyles>
    )
}

export {Hero};