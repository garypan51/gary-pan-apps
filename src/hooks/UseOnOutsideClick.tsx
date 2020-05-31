import {MutableRefObject, useEffect, useRef, useState} from "react"

export const useOnOutsideClick = (): [MutableRefObject<any>, boolean, () => void] => {
    const ref = useRef<any>(null)
    const [onOutsideClick, setOnOutsideClick] = useState(false)

    const onClick = (e: any) => {
        const component = ref.current
        if (component && !component.contains(e.target)) {
            setOnOutsideClick(true)
        }
    }

    const reset = () => {
        setOnOutsideClick(false)
    }

    useEffect(() => {
        document.addEventListener("mousedown", onClick);
        return () => document.removeEventListener("mousedown", onClick)
    }, [])

    return [ref, onOutsideClick, reset]
}
