import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useTransitions} from "../Hooks/useTransitions";

const NotFoundStyle = styled(motion.div)`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    .wrapper{
        text-align: center;
        overflow: hidden;
        .title{
            font-family: Jakarta-display;
            font-weight: 600;
            font-size: 30vh;
        }
        .subtitle{
            font-family: Jakarta-display;
            font-weight: 400;
            font-size: 1.5rem;
        }
    }
`

const staggerChildren = {
    hidden: {

    },
    show: {
        transition: {
            staggerChildren: 0.5
        }
    }
}

const topAnimation = {
    hidden: {
        y: "-100%"
    },
    show: {
        y: 0,
        transition: {
            duration: 1,
            type: "intertia"
        }
    }
}

const bottomAnimation = {
    hidden: {
        y: "100%"
    },
    show: {
        y: 0,
        transition: {
            duration: 1,
            type: "intertia"
        }
    }
}

const NotFound = ()=>{
    const {ContactTransition} = useTransitions();
    return (
        <NotFoundStyle variants={ContactTransition} initial="hidden" animate="show" exit="exit">
            <motion.div className="wrapper"
            variants={staggerChildren}
            initial="hidden"
            animate="show"
            >
                <motion.div className="title"
                variants={topAnimation}
                >404</motion.div>
                <motion.div className="subtitle"
                variants={bottomAnimation}
                >You look lost, kid.</motion.div>
            </motion.div>
        </NotFoundStyle>
    )
}

export {NotFound}