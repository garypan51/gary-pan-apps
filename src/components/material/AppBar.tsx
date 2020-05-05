import React from 'react';
import MaterialAppBar, {AppBarProps} from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import styled from "styled-components";
import {Colors} from "../../resources/Colors";

interface BaseAppBarProps extends AppBarProps {

}

interface StyledMaterialAppBarProps {
    backgroundColor?: string
}

interface BaseAppBarProps {

}

const StyledMaterialAppBar = styled(MaterialAppBar)`
    &.app-bar {
        background-color: ${(props: StyledMaterialAppBarProps) => props.backgroundColor};
    }
`

const BaseAppBar = (props: BaseAppBarProps) => {
    return (
        <StyledMaterialAppBar classes={{root: "app-bar"}} backgroundColor={Colors.dark.primaryColorDark} position="static">
            <Toolbar>
                {props.children}
            </Toolbar>
        </StyledMaterialAppBar>
    );
}

export const AppBar = styled(BaseAppBar)`
`
