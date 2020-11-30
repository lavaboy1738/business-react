import React from "react";
import ClockIcon from "../assets/images/clock.svg";
import MoneyIcon from "../assets/images/money.svg";
import TeamworkIcon from "../assets/images/teamwork.svg";
import DiagramIcon from "../assets/images/diaphragm.svg";
import Skate from "../assets/images/Skate.png";
import styled from "styled-components";

const ServicesStyles = styled.div`


`

const Services = () =>{
    return(
        <div>
            <div className="services-left">
                <div className="services-image">
                    <img src={Skate} alt=""/>
                </div>
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
                        <div className="card-text">Dedicated team to respond to your needs</div>
                    </div>
                    <div className="services-cards-card">
                        <div className="card-icon">
                            <img src={MoneyIcon} alt=""/>
                        </div>
                        <div className="card-title">Monetization</div>
                        <div className="card-text">Solve your business problems with tailored solutions</div>
                    </div>
                    <div className="services-cards-card">
                        <div className="card-icon">
                            <img src={DiagramIcon} alt=""/>
                        </div>
                        <div className="card-title">Flexibility</div>
                        <div className="card-text">This icon looks like the Google Chrome icon</div>
                    </div>
                    <div className="services-cards-card">
                        <div className="card-icon">
                            <img src={TeamworkIcon} alt=""/>
                        </div>
                        <div className="card-title">Teamwork</div>
                        <div className="card-text">Team work makes the dream work boys and girls</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Services};