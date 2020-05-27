import React from "react"
import {AppBar} from "../../components/presentational/AppBar"
import {t} from "../../strings/i18n"
import {Header} from "../../components/text/Header"
import MenuIcon from "@material-ui/icons/MenuRounded"
import styled from "styled-components";
import {IconButton, Tooltip} from "@material-ui/core";
import {Colors} from "../../resources/Colors";
import aboutImgSrc from "../../resources/images/about.svg"
import contactImgSrc from "../../resources/images/contact.svg"
import workImgSrc from "../../resources/images/work.svg"
import aboutImgSrcLight from "../../resources/images/about-white.svg"
import contactImgSrcLight from "../../resources/images/contact-white.svg"
import workImgSrcLight from "../../resources/images/work-white.svg"
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
    const aboutImageSrc = darkModeEnabled ? aboutImgSrcLight : aboutImgSrc
    const workImageSrc = darkModeEnabled ? workImgSrcLight : workImgSrc
    const contactImageSrc = darkModeEnabled ? contactImgSrcLight : contactImgSrc

    return (
        <StyledAppBar className={"gpa-appbar"}>
            <Row
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
            <Row alignItems={"center"} padding={"8px 0 8px 8px"}>
                <Tooltip title={"About"}>
                    <Avatar width={"40px"} height={"36px"} imgSrc={aboutImageSrc} href={Links.linkedIn} margin={"0 32px 0 0"}/>
                </Tooltip>
                <Avatar width={"36px"} height={"36px"} imgSrc={workImageSrc} href={Links.github} margin={"0 32px 0 0"}/>
                { !onMobile &&
                <Avatar width={"60px"} imgSrc={contactImageSrc} href={Links.medium} margin={"0 10px 0 0"}/>
                }
            </Row>
        </StyledAppBar>
    )
}


// const menuIcon = darkModeEnabled ? <MenuIcon style={{fill: Colors.dark.textColor}}/> : <MenuIcon style={{fill: Colors.light.textColor}}/>
// const githubImageSrc = darkModeEnabled ? githubImgSrcLight : githubImgSrc
// const mediumImageSrc = darkModeEnabled ? mediumImgSrcLight : mediumImgSrc

// <Avatar width={"40px"} height={"36px"} imgSrc={linkedInImgSrc} href={Links.linkedIn} margin={"0 32px 0 0"}/>
// <Avatar width={"36px"} height={"36px"} imgSrc={githubImageSrc} href={Links.github} margin={"0 32px 0 0"}/>
// { !onMobile &&
// <Avatar width={"60px"} imgSrc={mediumImageSrc} href={Links.medium} margin={"0 10px 0 0"}/>
// }
