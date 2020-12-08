import React from "react";
import styled from "styled-components";
import {Project} from "../data/ProjectsData";
import {WorksProject} from "./WorksProject";
import {Link} from "react-router-dom";
import {useAnimations} from "../Hooks/useAnimations";
import {motion} from "framer-motion";

const WorkContentStyle = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .projects-container{
            display: flex;
            justify-content: space-between;
            margin-bottom: 1.8vw;
            @media (max-width: 420px) {
                flex-wrap: wrap;
                margin-bottom: 0;
            }

            :nth-child(odd){
                a{
                    width: 49%;
                    @media (max-width: 420px) {
                        width: 100%;
                        margin: 1rem 0;
                    }
                }
            }
            :nth-child(even){
                a{
                    width: 32%;
                    @media (max-width: 420px) {
                        width: 100%;
                        margin: 1rem 0;
                    }
                }
            }
        }

`

type Prop = {projectsArr: Project[][]}

const WorkContent = (props: Prop) => {
    const {slowStaggerChildrenAnimation} = useAnimations();
    return(
        <WorkContentStyle>
            {
                props.projectsArr.map((arr, index)=>{
                    return (<motion.div 
                        variants={slowStaggerChildrenAnimation}
                    className = "projects-container" key={index}>
                        {arr.map((project)=>{
                            return (<Link to="/works/sample-project" key={project.id}>
                                <WorksProject title={project.title} color={project.color} url={project.url}
                                subtitle={project.subtitle}
                                />
                            </Link>)
                        })}
                    </motion.div>)
                })
            }
        </WorkContentStyle>
    )
}

export {WorkContent}