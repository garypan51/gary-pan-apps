import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../redux/store"
import {Route, Switch, useLocation} from "react-router-dom";
import {GPAAppBar} from "./GPAAppBar";
import styled, {ThemeProvider} from "styled-components";
import {DarkTheme, LightTheme} from "../../resources/Theme";
import {Column} from "../../components/flexbox/Column";
import {setShowAppBar} from "../../redux/actions/AppActions";
import {useSpring, animated, config, useTransition} from "react-spring";
import {Drawer} from "../../components/containers/Drawer";
import {t} from "../../strings/i18n";
import {NavigationBar} from "./NavigationBar";
import {Header} from "../../components/text/Header";
import {Row} from "../../components/flexbox/Row";
import {ParallaxOverlay} from "./ParallaxOverlay";
import {createRoutes} from "../../routes";
import {Home} from "../home";
import {AboutMe} from "../aboutMe";
import {Projects} from "../projects";
import {ProjectDetail} from "../projects/detail/ProjectDetail";
import {Contact} from "../contact";
import {AboutThisWebsite} from "../aboutThisWebsite";
import {NotFound} from "../notFound/NotFound";

const SHOW_SOURCE_CODE_LINK_DELAY = 1000

interface IProps {
}

export const App = (props: IProps) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const darkModeEnabled = useSelector((state: StoreState) => state.app.darkModeEnabled)
    const theme = darkModeEnabled ? DarkTheme : LightTheme
    const showAppBar = useSelector((state: StoreState) => state.app.showAppBar)
    const appBarTitle = useSelector((state: StoreState) => state.app.appBarTitle)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const transitionConfig = (item: any, state: any) => {
        return state === "leave" ? {duration: 1000} : {duration: 2000}
    }

    const transitions = useTransition(location, location => location.pathname, {
        from: {
            position: 'absolute',
            top: 114,
            width: '100%',
            opacity: 0,
            transform: 'scale(0.8)'
        },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0 },
        config: config.molasses
    })

    const appBarProps = useSpring({
        config: { mass: 100, clamp: true },
        opacity: 1,
        from: {opacity: 0}
    })

    // useEffect(() => {
    //     const showSourceCodeTimeout = setTimeout(() => {
    //         dispatch(setShowAppBar(true))
    //     }, SHOW_SOURCE_CODE_LINK_DELAY)
    //     return () => { clearTimeout(showSourceCodeTimeout) }
    // }, [dispatch])

    const animatedRoutes = transitions.map( ({ item, props, key }) => {
        return (
            <animated.div key={key} style={props}>
                {createRoutes(item)}
            </animated.div>
        )
    })

    return (
        <ThemeProvider theme={theme}>
            <Column
                backgroundColor={theme.primaryColor}
                position={"relative"}
                width={"100%"}
                height={"100vh"}>
                <GPAAppBar title={""} onMenuClick={() => setDrawerOpen(true)}/>
                {animatedRoutes}
                <Drawer
                    theme={theme}
                    location={location}
                    onDismiss={() => setDrawerOpen(false)}
                    anchor={"left"}
                    open={drawerOpen}
                    ModalProps={{onBackdropClick: () => setDrawerOpen(false)}}/>
            </Column>
        </ThemeProvider>
    )
}
