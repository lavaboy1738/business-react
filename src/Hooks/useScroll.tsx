import {useEffect, useRef} from "react";
import { useInView } from "react-intersection-observer";
import {useAnimation} from "framer-motion";

export const useScroll = (threshold: number) => {
    const [element, inView] = useInView({threshold})
    const controls = useAnimation();
    const count = useRef(false);
    useEffect(()=>{
        if(!count.current){
            if(inView){
                controls.start("show")
                count.current = true;
            }else{
                controls.start("hidden")
            }
        }
    })
    return {element, controls}
}
