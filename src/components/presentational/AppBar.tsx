import React, {ReactNode, useContext} from 'react';
import {Row} from '../flexbox/Row';
import {ThemeContext} from "styled-components";
import {Colors} from "../../resources/Colors";

interface IProps {
    backgroundColor?: string
    children?: ReactNode
    className?: string
}

export const AppBar = (props: IProps) => {
    const theme = useContext(ThemeContext)

    return (
        <Row
            className={props.className}
            backgroundColor={Colors.clearColor}
            justifyContent={"space-between"}
            alignItems={"center"}
            padding={"0 16px"}>
            {props.children}
        </Row>
    )
}
