import React from "react";
import styled from "styled-components";
import {Key} from "../Credentials";
import {motion} from "framer-motion";
import {Transition} from "../Transition";
import {Footer} from "../Components/Footer";

const ContactStyle = styled(motion.div)`
    padding: 2rem 5vw;
    color: #333;
    height: 90vh;
        .contact-header{
            display: flex;
            align-items: center;
            width: 100%;
            height: 40%;
            .header-content{
                .title{
                    font-family: Jakarta-display;
                    font-size: 2rem;
                    font-weight: 600;
                }
                .subtitle{
                    font-family: Jakarta-text;
                    font-size: 1.5rem;
                    font-weight: 200;
                }
            }
        }
        .contact-content{
            height: 60%;
            display: flex;
            .address{
                font-family: Jakarta-text;
                font-size: 1.5rem;
                font-weight: 200;
                width: 30%;
                display: flex;
                align-items: center;
            }
            .map{
                width: 70%;
                iFrame{
                    -webkit-filter: grayscale(80%);
                    filter: grayscale(80%);
                    width: 100%;
                    height: 100%;
                    border: none;
                }
            }
        }

`

const Contact = () =>{

    return(
        <ContactStyle variants={Transition} initial="hidden" animate="show" exit="exit">
            <div className="contact-header">
                <div className="header-content">
                <div className="title">Holler At Us</div>
                <div className="subtitle">Questions, Commments, Inqueries, or if you have an idea, anything.</div>
                </div>
            </div>
            <div className="contact-content">
                <div className="address">
                    <p>
                        1234 Sunset Blvd,
                        <br/>
                        Atlantic City, 
                        <br/>
                        WA, 29387
                        <br/>
                        (123) 456-7890
                        <br/>
                        info@DotCom.com
                    </p>
                </div>
                <div className="map">
                <iframe
                    title="map"
                    frameBorder="0"
                    src={`https://www.google.com/maps/embed/v1/place?key=${Key}
                        &q=Boston+Statehouse,Boston+MA&zoom=18`} allowFullScreen>
                    </iframe>
                </div>
            </div>
        </ContactStyle>
    )
}

export {Contact}