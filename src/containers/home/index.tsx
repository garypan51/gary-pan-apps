import React from 'react';
import {Column} from "../../components/flexbox/Column";
import {HeroSection} from "./HeroSection";
import sun from "../../resources/images/home/sun-logo.svg"
import mobile from "../../resources/images/home/mobile-watermark.svg"
import web from "../../resources/images/home/web-watermark.svg"
import styled from "styled-components";
import {Colors} from "../../resources/Colors";
import {useWindowSize} from "../../hooks/UseWindowSize";
import {IconButton, Tooltip} from "@material-ui/core";
import {Image} from "../../components/presentational/Image";
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../redux/store";
import {setDarkMode} from "../../redux/actions/AppActions";

const ThemeSwitcherContainer = styled(Column)`
`

const StyledImage = styled.img`
    background-color: ${Colors.clearColor}
`
const MobileImageContainer = styled(Column)`
    position: absolute;
    top: 50%;
    left: 5%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
`

const HeroContainer = styled(Column)`
    z-Index:1
`

const WebImageContainer = styled(Column)`
    position: absolute;
    top: 55%;
    left: 85%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
`

const StyledIconButton = styled(IconButton)`
    &.iconButton {
     :hover {
          background-color: ${props => props.theme.rippleColor};
        }
    }
`

export const Home = () => {
    const windowSize = useWindowSize()
    const dispatch = useDispatch()
    const darkModeEnabled = useSelector((state: StoreState) => state.app.darkModeEnabled)

    const toggleDarkMode = () => {
        dispatch(setDarkMode(!darkModeEnabled))
    }
    const heroSectionTopMargin = (windowSize.height ?? 0) * 0.05

    return (
        <Column
            width={"100vw"}
            height={"100vh"}>
            <ThemeSwitcherContainer padding={"16px"}>
                <Tooltip title="Too Dark?">
                    <StyledIconButton
                        classes={{root: "iconButton"}}
                        onClick={toggleDarkMode}>
                        <Image src={sun}/>
                    </StyledIconButton>
                </Tooltip>
            </ThemeSwitcherContainer>
            <MobileImageContainer>
                <Image src={mobile} opacity={darkModeEnabled ? 0.15 : 0.5}/>
            </MobileImageContainer>
            <HeroContainer
                backgroundColor={Colors.clearColor}
                width={"100vw"}
                height={"100vh"}
                alignItems={"center"}
                padding={`${heroSectionTopMargin}px 0 0 0`}>
                <HeroSection className={"HeroSection"}/>
            </HeroContainer>
            <WebImageContainer>
                <Image src={web} opacity={darkModeEnabled ? 0.15 : 0.5}/>
            </WebImageContainer>
        </Column>
    )
}

