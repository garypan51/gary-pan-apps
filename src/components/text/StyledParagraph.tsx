import React from "react"
import './StyledText.scss'
import {TextProps} from "./TextProps";

export const StyledParagraph = (props: TextProps) => {
    return (
        <p className="StyledParagraph">{props.children}</p>
    )
}
