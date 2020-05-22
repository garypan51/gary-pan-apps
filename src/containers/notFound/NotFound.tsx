import React from 'react'
import {Column} from "../../components/flexbox/Column"
import {Header} from "../../components/text/Header"
import {t} from "../../strings/i18n"

export const NotFound = () => {
    return (
        <Column padding={"0 16px"}>
            <Header type={"large"}>404 Not Found :(</Header>
        </Column>
    )
}
