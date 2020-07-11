import React from 'react';
import {Column} from "../../components/flexbox/Column";
import {HeroSection} from "./HeroSection";
import sun from "../../resources/images/home/sun-logo.svg"
import mobile from "../../resources/images/home/mobile-watermark.svg"
import web from "../../resources/images/home/web-watermark.svg"
import styled from "styled-components";
import {IconButton, Tooltip} from "@material-ui/core";
import {Image} from "../../components/presentational/Image";
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../redux/store";
import {setDarkMode} from "../../redux/actions/AppActions";
import {HomeNavigationButtons} from "./HomeNavigationButtons";
import {useOnMobile} from "../../hooks/UseOnMobile";
import {WebMobileProps} from "../../props/CommonProps";

const MobileImageContainer = styled(Column)`
    position: absolute;
    top: ${(props: WebMobileProps) => props.onMobile ? "35%" : "50%"};
    left: ${(props: WebMobileProps) => props.onMobile ? "25%" : "5%"};
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
`

const WebImageContainer = styled(Column)`
    position: absolute;
    top: ${(props: WebMobileProps) => props.onMobile ? "85%" : "55%"};
    left: ${(props: WebMobileProps) => props.onMobile ? "55%" : "85%"};
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
`

const ThemeSwitcherContainer = styled(Column)`
    padding: 1rem 0 1rem 1rem;
`

const ThemeSwitcherButton = styled(IconButton)`
    &.iconButton {
        :hover {
            background-color: ${props => props.theme.rippleColor};
        }
    }
`

const HeroContainer = styled(Column)`
    z-Index: 1;
    margin: ${(props: WebMobileProps) => props.onMobile ? "8px 5%" : "0 15%"};
`

const HomeNavigationButtonsContainer = styled(Column)`
    z-Index: 1;
    width: 100%;
    padding: ${(props: WebMobileProps) => props.onMobile ? "32px 5% 0 5%" : "130px 15% 0 15%"};
`

export const Home = () => {
    const dispatch = useDispatch()
    const onMobile = useOnMobile()
    const darkModeEnabled = useSelector((state: StoreState) => state.app.darkModeEnabled)

    const toggleDarkMode = () => {
        dispatch(setDarkMode(!darkModeEnabled))
    }

    return (
        <Column
            width={"100vw"}>
            { !onMobile &&
                <ThemeSwitcherContainer>
                    <Tooltip title={darkModeEnabled ? "Too Dark?" : "Too Bright?"}>
                        <ThemeSwitcherButton
                            classes={{root: "iconButton"}}
                            onClick={toggleDarkMode}>
                            <Image src={sun}/>
                        </ThemeSwitcherButton>
                    </Tooltip>
                </ThemeSwitcherContainer>
            }
            <MobileImageContainer onMobile={onMobile}>
                <Image src={mobile} width={onMobile ? "350px" : undefined} opacity={darkModeEnabled ? 0.15 : 0.5}/>
            </MobileImageContainer>
            <HeroContainer onMobile={onMobile}>
                <HeroSection/>
            </HeroContainer>
            <HomeNavigationButtonsContainer onMobile={onMobile}>
                <HomeNavigationButtons/>
            </HomeNavigationButtonsContainer>
            <WebImageContainer onMobile={onMobile}>
                <Image src={web} width={onMobile ? "650px" : undefined} opacity={darkModeEnabled ? 0.15 : 0.5}/>
            </WebImageContainer>
        </Column>
    )
}

