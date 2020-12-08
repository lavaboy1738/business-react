export const useAnimations = ()=> {
    const staggerChildrenAnimation = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4
            }
        }
    }

    const slowStaggerChildrenAnimation = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.6
            }
        }
    }

    const pictureAnimation = {
        hidden: {
            opacity: 0,
            x: -200,
            scale: 0.9,
        },
        show: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 1,
                delay: 1.8,
                type: "Inertia",
            }
        }
    }

    const revealAnimation = {
        hidden: {
            opacity: 0,
            scale: 0.4,
        },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: "circOut",
            }
        }
    }

    const titleAnimation = {
        hidden: {
            opacity: 0,
            y: 100
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    const lineContainerAnimation = {
        hidden: {
            x: 100
        },
        show:{
            x: 0,
            transition: {
                duration: 1.5
            }
        }
    }

    return {staggerChildrenAnimation, pictureAnimation, titleAnimation, 
        lineContainerAnimation, revealAnimation, slowStaggerChildrenAnimation}
}

