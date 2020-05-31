import React, {useEffect, useRef, useState} from 'react';
import {GPAPages} from "../../../routes";
import styled from "styled-components";
import {Row} from "../../../components/flexbox/Row";
import {PageItem} from "./PageItem";
import {Theme} from "../../../resources/Theme";
import {useWindowSize} from "../../../hooks/UseWindowSize";
import {animated, config, useSprings} from "react-spring";
import {ElementUtils} from "../../../utils/ElementUtils";

interface IProps {
    theme: Theme
    onPageClick?: () => void
}

const pages = [GPAPages[1], GPAPages[2], GPAPages[3], GPAPages[4]]
const pageItemWidth = `${Math.floor((100 / pages.length) - 5)}vw`

const StyledRow = styled(Row)`
    border-radius: 20px;
`

const transform = (x: any, y: any, s: any) => `translateX(${x}px) translateY(${y}px) scale(${s})`

export const PageContainer = (props: IProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    const pageItemRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);
    const size = useWindowSize()
    const [selected, setSelected] = useState(false)

    const [pageItemProps, setPageItemProps] = useSprings(pages.length, () => ({
        config: config.default,
        transformXYScale: [0, 0, 1],
        width: pageItemWidth,
        height: "150px"
    }))

    const selectedPageItemProps = (ref: any) => { return {
        transformXYScale: [ElementUtils.getTranslateToMiddleX(size.width!, ref.current.getBoundingClientRect().x, ref.current.getBoundingClientRect().width / 2), -((size.height! - 174) / 2), 1]
    }}

    const unselectedPageItemProps = (ref: any) => {return {
        transformXYScale: [ElementUtils.getTranslateToMiddleX(size.width!, ref.current.getBoundingClientRect().x, ref.current.getBoundingClientRect().width / 2), 0, 1]
    }}

    const animatePageItems = (indexd: number, ref: any) => {
        setSelectedIndex(indexd)
        //@ts-ignore
        // setPageItemProps(index => index == selectedIndex ? selectedPageItemProps(ref) :  unselectedPageItemProps(ref))
    }
    useEffect(() => {
        if (selectedIndex) {
            //@ts-ignore
            setPageItemProps(index => index == selectedIndex ? selectedPageItemProps(pageItemRefs.current[index]) :  unselectedPageItemProps(pageItemRefs.current[index]))
        }
    }, [selectedIndex])
    //
    // const animateHorizontally = () => {
    //     setTimeout(() => {
    //         setPageItemProps({
    //             transformXYScale: [ElementUtils.getTranslateToMiddleX(size.width!, ref.current.getBoundingClientRect().x, ref.current.getBoundingClientRect().width / 2), 0, 1],
    //         })
    //     }, 200)
    // }
    //
    // const scaleOnHover = (hover: boolean) => {
    //     if (!selected) {
    //         setPageItemProps({
    //             transformXYScale: [0, 0, hover ? 1.05 : 1],
    //         })
    //     }
    // }

    // useEffect(() => {
    //     setPageItemProps({
    //         width: props.width
    //     })
    // }, [props.width])
    //
    // useEffect(() => {
    //     if(props.expanded) {
    //         animateHorizontally()
    //     }
    // }, [props.expanded])

    const onPageClick = (index: number, ref: any) => {
        setSelectedIndex(index)
        animatePageItems(index, ref)
        // props.onPageClick?.()
    }

    const pageItems = pageItemProps.map((props, index) => {
        const unselected = selectedIndex != null && selectedIndex !== index
        return (
            <animated.div
                //@ts-ignore
                ref={pageItemRefs.current[index]}
                //@ts-ignore
                style={{...{transform: props.transformXYScale.interpolate(transform)}, ...{cursor: "pointer", backgroundColor: pageItemProps.backgroundColor, width: pageItemProps.width, height: pageItemProps.height}}}
                onClick={() => onPageClick(index, pageItemRefs.current[index])}>
                <PageItem
                    key={index}
                    width={unselected ? pageItemWidth : pageItemWidth}
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
            {pageItems}
        </StyledRow>
    )
}
