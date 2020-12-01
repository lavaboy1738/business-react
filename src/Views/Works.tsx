import React from "react";
import styled from "styled-components";

const WorksStyles = styled.div`
`

const Works = () =>{
    return(
        <WorksStyles>
            <div className="works-title">
                <div className="works-title-main">Works</div>
                <div className="works-title-sub">Creativity, Quality, Perfection</div>
            </div>
            <div className="works-content"></div>
        </WorksStyles>
    )
}

export {Works}