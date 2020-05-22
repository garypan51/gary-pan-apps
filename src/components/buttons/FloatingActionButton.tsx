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
    }
`

export const FloatingActionButton = (props: IProps) => {
    return (
        <StyledFab classes={{root: "fab"}} {...props}>
            {props.children}
        </StyledFab>
    )
}
