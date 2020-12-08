import {useEffect, useRef} from "react";
import { useInView } from "react-intersection-observer";
import {useAnimation} from "framer-motion";

export const useScroll = () => {
    const [element, inView] = useInView({threshold: 0.2})
    const controls = useAnimation();
    let count = useRef(0);
    useEffect(()=>{
        if(count.current<3){
            if(inView){
                controls.start("show")
            }else{
                controls.start("hidden")
            }
        }
        count.current+=1;
    })
    return {element, controls}
}
