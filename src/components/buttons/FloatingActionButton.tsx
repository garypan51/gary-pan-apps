import React, {ReactNode} from "react"
import styled from "styled-components";
import {Colors} from "../../resources/Colors";
import {Theme} from "../../resources/Theme";
import {Fab} from "@material-ui/core";

interface IProps {
    theme: Theme
    fontSize?: string
    textColor?: string
    buttonText?: string
    backgroundColor?: string
    children?: ReactNode
}

const StyledFab = styled(Fab)`
`

export const FloatingActionButton = (props: IProps) => {

    return (
        <StyledFab>
            {props.children}
        </StyledFab>
    )
}
