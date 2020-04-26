import React from "react"
import './StyledText.scss'
import {TextProps} from "./TextProps";

interface IProps extends TextProps{
    type: "normal" | "large"
}

export const StyledHeader = (props: IProps) => {
    const style = props.type === "normal"? "styled-header" : "styled-large-header"
    return (
        <h1 className={style}>{props.children}</h1>
    )
}

StyledHeader.defaultProps = {
    type: "normal"
}
