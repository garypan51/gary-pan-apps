import React, {ReactNode, useState} from 'react';
import {useSelector} from "react-redux";
import {StoreState} from "../../redux/store"
import {useLocation} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {DarkTheme, LightTheme} from "../../resources/Theme";
import {Column} from "../../components/flexbox/Column";
import {Drawer} from "../../components/containers/Drawer";
import {ProjectPicker} from "../projects/components/projectPicker/ProjectPicker";
import {NavigationBar} from "./NavigationBar";

interface IProps {
    routes: ReactNode
}

export const App = (props: IProps) => {
    const location = useLocation()
    const darkModeEnabled = useSelector((state: StoreState) => state.app.darkModeEnabled)
    const theme = darkModeEnabled ? DarkTheme : LightTheme
    const [drawerOpen, setDrawerOpen] = useState(false)

    return (
        <ThemeProvider theme={theme}>
            <Column
                backgroundColor={theme.primaryColor}
                position={"relative"}
                width={"100%"}
                height={"100vh"}>
                <NavigationBar />
                {/*<GPAAppBar title={""} onMenuClick={() => setDrawerOpen(true)}/>*/}
                {props.routes}
                <Drawer
                    theme={theme}
                    location={location}
                    onDismiss={() => setDrawerOpen(false)}
                    anchor={"left"}
                    open={drawerOpen}
                    ModalProps={{onBackdropClick: () => setDrawerOpen(false)}}/>
                {/*<ProjectPicker theme={theme}/>*/}
            </Column>
        </ThemeProvider>
    )
}
