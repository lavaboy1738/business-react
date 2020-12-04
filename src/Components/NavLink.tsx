import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";


const NavLinkStyle = styled.li`
    font-family: Jakarta-text;
    font-weight: 200;
    padding: 0.2rem 0;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    &::before{
        content: "";
        position: absolute;
        width: 10px;
        height: 1px;
        background-color: #333;
        bottom: 0;
        transition: 0.3s all ease;
    }
    &:hover::before{
        width: 50%;
        transition: 0.3s all ease;
    }
    &.active::before{
        width: 100%;
    }
`

type Prop = {
    text: string,
    url: string,
    activePage: string,
    onChange: (name: string)=> void;
}

const NavLink = (props: Prop)=>{

    return(
        <NavLinkStyle onClick={()=>{props.onChange(props.url)}} className={props.activePage === props.url? "active" : ""}>
            <Link to={props.url}>{props.text}</Link>
        </NavLinkStyle>
    )
}

export {NavLink}