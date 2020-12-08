import React, { useState } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {NavLink} from "./NavLink";
import {motion, useAnimation} from "framer-motion";
import {useAnimations} from "../Hooks/useAnimations";

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
    .desktop-menu{
        width: 30%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 420px) {
            display: none;
        }
    }
    i{
        font-size: 3rem;
    }
    .mobile-menu{
        position: absolute;
        top: 0;
        opacity: 0;
        left: -130%;
        width: 100%;
        height: 100%;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #222;
        transition: 0.7s all ease-in-out;
        @media (min-width: 420px) {
            display: none;
        }
        &.active{
            left: 0%;
            opacity: 1;
            transition: 0.7s all ease-in-out;
        }
        .close-container{
            position: absolute;
            top: 0;
            right: 0;
            height: 10vh;
            padding: 0 5vw;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            i{
                font-size: 3rem;
                color: rgb(252, 252, 252)
            }
        }
        &-container{
            height: 30%;
            width: 80%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            li{
                color: rgb(252, 252, 252);
                &::before{
                    background-color: rgb(252, 252, 252);
                }
            }
        }
    }
`

const Nav = () => {

    const [isDown, setIsDown] = useState(false);
    const {staggerChildrenAnimation} = useAnimations();
    const controls = useAnimation();
    const dropDown = ()=>{
        setIsDown(x => !x)
        if(isDown){
            controls.start("hidden");
        }else{
            controls.start("show");
        }
    }

    return(
        <NavStyles>
            <h1><Link to="/">DotCom</Link></h1>
            <ul className="desktop-menu">
                <NavLink text="About Us" url="/about" />
                <NavLink text="Works" url="/works" />
                <NavLink text="Contact Us" url="/contact" />
            </ul>
            <i className='bx bx-menu' onClick={dropDown}></i>
            <div className={isDown? "mobile-menu active": "mobile-menu"}>
                <div className="close-container">
                    <i className='bx bx-x' onClick={dropDown}></i>
                </div>
                <motion.ul 
                initial="hidden"
                animate={controls}
                variants={staggerChildrenAnimation}
                className="mobile-menu-container">
                    <NavLink text="About Us" url="/about" onChange={dropDown} />
                    <NavLink text="Works" url="/works" onChange={dropDown}/>
                    <NavLink text="Contact Us" url="/contact" onChange={dropDown}/>
                </motion.ul>
            </div>
        </NavStyles>
    )

}

export {Nav}