import React from 'react'
import MaterialPaper, {PaperProps} from '@material-ui/core/Paper'
import styled from "styled-components";
import {Theme} from "../../resources/Theme";

interface IProps extends PaperProps {
    theme: Theme
    backgroundColor: string
    width?: string
    height?: string
    cursor?: string
}

const StyledMaterialPaper = styled(MaterialPaper)`
    &.paper {
        background-color: ${(props: IProps) => props.backgroundColor ?? props.theme.secondaryColor};
        width: ${(props: IProps) => props.width ?? "auto"};
        height: ${(props: IProps) => props.height ?? "auto"};
        cursor: ${(props: IProps) => props.cursor};
        overflow: hidden;
    };
`

export const BasePaper = ({theme, backgroundColor, width, height, cursor, ...rest}: IProps) => {
    return (
        <StyledMaterialPaper
            classes={{root: "paper"}}
            variant={"elevation"}
            theme={theme}
            backgroundColor={backgroundColor}
            width={width}
            height={height}
            cursor={cursor}
            {...rest}>
        </StyledMaterialPaper>
    )
}

BasePaper.defaultProps = {
    elevation: 0
}

export const Paper = styled(BasePaper)`
`
