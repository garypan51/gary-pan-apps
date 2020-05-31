import {MutableRefObject, useEffect, useRef, useState} from "react";
import {useWindowSize} from "./UseWindowSize";

export const useComponentSize = () : [MutableRefObject<any>, number | null, number | null] => {
    const ref = useRef<any>(null)
    const windowSize = useWindowSize()
    const [width, setWidth] = useState(null)
    const [height, setHeight] = useState(null)

    useEffect(() => {
        if (ref.current) {
            setWidth(ref.current.offsetWidth)
            setHeight(ref.current.offsetHeight)
        }
    }, [windowSize])

    return [ref, width, height]
}

