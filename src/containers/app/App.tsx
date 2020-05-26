import React, {ReactNode, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../redux/store"
import {useLocation} from "react-router-dom";
import {GPAAppBar} from "./GPAAppBar";
import {ThemeProvider} from "styled-components";
import {DarkTheme, LightTheme} from "../../resources/Theme";
import {Column} from "../../components/flexbox/Column";
import {setShowAppBar} from "../../redux/actions/AppActions";
import {useSpring, animated, config, useTransition} from "react-spring";
import {Drawer} from "../../components/containers/Drawer";
import {t} from "../../strings/i18n";
import {NavigationBar} from "./NavigationBar";

const SHOW_SOURCE_CODE_LINK_DELAY = 1000

interface IProps {
    routes?: ReactNode
}

export const App = (props: IProps) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const darkModeEnabled = useSelector((state: StoreState) => state.app.darkModeEnabled)
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
            width: "100%",
            opacity: 0,
            transform: "scale(0.5, 0.5)"
        },
        enter: { opacity: 1, transform: "scale(1, 1)" },
        leave: { opacity: 0, transform: "scale(0.2, 0.2)" },
        config: config.slow
    })

    const appBarProps = useSpring({
        config: { mass: 100, clamp: true },
        opacity: 1,
        from: {opacity: 0}
    })
    const theme = darkModeEnabled ? DarkTheme : LightTheme

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
                position={"relative"}
                width={"100%"}
                height={"100vh"}>
                <GPAAppBar title={appBarTitle} onMenuClick={() => setDrawerOpen(true)}/>
                <NavigationBar />
                {animatedRoutes}
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
