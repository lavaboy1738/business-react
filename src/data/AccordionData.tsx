export type AccordionItem = {
    question: string,
    answer: string,
    itemID: number
}

export const AccordionData: AccordionItem[] = [
    {
        itemID: 1,
        question: "What is this website for?",
        answer: "I don't really know either, it's supposed to look like a business website."
    },
    {
        itemID: 2,
        question: "Why did the Seahawks throw the ball?",
        answer: "Till this day I still can't believe they didn't let Marshawn run the ball."
    },
    {
        itemID: 3,
        question: "Who is the fighter of the year 2020?",
        answer: "It is debatable but I'm saying it's Teofimo Lopez."
    },
    {
        itemID: 4,
        question: "What did you have for breakfast this morning?",
        answer: "I had two slices of toast, two hard-boiled eggs, a glass of black soymilk and some bacon."
    }
]