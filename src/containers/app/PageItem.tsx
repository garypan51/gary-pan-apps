import React, {useEffect, useRef, useState} from 'react';
import {Paper} from "../../components/presentational/Paper";
import {Paragraph} from "../../components/text/Paragraph";
import {Column} from "../../components/flexbox/Column";
import {animated, config, useSpring} from "react-spring";
import {useWindowSize} from "../../hooks/UseWindowSize";
import {ElementUtils} from "../../utils/ElementUtils";

interface IProps {
    key: number
    name: string
    width: string
    expanded: boolean
    backgroundColor: string
    textColor?: string
    onPageClick?: () => void
}

const transform = (x: any, y: any, s: any) => `translateX(${x}px) translateY(${y}px) scale(${s})`

export const PageItem = (props: IProps) => {
    const ref: any = useRef()
    const size = useWindowSize()
    const [selected, setSelected] = useState(false)

    const [pageItemProps, setPageItemProps] = useSpring(() => ({
        config: config.default,
        transformXYScale: [0, 0, 1],
        backgroundColor: props.backgroundColor,
        width: props.width,
        height: "150px"
    }))

    const animateToCenter = () => {
        setSelected(true)
        setPageItemProps({
            transformXYScale: [ElementUtils.getTranslateToMiddleX(size.width!, ref.current.getBoundingClientRect().x, ref.current.getBoundingClientRect().width / 2), -((size.height! - 174) / 2), 1],
        })
        props.onPageClick?.()
    }

    const animateHorizontally = () => {
        setTimeout(() => {
            setPageItemProps({
                transformXYScale: [ElementUtils.getTranslateToMiddleX(size.width!, ref.current.getBoundingClientRect().x, ref.current.getBoundingClientRect().width / 2), 0, 1],
            })
        }, 200)
    }

    const scaleOnHover = (hover: boolean) => {
        if (!selected) {
            setPageItemProps({
                transformXYScale: [0, 0, hover ? 1.05 : 1],
            })
        }
    }

    useEffect(() => {
        setPageItemProps({
            width: props.width
        })
    }, [props.width])

    useEffect(() => {
        if(props.expanded) {
            animateHorizontally()
        }
    }, [props.expanded])

    return (
        <animated.div
            // @ts-ignore
            ref={ref}
            // @ts-ignore
            style={{...{transform: pageItemProps.transformXYScale.interpolate(transform)}, ...{cursor: "pointer", backgroundColor: pageItemProps.backgroundColor, width: pageItemProps.width, height: pageItemProps.height}}}
            onClick={animateToCenter}
            onMouseEnter={() => scaleOnHover(true)}
            onMouseLeave={() => scaleOnHover(false)}>
            <Paper
                backgroundColor={props.backgroundColor}
                >
                <Column padding={"0 16px"}>
                    <Paragraph textColor={props.textColor}>{props.name}</Paragraph>
                </Column>
            </Paper>

        </animated.div>
    )
}

PageItem.defaultProps = {
    backgroundColor: "#ffffff"
}
