import styled from "styled-components"
import React from "react"

interface IProps {
    url?: string
    imgSrc?: string
    width?: string
    height?: string
    onClick?: () => void
}

const StyledImg = styled.img`
    width: ${(props: IProps) => props.width};
    height: ${(props: IProps) => props.height};
    transition: width 0.2s ease-in-out, height 0.2s ease-in-out;
    :hover {
        width: calc(${(props: IProps) => props.width} * 1.10);
        height: calc(${(props: IProps) => props.height} * 1.10);
        cursor: pointer;
    }`

const BaseAvatar = (props: IProps) => {
    return (
        <a style={{marginRight: 32}} href={props.url} target="_blank" rel="noopener noreferrer">
            <StyledImg width={props.width} height={props.height} src={props.imgSrc}/>
        </a>
    )
}

BaseAvatar.defaultProps = {
    width: "36px"
}

export const Avatar = styled(BaseAvatar)`
`

