import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const DefaultButtonStyle = styled.button`
            font-family: Jakarta-text;
            font-weight: lighter;
            font-size: 1rem;
            border: 1px solid #768cff;
            padding: 0.5rem 1rem;
            transition: 0.3s all ease;
            border-radius: 5px;
            a{
                color: #333;
            }
            &:hover{
                background-color: #768cff;
                transition: 0.3s all ease;
                cursor: pointer;
                a{
                    color: rgb(250, 250, 250);
                }
            }
`

type Prop = {
    text: string,
    url: string
}

const DefaultButton = (props: Prop) => {
    return (
        <DefaultButtonStyle>
            <Link to={props.url}>{props.text}</Link>
        </DefaultButtonStyle>
    )
}

export {DefaultButton}