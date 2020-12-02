import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const NavStyles = styled.div`
    height: 10vh;
    padding: 0 5vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        font-family: Jakarta-display;
        font-weight: 600;
        font-size: 1.5rem;
    }
    ul{
        width: 30%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li{
            font-family: Jakarta-text;
            font-weight: 200;
        }
    }
`

const Nav = () => {
    return(
        <NavStyles>
            <h1><Link to="/">DotCom</Link></h1>
            <ul>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/works">Our Works</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </NavStyles>
    )

}

export {Nav}