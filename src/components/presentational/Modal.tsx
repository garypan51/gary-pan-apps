import React from 'react'
import styled from "styled-components";
import {Theme} from "../../resources/Theme";
import {Modal as MaterialModal, ModalProps} from "@material-ui/core";

interface IProps extends ModalProps {
    theme?: Theme
    backgroundColor?: string
}

const StyledMaterialModal = styled(MaterialModal)`
    &.modal {
        background-color:${(props: IProps) => props.backgroundColor ?? props.theme?.secondaryColor};
    }
`

export const Modal = (props: IProps) => {
    return (
        <StyledMaterialModal classes={{root: "modal"}} {...props}/>
    )
}
