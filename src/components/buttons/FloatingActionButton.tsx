import React, {ReactNode} from "react"
import styled from "styled-components";
import {Theme} from "../../resources/Theme";
import {Fab, FabProps} from "@material-ui/core";

interface IProps extends FabProps {
    theme: Theme
    fontSize?: string
    textColor?: string
    buttonText?: string
    backgroundColor?: string
    children?: ReactNode
}

const StyledFab = styled(Fab)`
    &.fab {
        width: 40px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
`

export const FloatingActionButton = (props: IProps) => {
    return (
        <StyledFab classes={{root: "fab"}} {...props}>
            {props.children}
        </StyledFab>
    )
}
