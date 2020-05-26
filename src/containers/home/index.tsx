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
            <Header>{t("home.title")}</Header>
            <Paragraph margin={"0 16px"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Paragraph>
        </Column>
    )
}

