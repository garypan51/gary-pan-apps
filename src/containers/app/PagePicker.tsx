import React, {useEffect, useState} from 'react';
import {Row} from "../../components/flexbox/Row";
import {PageItem} from "./PageItem";
import {Column} from "../../components/flexbox/Column";
import {animated, config, useSpring} from "react-spring";
import {FloatingActionButton} from "../../components/buttons/FloatingActionButton";
import AppsIcon from "@material-ui/icons/Apps";
import {useSelector} from "react-redux";
import {StoreState} from "../../redux/store";
import {DarkTheme, LightTheme} from "../../resources/Theme";
import {useOnMobile} from "../../hooks/UseOnMobile";
import {useOnOutsideClick} from "../../hooks/UseOnOutsideClick";
import {GPAPages} from "../../routes";

interface IProps {
    onPageClick?: () => void
}

const pages = [
    GPAPages[1], GPAPages[2], GPAPages[3], GPAPages[4]
]

const yTransform = (y: any) => `translateY(${y}px)`

const PageContainer = (props: IProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const onPageClick = (index: number) => {
        setSelectedIndex(index)
        // props.onPageClick?.()
    }

    const pageItems = pages.map((page, index) => {
        const unselected = selectedIndex != null && selectedIndex !== index
        return (
            <PageItem
            key={index}
            width={unselected ? "21vw" : "21vw"}
            name={page.name}
            expanded={unselected}
            backgroundColor={page.backgroundColor}
            textColor={page.textColor}
            onPageClick={() => onPageClick(index)}/>
        )
    })

    return (
        <Row
            pointerEvents={"none"}
            overflow={"visible"}
            width={"100vw"}
            height={"200px"}
            justifyContent={"space-around"}
            alignItems={"center"}>
            {pageItems}
        </Row>
    )
}

const pickerButtonBaseProps = {
    position: "absolute" as "absolute",
    bottom: "-70px",
    left: "50%",
}

const pickerBaseProps = {
    display: "flex",
    justifyContent: "flex-end",
    position: "absolute" as "absolute",
    bottom: -250,
    left: 0,
    right: 0,
    margin: "0 16px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20
}

export const PagePicker = () => {
    const darkModeEnabled = useSelector((state: StoreState) => state.app.darkModeEnabled)
    const theme = darkModeEnabled ? DarkTheme : LightTheme
    const onMobile = useOnMobile()
    const [pageModelOpen, setPageModalOpen] = useState(false)
    const [ref, onOutsideClick, resetOnOutsideClick] = useOnOutsideClick()
    const [pagePickerOpen, setPagePickerOpen] = useState(false)

    const [pagePickerButtonProps, setPagePickerButtonProps] = useSpring(() => ({
        config: config.wobbly,
        y: 0
    }))
    const [PagePickerProps, setPagePickerProps] = useSpring(() => ({
        config: config.gentle,
        y: 0
    }))

    useEffect(() => {
        const buttonTimeout = setTimeout(() => setPagePickerButtonProps({y: -94}), 500)
        return () => clearTimeout(buttonTimeout)
    }, [])

    useEffect(() => {
        setPagePickerButtonProps({
            config: config.gentle,
            y: pagePickerOpen ? 0 : -94
        })

        setPagePickerProps({
            config: config.gentle,
            y: pagePickerOpen ? -274 : 0
        })

        resetOnOutsideClick()
    }, [onOutsideClick, pagePickerOpen])

    useEffect(() => {
        if(onOutsideClick && pagePickerOpen) {
            setPagePickerOpen(false)
        }
    }, [onOutsideClick])

    return (
        <>
            {!onMobile &&
                <Column forwardRef={ref} overflow={"visible"}>
                    <animated.div style={{...{transform: pagePickerButtonProps.y.interpolate(yTransform)}, ...pickerButtonBaseProps}}>
                        <FloatingActionButton
                            theme={theme}
                            onClick={() => setPagePickerOpen(prevState => !prevState)}>
                            <AppsIcon/>
                        </FloatingActionButton>
                    </animated.div>

                    <animated.div style={{...{transform: PagePickerProps.y.interpolate(yTransform)}, ...pickerBaseProps}}>
                        <PageContainer onPageClick={() => setPagePickerOpen(false)}/>
                    </animated.div>
                </Column>
            }
        </>
    )
}
