import React from "react"
import {AppBar} from "../../components/presentational/AppBar"
import {t} from "../../strings/i18n"
import {Header} from "../../components/text/Header"
import LightsOnIcon from "@material-ui/icons/EmojiObjects"
import LightsOffIcon from "@material-ui/icons/EmojiObjectsOutlined"
import styled from "styled-components";
import {IconButton, Tooltip} from "@material-ui/core";
import {Colors} from "../../resources/Colors";
import linkedInImageSrc from "../../resources/images/linkedIn.png"
import githubImageSrc from "../../resources/images/github-dark.png"
import githubImageSrcLight from "../../resources/images/github-light.png"
import {Row} from "../../components/flexbox/Row";
import {Links} from "../../resources/Links";
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../redux/store";
import {setDarkMode} from "../../redux/actions/AppActions";
import {Avatar} from "../../components/presentational/Avatar";

interface IProps {
}

const StyledAppBar = styled(AppBar)`
    width: 100%;
    padding: 16px 16px;
`

const StyledIconButton = styled(IconButton)`
    &.iconButton {
     :hover {
          background-color: ${props => props.theme.rippleColor};
        }
    }
`

export const GPAAppBar = (props: IProps) => {
    const dispatch = useDispatch()
    const darkModeEnabled = useSelector((state: StoreState) => state.app.darkModeEnabled)

    const lightIcon = darkModeEnabled ? <LightsOffIcon style={{fill: Colors.dark.textColor}}/> : <LightsOnIcon style={{fill: Colors.light.textColor}}/>
    const ghImageSrc = darkModeEnabled ? githubImageSrcLight : githubImageSrc

    const toggleDarkMode = () => {
        dispatch(setDarkMode(!darkModeEnabled))
    }

    return (
        <StyledAppBar className={"gpa-appbar"}>
            <Header>{t("app.name")}</Header>
            <Row backgroundColor={Colors.clearColor} alignItems={"center"}>
                <Avatar width={"40px"} height={"36px"} imgSrc={linkedInImageSrc} url={Links.linkedIn}/>
                <Avatar width={"36px"} height={"36px"} imgSrc={ghImageSrc} url={Links.linkedIn}/>
                <Tooltip title="Lights">
                    <StyledIconButton
                        classes={{root: "iconButton"}}
                        aria-label="Lights"
                        onClick={() => toggleDarkMode()}>
                        {lightIcon}
                    </StyledIconButton>
                </Tooltip>
            </Row>
        </StyledAppBar>
    )
}
