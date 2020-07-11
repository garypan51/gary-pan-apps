import React from 'react';
import {GradientButton, GradientButtonProps} from "../../components/buttons/GradientButton";
import about from "../../resources/images/home/about-me-logo.svg"
import work from "../../resources/images/home/work-logo.svg"
import contact from "../../resources/images/home/contact-logo.svg"
import {useNavigate} from "react-router"
import styled from "styled-components";
import {useOnMobile} from "../../hooks/UseOnMobile";

interface HomeNavigationButtonProps extends GradientButtonProps {
    gridArea?: string
}

const GridContainerWeb = styled.div`
    display: grid;
    height: 30vh;
    width: 100%;
    grid-template-areas:
        "gradientButton0 gradientButton1 gradientButton2";
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15%;
`

const GridContainerMobile = styled.div`
    display: grid;
    width: 100%;
    grid-template-areas:
        "gradientButton0"
        "gradientButton1"
        "gradientButton2";
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10%;
`

const HomeNavigationButton = styled(GradientButton)`
    grid-area: ${(props: HomeNavigationButtonProps) => props.gridArea};
`

const navigationButtons = [
    {
        title: "GET TO KNOW ME",
        path: "/about-me",
        gradient: ["#61968D", "#9AEFE0"],
        icon: about
    },
    {
        title: "SEE MY WORK",
        path: "/projects",
        gradient: ["#32619A", "#488CDD"],
        icon: work
    },
    {
        title: "CONTACT ME",
        path: "/contact",
        gradient: ["#9C6316", "#F49B23"],
        icon: contact
    }
]

export const HomeNavigationButtons = () => {
    const navigate = useNavigate()
    const onMobile = useOnMobile()

    const GridContainer = onMobile ? GridContainerMobile : GridContainerWeb
    return (
        <GridContainer>
            {navigationButtons.map(
                    (button, index) =>
                        <HomeNavigationButton
                            key={index}
                            onClick={() => navigate(button.path)}
                            gridArea={`gradientButton${index}`}
                            text={button.title}
                            gradientColors={button.gradient}
                            imgSrc={button.icon}/>
                )}
        </GridContainer>
    )
}

