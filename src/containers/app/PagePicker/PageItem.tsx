import React from "react";
import {animated, config, useSpring} from "react-spring";
import {Column} from "../../../components/flexbox/Column";
import {Header} from "../../../components/text/Header";
import styled from "styled-components";

interface IProps {
    key: number
    name: string
    width: string
    height: string
    expanded: boolean
    backgroundColor: string
    textColor?: string
    onPageClick?: () => void
}

const StyledColumn = styled(Column)`
    border-radius: 20px;
`

const scaleTransform = (s: any) => `scale(${s})`

export const PageItem = (props: IProps) => {
    const [pageItemProps, setPageItemProps] = useSpring(() => ({
        config: config.default,
        scale: 1
    }))

    const scaleOnHover = (hover: boolean) => {
        setPageItemProps({
            scale: hover ? 1.05 : 1
        })
    }

    const pageItemStyle = {
        transform: pageItemProps.scale.interpolate(scaleTransform),
        height: props.height,
        backgroundColor: props.backgroundColor,
        borderRadius: 4
    }

    return (
        <animated.div
            style={pageItemStyle}
            onMouseEnter={() => scaleOnHover(true)}
            onMouseLeave={() => scaleOnHover(false)}>
            <StyledColumn backgroundColor={props.backgroundColor} padding={"16px 16px"}>
                <Header fontSize={"16px"} textColor={props.textColor}>{props.name}</Header>
            </StyledColumn>
        </animated.div>
    )
}

PageItem.defaultProps = {
    backgroundColor: "#ffffff"
}
