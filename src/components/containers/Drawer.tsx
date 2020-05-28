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
import {Paragraph} from "../text/Paragraph";
import {GPAPages} from "../../routes";
import {DrawerItem} from "../presentational/DrawerItem";
import {useHistory} from 'react-router-dom';
import * as H from "history";

interface IProps extends DrawerProps {
    theme: Theme
    location: H.Location
    backgroundColor?: string
    width?: string
    height?: string
    onDismiss?: () => void
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

const DrawerHeaderContainer = styled(Row)`
    border-bottom: 1px solid gray;
    margin-bottom: 2px;
`

const StyledDrawerItem = styled(DrawerItem)`
    margin-left: 4px;
    padding-left: 16px;
    margin-bottom: 4px;
    :hover {
    }
`

export const Drawer = ({theme, location, backgroundColor, width, height, onDismiss, ...rest }: IProps) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const darkModeEnabled = useSelector((state: StoreState) => state.app.darkModeEnabled)
    const lightIcon = darkModeEnabled ? <LightsOffIcon style={{fill: Colors.dark.textColor}}/> : <LightsOnIcon style={{fill: Colors.light.textColor}}/>

    const toggleDarkMode = () => {
        dispatch(setDarkMode(!darkModeEnabled))
    }

    const onDrawerItemClick = (path: string) => {
        history.push(path)
        onDismiss?.()
    }

    return (
        <StyledMaterialDrawer classes={{root: "drawer", paper: "paper"}} {...rest}>
            <Column backgroundColor={theme.primaryColorDark} height={"100%"}>
                <DrawerHeaderContainer width={"250px"} justifyContent={"space-between"} alignItems={"center"} padding={"0 16px"}>
                    <Paragraph>Quick Links</Paragraph>
                    <Tooltip title="Lights">
                        <StyledIconButton
                            classes={{root: "iconButton"}}
                            aria-label="Lights"
                            onClick={() => toggleDarkMode()}>
                            {lightIcon}
                        </StyledIconButton>
                    </Tooltip>
                </DrawerHeaderContainer>
                {
                    GPAPages.map((page, index) =>
                        <StyledDrawerItem
                            key={index}
                            onClick={() => onDrawerItemClick(page.path)}
                            className={"drawer-item"}
                            title={page.name}
                            selected={page.path === location.pathname}
                            selectedTextColor={theme.textColorAlt}/>
                        )
                }
            </Column>
        </StyledMaterialDrawer>
    )
}
