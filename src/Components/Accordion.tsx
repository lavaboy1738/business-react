import React, { useState } from "react";
import styled from "styled-components";
import {AccordionItem} from "./AccordionItem";

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
                <AccordionItem 
                    question="What is this website for?"
                    answer="I don't really know either, it's supposed to look like a business website."
                    itemID={1}
                    openedID={openedID}
                    onChange={setOpenedID}
                />
                <AccordionItem 
                    question="Why did the Seahawks threw the ball?"
                    answer="Till this day I still can't believe they didn't let Marshawn run the ball."
                    itemID={2}
                    openedID={openedID}
                    onChange={setOpenedID}
                />
                <AccordionItem 
                    question="Who is the fighter of the year 2020?"
                    answer="It is debatable but I'm saying it's Teofimo Lopez."
                    itemID={3}
                    openedID={openedID}
                    onChange={setOpenedID}
                />
                <AccordionItem 
                    question="What did you have for breakfast this morning?"
                    answer="I had two slices of toast, two hard-boiled eggs, a glass of black soymilk and some bacon."
                    itemID={4}
                    openedID={openedID}
                    onChange={setOpenedID}
                />
            </div>
        </AccordionStyles>
    )
}

export {Accordion};