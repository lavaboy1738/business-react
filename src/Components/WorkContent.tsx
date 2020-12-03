import React from "react";
import styled from "styled-components";
import {Project} from "../data/ProjectsData";
import {WorksProject} from "./WorksProject";
import {Link} from "react-router-dom";

const WorkContentStyle = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .projects-container{
            display: flex;
            justify-content: space-between;
            margin-bottom: 1.8vw;
            :nth-child(odd){
                a{
                    width: 49%;
                }
            }
            :nth-child(even){
                a{
                    width: 32%;
                }
            }
        }

`

type Prop = {projectsArr: Project[][]}

const WorkContent = (props: Prop) => {
    return(
        <WorkContentStyle>
            {
                props.projectsArr.map((arr, index)=>{
                    return (<div className = "projects-container" key={index}>
                        {arr.map((project)=>{
                            return (<Link to="/works/sample-project" key={project.id}>
                                <WorksProject title={project.title} color={project.color} url={project.url}
                                subtitle={project.subtitle}
                                />
                            </Link>)
                        })}
                    </div>)
                })
            }
        </WorkContentStyle>
    )
}

export {WorkContent}