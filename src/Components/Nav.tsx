import React from "react";
import styled from "styled-components";

const NavStyles = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
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
            <h1>DotCom</h1>
            <ul>
                <li>
                    <a href="">About Us</a>
                </li>
                <li>
                    <a href="">Our Works</a>
                </li>
                <li>
                    <a href="">Contact Us</a>
                </li>
            </ul>
        </NavStyles>
    )

}

export {Nav}