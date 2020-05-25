import {Links} from "../../resources/Links";
import {Paragraph} from "../text/Paragraph";
import {t} from "../../strings/i18n";
import React, {useContext, useState} from "react";
import styled, {ThemeContext} from "styled-components";
import {Paper} from "./Paper";
import {Column} from "../flexbox/Column";
import {Row} from "../flexbox/Row";
import {CSSTransition} from 'react-transition-group';

interface IProps {
    onDismiss?: () => void
    show: boolean
}

const SrcCodeLinkContainer = styled(Paper)`
    position: absolute;
    bottom: 24px;
    right: 24px;
    padding: 0px 8px;

    &.root-enter {
      opacity: 0;
    }
    &.root-enter-active {
      opacity: 1;
      transition: opacity 500ms;
    }
    &.root-exit {
      opacity: 1;
    }
    &.root-exit-active {
      opacity: 0;
      transition: opacity 500ms;
    }
`

const Link = styled.a`
    text-decoration: none;
`

export const SourceCodeLink = (props: IProps) => {
    const [contentText, setContentText] = useState(t("app.sourceCodeTitle"))
    const theme = useContext(ThemeContext)

    return (
        <CSSTransition
            in={props.show}
            timeout={500}
            unmountOnExit
            classNames={"root"}>
            <SrcCodeLinkContainer
                backgroundColor={theme.secondaryColor}
                width={"200px"}
                height={"60px"}
                onMouseEnter={() => setContentText(t("app.sourceCodeTitle"))}
                onMouseLeave={() => setContentText(t("app.sourceCodeTitle"))}>
                <Row
                    transparent
                    alignItems={"flex-start"}>
                    <Column
                        transparent
                        width={"200px"}>
                        <Link href={Links.sourceCode} target="_blank" rel="noopener noreferrer">
                            <Paragraph fontSize={"12px"}>{contentText}</Paragraph>
                        </Link>
                    </Column>
                    <Column
                        transparent
                        padding={"10px 4px"}>
                        <button onClick={props.onDismiss}>Dismiss</button>
                    </Column>
                </Row>
            </SrcCodeLinkContainer>
        </CSSTransition>
    )
}
