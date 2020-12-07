import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

const WaveStyle = styled.svg`
position: absolute;
left: 0;
z-index: -1;
`

const PathStyle = styled(motion.path)<any>``
const PathAnimation = {
    hidden: {
        pathLength: 0, 
        pathOffset: 1
    },
    show: {
        pathLength: 1, 
        pathOffset: 0 ,
        transition: {
            duration: 1
        }
    }
}

const Wave = ()=>{
    return (
        <WaveStyle viewBox="0 0 1440 363" fill="none" xmlns="http://www.w3.org/2000/svg">
            <PathStyle
                 variants={PathAnimation}
                d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
                stroke="#768cff" strokeOpacity="0.6" strokeWidth="10" />
        </WaveStyle>
    )
}

export {Wave};