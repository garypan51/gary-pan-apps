import React from 'react';
import {Column} from "../../components/flexbox/Column";
import {Header} from "../../components/text/Header";
import styled from "styled-components";
import {Machine} from "xstate";
import {useMachine} from "@xstate/react/lib";
import {t} from "../../strings/i18n";

const RootColumn = styled(Column)`
    margin: 16px
`
const HOME_MACHINE_KEYS = {
    STATES: {
        SPLASH_LOADING: "splashLoading",
        IDLE: "idle",
        PROJECT_LOADING: "projectLoading",
    },
    ACTIONS: {
        DISMISS_SPLASH: "DISMISS_SPLASH",
        LOAD_PROJECT: "LOAD_PROJECT",
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
            on: { LOAD_PROJECT: HOME_MACHINE_KEYS.STATES.PROJECT_LOADING }
        },
        projectLoading: {

        }
    }
})

export const Home = () => {
    const [currentState, sendState] = useMachine(homeMachine)

    return (
        <RootColumn>
            <Header type={"large"}>Coming Soon</Header>
        </RootColumn>
    )
}

