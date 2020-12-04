import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {NavLink} from "./NavLink";

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
    }
`

const Nav = () => {
    const [activePage, setActivePage] = useState("");

    return(
        <NavStyles>
            <h1><Link to="/" onClick={()=>{setActivePage("/home")}}>DotCom</Link></h1>
            <ul>
                <NavLink text="About Us" url="/about" />
                <NavLink text="Works" url="/works" />
                <NavLink text="Contact Us" url="/contact" />
            </ul>
        </NavStyles>
    )

}

export {Nav}