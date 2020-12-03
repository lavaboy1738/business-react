import React from "react";
import styled from "styled-components";
import {Hero} from "../Components/Hero";
import {Services} from "../Components/Services";
import {Accordion} from "../Components/Accordion";
import {WorkContent} from "../Components/WorkContent";
import {ArrangedProjects} from "../data/ProjectsData";
import {DefaultButton} from "../Components/DefaultButton";

const HomeStyles = styled.div`
    color: #333;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .wrapper{
        padding: 2rem 5vw;
        .title{
            font-family: Jakarta-display;
            font-size: 2rem;
            font-weight: 600;
        }
        .subtitle{
            font-family: Jakarta-text;
            font-size: 1.5rem;
            font-weight: 200;
            margin-bottom: 1rem;
        }
        .button-wrapper{
            padding: 2rem;
            text-align:center;
        }
    }
`


const Home = () =>{
    return(
        <HomeStyles>
            <Hero/>
            <Services/>
            <div className="wrapper">
                <div className="title">Works</div>
                <div className="subtitle">Look around, you'll be surprised.</div>
                <WorkContent projectsArr={ArrangedProjects.slice(0,3)}/>
                <div className="button-wrapper">
                    <DefaultButton text="More Works" url="/works" />
                </div>
            </div>
            <Accordion/>
        </HomeStyles>
    )
}

export {Home}