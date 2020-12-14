import {useEffect} from "react";
import { useInView } from "react-intersection-observer";
import {useAnimation} from "framer-motion";

export const useScroll = (threshold: number) => {
    const controls = useAnimation();
    const [element, inView] = useInView({threshold: threshold, triggerOnce: true})
    useEffect(()=>{
            if(inView){
                controls.start("show")
            }else{
                controls.start("hidden")
            }
    })
    return {element, controls}
}
