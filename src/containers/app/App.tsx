import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../redux/store"
import {useLocation} from "react-router-dom";
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

const SHOW_SOURCE_CODE_LINK_DELAY = 1000

interface IProps {
    routes?: ReactNode
}

const ParallaxContainer = styled(Row)`
    position: absolute;
    top: 78px;
`

const Clouds = styled.img`
    // position: absolute;
    // top: 80%;
    // right: 10%;
    width: 450px;
    height: 200px;
    // z-index: -1;
`

export const App = (props: IProps) => {
    const dispatch = useDispatch()
    const parallaxRef = useRef()
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
            transform: 'translate(100%, 0)'
        },
        enter: { opacity: 1, transform: 'translate(0%, 0)' },
        leave: { opacity: 0, transform: 'translate(-50%, 0)' },
        config: config.slow
    })

    const appBarProps = useSpring({
        config: { mass: 100, clamp: true },
        opacity: 1,
        from: {opacity: 0}
    })

    useEffect(() => {
        const showSourceCodeTimeout = setTimeout(() => {
            dispatch(setShowAppBar(true))
        }, SHOW_SOURCE_CODE_LINK_DELAY)
        return () => { clearTimeout(showSourceCodeTimeout) }
    }, [dispatch])

    const routes = props.routes

    const animatedRoutes = transitions.map( ({ item, props, key }) => {
        return (
            <animated.div key={key} style={props}>
                {routes}
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
                <ParallaxOverlay pages={3}/>
                {animatedRoutes}
                {/*<NavigationBar />*/}
                <Drawer
                    theme={theme}
                    onDismiss={() => setDrawerOpen(false)}
                    anchor={"left"}
                    open={drawerOpen}
                    ModalProps={{onBackdropClick: () => setDrawerOpen(false)}}/>
            </Column>
        </ThemeProvider>
    )
}
