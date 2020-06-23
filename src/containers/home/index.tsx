import React from 'react';
import {Column} from "../../components/flexbox/Column";
import {HeroSection} from "./HeroSection";
import mobile from "../../resources/images/mobile.svg"
import web from "../../resources/images/web.svg"
import styled from "styled-components";
import {Colors} from "../../resources/Colors";
import {useWindowSize} from "../../hooks/UseWindowSize";

const StyledContainer = styled(Column)`
`

const MobileImageContainer = styled(Column)`
    position: absolute;
    top: 45%;
    left: 5%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
`

const HeroContainer = styled(Column)`
    z-Index:1
`

const WebImageContainer = styled(Column)`
    position: absolute;
    top: 50%;
    left: 85%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
`

export const Home = () => {
    const windowSize = useWindowSize()

    const heroSectionTopMargin = (windowSize.height ?? 0) * 0.1

    return (
        <StyledContainer
            width={"100vw"}
            height={"100vh"}>
            <MobileImageContainer>
                <img src={mobile}/>
            </MobileImageContainer>
            <HeroContainer
                backgroundColor={Colors.clearColor}
                width={"100vw"}
                height={"100vh"}
                alignItems={"center"}
                margin={`${heroSectionTopMargin}px 0 0 0`}>
                <HeroSection className={"HeroSection"}/>
            </HeroContainer>
            <WebImageContainer>
                <img src={web}/>
            </WebImageContainer>
        </StyledContainer>
    )
}

