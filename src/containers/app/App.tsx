import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../redux/store"
import {BrowserRouter} from "react-router-dom";
import {GPAAppBar} from "./GPAAppBar";
import {ThemeProvider} from "styled-components";
import {DarkTheme, LightTheme} from "../../resources/Theme";
import {Column} from "../../components/flexbox/Column";
import {SourceCodeLink} from "./SourceCodeLink";
import {setShowSourceCodeLink} from "../../redux/actions/AppActions";

const SHOW_SOURCE_CODE_LINK_DELAY = 5000

interface IProps {
    routes?: any
}

export const App = (props: IProps) => {
    const dispatch = useDispatch()
    const darkModeEnabled = useSelector((state: StoreState) => state.app.darkModeEnabled)
    const showSourceCodeLink = useSelector((state: StoreState) => state.app.showSourceCodeLink)

    useEffect(() => {
        const showSourceCodeTimeout = setTimeout(() => dispatch(setShowSourceCodeLink(true)), SHOW_SOURCE_CODE_LINK_DELAY)
        return () => { clearTimeout(showSourceCodeTimeout) }
    }, [dispatch])

    return (
        <ThemeProvider theme={darkModeEnabled ? DarkTheme : LightTheme}>
            <Column width={"100%"} height={"100%"}>
                <BrowserRouter>
                    <GPAAppBar/>
                    {props.routes}
                </BrowserRouter>
                {showSourceCodeLink &&
                    <SourceCodeLink onDismiss={() => {dispatch(setShowSourceCodeLink(false))}}/>
                }
            </Column>
        </ThemeProvider>
    )
}
