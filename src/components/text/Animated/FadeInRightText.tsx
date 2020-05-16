import React from "react"
import {Row} from "../../flexbox/Row";
import {Colors} from "../../../resources/Colors";
import styled from "styled-components";
import {CSSTransition} from "react-transition-group";

interface IProps {
    show: boolean
    fontSize?: string
    textColor?: string
    text: string
}

interface PProps {
    delay: string
}

const StyledParagraph = styled.p`
    white-space: pre;
    font-size: 40px;
    color: white;    
    &.root-enter {
        opacity: 0;
    }
    &.root-enter-active {
        opacity: 1;
        transition: opacity 2500ms;
        transition-delay: ${(props: PProps) => props.delay};
    }
`

export const FadeInRightText = (props: IProps) => {
    const letters = props.text.split("")

    return (
        <Row width={"auto"} backgroundColor={Colors.clearColor}>
            {letters.map((item, index) =>
                <CSSTransition
                    key={index}
                    in={props.show}
                    timeout={5000}
                    unmountOnExit
                    classNames={"root"}>
                    <StyledParagraph delay={`${index * 100}ms`}>
                        {item}
                    </StyledParagraph>
                </CSSTransition>
            )}
        </Row>
    )
}
