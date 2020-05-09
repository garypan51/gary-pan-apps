import styled from "styled-components"
import {Theme} from "../../resources/Theme"

interface IProps {
    theme: Theme
    type?: "normal" | "large"
    fontSize?: string
    textColor?: string
}

export const Header = styled.h1`
    font-family: Muli, sans-serif;
    font-size: ${(props: IProps) => props.type === "normal" ? "30px" : "60px"};
    color: ${(props: IProps) => props.textColor ?? props.theme.textColor};
`

Header.defaultProps = {
    type: "normal"
}
