import React from "react";
import {animated, config, useSpring} from "react-spring";
import {Column} from "../flexbox/Column";
import {Header} from "../text/Header";
import styled from "styled-components";

interface IProps {
    key?: number
    text: string
    width: string
    height: string
    expanded?: boolean
    gradientColors: string[]
    textColor?: string
    onClick?: () => void
    imgSrc?: string
}

const StyledColumn = styled(Column)`
    border-radius: 20px;
`

const scaleTransform = (s: any) => `scale(${s})`
const gradientBackground = (colors: string[]) => {
    let gradient = ""
    colors.forEach((color, index) => {
        gradient += `${color.replace("\"", "")}`
        if (index != colors.length - 1) {
            gradient += ", "
        }
    })
    return `linear-gradient(${gradient})`
}

export const GradientButton = (props: IProps) => {
    const [projectItemProps, setProjectItemProps] = useSpring(() => ({
        config: config.default,
        scale: 1
    }))

    const scaleOnHover = (hover: boolean) => {
        setProjectItemProps({
            scale: hover ? 1.05 : 1
        })
    }

    const projectItemStyle = {
        transform: projectItemProps.scale.interpolate(scaleTransform),
        width: props.width,
        height: props.height,
        borderRadius: 4,
        background: gradientBackground(props.gradientColors)
    }

    return (
        <animated.div
            style={projectItemStyle}
            onClick={props.onClick}
            onMouseEnter={() => scaleOnHover(true)}
            onMouseLeave={() => scaleOnHover(false)}>
            <StyledColumn height={"100%"} justifyContent={"space-between"} padding={"16px 16px"}>
                <Header fontSize={"24px"} textColor={props.textColor}>{props.text}</Header>
                <Column width={"100%"} alignItems={"flex-end"}>
                    <img src={props.imgSrc}/>
                </Column>
            </StyledColumn>
        </animated.div>
    )
}

GradientButton.defaultProps = {
    backgroundColor: "#ffffff"
}
