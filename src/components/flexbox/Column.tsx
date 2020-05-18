import React from "react"
import styled from "styled-components"
import {DarkTheme, Theme} from "../../resources/Theme";
import {Colors} from "../../resources/Colors";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    theme?: Theme
    flex?: number | string
    width?: string
    height?: string
    transparent?: boolean
    backgroundColor?: string
    justifyContent?: string
    alignItems?: string
    padding?: string
    margin?: string
}

const StyledColumn = styled.div`
    box-sizing: border-box;
    display: flex;
    flex: ${(props: IProps) => props.flex ?? undefined};
    flex-direction: column;
    justify-content: ${(props: IProps) => props.justifyContent ?? "flex-start"};
    align-items: ${(props: IProps) => props.alignItems ?? "flex-start"};
    padding: ${(props: IProps) => props.padding ?? "0"};
    margin: ${(props: IProps) => props.margin ?? "0"};
    width: ${(props: IProps) => props.width ? props.width : "auto"};
    height: ${(props: IProps) => props.height ? props.height : "auto"};
    background-color: ${(props: IProps) => props.transparent ? Colors.clearColor : props.backgroundColor ?? props.theme?.primaryColor};
`

export const Column = (props: IProps) => {
    return (
        <StyledColumn {...props}/>
    )
}
