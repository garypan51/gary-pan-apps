import styled from "styled-components"
import {Theme} from "../../resources/Theme";

interface IProps {
    theme: Theme
    width?: string
    height?: string
    backgroundColor?: string
    justifyContent?: string
    alignItems?: string
    padding?: string
}

export const Row = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: ${(props: IProps) => props.justifyContent ?? "flex-start"};
    align-items: ${(props: IProps) => props.alignItems ?? "flex-start"};
    padding: ${(props: IProps) => props.padding ?? "0"};
    width: ${(props: IProps) => props.width ? props.width : "auto"};
    height: ${(props: IProps) => props.height ? props.height : "auto"};
    background-color: ${(props: IProps) => props.backgroundColor || props.theme.primaryColorDark};
`
