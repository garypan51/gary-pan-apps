import React from 'react'
import {Column} from "../../components/flexbox/Column"
import {Header} from "../../components/text/Header"

import {Modal} from "../../components/presentational/Modal";
import styled from "styled-components";

interface IProps {
    open: boolean
    onClose: () => void
}

const ModalContentContainer = styled(Column)`
    position: absolute;
    top: 10%;
    bottom: 2%;
    left: 2%;
    right: 2%;
`

export const ProjectModal = (props: IProps) => {
    return (
        <Modal
            open={props.open}
            onClose={props.onClose}>
            <ModalContentContainer>
                <Header>Hello</Header>
            </ModalContentContainer>
        </Modal>
    )
}
