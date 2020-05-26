import React from "react"
import {AppBar} from "../../components/presentational/AppBar"
import {t} from "../../strings/i18n"
import {Header} from "../../components/text/Header"
import MenuIcon from "@material-ui/icons/MenuRounded"
import styled from "styled-components";
import {IconButton, Tooltip} from "@material-ui/core";
import {Colors} from "../../resources/Colors";
import linkedInImgSrc from "../../resources/images/linkedIn.png"
import githubImgSrc from "../../resources/images/github-dark.png"
import githubImgSrcLight from "../../resources/images/github-light.png"
import mediumImgSrc from "../../resources/images/medium-black.svg"
import mediumImgSrcLight from "../../resources/images/medium-white.svg"
import {Row} from "../../components/flexbox/Row";
import {Links} from "../../resources/Links";
import {useSelector} from "react-redux";
import {StoreState} from "../../redux/store";
import {Avatar} from "../../components/presentational/Avatar";
import {useOnMobile} from "../../hooks/UseOnMobile";

interface IProps {
    title?: string
    onMenuClick?: () => void
}

const StyledAppBar = styled(AppBar)`
    width: 100%;
    padding: 12px 16px 12px 12px;
`

const AppBarTitle = styled(Header)`
    margin-left: 16px;
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
    const onMobile = useOnMobile()

    const menuIcon = darkModeEnabled ? <MenuIcon style={{fill: Colors.dark.textColor}}/> : <MenuIcon style={{fill: Colors.light.textColor}}/>
    const githubImageSrc = darkModeEnabled ? githubImgSrcLight : githubImgSrc
    const mediumImageSrc = darkModeEnabled ? mediumImgSrcLight : mediumImgSrc

    return (
        <StyledAppBar className={"gpa-appbar"}>
            <Row
                transparent
                alignItems={"center"}>
                <Tooltip title={"Menu"}>
                    <StyledIconButton
                        classes={{root: "iconButton"}}
                        aria-label="Menu"
                        onClick={props.onMenuClick}>
                        {menuIcon}
                    </StyledIconButton>
                </Tooltip>
                <AppBarTitle>{props.title}</AppBarTitle>
            </Row>
            <Row transparent alignItems={"center"} padding={"8px 0 8px 8px"}>
                <Avatar width={"40px"} height={"36px"} imgSrc={linkedInImgSrc} href={Links.linkedIn} margin={"0 32px 0 0"}/>
                <Avatar width={"36px"} height={"36px"} imgSrc={githubImageSrc} href={Links.github} margin={"0 32px 0 0"}/>
                { !onMobile &&
                    <Avatar width={"60px"} imgSrc={mediumImageSrc} href={Links.medium} margin={"0 10px 0 0"}/>
                }
            </Row>
        </StyledAppBar>
    )
}
