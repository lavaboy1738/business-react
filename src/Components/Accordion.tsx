import React from "react";

const Accordion = () =>{
    return(
        <div className="accordion">
            <div className="accordion-title">
                <h2>Any Questions?</h2>
                <h2>We Got Answers</h2>
            </div>
            <div className="accordion-content">
                <div className="question">
                    <h4>What is this website for?</h4>
                    <div className="answer">
                        <p>
                            I don't really know either, it's supposed to look like a business website.
                        </p>
                    </div>
                </div>
                <div className="question">
                    <h4>Why did the Seahawks threw the ball?</h4>
                    <div className="answer">
                        <p>
                            Till this day I still can't believe they didn't let Marshawn run the ball.
                        </p>
                    </div>
                </div>
                <div className="question">
                    <h4>Who is the fighter of the year 2020?</h4>
                    <div className="answer">
                        <p>
                            It is debatable but I'm saying it's Teofimo Lopez
                        </p>
                    </div>
                </div>
                <div className="question">
                    <h4>What did you have for breakfast this morning?</h4>
                    <div className="answer">
                        <p>
                            I had two slices of toast, two hard-boiled eggs, a glass of black soymilk and some bacon.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Accordion};