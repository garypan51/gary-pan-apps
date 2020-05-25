import React from 'react';
import {Column} from "../../components/flexbox/Column";
import {Header} from "../../components/text/Header";
import {Machine} from "xstate";
import {useMachine} from "@xstate/react/lib";
import {t} from "../../strings/i18n";

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

    return (
        <Column
            width={"100%"}
            padding={"0 16px"}>
            <Header>{t("home.title")}</Header>
        </Column>
    )
}

