import styled from "styled-components"
import {Theme} from "../../resources/Theme"

interface IProps {
    theme: Theme
    fontSize?: string
    textColor?: string
}

export const Paragraph = styled.p`
    font-family: Muli, sans-serif;
    font-size: ${(props: IProps) => props.fontSize ?? "16px"};
    color: ${(props: IProps) => props.textColor ?? props.theme.textColor};
`
