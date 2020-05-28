import React, {useEffect} from 'react';
import {Column} from "../../components/flexbox/Column";
import {Header} from "../../components/text/Header";
import {Machine} from "xstate";
import {useMachine} from "@xstate/react/lib";
import {t} from "../../strings/i18n";
import {Paragraph} from "../../components/text/Paragraph";
import {setAppBarTitle} from "../../redux/actions/AppActions";
import {useDispatch} from "react-redux";
import {useOnMobile} from "../../hooks/UseOnMobile";

const HOME_MACHINE_KEYS = {
    STATES: {
        SPLASH_LOADING: "splashLoading",
        IDLE: "idle",
        PROJECTS_LOADING: "projectsLoading",
    },
    ACTIONS: {
        DISMISS_SPLASH: "DISMISS_SPLASH",
        LOAD_PROJECTS: "LOAD_PROJECTS",
    }
}

export const homeMachine = Machine({
    id: "home",
    initial: HOME_MACHINE_KEYS.STATES.SPLASH_LOADING,
    states: {
        splashLoading: {
            on: { DISMISS_SPLASH: HOME_MACHINE_KEYS.STATES.IDLE }
        },
        idle: {
            on: { LOAD_PROJECT: HOME_MACHINE_KEYS.STATES.PROJECTS_LOADING }
        },
        projectsLoading: {

        }
    }
})

export const Home = () => {
    const [currentState, sendState] = useMachine(homeMachine)
    const dispatch = useDispatch()
    const onMobile = useOnMobile()

    useEffect(() => {
        dispatch(setAppBarTitle(onMobile ? t("app.shortName") : t("app.name")))
    }, [onMobile])

    return (
        <Column
            width={"100%"}
            padding={"0 26px"}>
            <Header textAlign={"flex-start"} fontSize={"60px"}>Hello, I'm a frontend developer specializing in mobile.</Header>
            <Paragraph margin={"0 8px"}>I also like animations :)</Paragraph>
        </Column>
    )
}

