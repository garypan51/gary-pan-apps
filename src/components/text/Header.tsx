import React, {ReactNode} from "react"
import styled from "styled-components"
import {Theme} from "../../resources/Theme"

interface IProps {
    theme?: Theme
    type?: "normal" | "large"
    fontSize?: string
    textColor?: string
    margin?: string
    children: ReactNode
    cursor?: string
    onHoverColor?: string
}

export const StyledHeader = styled.h1`
    font-family: Muli, sans-serif;
    font-size: ${(props: IProps) => props.fontSize ?? "30px"};
    color: ${(props: IProps) => props.textColor ?? props.theme?.textColor};
    text-align: center;
    padding: 0;
    cursor: ${(props: IProps) => props.cursor ?? undefined};
    margin:${(props: IProps) => props.margin ?? "0"};
    transition: 0.3s;
    :hover {
        color: ${(props: IProps) => props.onHoverColor ?? props.theme?.textColor};
    }
`

export const Header = (props: IProps) => {
    return <StyledHeader {...props}
    onMouseEnter={() => {}}/>
}
