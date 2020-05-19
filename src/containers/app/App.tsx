import React, {ReactNode, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../redux/store"
import {BrowserRouter} from "react-router-dom";
import {GPAAppBar} from "./GPAAppBar";
import styled, {ThemeProvider} from "styled-components";
import {DarkTheme, LightTheme} from "../../resources/Theme";
import {Column} from "../../components/flexbox/Column";
import {setShowAppBar} from "../../redux/actions/AppActions";
import {useSpring, animated, config} from "react-spring";
import {FloatingActionButton} from "../../components/buttons/FloatingActionButton";
import {PagePicker} from "./PagePicker";
import {Row} from "../../components/flexbox/Row";
import {Colors} from "../../resources/Colors";
import {Drawer} from "../../components/presentational/Drawer";

const SHOW_SOURCE_CODE_LINK_DELAY = 1000

interface IProps {
    routes?: ReactNode
}

const GradientOverlay = styled(Row)`
    position: absolute;
    bottom: -24px;
    pointer-events: none;
    background-color: ${Colors.dark.primaryColorDarkGradStart}
`

export const App = (props: IProps) => {
    const dispatch = useDispatch()
    const darkModeEnabled = useSelector((state: StoreState) => state.app.darkModeEnabled)
    // const showAppBar = useSelector((state: StoreState) => state.app.showAppBar)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [pagePickerOpen, setPagePickerOpen] = useState(false)

    const appBarProps = useSpring({
        config: { mass: 100, clamp: true },
        opacity: 1,
        from: {opacity: 0}
    })

    const [pagePickerButtonProps, setPagePickerButtonProps] = useSpring(() => ({
        config: config.wobbly,
        from: {position: "absolute", right: "16px", bottom: "-50px"},
        to: {position: "absolute", right: "16px", bottom: "0px"},
    }))

    const [bottomPagePickerProps, setBottomPagePickerProps] = useSpring(() => ({
        config: config.gentle,
        from: {position: "absolute", bottom: "-224px"},
        to: {position: "absolute", bottom: "-224px"}
    }))

    const theme = darkModeEnabled ? DarkTheme : LightTheme

    useEffect(() => {
        const pagePickerButtonStartY = pagePickerOpen ? "0px" : "256px"
        const pagePickerButtonEndY = pagePickerOpen ? "256px" : "0px"
        const pagePickerStartY = pagePickerOpen ? "-224px" : "24px"
        const pagePickerEndY = pagePickerOpen ? "24px" : "-224px"

        setPagePickerButtonProps({
            config: config.gentle,
            from: {position: "absolute", right: "16px", bottom: pagePickerButtonStartY},
            to: {position: "absolute", right: "16px", bottom: pagePickerButtonEndY},
        })

        setBottomPagePickerProps({
            config: config.gentle,
            from: {position: "absolute", bottom: pagePickerStartY},
            to: {position: "absolute", bottom: pagePickerEndY}
        })
    }, [pagePickerOpen])

    useEffect(() => {
        const showSourceCodeTimeout = setTimeout(() => {
            dispatch(setShowAppBar(true))
        }, SHOW_SOURCE_CODE_LINK_DELAY)
        return () => { clearTimeout(showSourceCodeTimeout) }
    }, [dispatch])

    return (
        <ThemeProvider theme={theme}>
            <Column
                position={"relative"}
                width={"100%"}
                height={"100%"}>
                <BrowserRouter>
                    <GPAAppBar onMenuClick={() => setDrawerOpen(true)}/>
                    {props.routes}
                    <animated.div style={pagePickerButtonProps}>
                        <FloatingActionButton
                            theme={darkModeEnabled ? DarkTheme : LightTheme}
                            buttonText={"Hello"}
                            onClick={() => setPagePickerOpen(prevState => !prevState)}/>
                    </animated.div>
                    <animated.div style={bottomPagePickerProps}>
                        <Column transparent>
                            <GradientOverlay
                                transparent
                                width={"100vw"}
                                height={"250px"}/>
                        </Column>
                        <PagePicker/>
                    </animated.div>
                </BrowserRouter>
                <Drawer
                    theme={theme}
                    anchor={"left"}
                    open={drawerOpen}
                    ModalProps={{onBackdropClick: () => setDrawerOpen(false)}}/>
            </Column>
        </ThemeProvider>
    )
}
