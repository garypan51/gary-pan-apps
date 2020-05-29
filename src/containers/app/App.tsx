import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../redux/store"
import {Route, Switch, useLocation} from "react-router-dom";
import {GPAAppBar} from "./GPAAppBar";
import styled, {ThemeProvider} from "styled-components";
import {DarkTheme, LightTheme} from "../../resources/Theme";
import {Column} from "../../components/flexbox/Column";
import {useSpring, animated, config, useTransition} from "react-spring";
import {Drawer} from "../../components/containers/Drawer";
import {createRoutes} from "../../routes";
import {FloatingActionButton} from "../../components/buttons/FloatingActionButton";
import AppsIcon from "@material-ui/icons/Apps";
import {ProjectPicker} from "../projects/ProjectPicker";
import {Colors} from "../../resources/Colors";
import {useOnMobile} from "../../hooks/UseOnMobile";
import {useOnOutsideClick} from "../../hooks/UseOnOutsideClick";
import {setAppBarTitle} from "../../redux/actions/AppActions";
import {t} from "../../strings/i18n";
import {PagePicker} from "./PagePicker";

const SHOW_SOURCE_CODE_LINK_DELAY = 1000

interface IProps {
}

const yTransform = (y: any) => `translateY(${y}px)`

export const App = (props: IProps) => {
    const dispatch = useDispatch()
    const location = useLocation()
    const darkModeEnabled = useSelector((state: StoreState) => state.app.darkModeEnabled)
    const theme = darkModeEnabled ? DarkTheme : LightTheme
    const showAppBar = useSelector((state: StoreState) => state.app.showAppBar)
    const appBarTitle = useSelector((state: StoreState) => state.app.appBarTitle)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const onMobile = useOnMobile()
    const [projectModelOpen, setProjectModalOpen] = useState(false)
    const [ref, onOutsideClick, resetOnOutsideClick] = useOnOutsideClick()
    const [projectPickerOpen, setProjectPickerOpen] = useState(false)



    return (
        <ThemeProvider theme={theme}>
            <Column
                backgroundColor={theme.primaryColor}
                position={"relative"}
                width={"100%"}
                height={"100vh"}>
                {/*<GPAAppBar title={""} onMenuClick={() => setDrawerOpen(true)}/>*/}
                {createRoutes(location)}
                <Drawer
                    theme={theme}
                    location={location}
                    onDismiss={() => setDrawerOpen(false)}
                    anchor={"left"}
                    open={drawerOpen}
                    ModalProps={{onBackdropClick: () => setDrawerOpen(false)}}/>
                <PagePicker />
            </Column>
        </ThemeProvider>
    )
}
