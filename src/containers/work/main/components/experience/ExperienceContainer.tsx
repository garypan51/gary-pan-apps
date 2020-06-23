import React, {useEffect, useRef, useState} from 'react';
import {GPAPage} from "../../../../../routes";
import styled from "styled-components";
import {Row} from "../../../../../components/flexbox/Row";
import {Theme} from "../../../../../resources/Theme";
import {useWindowSize} from "../../../../../hooks/UseWindowSize";
import {animated, config, useSprings} from "react-spring";
import {ElementUtils} from "../../../../../utils/ElementUtils";
import {t} from "../../../../../strings/i18n";
import { GradientButton } from '../../../../../components/buttons/GradientButton';

interface IProps {
    theme: Theme
    title: string
    onExperienceClick?: () => void
}

const StyledRow = styled(Row)`
    border-radius: 4px;
`

const mobileItems = [
    {
        name: "iOS",
        textColor: "#ffffff",
        gradient: ["#ffffff", "#0068D6"],
        image: undefined
    },
    {
        name: "Android",
        textColor: "#ffffff",
        gradient: ["#ffffff", "#0068D6"],
        image: undefined
    },
    {
        textColor: "#ffffff",
        name: "React Native",
        gradient: ["#ffffff", "#0068D6"],
        image: undefined
    },
]

const webItems = [
    {
        name: "React",
        textColor: "#ffffff",
        gradient: ["#ffffff", "#0068D6"],
        image: undefined
    },
]

const experienceItemWidth = (totalItems: number) => `${Math.floor((100 / totalItems) - 5)}vw`
const transform = (x: any, y: any, s: any) => `translateX(${x}px) translateY(${y}px) scale(${s})`

export const ExperienceContainer = (props: IProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    const experienceItemRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);
    const size = useWindowSize()
    const [selected, setSelected] = useState(false)

    const [experienceItemProps, setExperienceItemProps] = useSprings(mobileItems.length, () => ({
        config: config.default,
        transformXYScale: [0, 0, 1],
        width: experienceItemWidth,
        height: "150px"
    }))

    const selectedExperienceItemProps = (ref: any) => { return {
        transformXYScale: [ElementUtils.getTranslateToMiddleX(size.width!, ref.current.getBoundingClientRect().x, ref.current.getBoundingClientRect().width / 2), -((size.height! - 174) / 2), 1]
    }}

    const unselectedExperienceItemProps = (ref: any) => {return {
        transformXYScale: [ElementUtils.getTranslateToMiddleX(size.width!, ref.current.getBoundingClientRect().x, ref.current.getBoundingClientRect().width / 2), 0, 1]
    }}

    useEffect(() => {
        if (selectedIndex != null) {
            //@ts-ignore
            setExperienceItemProps(index => index == selectedIndex ? selectedExperienceItemProps(experienceItemRefs.current[index]) :  unselectedExperienceItemProps(experienceItemRefs.current[index]))
        }
    }, [selectedIndex])

    const onExperienceClick = (index: number, ref: any) => {
        setSelectedIndex(index)
        // props.onPageClick?.()
    }

    const experienceItems = experienceItemProps.map((props, index) => {
        const unselected = selectedIndex != null && selectedIndex !== index
        return (
            <animated.div
                //@ts-ignore
                ref={experienceItemRefs.current[index]}
                //@ts-ignore
                style={{...{transform: props.transformXYScale.interpolate(transform)}, ...{cursor: "pointer", width: props.width, height: props.height}}}
                onClick={() => onExperienceClick(index, experienceItemRefs.current[index])}>
                <GradientButton
                    key={index}
                    width={unselected ? experienceItemWidth(mobileItems.length) : experienceItemWidth(mobileItems.length)}
                    height={"150px"}
                    text={mobileItems[index].name}
                    expanded={unselected}
                    gradientColors={mobileItems[index].gradient}
                    textColor={mobileItems[index].textColor}/>
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
            {experienceItems}
        </StyledRow>
    )
}
