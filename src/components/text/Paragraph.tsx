import styled from "styled-components";
import {Colors} from "../../resources/Colors";

interface IProps {
    fontSize?: string
    textColor?: string
}

export const Paragraph = styled.p`
    font-family: Muli, sans-serif;
    font-size: ${(props: IProps) => props.fontSize ?? "16px"};
    color: ${(props: IProps) => props.textColor ?? Colors.dark.textColor};
`
