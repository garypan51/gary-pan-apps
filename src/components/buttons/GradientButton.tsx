import React from "react";
import {animated, config, useSpring} from "react-spring";
import {Column} from "../flexbox/Column";
import {Header} from "../text/Header";
import styled from "styled-components";
import {Image} from "../presentational/Image";

export interface GradientButtonProps {
    key?: number
    text: string
    width?: string
    height?: string
    expanded?: boolean
    gradientColors: string[]
    textColor?: string
    onClick?: () => void
    imgSrc?: string
}

const StyledColumn = styled(Column)`
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

export const GradientButton = (props: GradientButtonProps) => {
    const [projectItemProps, setProjectItemProps] = useSpring(() => ({
        config: config.default,
        scale: 1
    }))

    const scaleOnHover = (hover: boolean) => {
        setProjectItemProps({
            scale: hover ? 1.02 : 1
        })
    }

    const projectItemStyle = {
        transform: projectItemProps.scale.interpolate(scaleTransform),
        width: props.width,
        height: props.height,
        borderRadius: 10,
        cursor: "pointer",
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
                    <Image src={props.imgSrc} opacity={0.75}/>
                </Column>
            </StyledColumn>
        </animated.div>
    )
}

GradientButton.defaultProps = {
    backgroundColor: "#ffffff"
}
