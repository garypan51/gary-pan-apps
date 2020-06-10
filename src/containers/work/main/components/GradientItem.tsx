import React from "react";
import {animated, config, useSpring} from "react-spring";
import {Column} from "../../../../components/flexbox/Column";
import {Header} from "../../../../components/text/Header";
import styled from "styled-components";

interface IProps {
    key: number
    name: string
    width: string
    height: string
    expanded: boolean
    gradientColors: string[]
    textColor?: string
    onProjectClick?: () => void
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
    console.log(`linear-gradient(${gradient})`)
    return `linear-gradient(${gradient})`
}

export const GradientItem = (props: IProps) => {
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
        height: props.height,
        borderRadius: 4,
        background: gradientBackground(props.gradientColors)
    }

    return (
        <animated.div
            style={projectItemStyle}
            onMouseEnter={() => scaleOnHover(true)}
            onMouseLeave={() => scaleOnHover(false)}>
            <StyledColumn padding={"16px 16px"}>
                <Header fontSize={"16px"} textColor={props.textColor}>{props.name}</Header>
            </StyledColumn>
        </animated.div>
    )
}

GradientItem.defaultProps = {
    backgroundColor: "#ffffff"
}
