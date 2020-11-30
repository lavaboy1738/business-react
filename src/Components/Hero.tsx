import React from "react";
import HeroImage from "../images/Hero.png";

const Hero = () =>{
    return(
        <div>
            <div className="hero-description">
                <div className="title">
                    <div className="hide">
                        <h2>We Solve Business Problems</h2>
                    </div>
                    <div className="hide">
                        <h2>With <span>Creative and Innovative</span></h2>
                    </div>
                    <div className="hide">
                        <h2>Digital Solutions</h2>
                    </div>
                </div>
                <div className="subtitle">
                    <p>I don't know what to put here. I can write good copies but the purpose of this project is to build a business website that looks legit.</p>
                </div>
            </div>
            <div className="hero-photo">
                <img src={HeroImage} alt=""/>
            </div>

        </div>
    )
}

export {Hero};