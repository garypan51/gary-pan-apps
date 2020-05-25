import React, {ReactNode, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../redux/store"
import {BrowserRouter} from "react-router-dom";
import {GPAAppBar} from "./GPAAppBar";
import {ThemeProvider} from "styled-components";
import {DarkTheme, LightTheme} from "../../resources/Theme";
import {Column} from "../../components/flexbox/Column";
import {setAppBarTitle, setShowAppBar} from "../../redux/actions/AppActions";
import {useSpring} from "react-spring";
import {Drawer} from "../../components/containers/Drawer";
import {t} from "../../strings/i18n";
import {useOnMobile} from "../../hooks/UseOnMobile";

const SHOW_SOURCE_CODE_LINK_DELAY = 1000

interface IProps {
    routes?: ReactNode
}

export const App = (props: IProps) => {
    const dispatch = useDispatch()
    const darkModeEnabled = useSelector((state: StoreState) => state.app.darkModeEnabled)
    const showAppBar = useSelector((state: StoreState) => state.app.showAppBar)
    const appBarTitle = useSelector((state: StoreState) => state.app.appBarTitle)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const onMobile = useOnMobile()

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

    useEffect(() => {
        dispatch(setAppBarTitle(onMobile ? t("app.shortName") : t("app.name")))
    }, [onMobile])

    return (
        <ThemeProvider theme={theme}>
            <Column
                position={"relative"}
                width={"100%"}
                height={"100vh"}>
                <BrowserRouter>
                    <GPAAppBar title={appBarTitle} onMenuClick={() => setDrawerOpen(true)}/>
                    {props.routes}
                    <Drawer
                        theme={theme}
                        onDismiss={() => setDrawerOpen(false)}
                        anchor={"left"}
                        open={drawerOpen}
                        ModalProps={{onBackdropClick: () => setDrawerOpen(false)}}/>
                </BrowserRouter>
            </Column>
        </ThemeProvider>
    )
}
