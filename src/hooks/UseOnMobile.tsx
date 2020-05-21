import React, {useEffect, useState} from "react"
import {useWindowSize} from "./UseWindowSize";

export const useOnMobile = () => {
    const windowSize = useWindowSize()
    const [onMobile, setOnMobile] = useState(false)

    useEffect(() => {
        const onMobileDevice = windowSize.width != null && windowSize.width < 768
        if (onMobile !== onMobileDevice) {
            setOnMobile(onMobileDevice)
        }
    }, [windowSize])

    return onMobile
}

