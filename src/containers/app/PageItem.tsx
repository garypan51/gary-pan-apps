import React, {useRef} from 'react';
import {Paper} from "../../components/presentational/Paper";
import {Paragraph} from "../../components/text/Paragraph";
import {Column} from "../../components/flexbox/Column";
import {animated, config, useSpring} from "react-spring";
import {useWindowSize} from "../../hooks/UseWindowSize";
import ReactDOM from 'react-dom';
import {ElementUtils} from "../../utils/ElementUtils";

interface IProps {
    name: string
    backgroundColor: string
    textColor: string
    onPageClick?: () => void
}

const transform = (x: any, y: any, s: any) => `translateX(${x}px) translateY(${y}px) scale(${s})`

export const PageItem = (props: IProps) => {
    const ref: any = useRef()
    const size = useWindowSize()

    const [pageItemProps, setPageItemProps] = useSpring(() => ({
        config: config.default,
        transformXYScale: [0, 0, 1],
        backgroundColor: props.backgroundColor,
        width: "21vw",
        height: "150px"
    }))

    const animateUp = () => {
        setPageItemProps({
            transformXYScale: [ElementUtils.getTranslateToMiddleX(size.width!, ref.current.getBoundingClientRect().x, ref.current.getBoundingClientRect().width / 2), -((size.height! - 174) / 2), 1],
            width: `${size.width!}px`,
            height: `${size.height!}px`,
        })
    }

    const scaleOnHover = (hover: boolean) => {
        console.log(ref.current.getBoundingClientRect())
        setPageItemProps({
            transformXYScale: [0, 0, hover ? 1.05 : 1],
        })
    }

    return (
        <animated.div
            // @ts-ignore
            ref={ref}
            // @ts-ignore
            style={{...{transform: pageItemProps.transformXYScale.interpolate(transform)}, ...{cursor: "pointer", backgroundColor: pageItemProps.backgroundColor, width: pageItemProps.width, height: pageItemProps.height}}}
            onClick={animateUp}
            onMouseEnter={() => scaleOnHover(true)}
            onMouseLeave={() => scaleOnHover(false)}>
            <Paper
                backgroundColor={props.backgroundColor}
                cursor={"pointer"}
                onClick={props.onPageClick}
                >
                <Column padding={"0 16px"}>
                    <Paragraph textColor={props.textColor}>{props.name}</Paragraph>
                </Column>
            </Paper>

        </animated.div>
    )
}
