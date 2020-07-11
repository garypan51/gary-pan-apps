import React, {ReactNode} from "react"
import styled from "styled-components"
import {Theme} from "../../resources/Theme"

interface IProps {
    theme?: Theme
    fontSize?: string
    textAlign?: string
    textColor?: string
    margin?: string
    children: ReactNode
    cursor?: string
    onHoverColor?: string
}

export const StyledHeader = styled.h1`
    font-family: Muli, sans-serif;
    font-size: ${(props: IProps) => props.fontSize ?? "30px"};
    font-weight: 700;
    color: ${(props: IProps) => props.textColor ?? props.theme?.textColor};
    text-align: ${(props: IProps) => props.textAlign};
    padding: 0;
    cursor: ${(props: IProps) => props.cursor};
    margin:${(props: IProps) => props.margin ?? "0"};
    transition: 0.3s;
    :hover {
        color: ${(props: IProps) => props.onHoverColor};
    }
`

export const Header = (props: IProps) => {
    return <StyledHeader {...props} />
}
