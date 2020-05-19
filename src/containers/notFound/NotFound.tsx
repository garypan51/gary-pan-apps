import React from 'react'
import {Column} from "../../components/flexbox/Column"
import {Header} from "../../components/text/Header"
import {t} from "../../strings/i18n"

export const NotFound = () => {
    return (
        <Column>
            <Header type={"large"}>404 Not Found :(</Header>
        </Column>
    )
}
