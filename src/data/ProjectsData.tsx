import Project1 from "../assets/images/project-1.jpg"
import Project2 from "../assets/images/project-2.jpg"
import Project3 from "../assets/images/project-3.jpg"
import Project4 from "../assets/images/project-4.jpg"
import Project5 from "../assets/images/project-5.jpg"
import Project6 from "../assets/images/project-6.jpg"
import Project7 from "../assets/images/project-7.jpg"
import Project8 from "../assets/images/project-8.jpg"
import Project9 from "../assets/images/project-9.jpg"
import Project10 from "../assets/images/project-10.jpg"
import Project11 from "../assets/images/project-11.jpg"
import Project12 from "../assets/images/project-12.jpg"

type Project = {
    id: number,
    title: string,
    subtitle: string,
    url: string,
    color: string
}

export const Projects: Project[] = [
    {
        id: 1,
        title: "Automatic Waches",
        subtitle: "It doesn't tik. It glides",
        url: Project1,
        color: "#768cff"
    },
    {
        id: 2,
        title: "Iron Maiden Girl",
        subtitle: "Hell is empty, all the devils are here.",
        url: Project2,
        color: "#fa5b28"
    },
    {
        id: 3,
        title: "Earth Tone Racks",
        subtitle: "I bet you love this color scheme",
        url: Project3,
        color: "#ffe08e"
    },
    {
        id: 4,
        title: "Rick the Razor",
        subtitle: "Slicker than your average barber.",
        url: Project4,
        color: "#4dc3b1"
    },
    {
        id:5,
        title: "Unreasonably Expensive Beverage",
        subtitle: "Because you want to feel expensive.",
        url: Project5,
        color: "#f5f5f5"
    },
    {
        id:6,
        title: "Floral Girl",
        subtitle: "If you dislike this pic, you have a problem.",
        url: Project6,
        color: "#fa5b28"
    },
    {
        id: 7,
        title: "Fireman Frank",
        subtitle: "Serving and protecting your community.",
        url: Project7,
        color: "#ffe08e"
    },
    {
        id: 8,
        title: "Monte Carlo",
        subtitle: "We serve chicken on a stick",
        url: Project8,
        color: "#768cff"
    },
    {
        id: 9,
        title: "Munster & Co.",
        subtitle: "A watch for every occasion",
        url: Project9,
        color: "#f5f5f5"
    },
    {
        id: 10,
        title: "Sloppy Burgers",
        subtitle: "So much cheeze that makes your stomach hurt",
        url: Project10,
        color: "#ffe08e"
    },
    {
        id: 11,
        title: "Nikon FG",
        subtitle: "I wonder what FG stands for, hummm.",
        url: Project11,
        color: "#fa5b28"
    },
    {
        id: 12,
        title: "Colorful Salad",
        subtitle: "Fibre, vitamins, nutrients, healthy-living.",
        url: Project12,
        color: "#4dc3b1"
    }
]