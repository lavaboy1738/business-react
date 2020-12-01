import React from "react";
import styled from "styled-components";

const WorksProjectStyles = styled.div`

`

type Prop = {
    title: string,
    subtitle: string,
    url : string,
    color: string
}

const WorksProject = (props: Prop) => {
    return(
        <WorksProjectStyles>
            <img src={props.url} alt=""/>
            <div className="cover" style={{backgroundColor: props.color}}>
                <div className="title">{props.title}</div>
                <div className="subtitle">{props.subtitle}</div>
            </div>
        </WorksProjectStyles>
    )
}

export {WorksProject}