import React from "react";
import styled from "styled-components";
import {Leader} from "../data/LeadershipData";

const LeadershipCardStyles = styled.div`

`

const LeadershipCard = (props: Leader) => {
    return (
        <LeadershipCardStyles>
            <img src={props.url} alt=""/>
            <div className="name">{props.name}</div>
            <div className="title">{props.title}</div>
            <div className="text">{props.text}</div>
        </LeadershipCardStyles>
    )
}

export {LeadershipCard}