import React from 'react';
import {Paper} from "../../components/presentational/Paper";
import {Paragraph} from "../../components/text/Paragraph";
import {Column} from "../../components/flexbox/Column";
import {animated, config, useSpring} from "react-spring";

interface IProps {
    name: string
    backgroundColor: string
    textColor: string
    onProjectClick?: () => void
}

const scaleTransform = (s: any) => `scale(${s})`

export const ProjectItem = (props: IProps) => {
    const [projectItemProps, setProjectItemProps] = useSpring(() => ({
        config: config.default,
        scale: 1
    }))

    return (
        <animated.div
            style={{transform: projectItemProps.scale.interpolate(scaleTransform)}}
            onMouseEnter={() => setProjectItemProps({scale: 1.05})}
            onMouseLeave={() => setProjectItemProps({scale: 1})}>
            <Paper
                backgroundColor={props.backgroundColor}
                cursor={"pointer"}
                onClick={props.onProjectClick}
                width={"21vw"}
                height={"150px"}>
                <Column padding={"0 16px"}>
                    <Paragraph textColor={props.textColor}>{props.name}</Paragraph>
                </Column>
            </Paper>
        </animated.div>
    )
}
