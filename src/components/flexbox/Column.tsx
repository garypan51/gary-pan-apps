import styled from "styled-components"
import {Theme} from "../../resources/Theme";

interface IProps {
    theme: Theme
    width?: string
    height?: string
    backgroundColor?: string
}

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props: IProps) => props.width ? props.width : "auto"};
    height: ${(props: IProps) => props.height ? props.height : "auto"};
    background-color: ${(props: IProps) => props.backgroundColor ?? props.theme.primaryColor};
`
