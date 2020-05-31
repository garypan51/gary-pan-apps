import React, {ReactNode} from "react"
import styled from "styled-components"
import {Theme} from "../../resources/Theme"

interface IProps {
    theme?: Theme
    fontSize?: string
    textColor?: string
    margin?: string
    children: ReactNode
    cursor?: string
    textAlign?: string
    onHoverColor?: string
}

const StyledParagraph = styled.p`
    font-family:Muli, sans-serif;
    font-size:${(props: IProps) => props.fontSize ?? "14px"};
    color:${(props: IProps) => props.textColor ?? props.theme?.textColor};
    text-align: ${(props: IProps) => props.textAlign ?? undefined};
    padding: 0;
    margin:${(props: IProps) => props.margin ?? "0"};
    cursor: ${(props: IProps) => props.cursor ?? undefined};
    :hover {
        color: ${(props: IProps) => props.onHoverColor ?? props.theme?.textColor};
    }
`

export const Paragraph = (props: IProps) => {
    return <StyledParagraph {...props}/>
}
