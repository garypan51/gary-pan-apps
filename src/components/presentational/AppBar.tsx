import React, {ReactNode} from 'react';
import {Theme} from "../../resources/Theme";
import {Row} from '../flexbox/Row';

interface IProps {
    theme: Theme
    backgroundColor?: string
    children?: ReactNode
    className?: string
}

export const AppBar = (props: IProps) => {
    return (
        <Row
            className={props.className}
            justifyContent={"space-between"}
            alignItems={"center"}
            padding={"0 16px"}>
            {props.children}
        </Row>
    )
}
