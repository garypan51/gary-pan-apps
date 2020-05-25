import styled from "styled-components"
import {Theme} from "../../resources/Theme"

interface IProps {
    theme: Theme
    type?: "normal" | "large"
    fontSize?: string
    textColor?: string
    margin?: string
}

export const Header = styled.h1`
    font-family: Muli, sans-serif;
    font-size: ${(props: IProps) => props.fontSize ?? "30px"};
    color: ${(props: IProps) => props.textColor ?? props.theme.textColor};
    text-align: center;
    padding: 0;
    margin:${(props: IProps) => props.margin ?? "0"};
`

Header.defaultProps = {
    type: "normal"
}
