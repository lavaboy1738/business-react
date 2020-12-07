import React, { useState } from "react";
import styled from "styled-components";
import {AccordionItem} from "./AccordionItem";
import {AccordionData} from "../data/AccordionData";

const AccordionStyles = styled.div`
width: 90%;
    .accordion-title{
        font-family: Jakarta-display;
        font-weight: 600;
        font-size: 1.7rem;
        h2{
            line-height: 3.2rem;
        }
        .blue{
            color:#768cff;
        }
    }
    .accordion-content{
        padding: 1rem 0;
    }
`

const Accordion = () =>{
    const [openedID, setOpenedID] =useState(0);
    return(
        <AccordionStyles>
            <div className="accordion-title">
                <h2>Any Questions?</h2>
                <h2 className="blue">We Got Answers.</h2>
            </div>
            <div className="accordion-content">
                {AccordionData.map((item)=>{
                    return(
                        <AccordionItem key={item.itemID}
                            question={item.question}
                            answer={item.answer}
                            itemID={item.itemID}
                            openedID = {openedID}
                            onChange={setOpenedID}
                        />
                    )

                })}
            </div>
        </AccordionStyles>
    )
}

export {Accordion};