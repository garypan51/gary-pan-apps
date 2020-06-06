import React, {useEffect, useRef, useState} from 'react';
import {GPAPage} from "../../../../routes";
import styled from "styled-components";
import {Row} from "../../../../components/flexbox/Row";
import {Theme} from "../../../../resources/Theme";
import {useWindowSize} from "../../../../hooks/UseWindowSize";
import {animated, config, useSprings} from "react-spring";
import {ElementUtils} from "../../../../utils/ElementUtils";
import {t} from "../../../../strings/i18n";
import { ProjectItem } from './ProjectItem';

interface IProps {
    theme: Theme
    onProjectClick?: () => void
}

const StyledRow = styled(Row)`
    border-radius: 4px;
`

export const GPAPages: GPAPage[] = [
    {
        name: t("home.title"),
        path: "/",
        textColor: "#ffffff",
        backgroundColor: "#0068D6"
    },
    {
        name: t("about.title"),
        path: "/about-me",
        textColor: "#AA13C6",
        backgroundColor: "#00003F"
    },
    {
        name: t("work.title"),
        path: "/projects",
        textColor: "#ffffff",
        backgroundColor: "#2e7d32",
    },
    {
        name: t("contact.title"),
        path: "/contact",
        textColor: "#ffffff",
        backgroundColor: "#4a148c"
    },
    {
        name: t("aboutThisWebsite.title"),
        path: "/about-this-website",
        textColor: "#ffffff",
        backgroundColor: "#0068D6"
    }
]

const pages = [GPAPages[1], GPAPages[2], GPAPages[3], GPAPages[4]]
const projectItemWidth = `${Math.floor((100 / pages.length) - 5)}vw`
const transform = (x: any, y: any, s: any) => `translateX(${x}px) translateY(${y}px) scale(${s})`

export const ProjectsContainer = (props: IProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    const projectItemRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);
    const size = useWindowSize()
    const [selected, setSelected] = useState(false)

    const [projectItemProps, setProjectItemProps] = useSprings(pages.length, () => ({
        config: config.default,
        transformXYScale: [0, 0, 1],
        width: projectItemWidth,
        height: "150px"
    }))

    const selectedProjectItemProps = (ref: any) => { return {
        transformXYScale: [ElementUtils.getTranslateToMiddleX(size.width!, ref.current.getBoundingClientRect().x, ref.current.getBoundingClientRect().width / 2), -((size.height! - 174) / 2), 1]
    }}

    const unselectedProjectItemProps = (ref: any) => {return {
        transformXYScale: [ElementUtils.getTranslateToMiddleX(size.width!, ref.current.getBoundingClientRect().x, ref.current.getBoundingClientRect().width / 2), 0, 1]
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

    const projectItems = projectItemProps.map((props, index) => {
        const unselected = selectedIndex != null && selectedIndex !== index
        return (
            <animated.div
                //@ts-ignore
                ref={projectItemRefs.current[index]}
                //@ts-ignore
                style={{...{transform: props.transformXYScale.interpolate(transform)}, ...{cursor: "pointer", width: props.width, height: props.height}}}
                onClick={() => onProjectClick(index, projectItemRefs.current[index])}>
                <ProjectItem
                    key={index}
                    width={unselected ? projectItemWidth : projectItemWidth}
                    height={"150px"}
                    name={pages[index].name}
                    expanded={unselected}
                    backgroundColor={pages[index].backgroundColor}
                    textColor={pages[index].textColor}/>
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
