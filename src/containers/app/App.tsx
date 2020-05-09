import React from 'react';
import {useSelector} from "react-redux";
import {StoreState} from "../../redux/store"
import {BrowserRouter} from "react-router-dom";
import {GPAAppBar} from "./GPAAppBar";
import {ThemeProvider} from "styled-components";
import {DarkTheme, LightTheme} from "../../resources/Theme";
import {Column} from "../../components/flexbox/Column";

interface IProps {
    routes?: any
}

export const App = (props: IProps) => {
    const darkModeEnabled = useSelector((state: StoreState) => state.app.darkModeEnabled)

    return (
        <ThemeProvider theme={darkModeEnabled ? DarkTheme : LightTheme}>
            <Column width={"100%"} height={"100%"}>
                <BrowserRouter>
                    <GPAAppBar/>
                    {props.routes}
                </BrowserRouter>
            </Column>
        </ThemeProvider>
    )
}
