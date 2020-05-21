import React from 'react'
import {Column} from "../flexbox/Column";
import {Paragraph} from "../text/Paragraph";
import styled from "styled-components";
import {Theme} from "../../resources/Theme";

interface IProps {
    theme: Theme
    onClick?: () => void
    title?: string
    className?: string
    selected: boolean
}

const StyledColumn = styled(Column)`
    background-color: ${(props: IProps) => props.selected ? props.theme.accentColor : undefined};
    border-radius: 4px;
    padding: 0;
    :hover {
        background-color:  ${(props: IProps) => props.selected ? props.theme.accentColor : props.theme.rippleColor};
        transition: background-color 0.7s;
    }
`

export const DrawerItem = (props: IProps) => {
    return (
        <StyledColumn
            className={props.className}
            onClick={props.onClick}
            width={"100%"}
            selected={props.selected}>
            <Paragraph>{props.title}</Paragraph>
        </StyledColumn>
    )
}
