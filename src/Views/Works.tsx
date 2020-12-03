import React from "react";
import styled from "styled-components";
import {ArrangedProjects} from "../data/ProjectsData";
import {WorkContent} from "../Components/WorkContent";

const WorksStyles = styled.div`
    padding: 2rem 5vw;
    color: #333;
    .works-title{
        width: 100%;
        margin-bottom: 2rem;
        &-main{
            font-family: Jakarta-display;
            font-size: 2rem;
            font-weight: 600;
        }
        &-sub{
            font-family: Jakarta-text;
            font-size: 1.5rem;
            font-weight: 400;
            span{
                color: #fa5b28;
            }
        }
    }
`

const Works = () =>{

    return(
        <WorksStyles>
            <div className="works-title">
                <div className="works-title-main">Works</div>
                <div className="works-title-sub">Creativity, Quality, <span>Perfection.</span></div>
            </div>
            <WorkContent projectsArr={ArrangedProjects} />
        </WorksStyles>
    )
}

export {Works}