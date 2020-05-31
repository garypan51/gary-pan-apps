import React, {useEffect, useState} from 'react';
import {PageContainer} from "./PageContainer";
import {Column} from "../../../components/flexbox/Column";
import {animated, config, useSpring} from "react-spring";
import {FloatingActionButton} from "../../../components/buttons/FloatingActionButton";
import AppsIcon from "@material-ui/icons/Apps";
import {useOnMobile} from "../../../hooks/UseOnMobile";
import {useOnOutsideClick} from "../../../hooks/UseOnOutsideClick";
import {Theme} from "../../../resources/Theme";

interface IProps {
    theme: Theme
    onPageClick?: () => void
}

const pickerButtonBaseProps = {
    position: "absolute" as "absolute",
    bottom: "-70px",
    left: "calc(50vw - 32px)",
}

const pickerBaseProps = {
    position: "absolute" as "absolute",
    bottom: -250,
    display: "flex",
    justifyContent: "flex-end",
    left: 0,
    right: 0,
}

const yTransform = (y: any) => `translateY(${y}px)`

export const PagePicker = (props: IProps) => {
    const onMobile = useOnMobile()

    const [ref, onOutsideClick, resetOnOutsideClick] = useOnOutsideClick()
    const [pageModelOpen, setPageModalOpen] = useState(false)
    const [pagePickerOpen, setPagePickerOpen] = useState(false)

    const [pagePickerButtonProps, setPagePickerButtonProps] = useSpring(() => ({
        config: config.wobbly,
        y: 0
    }))
    const [PagePickerProps, setPagePickerProps] = useSpring(() => ({
        config: config.gentle,
        y: 0
    }))

    useEffect(() => {
        const buttonTimeout = setTimeout(() => setPagePickerButtonProps({y: -94}), 500)
        return () => clearTimeout(buttonTimeout)
    }, [])

    useEffect(() => {
        setPagePickerButtonProps({
            config: config.gentle,
            y: pagePickerOpen ? 0 : -94
        })

        setPagePickerProps({
            config: config.gentle,
            y: pagePickerOpen ? -274 : 0
        })

        resetOnOutsideClick()
    }, [onOutsideClick, pagePickerOpen])

    useEffect(() => {
        if(onOutsideClick && pagePickerOpen) {
            setPagePickerOpen(false)
        }
    }, [onOutsideClick])

    return (
        <>
            {!onMobile &&
                <Column forwardRef={ref} overflow={"visible"}>
                    <animated.div style={{...{transform: pagePickerButtonProps.y.interpolate(yTransform)}, ...pickerButtonBaseProps}}>
                        <FloatingActionButton
                            theme={props.theme}
                            onClick={() => setPagePickerOpen(prevState => !prevState)}>
                            <AppsIcon/>
                        </FloatingActionButton>
                    </animated.div>

                    <animated.div style={{...{transform: PagePickerProps.y.interpolate(yTransform)}, ...pickerBaseProps}}>
                        <PageContainer theme={props.theme} onPageClick={() => setPagePickerOpen(false)}/>
                    </animated.div>
                </Column>
            }
        </>
    )
}
