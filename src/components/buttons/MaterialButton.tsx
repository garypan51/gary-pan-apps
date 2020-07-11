import React, {useContext} from "react"
import {Column} from "../flexbox/Column";
import styled, {ThemeContext} from "styled-components";
import {Header} from "../text/Header";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    margin?: string
    onClick?: () => void
}

const StyledColumn = styled(Column)`
    -webkit-user-select: none; 
    -moz-user-select: none;
    -ms-user-select: none;
    box-shadow: 0px 3px 6px;
    border-radius: 20px;
    cursor: pointer;
`

export const MaterialButton = (props: IProps) => {
    const theme = useContext(ThemeContext)

    return (
        <StyledColumn
            margin={props.margin}
            backgroundColor={theme.secondaryColor}
            onClick={props.onClick}>
            <Header fontSize={"22px"} margin={"20px"}>{props.title}</Header>
        </StyledColumn>
    )
}
