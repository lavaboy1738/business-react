import React from "react";
import styled from "styled-components";
import {Leader} from "../data/LeadershipData";

const LeadershipCardStyles = styled.div`

    img{
        width: 100%;
    }

    .name{
        font-family: Jakarta-display;
        font-size: 1.5rem;
        font-weight: 600;
        margin-top: 0.5rem;
    }
    .job-title{
        font-family: Jakarta-text;
        font-size: 1rem;
        font-weight: 400;
        font-style: italic;
        margin-bottom: 0.5rem;
    }
    .text{
        font-family: Jakarta-text;
        font-size: 1rem;
        font-weight: 200;
    }

`

const LeadershipCard = (props: Leader) => {
    return (
        <LeadershipCardStyles>
            <img src={props.url} alt=""/>
            <div className="name">{props.name}</div>
            <div className="job-title">{props.title}</div>
            <div className="text">
                <p>{props.text}</p>
            </div>
        </LeadershipCardStyles>
    )
}

export {LeadershipCard}