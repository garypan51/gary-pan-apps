import React from 'react';
import {Row} from "../../components/flexbox/Row";
import {GradientButton} from "../../components/buttons/GradientButton";
import about from "../../resources/images/home/about-me-logo.svg"
import work from "../../resources/images/home/work-logo.svg"
import contact from "../../resources/images/home/contact-logo.svg"
import {useNavigate} from "react-router"

interface IProps {
}

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

export const HomeNavigationButtons = (props: IProps) => {
    const navigate = useNavigate()

    return (
        <Row width={"100vw"} justifyContent={"space-around"} padding={"20px 0"}>
            {navigationButtons.map(
                (button, index) =>
                    <GradientButton
                        key={index}
                        onClick={() => navigate(button.path)}
                        width={"300px"}
                        height={"220px"}
                        text={button.title}
                        gradientColors={button.gradient}
                        imgSrc={button.icon}/>
            )}
        </Row>
    )
}

