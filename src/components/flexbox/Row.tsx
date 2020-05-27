import styled from "styled-components"
import {Theme} from "../../resources/Theme";
import React from "react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    forwardRef?: any
    theme?: Theme
    overflow?: string
    position?: string
    flex?: number | string
    width?: string
    height?: string
    backgroundColor?: string
    justifyContent?: string
    alignItems?: string
    padding?: string
    margin?: string
}

const StyledRow = styled.div`
    box-sizing: border-box;
    overflow: ${(props: IProps) => props.overflow ?? "hidden"};
    position: ${(props: IProps) => props.position ?? undefined};
    display: flex;
    flex: ${(props: IProps) => props.flex ?? undefined};
    flex-direction: row;
    justify-content: ${(props: IProps) => props.justifyContent ?? "flex-start"};
    align-items: ${(props: IProps) => props.alignItems ?? "flex-start"};
    padding: ${(props: IProps) => props.padding ?? "0"};
    margin: ${(props: IProps) => props.margin ?? "0"};
    width: ${(props: IProps) => props.width ? props.width : "auto"};
    height: ${(props: IProps) => props.height ? props.height : "auto"};
    background-color: ${(props: IProps) => props.backgroundColor};
`

export const Row = (props: IProps) => {
    return (
        <StyledRow ref={props.forwardRef} {...props}/>
    )
}
