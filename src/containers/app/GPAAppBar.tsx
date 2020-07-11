import React, {ReactNode} from "react"
import MenuIcon from "@material-ui/icons/MenuRounded"
import styled from "styled-components";
import {IconButton} from "@material-ui/core";
import {Colors} from "../../resources/Colors";
import {Row} from "../../components/flexbox/Row";
import {useSelector} from "react-redux";
import {StoreState} from "../../redux/store";

interface AppBarProps {
    backgroundColor?: string
    children?: ReactNode
    className?: string
}

const AppBar = (props: AppBarProps) => {
    return (
        <Row
            className={props.className}
            backgroundColor={Colors.clearColor}
            justifyContent={"flex-end"}
            padding={"0 16px"}>
            {props.children}
        </Row>
    )
}

interface IProps {
    title?: string
    onMenuClick?: () => void
}

const StyledAppBar = styled(AppBar)`
    padding: 12px 16px 12px 12px;
    width: 100vw;
`

const StyledIconButton = styled(IconButton)`
    &.iconButton {
     :hover {
          background-color: ${props => props.theme.rippleColor};
        }
    }
`

export const GPAAppBar = (props: IProps) => {
    const darkModeEnabled = useSelector((state: StoreState) => state.app.darkModeEnabled)
    const menuIcon = darkModeEnabled ? <MenuIcon style={{fill: Colors.dark.textColor}}/> : <MenuIcon style={{fill: Colors.light.textColor}}/>

    return (
        <StyledAppBar className={"gpa-appbar"}>
            <Row>
                <StyledIconButton
                    classes={{root: "iconButton"}}
                    aria-label="Menu"
                    onClick={props.onMenuClick}>
                    {menuIcon}
                </StyledIconButton>
            </Row>
        </StyledAppBar>
    )
}