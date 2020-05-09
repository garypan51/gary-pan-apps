import React from 'react';
import MaterialAppBar, {AppBarProps} from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import styled from "styled-components";
import {Theme} from "../../resources/Theme";

interface BaseAppBarProps extends AppBarProps {

}

interface StyledMaterialAppBarProps {
    theme: Theme
    backgroundColor?: string
}

interface BaseAppBarProps {

}

const StyledMaterialAppBar = styled(MaterialAppBar)`
    &.app-bar {
        background-color: ${(props: StyledMaterialAppBarProps) => props.backgroundColor ?? props.theme.primaryColorDark};
    }
`

const StyledToolbar = styled(Toolbar)`
    &.toolbar {
        justify-content: space-between
    }
`

const BaseAppBar = (props: BaseAppBarProps) => {
    return (
        <StyledMaterialAppBar classes={{root: "app-bar"}} position="static">
            <StyledToolbar classes={{root: "toolbar"}}>
                {props.children}
            </StyledToolbar>
        </StyledMaterialAppBar>
    );
}

export const AppBar = styled(BaseAppBar)`
`
