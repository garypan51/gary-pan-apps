import styled from "styled-components";
import {Colors} from "../../resources/Colors";

interface IProps {
    type?: "normal" | "large"
    fontSize?: string
    textColor?: string
}

export const Header = styled.h1`
    font-family: Muli, sans-serif;
    font-size: ${(props: IProps) => props.type === "normal" ? "30px" : "60px"};
    color: ${(props: IProps) => props.textColor ?? Colors.dark.textColor};
`

Header.defaultProps = {
    type: "normal"
}
