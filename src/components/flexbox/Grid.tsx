import React from "react"
import styled from "styled-components"
import {Theme} from "../../resources/Theme";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    forwardRef?: any
    theme?: Theme
    overflow?: string
    position?: string
    flex?: number | string
    width?: string
    height?: string
    backgroundColor?: string
    background?: string
    justifyContent?: string
    alignItems?: string
    padding?: string
    margin?: string
}

const StyledGrid = styled.div`
    // // box-sizing: border-box;
    // // position: ${(props: IProps) => props.position};
    // display: grid;
    // grid-auto-flow: row dense;
    //   grid-template-rows: repeat(3, 1fr);
    //
    // // padding: ${(props: IProps) => props.padding ?? "0"};
    // // margin: ${(props: IProps) => props.margin ?? "0"};
    // // width: ${(props: IProps) => props.width ? props.width : "auto"};
    // // height: ${(props: IProps) => props.height ? props.height : "auto"};
    // // background-color: ${(props: IProps) => props.backgroundColor};
    // // background: ${(props: IProps) => props.background};
    
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.2fr 1.5fr 1.2fr 0.8fr;
    grid-template-areas:
        "text-section text-section text-section"
        "gradientButton0 gradientButton1 gradientButton3"
    grid-gap: 0.2rem;
}
`

export const Grid = (props: IProps) => {
    return (
        <StyledGrid ref={props.forwardRef} {...props}/>
    )
}
