import React from 'react'
import styled from "styled-components";

interface IProps {
    src?: string
    backgroundColor?: string
    width?: string
    height?: string
    opacity?: number
}

const StyledImage = styled.img`
    width:${(props: IProps) => props.width};
    height:${(props: IProps) => props.height};
    opacity:${(props: IProps) => props.opacity};
`

export const Image = (props: IProps) => {
    return (
        <StyledImage {...props}/>
    )
}
