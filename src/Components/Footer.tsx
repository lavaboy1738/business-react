import React from "react";
import styled, { keyframes } from "styled-components";


const footerAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const FooterStyle = styled.div`
    width: 100%;
    padding: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: #333;
    animation: ${footerAnimation} 1s linear;
    .footer-left{
        width: 38%;
        @media (max-width: 420px) {
            width: 100%;
        }
        &-top{
            font-family: Jakarta-display;
            font-size: 1.5rem;
            font-weight: 600;
            padding: 1rem 0;
        }
        &-bottom{
            font-family: Jakarta-text;
            font-size: 1rem;
            font-weight: 200;
            border-top: 1px solid #333;
            padding: 1rem 0;
            @media (max-width: 800px) {
                font-size: 10px;
            }
            div{
                display: flex;
                justify-content: space-between;
                span{
                    width: 50%;
                    margin-bottom: 1rem;
                    &:hover{
                        color: #ccc;
                    }
                }
            }
        }
    }
    .footer-right{
        width: 60%;
        @media (max-width: 420px) {
            width: 100%;
        }
        &-top{
            font-family: Jakarta-display;
            font-size: 1.5rem;
            font-weight: 600;
            padding: 1rem 0;
        }
        &-bottom{
            display: flex;
            justify-content: space-between;
            font-family: Jakarta-text;
            font-size: 1rem;
            font-weight: 200;
            @media (max-width: 800px) {
                font-size: 10px;
            }
            .office{
                border-top: 1px solid #333;
                width: 31%;
                height: 10rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .city-address{
                    padding-top: 1rem;
                    .city{
                        padding-bottom: 1rem;
                    }
                }
            }
        }
    }
`

const Footer = () =>{
    const externalLink = "https://www.youtube.com/watch?v=oHg5SJYRHA0";

    return(
        <FooterStyle
        >
            <div className="footer-left">
                <div className="footer-left-top">Get in Touch</div>
                <div className="footer-left-bottom">
                    <div>
                        <span>New Business</span>
                         <span><a href={externalLink}>Tom Brady</a></span>
                    </div>
                    <div>
                        <span>Press Inquiries</span>
                        <span><a href={externalLink}>Marshawn Lynch</a></span>
                    </div>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-right-top">Offices</div>
                <div className="footer-right-bottom">
                    <div className="office">
                        <div className="city-address">
                            <div className="city">Boston</div>
                            <p className="address">
                                1234 State St,
                                <br/>
                                Suite 3300,
                                <br/>
                                Boston, MA, 02109
                            </p>
                        </div>
                        <div className="phone">(617) 617-6170</div>
                    </div>
                    <div className="office">
                        <div className="city-address">
                            <div className="city">Atlantic City</div>
                            <p>
                                1234 Sunset Blvd,
                                <br/>
                                Atlantic City, WA, 29387
                            </p>
                        </div>
                        <div className="phone">(123) 456-7890</div>
                    </div>
                    <div className="office">
                        <div className="city-address">
                            <div className="city">New Haven</div>
                            <p>
                                626 Whatever Ave,
                                <br/>
                                New Haven, CT, 02876
                            </p>
                        </div>
                        <div className="phone">(420) 123-4567</div>
                    </div>
                </div>
            </div>
        </FooterStyle>
    )
}

export {Footer}