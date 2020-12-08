import Leader1 from "../assets/images/leader-1.jpg";
import Leader2 from "../assets/images/leader-2.jpg";
import Leader3 from "../assets/images/leader-3.jpg";
import Leader4 from "../assets/images/leader-4.jpg";
import Leader5 from "../assets/images/leader-5.jpg";
import Leader6 from "../assets/images/leader-6.jpg";

export type Leader = {
    id: number;
    name: string;
    title: string;
    text: string;
    url: string;
}

const LeadershipData: Leader[] = [
    {
        id: 1,
        name: "Suzannah Davie",
        title: "Professional Sleeper",
        text: "Look, I really don't know what to put here. At the same time, I feel like useing Lorem is straigh up being lazy. So here are some random thoughts to fill this text.",
        url: Leader1
    },
    {
        id: 2,
        name: "Mischa Huynh",
        title: "Potion Seller",
        text: "I woke up today feeling a bit groggy, but overall I think I slept pretty well last night. These days I wake up, eat, and then go straight to coding. Work hard, trust the process.",
        url: Leader2
    },
    {
        id: 3,
        name: "Sion Frye",
        title: "Snow Watcher",
        text: "Do you ever wonder, what if we're all living in a simulation? Elon Musk said that in an interview. If he believes it and he's that smart, we're missing something.",
        url: Leader3
    },
    {
        id: 4,
        name: "Ruby Caldwell",
        title: "Red Shirt Lover",
        text: "I'm looking forward to life going back to normal again. Never have I ever wanted to hug so many people. Once this pandemic thing is over, I'll just go hug random people.",
        url: Leader4
    },
    {
        id: 5,
        name: "Sia Gilmour",
        title: "Tattoo Artist",
        text: "How come the Weeknd didn't get any Grammy's nominations? The guy promoted his album for a long time and he was everywhere. Most streamed on spotify 2020.",
        url: Leader5
    },
    {
        id: 6,
        name: "Pippa Burgess",
        title: "Street Roamer",
        text: "One of my roommate says that there won't be a lot of snow this winter. I wonder how she knows, and with such certainty. It snowed yesterday, I went out to showvel.",
        url: Leader6
    }
]

export {LeadershipData}