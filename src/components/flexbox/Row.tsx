import styled from "styled-components"
import {Colors} from "../../resources/Colors"

interface IProps {
    width?: string
    height?: string
    backgroundColor?: string
}

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: ${(props: IProps) => props.width ? props.width : "auto"};
    height: ${(props: IProps) => props.height ? props.height : "auto"};
    background-color: ${(props: IProps) => props.backgroundColor || Colors.dark.primaryColor};
`
