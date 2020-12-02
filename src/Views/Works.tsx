import React, {useEffect} from "react";
import styled from "styled-components";
import {Projects, Project} from "../data/ProjectsData";
import {WorksProject} from "../Components/WorksProject";
import {Link} from "react-router-dom";

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
    .works-content{
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
    }
`

const Works = () =>{
    //rearrange the projects array into an array of two and three  projects for rendering.
    const rearrange = ()  => {
        let twos = 0;
        let threes = 1;
        const output: Project[][] = [];
        Projects.forEach((project) => {
            if(output[twos]){
                if(output[twos].length < 2){
                    output[twos].push(project);
                    return;
                }
            }else{
                output[twos] = [project];
                return;
            }

            if(output[threes]){
                if(output[threes].length < 3){
                    output[threes].push(project);
                    return;
                }
            }else{
                output[threes] = [project];
                return;
            }

            twos +=2;
            threes +=2;
            output[twos] = [project];
        })
        return output;
    }

    const arranged = rearrange();

    return(
        <WorksStyles>
            <div className="works-title">
                <div className="works-title-main">Works</div>
                <div className="works-title-sub">Creativity, Quality, <span>Perfection.</span></div>
            </div>
            <div className="works-content">
                {
                    arranged.map((arr, index)=>{
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
            </div>
        </WorksStyles>
    )
}

export {Works}