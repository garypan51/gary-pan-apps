import React, {useContext, useEffect, useState} from 'react'
import {ThemeContext} from "styled-components";
import {useDispatch} from "react-redux";
import {useOnMobile} from "../../../hooks/UseOnMobile";
import {useOnOutsideClick} from "../../../hooks/UseOnOutsideClick";
import {setAppBarTitle} from "../../../redux/actions/AppActions";
import {t} from "../../../strings/i18n";
import {config, useSpring, animated} from "react-spring";
import {Column} from "../../../components/flexbox/Column";
import {Header} from "../../../components/text/Header";
import {Paragraph} from "../../../components/text/Paragraph";
import {FloatingActionButton} from "../../../components/buttons/FloatingActionButton";
import {Colors} from "../../../resources/Colors";
import {ProjectPicker} from "../ProjectPicker";
import AppsIcon from '@material-ui/icons/Apps';

interface IProps {
    backgroundColor?: string
}
const bottomProjectPickerBaseProps = {
    display: "flex",
    alignItems: "center",
    position: "absolute" as "absolute",
    left: 16,
    right: 0,
    width: "calc(100vw - 32px)",
    height: "100vh",
    borderRadius: "10px"
}

// const bottomProjectPickerGradient = styled(Column)`
//     background-color: Colors.dark.primaryColorDarkGradStart,
// `

export const ProjectDetail = (props: IProps) => {
    const theme = useContext(ThemeContext)
    const dispatch = useDispatch()
    const onMobile = useOnMobile()
    const [projectModelOpen, setProjectModalOpen] = useState(false)
    const [ref, onOutsideClick, resetOnOutsideClick] = useOnOutsideClick()
    const [projectPickerOpen, setProjectPickerOpen] = useState(false)

    useEffect(() => {
        dispatch(setAppBarTitle(t("projects.title")))
    }, [])

    useEffect(() => {
        const projectPickerButtonStartY = projectPickerOpen ? "50px" : "-70px"
        const projectPickerButtonEndY = projectPickerOpen ? "-70px" : "50px"
        const projectPickerStartY = projectPickerOpen ? "0px" : "24px"
        const projectPickerEndY = projectPickerOpen ? "24px" : "0px"

        setProjectPickerButtonProps({
            config: config.gentle,
            from: {position: "absolute", bottom: projectPickerButtonStartY},
            to: {position: "absolute", bottom: projectPickerButtonEndY},
        })

        setBottomProjectPickerProps({
            config: config.gentle,
            from: {position: "absolute", bottom: projectPickerStartY},
            to: {position: "absolute", bottom: projectPickerEndY}
        })

        let debounce: NodeJS.Timeout | undefined = undefined
        resetOnOutsideClick()
        // debounce = global.setTimeout(() => {
        //     if(onOutsideClick && projectPickerOpen) {
        //         setProjectPickerOpen(false)
        //         resetOnOutsideClick()
        //     }
        // }, 500)
        return () => {
            if (debounce) {
                clearTimeout(debounce);
            }
        }
    }, [onOutsideClick, projectPickerOpen])

    useEffect(() => {
        if(onOutsideClick && projectPickerOpen) {
            setProjectPickerOpen(false)
        }
    }, [onOutsideClick])

    const [projectPickerButtonProps, setProjectPickerButtonProps] = useSpring(() => ({
        config: config.wobbly,
        from: {position: "absolute", bottom: "-70px"},
        to: {position: "absolute", bottom: "50px"},
    }))
    const [bottomProjectPickerProps, setBottomProjectPickerProps] = useSpring(() => ({
        config: config.gentle,
        from: {position: "absolute", bottom: "0px"},
        to: {position: "absolute", bottom: "0px"}
    }))

    return (
        <Column width={"100%"} height={"100%"} backgroundColor={props.backgroundColor ?? "darkBlue"}>
            <Header margin={"0 16px"} type={"large"}>{t("projects.titlfdase")}</Header>
            <Paragraph margin={"0 16px"}>Sed ut perspquatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Paragraph>
            { !onMobile &&
                <Column forwardRef={ref} overflow={"visible"}>
                    {/*@ts-ignore*/}
                    <animated.div style={projectPickerButtonProps}>
                        <FloatingActionButton
                            theme={theme}
                            onClick={() => setProjectPickerOpen(prevState => !prevState)}>
                            <AppsIcon/>
                        </FloatingActionButton>
                    </animated.div>
                    <animated.div style={{...bottomProjectPickerProps, ...bottomProjectPickerBaseProps}}>
                        <Column backgroundColor={Colors.dark.primaryColorDarkGradStart}/>
                        <ProjectPicker onProjectClick={() => setProjectPickerOpen(false)}/>
                    </animated.div>
                </Column>
            }
        </Column>
    )
}
