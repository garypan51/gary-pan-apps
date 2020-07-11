import React, {ReactNode, useState} from 'react';
import {useSelector} from "react-redux";
import {StoreState} from "../../redux/store"
import {useLocation} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {DarkTheme, LightTheme} from "../../resources/Theme";
import {Column} from "../../components/flexbox/Column";
import {Drawer} from "../../components/containers/Drawer";
import {GPAAppBar} from "./GPAAppBar";
import {useOnMobile} from "../../hooks/UseOnMobile";

interface IProps {
    routes: ReactNode
}

export const App = (props: IProps) => {
    const location = useLocation()
    const onMobile = useOnMobile()
    const darkModeEnabled = useSelector((state: StoreState) => state.app.darkModeEnabled)
    const theme = darkModeEnabled ? DarkTheme : LightTheme
    const [drawerOpen, setDrawerOpen] = useState(false)

    return (
        <ThemeProvider theme={theme}>
            <Column
                overflowX={"hidden"}
                backgroundColor={theme.primaryColor}
                position={"relative"}
                width={"100%"}>
                { onMobile &&
                    <GPAAppBar onMenuClick={() => setDrawerOpen(true)}/>
                }
                {props.routes}
                { onMobile &&
                    <Drawer
                        theme={theme}
                        location={location}
                        onDismiss={() => setDrawerOpen(false)}
                        anchor={"right"}
                        open={drawerOpen}
                        ModalProps={{onBackdropClick: () => setDrawerOpen(false)}}/>
                }
            </Column>
        </ThemeProvider>
    )
}
