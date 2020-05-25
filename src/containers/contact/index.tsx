import React from 'react'
import {Column} from "../../components/flexbox/Column"
import {Header} from "../../components/text/Header"
import {t} from "../../strings/i18n"

export const Contact = () => {
    return (
        <Column padding={"0 16px"}>
            <Header type={"large"}>{t("contact.title")}</Header>
        </Column>
    );
}
