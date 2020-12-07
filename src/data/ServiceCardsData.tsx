import ClockIcon from "../assets/images/clock.svg";
import MoneyIcon from "../assets/images/money.svg";
import TeamworkIcon from "../assets/images/teamwork.svg";
import DiagramIcon from "../assets/images/diaphragm.svg";

export type ServiceCard = {
    id: number
    iconURL: string,
    title: string,
    text: string,
}

export const ServiceCardsData: ServiceCard[] = [
    {
        id: 1,
        iconURL: ClockIcon,
        title: "Quick",
        text: "Dedicated team to respond to your needs. We respond to your calls 24/7. Real human customer service team to answer all your questions."
    },
    {
        id:2,
        iconURL: MoneyIcon,
        title: "Monetization",
        text: "Solve your business problems with digital solutions tailor-made to your case. Flexible strategy that can be adjusted to optimize conversion."
    },
    {
        id:3,
        iconURL: TeamworkIcon,
        title: "Teamwork",
        text: "Team work makes the dream work. What does it mean to be a team player for you? Does it just mean to blindly follow the herd?"
    },
    {
        id:4,
        iconURL: DiagramIcon,
        title: "Flexibility",
        text: "This icon looks like the Google Chrome icon. I don't know what to put here. If you're reading this please don't mind the random copy."
    }
]