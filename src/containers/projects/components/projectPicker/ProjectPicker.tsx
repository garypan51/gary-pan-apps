import React, {useEffect, useState} from 'react';
import {ProjectsContainer} from "./ProjectsContainer";
import {Column} from "../../../../components/flexbox/Column";
import {animated, config, useSpring} from "react-spring";
import {FloatingActionButton} from "../../../../components/buttons/FloatingActionButton";
import AppsIcon from "@material-ui/icons/Apps";
import {useOnMobile} from "../../../../hooks/UseOnMobile";
import {useOnOutsideClick} from "../../../../hooks/UseOnOutsideClick";
import {Theme} from "../../../../resources/Theme";

interface IProps {
    theme: Theme
    onProjectClick?: () => void
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

export const ProjectPicker = (props: IProps) => {
    const onMobile = useOnMobile()

    const [ref, onOutsideClick, resetOnOutsideClick] = useOnOutsideClick()
    const [projectModelOpen, setProjectModalOpen] = useState(false)
    const [projectPickerOpen, setProjectPickerOpen] = useState(false)

    const [projectPickerButtonProps, setProjectPickerButtonProps] = useSpring(() => ({
        config: config.wobbly,
        y: 0
    }))
    const [projectPickerProps, setProjectPickerProps] = useSpring(() => ({
        config: config.gentle,
        y: 0
    }))

    useEffect(() => {
        const buttonTimeout = setTimeout(() => setProjectPickerButtonProps({y: -94}), 500)
        return () => clearTimeout(buttonTimeout)
    }, [])

    useEffect(() => {
        setProjectPickerButtonProps({
            config: config.gentle,
            y: projectPickerOpen ? 0 : -94
        })

        setProjectPickerProps({
            config: config.gentle,
            y: projectPickerOpen ? -274 : 0
        })

        resetOnOutsideClick()
    }, [onOutsideClick, projectPickerOpen])

    useEffect(() => {
        if(onOutsideClick && projectPickerOpen) {
            setProjectPickerOpen(false)
        }
    }, [onOutsideClick])

    return (
        <>
            {!onMobile &&
                <Column forwardRef={ref} overflow={"visible"}>
                    <animated.div style={{...{transform: projectPickerButtonProps.y.interpolate(yTransform)}, ...pickerButtonBaseProps}}>
                        <FloatingActionButton
                            theme={props.theme}
                            onClick={() => setProjectPickerOpen(prevState => !prevState)}>
                            <AppsIcon/>
                        </FloatingActionButton>
                    </animated.div>

                    <animated.div style={{...{transform: projectPickerProps.y.interpolate(yTransform)}, ...pickerBaseProps}}>
                        <ProjectsContainer theme={props.theme} onProjectClick={() => setProjectPickerOpen(false)}/>
                    </animated.div>
                </Column>
            }
        </>
    )
}
