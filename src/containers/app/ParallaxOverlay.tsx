import React from 'react';
import styled from "styled-components";
import {Column} from "../../components/flexbox/Column";
import {Row} from "../../components/flexbox/Row";
import {config, useSpring, animated} from "react-spring";
import {useWindowSize} from "../../hooks/UseWindowSize";

interface IProps {
    pages: number
}

const ParallaxContainer = styled(Row)`
    position: absolute;
    background: url(https://awv3node-homepage.surge.sh/build/assets/stars.svg);
    background-size: cover;
    pointer-events: none;
`

const Clouds = styled.img`
    width: 450px;
    height: 200px;
`

const xTransform = (x: any) => `translateX(${x * 0.1}px)`

export const ParallaxOverlay = (props: IProps) => {
    const size = useWindowSize()

    const [homeCloudProps, setHomeCloudProps] = useSpring(() => ({
        config: config.wobbly,
        x: 0
    }))

    const animateOutHomeParallax = () => {
        setHomeCloudProps({
            x: -size.width!
        })
    }

    return (
        <ParallaxContainer
            backgroundColor={"red"}
            width={"100%"}
            height={"100vh"}>
            <animated.div style={{transform: homeCloudProps.x.interpolate(xTransform)}}>
                <Column width={"100vw"} padding={"200px 0 0 0"} alignItems={"flex-end"}>
                    <Clouds onClick={animateOutHomeParallax} src={"https://image.flaticon.com/icons/svg/414/414927.svg"}/>
                </Column>
            </animated.div>
            <animated.div style={{transform: homeCloudProps.x.interpolate(xTransform), position: "absolute"}}>
                <Column width={"100vw"} height={"100vh"} backgroundColor={"rgba(0, 0, 0, 0.5)"}>
                </Column>
            </animated.div>
            <button style={{height: "100px"}}>Click Me</button>
        </ParallaxContainer>
    )
}
