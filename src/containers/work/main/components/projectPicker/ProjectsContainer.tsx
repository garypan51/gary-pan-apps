import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Row} from "../../../../../components/flexbox/Row";
import {Theme} from "../../../../../resources/Theme";
import {useWindowSize} from "../../../../../hooks/UseWindowSize";
import {animated, config, useSprings} from "react-spring";
import {ElementUtils} from "../../../../../utils/ElementUtils";
import {t} from "../../../../../strings/i18n";
import {GradientItem} from '../GradientItem';

interface IProps {
    theme: Theme
    onProjectClick?: () => void
}

const StyledRow = styled(Row)`
    border-radius: 4px;
`

const projects = [
    {
        name: t("B2C"),
        path: "/",
        textColor: "#ffffff",
        gradient: ["#32619A", "#488CDD"]
    },
    {
        name: t("B2B"),
        path: "/about-me",
        textColor: "#ffffff",
        gradient: ["#72627F", "#A791BA"]
    },
    {
        name: t("Personal"),
        path: "/projects",
        textColor: "#ffffff",
        gradient: ["#61968D", "#9AEFE0"]
    },
    {
        name: t("For Fun"),
        path: "/about-this-website",
        textColor: "#ffffff",
        gradient: ["#9C6316", "#F49B23"]
    }
]

const projectItemWidth = `${Math.floor((100 / projects.length) - 5)}vw`
const transform = (x: any, y: any, s: any) => `translateX(${x}px) translateY(${y}px) scale(${s})`

export const ProjectsContainer = (props: IProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    const projectItemRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);
    const size = useWindowSize()
    const [selected, setSelected] = useState(false)

    const [projectItemProps, setProjectItemProps] = useSprings(projects.length, () => ({
        config: config.default,
        backgroundColor: "#ffffff",
        transformXYScale: [0, 0, 1],
        width: projectItemWidth,
        height: "150px"
    }))

    const selectedProjectItemProps = (ref: any) => { return {
        transformXYScale: [ElementUtils.getTranslateToMiddleX(size.width!, ref.current.getBoundingClientRect().x, ref.current.getBoundingClientRect().width / 2), -((size.height! - 250) / 2), 1],
        height: "800px",
        width: "1000px"
    }}

    const unselectedProjectItemProps = (ref: any) => {return {
        transformXYScale: [ElementUtils.getTranslateToMiddleX(size.width!, ref.current.getBoundingClientRect().x, ref.current.getBoundingClientRect().width / 2), 0, 1],
        height: "150px",
        width: projectItemWidth
    }}

    useEffect(() => {
        if (selectedIndex != null) {
            //@ts-ignore
            setProjectItemProps(index => index == selectedIndex ? selectedProjectItemProps(projectItemRefs.current[index]) :  unselectedProjectItemProps(projectItemRefs.current[index]))
        }
    }, [selectedIndex])

    const onProjectClick = (index: number, ref: any) => {
        setSelectedIndex(index)
        // props.onPageClick?.()
    }

    const projectItems = projectItemProps.map((projectItemProp, index) => {
        const unselected = selectedIndex != null && selectedIndex !== index
        return (
            <animated.div
                //@ts-ignore
                ref={projectItemRefs.current[index]}
                //@ts-ignore
                style={{...{transform: projectItemProp.transformXYScale.interpolate(transform)},
                    ...{cursor: "pointer", width: projectItemProp.width, height: projectItemProp.height, backgroundColor: projectItemProp.backgroundColor}}}
                onClick={() => onProjectClick(index, projectItemRefs.current[index])}>
                <GradientItem
                    key={index}
                    width={unselected ? projectItemWidth : projectItemWidth}
                    height={"150px"}
                    name={projects[index].name}
                    expanded={unselected}
                    gradientColors={projects[index].gradient}
                    textColor={projects[index].textColor}/>
            </animated.div>
        )
    })

    return (
        <StyledRow
            backgroundColor={props.theme.rippleColor}
            pointerEvents={"none"}
            overflow={"visible"}
            width={"100vw"}
            height={"200px"}
            margin={"0 16px"}
            justifyContent={"space-around"}
            alignItems={"center"}>
            {projectItems}
        </StyledRow>
    )
}
