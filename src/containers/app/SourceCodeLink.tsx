import {Links} from "../../resources/Links";
import {Paragraph} from "../../components/text/Paragraph";
import {t} from "../../strings/i18n";
import React, {useContext, useState} from "react";
import styled, {ThemeContext} from "styled-components";
import {Paper} from "../../components/presentational/Paper";
import {Column} from "../../components/flexbox/Column";
import {Row} from "../../components/flexbox/Row";
import {Colors} from "../../resources/Colors";

interface IProps {
    onDismiss?: () => void
}

const SrcCodeLinkContainer = styled(Paper)`
    position: absolute;
    bottom: 24px;
    right: 24px;
    padding: 0px 8px;
`

const Link = styled.a`
    text-decoration: none;
`

export const SourceCodeLink = (props: IProps) => {
    const [contentText, setContentText] = useState(t("app.sourceCodeTitle"))
    const theme = useContext(ThemeContext)

    return (
        <SrcCodeLinkContainer
            backgroundColor={theme.secondaryColor}
            width={"200px"}
            height={"60px"}
            onMouseEnter={() => setContentText(t("app.sourceCodeTitle"))}
            onMouseLeave={() => setContentText(t("app.sourceCodeTitle"))}>
            <Row
                backgroundColor={Colors.clearColor}
                alignItems={"flex-start"}>
                <Column
                    backgroundColor={Colors.clearColor}
                    width={"200px"}>
                    <Link href={Links.sourceCode} target="_blank" rel="noopener noreferrer">
                        <Paragraph fontSize={"12px"}>{contentText}</Paragraph>
                    </Link>
                </Column>
                <Column
                    backgroundColor={Colors.clearColor}
                    padding={"10px 4px"}>
                    <button onClick={props.onDismiss}>Dismiss</button>
                </Column>
            </Row>
        </SrcCodeLinkContainer>
    )
}
