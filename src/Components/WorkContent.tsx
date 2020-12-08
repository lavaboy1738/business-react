import React from "react";
import styled from "styled-components";
import {Project} from "../data/ProjectsData";
import {WorkProjectContainer} from "./WorkProjectContainer";

const WorkContentStyle = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
`

type Prop = {projectsArr: Project[][]}

const WorkContent = (props: Prop) => {
    return(
        <WorkContentStyle>
            {
                props.projectsArr.map((arr, index)=>{
                    return (<WorkProjectContainer key={index} arr={arr} />)
                })
            }
        </WorkContentStyle>
    )
}

export {WorkContent}