import React from "react";
import styled from "styled-components";

const AccordionItemStyle = styled.div`
padding: 0.5rem 0;
transition: 0.5s all ease;
cursor: pointer;
    h4{
        font-family: Jakarta-display;
        font-weight: 400;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        transition: 0.5s all ease;
    }
    .answer{
        max-height: 0;
        font-family: Jakarta-text;
        font-weight: 200;
        font-size: 1.2rem;
        overflow: hidden;
        margin: 1rem 0;
        transition: 0.5s all ease;
        border-bottom: 1px solid #768cff;
        p{
            opacity: 0;
        }
        &.open{
            max-height: unset;
            overflow: unset;
            transition: 0.5s all ease;
            padding-bottom: 10px;
            p{
                opacity: 1;
                transition: 0.5s all ease 0.1s;
            }
        }
    }

`

type Prop = {
    question: string,
    answer: string,
    itemID: number,
    openedID : number,
    onChange: (id: number) => void;
}

const AccordionItem = (props: Prop) => {
    const {itemID} = props;
    return(
    <AccordionItemStyle className="question" onClick={()=>{props.onChange(props.itemID)}} >
        <h4>{props.question}</h4>
        <div className={props.openedID === itemID? "answer open": "answer"}>
            <p>{props.answer}</p>
        </div>
    </AccordionItemStyle>
    )

}

export {AccordionItem}