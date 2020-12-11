export const useTransitions = () => {
    const Transition = {
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
                delay: 1
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

    const HomeTransition = {
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

    const ContactTransition = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
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

    return {Transition, HomeTransition, ContactTransition}
}

