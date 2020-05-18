import styled from "styled-components"
import React from "react"
import {useSpring, animated, config} from "react-spring";

interface IProps {
    href?: string
    imgSrc?: string
    width: string
    height: string
    onClick?: () => void
}

const scaleTransform = (s: any) => `scale(${s})`

const BaseAvatar = (props: IProps) => {
    const [avatarProps, setAvatarProps] = useSpring(() => ({
        config: config.gentle,
        scale: 1
    }))

    return (
        <a style={{marginRight: 32}} href={props.href} target="_blank" rel="noopener noreferrer">
            <animated.img
                style={{transform: avatarProps.scale.interpolate(scaleTransform)}}
                width={props.width}
                height={props.height}
                onMouseEnter={() => setAvatarProps({scale: 1.1})}
                onMouseLeave={() => setAvatarProps({scale: 1})}
                src={props.imgSrc}/>
        </a>
    )
}

BaseAvatar.defaultProps = {
    width: "36px",
    height: "36px"
}

export const Avatar = styled(BaseAvatar)`
`

