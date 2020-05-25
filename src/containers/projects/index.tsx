import React, {useContext, useEffect, useState} from 'react'
import {Column} from "../../components/flexbox/Column"
import {Header} from "../../components/text/Header"
import {animated, config, useSpring} from "react-spring";
import {FloatingActionButton} from "../../components/buttons/FloatingActionButton";
import AppsIcon from '@material-ui/icons/Apps';
import {ProjectPicker} from "./ProjectPicker";
import {ThemeContext} from "styled-components";
import {Colors} from "../../resources/Colors";
import {useOnOutsideClick} from "../../hooks/UseOnOutsideClick";
import {t} from "../../strings/i18n";
import {useOnMobile} from "../../hooks/UseOnMobile";
import {Paragraph} from "../../components/text/Paragraph";
import {useDispatch} from "react-redux";
import {setAppBarTitle} from "../../redux/actions/AppActions";
import {Modal} from "../../components/presentational/Modal";
import {ProjectModal} from "./ProjectModal";

const bottomPickerBaseProps = {
    display: "flex",
    alignItems: "center",
    position: "absolute" as "absolute",
    left: 16,
    right: 0,
    backgroundColor: Colors.dark.primaryColorDarkGradStart,
    width: "calc(100vw - 32px)",
    height: "200px",
    borderRadius: "10px"
}

export const Projects = () => {
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
        const projectPickerStartY = projectPickerOpen ? "-250px" : "24px"
        const projectPickerEndY = projectPickerOpen ? "24px" : "-250px"

        setProjectPickerButtonProps({
            config: config.gentle,
            from: {position: "absolute", left: "50%", bottom: projectPickerButtonStartY},
            to: {position: "absolute", left: "50%", bottom: projectPickerButtonEndY},
        })

        setBottomProjectPickerProps({
            config: config.gentle,
            from: {position: "absolute", bottom: projectPickerStartY},
            to: {position: "absolute", bottom: projectPickerEndY}
        })

        let debounce: NodeJS.Timeout | undefined = undefined
        resetOnOutsideClick()
        debounce = global.setTimeout(() => {
            if(onOutsideClick && projectPickerOpen) {
                setProjectPickerOpen(false)
                resetOnOutsideClick()
            }
        }, 500)
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
        from: {position: "absolute", left: "50%", bottom: "-70px"},
        to: {position: "absolute", left: "50%", bottom: "50px"},
    }))
    const [bottomProjectPickerProps, setBottomProjectPickerProps] = useSpring(() => ({
        config: config.gentle,
        from: {position: "absolute", bottom: "-250px"},
        to: {position: "absolute", bottom: "-250px"}
    }))

    return (
        <Column>
            <Header margin={"0 16px"} type={"large"}>{t("projects.title")}</Header>
            <Paragraph margin={"0 16px"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Paragraph>
            {!onMobile &&
                <Column forwardRef={ref} overflow={"visible"}>
                    <animated.div style={projectPickerButtonProps}>
                        <FloatingActionButton
                            theme={theme}
                            onClick={() => setProjectPickerOpen(prevState => !prevState)}>
                            <AppsIcon/>
                        </FloatingActionButton>
                    </animated.div>
                    <animated.div style={{...bottomProjectPickerProps, ...bottomPickerBaseProps}}>
                        <ProjectPicker onProjectClick={() => setProjectPickerOpen(false)}/>
                    </animated.div>
                </Column>
            }
        </Column>
    )
}
