import styled from "styled-components"
import {Colors} from "../../resources/Colors"
import {Theme} from "../../resources/Theme";

interface IProps {
    theme: Theme
    width?: string
    height?: string
    backgroundColor?: string
}

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: ${(props: IProps) => props.width ? props.width : "auto"};
    height: ${(props: IProps) => props.height ? props.height : "auto"};
    background-color: ${(props: IProps) => props.backgroundColor || Colors.dark.primaryColor};
`
