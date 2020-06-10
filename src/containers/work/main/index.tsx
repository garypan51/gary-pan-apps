import React, {useContext, useEffect} from 'react'
import {Column} from "../../../components/flexbox/Column"
import {Header} from "../../../components/text/Header"
import {ThemeContext} from "styled-components";
import {t} from "../../../strings/i18n";
import {Paragraph} from "../../../components/text/Paragraph";
import {useDispatch} from "react-redux";
import {setAppBarTitle} from "../../../redux/actions/AppActions";
import {ProjectPicker} from "./components/projectPicker/ProjectPicker";

export const Projects = () => {
    const theme = useContext(ThemeContext)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAppBarTitle(t("work.title")))
    }, [])

    return (
        <Column height={"88vh"}>
            <Header margin={"0 16px"}>{t("work.title")}</Header>
            <Header margin={"0 16px"}>{t("work.mobile")}</Header>
            <Header margin={"0 16px"}>{t("work.web")}</Header>
            <ProjectPicker theme={theme}/>
        </Column>
    )
}
