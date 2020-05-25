import styled from "styled-components"
import {Theme} from "../../resources/Theme"

interface IProps {
    theme: Theme
    fontSize?: string
    textColor?: string
    margin?: string
}

export const Paragraph = styled.p`
    font-family:Muli, sans-serif;
    font-size:${(props: IProps) => props.fontSize ?? "14px"};
    color:${(props: IProps) => props.textColor ?? props.theme.textColor};
    padding:0;
    line-height:40px;
    margin:${(props: IProps) => props.margin ?? "0"};
`
