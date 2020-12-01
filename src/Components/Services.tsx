import React from "react";
import ClockIcon from "../assets/images/clock.svg";
import MoneyIcon from "../assets/images/money.svg";
import TeamworkIcon from "../assets/images/teamwork.svg";
import DiagramIcon from "../assets/images/diaphragm.svg";
import Skate from "../assets/images/Skate.png";
import styled from "styled-components";

const ServicesStyles = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 90vh;
    color: #333;
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
            &-card{
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
            }
        }
    }
`

const Services = () =>{
    return(
        <ServicesStyles>
            <div className="services-left">
                <img src={Skate} alt=""/>
            </div>
            <div className="services-right">
                <div className="services-description">
                    <h2>Quality Services, Timely Turnaround</h2>
                </div>
                <div className="services-cards">
                    <div className="services-cards-card">
                        <div className="card-icon">
                            <img src={ClockIcon} alt=""/>
                        </div>
                        <div className="card-title">Quick</div>
                        <div className="card-text">Dedicated team to respond to your needs. We respond to your calls 24/7. Real human customer service team to answer all your questions.</div>
                    </div>
                    <div className="services-cards-card">
                        <div className="card-icon">
                            <img src={MoneyIcon} alt=""/>
                        </div>
                        <div className="card-title">Monetization</div>
                        <div className="card-text">Solve your business problems with digital solutions tailor-made to your case. Flexible strategy that can be adjusted to optimize conversion.</div>
                    </div>
                    <div className="services-cards-card">
                        <div className="card-icon">
                            <img src={DiagramIcon} alt=""/>
                        </div>
                        <div className="card-title">Flexibility</div>
                        <div className="card-text">This icon looks like the Google Chrome icon. I don't know what to put here. If you're reading this please don't mind the random copy.</div>
                    </div>
                    <div className="services-cards-card">
                        <div className="card-icon">
                            <img src={TeamworkIcon} alt=""/>
                        </div>
                        <div className="card-title">Teamwork</div>
                        <div className="card-text">Team work makes the dream work. What does it mean to be a team player for you? Does it just mean to blindly follow the herd?</div>
                    </div>
                </div>
            </div>
        </ServicesStyles>
    )
}

export {Services};