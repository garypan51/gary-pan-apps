import React, {ChangeEvent, useState} from 'react';
import {Provider} from "react-redux";
import store from "../../redux/store"
import {BrowserRouter} from "react-router-dom";
import {GPAAppBar} from "./GPAAppBar";
import {ThemeProvider} from "styled-components";
import {DarkTheme} from "../../resources/Theme";
import {Column} from "../../components/flexbox/Column";

interface IProps {
    routes: any
}

export const App = (props: IProps) => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0)

    const onTabSelected = (event: ChangeEvent<{}>, selectedTabIndex: number) => {
        setSelectedTabIndex(selectedTabIndex)
    }

    return (
        <Provider store={store}>
            <ThemeProvider theme={DarkTheme}>
                <Column width={"100%"} height={"100%"}>
                    <BrowserRouter>
                        <GPAAppBar selectedTabIndex={selectedTabIndex} onTabSelected={onTabSelected}/>
                        {props.routes}
                    </BrowserRouter>
                </Column>
            </ThemeProvider>
        </Provider>
    );
}
