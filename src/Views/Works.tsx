import React from "react";
import styled from "styled-components";
import {Projects} from "../data/ProjectsData";
import {WorksProject} from "../Components/WorksProject";
import {Link} from "react-router-dom";

const WorksStyles = styled.div`
    padding: 2rem 5vw;
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
    return(
        <WorksStyles>
            <div className="works-title">
                <div className="works-title-main">Works</div>
                <div className="works-title-sub">Creativity, Quality, Perfection.</div>
            </div>
            <div className="works-content">
                <div className="projects-container">
                    <Link to="/works/sample-project">
                        <WorksProject title={Projects[0].title} color={Projects[0].color} url={Projects[0].url}
                        subtitle={Projects[0].subtitle}
                        />
                    </Link>
                    <Link to="/works/sample-project">
                        <WorksProject title={Projects[1].title} color={Projects[1].color} url={Projects[1].url}
                        subtitle={Projects[1].subtitle}
                        />
                    </Link>
                </div>
                <div className="projects-container">
                    <Link to="/works/sample-project">
                        <WorksProject title={Projects[2].title} color={Projects[2].color} url={Projects[2].url}
                        subtitle={Projects[2].subtitle}
                        />
                    </Link>
                    <Link to="/works/sample-project">
                        <WorksProject title={Projects[3].title} color={Projects[3].color} url={Projects[3].url}
                        subtitle={Projects[3].subtitle}
                        />
                    </Link>
                    <Link to="/works/sample-project">
                        <WorksProject title={Projects[4].title} color={Projects[4].color} url={Projects[4].url}
                        subtitle={Projects[4].subtitle}
                        />
                    </Link>
                </div>
                <div className="projects-container">
                    <Link to="/works/sample-project">
                        <WorksProject title={Projects[5].title} color={Projects[5].color} url={Projects[5].url}
                        subtitle={Projects[5].subtitle}
                        />
                    </Link>
                    <Link to="/works/sample-project">
                        <WorksProject title={Projects[6].title} color={Projects[6].color} url={Projects[6].url}
                        subtitle={Projects[6].subtitle}
                        />
                    </Link>
                </div>
                <div className="projects-container">
                    <Link to="/works/sample-project">
                        <WorksProject title={Projects[7].title} color={Projects[7].color} url={Projects[7].url}
                        subtitle={Projects[7].subtitle}
                        />
                    </Link>
                    <Link to="/works/sample-project">
                        <WorksProject title={Projects[8].title} color={Projects[8].color} url={Projects[8].url}
                        subtitle={Projects[8].subtitle}
                        />
                    </Link>
                    <Link to="/works/sample-project">
                        <WorksProject title={Projects[9].title} color={Projects[9].color} url={Projects[9].url}
                        subtitle={Projects[9].subtitle}
                        />
                    </Link>
                </div>
                <div className="projects-container">
                    <Link to="/works/sample-project">
                        <WorksProject title={Projects[10].title} color={Projects[10].color} url={Projects[10].url}
                        subtitle={Projects[10].subtitle}
                        />
                    </Link>
                    <Link to="/works/sample-project">
                        <WorksProject title={Projects[11].title} color={Projects[11].color} url={Projects[11].url}
                        subtitle={Projects[11].subtitle}
                        />
                    </Link>
                </div>
            </div>
        </WorksStyles>
    )
}

export {Works}