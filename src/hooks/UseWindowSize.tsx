import React, {useEffect, useState} from "react"

export const useWindowSize = () => {
    const isClient = typeof window === 'object';
    const getSize = () => {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        }
    }
    const [windowSize, setWindowSize] = useState(getSize)

    useEffect(() => {
        function handleResize() {
            setWindowSize(getSize());
        }
        window.addEventListener("resize", () => setWindowSize(getSize()));
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowSize
}
