import React from 'react'

import styled from "styled-components";
import {Theme} from "../../resources/Theme";
import {Drawer as MaterialDrawer, DrawerProps, IconButton, Tooltip} from "@material-ui/core";
import {Row} from "../flexbox/Row";
import LightsOffIcon from "@material-ui/icons/EmojiObjectsOutlined";
import {Colors} from "../../resources/Colors";
import LightsOnIcon from "@material-ui/icons/EmojiObjects";
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../redux/store";
import {setDarkMode} from "../../redux/actions/AppActions";
import {Column} from "../flexbox/Column";

interface IProps extends DrawerProps {
    theme: Theme
    backgroundColor?: string
    width?: string
    height?: string
}

const StyledMaterialDrawer = styled(MaterialDrawer)`
    &.drawer {
        background-color: ${Colors.clearColor};
        width: 250px;
    };
    &.paper {
        color: ${Colors.clearColor};
    };
`

const StyledIconButton = styled(IconButton)`
    &.iconButton {
     :hover {
          background-color: ${props => props.theme.rippleColor};
        }
    }
`

export const Drawer = (props: IProps) => {
    const dispatch = useDispatch()
    const darkModeEnabled = useSelector((state: StoreState) => state.app.darkModeEnabled)
    const lightIcon = darkModeEnabled ? <LightsOffIcon style={{fill: Colors.dark.textColor}}/> : <LightsOnIcon style={{fill: Colors.light.textColor}}/>

    const toggleDarkMode = () => {
        dispatch(setDarkMode(!darkModeEnabled))
    }

    return (
        <StyledMaterialDrawer classes={{root: "drawer", paper: "paper"}} {...props}>
            <Column height={"100%"}>
                <Row width={"250px"}>
                    <Tooltip title="Lights">
                        <StyledIconButton
                            classes={{root: "iconButton"}}
                            aria-label="Lights"
                            onClick={() => toggleDarkMode()}>
                            {lightIcon}
                        </StyledIconButton>
                    </Tooltip>
                </Row>
            </Column>
        </StyledMaterialDrawer>
    )
}
