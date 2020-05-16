import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../redux/store"
import {BrowserRouter} from "react-router-dom";
import {GPAAppBar} from "./GPAAppBar";
import {ThemeProvider} from "styled-components";
import {DarkTheme, LightTheme} from "../../resources/Theme";
import {Column} from "../../components/flexbox/Column";
import {SourceCodeLink} from "./SourceCodeLink";
import {setShowAppBar, setShowSourceCodeLink} from "../../redux/actions/AppActions";
import {useSpring, animated} from "react-spring";

const SHOW_SOURCE_CODE_LINK_DELAY = 1000

interface IProps {
    routes?: any
}

export const App = (props: IProps) => {
    const dispatch = useDispatch()
    const darkModeEnabled = useSelector((state: StoreState) => state.app.darkModeEnabled)
    const showAppBar = useSelector((state: StoreState) => state.app.showAppBar)
    const showSourceCodeLink = useSelector((state: StoreState) => state.app.showSourceCodeLink)
    const appBarProps = useSpring({
        config: { mass: 100, clamp: true },
        opacity: 1,
        from: {opacity: 0}
    })

    useEffect(() => {
        const showSourceCodeTimeout = setTimeout(() => {
            dispatch(setShowAppBar(true))
            // dispatch(setShowSourceCodeLink(true))
        }, SHOW_SOURCE_CODE_LINK_DELAY)
        return () => { clearTimeout(showSourceCodeTimeout) }
    }, [dispatch])

    return (
        <ThemeProvider theme={darkModeEnabled ? DarkTheme : LightTheme}>
            <Column width={"100%"} height={"100%"}>
                <BrowserRouter>
                    <GPAAppBar/>
                    {props.routes}
                </BrowserRouter>
                <SourceCodeLink show={showSourceCodeLink} onDismiss={() => {dispatch(setShowSourceCodeLink(false))}}/>
            </Column>
        </ThemeProvider>
    )
}
