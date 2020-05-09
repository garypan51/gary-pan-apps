import React from 'react';
import {Column} from "../../components/flexbox/Column";
import {Header} from "../../components/text/Header";
import {t} from "../../strings/i18n";
import {Row} from "../../components/flexbox/Row";
import {Paragraph} from "../../components/text/Paragraph";
import styled from "styled-components";

const RootColumn = styled(Column)`
    margin: 16px
`

// #paper-row-container {
//     display:inline-block
// }

export const Home = () => {
    return (
        <RootColumn>
            <Header type={"large"}>Coming Soon</Header>
        </RootColumn>
    )
}

