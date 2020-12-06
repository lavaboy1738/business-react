export const Transition = {
    hidden: {
        opacity: 0,
        y: "100%",
        scaleX: 0.4,
    },
    show: {
        opacity: 1,
        y: 0,
        scaleX: 1,
        transition: {
            duration: 1.5,
            ease: "easeOut",
        }
    },
    exit: {
        opacity: 0,
        y: "-150%",
        scaleX: 0,
        transition: {
            duration: 0.5,
            ease: "easeIn",
        }
    }
}

export const HomeTransition = {
    hidden: {
        opacity: 1,
        y: 0,
        scaleX: 1,
    },
    show: {
        opacity: 1,
        y: 0,
        scaleX: 1,
    },
    exit: {
        opacity: 0,
        y: "-150%",
        scaleX: 0,
        transition: {
            duration: 0.5,
            ease: "easeIn",
        }
    }
}
