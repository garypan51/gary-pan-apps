import React, {useContext, useEffect, useState} from 'react'
import {Column} from "../../components/flexbox/Column"
import {Header} from "../../components/text/Header"
import {animated, config, useSpring} from "react-spring";
import {FloatingActionButton} from "../../components/buttons/FloatingActionButton";
import AppsIcon from '@material-ui/icons/Apps';
import {ProjectPicker} from "./ProjectPicker";
import styled, {ThemeContext} from "styled-components";
import {Row} from "../../components/flexbox/Row";
import {Colors} from "../../resources/Colors";
import {useOnOutsideClick} from "../../hooks/UseOnOutsideClick";
import {t} from "../../strings/i18n";
import {useOnMobile} from "../../hooks/UseOnMobile";

const GradientOverlay = styled(Row)`
    position: absolute;
    bottom: -24px;
    pointer-events: none;
    background-color: ${Colors.dark.primaryColorDarkGradStart}
`

export const Projects = () => {
    const theme = useContext(ThemeContext)
    const onMobile = useOnMobile()
    const [ref, onOutsideClick, resetOnOutsideClick] = useOnOutsideClick()
    const [pagePickerOpen, setPagePickerOpen] = useState(false)

    useEffect(() => {
        const pagePickerButtonStartY = pagePickerOpen ? "50px" : "-70px"
        const pagePickerButtonEndY = pagePickerOpen ? "-70px" : "50px"
        const pagePickerStartY = pagePickerOpen ? "-224px" : "24px"
        const pagePickerEndY = pagePickerOpen ? "24px" : "-224px"

        setPagePickerButtonProps({
            config: config.gentle,
            from: {position: "absolute", left: "50%", bottom: pagePickerButtonStartY},
            to: {position: "absolute", left: "50%", bottom: pagePickerButtonEndY},
        })

        setBottomPagePickerProps({
            config: config.gentle,
            from: {position: "absolute", bottom: pagePickerStartY},
            to: {position: "absolute", bottom: pagePickerEndY}
        })

        let debounce: NodeJS.Timeout | undefined = undefined
        resetOnOutsideClick()
        debounce = global.setTimeout(() => {
            if(onOutsideClick && pagePickerOpen) {
                setPagePickerOpen(false)
                resetOnOutsideClick()
            }
        }, 500)
        return () => {
            if (debounce) {
                clearTimeout(debounce);
            }
        }
    }, [onOutsideClick, pagePickerOpen])

    useEffect(() => {
        if(onOutsideClick && pagePickerOpen) {
            setPagePickerOpen(false)
        }
    }, [onOutsideClick])

    const [pagePickerButtonProps, setPagePickerButtonProps] = useSpring(() => ({
        config: config.wobbly,
        from: {position: "absolute", left: "50%", bottom: "-70px"},
        to: {position: "absolute", left: "50%", bottom: "50px"},
    }))
    const [bottomPagePickerProps, setBottomPagePickerProps] = useSpring(() => ({
        config: config.gentle,
        from: {position: "absolute", bottom: "-224px"},
        to: {position: "absolute", bottom: "-224px"}
    }))

    return (
        <Column>
            <Header margin={"0 16px"} type={"large"}>{t("projects.title")}</Header>
            {!onMobile &&
                <Column forwardRef={ref}>
                    <animated.div style={pagePickerButtonProps}>
                        <FloatingActionButton
                            theme={theme}
                            onClick={() => setPagePickerOpen(prevState => !prevState)}>
                            <AppsIcon/>
                        </FloatingActionButton>
                    </animated.div>
                    <animated.div style={bottomPagePickerProps}>
                        <Column transparent>
                            <GradientOverlay
                                transparent
                                width={"100vw"}
                                height={"250px"}/>
                        </Column>
                        <ProjectPicker onPageClick={() => setPagePickerOpen(false)}/>
                    </animated.div>
                </Column>
            }
        </Column>
    )
}
