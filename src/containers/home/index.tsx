import React, {useEffect} from 'react';
import {Column} from "../../components/flexbox/Column";
import {t} from "../../strings/i18n";
import {setAppBarTitle} from "../../redux/actions/AppActions";
import {useDispatch} from "react-redux";
import {useOnMobile} from "../../hooks/UseOnMobile";
import {PageItem2} from "./PageItem2";
import {animated, useSpring} from "react-spring"

export const Home = () => {
    const dispatch = useDispatch()
    const onMobile = useOnMobile()

    useEffect(() => {
        dispatch(setAppBarTitle(onMobile ? t("app.shortName") : t("app.name")))
    }, [onMobile])

    const [pageItemProps, setPageItemsProps] = useSpring(() => ({

    }))

    return (
        <Column
            width={"100%"}
            padding={"0 26px"}>
            {/*<Header textAlign={"flex-start"} fontSize={"60px"}>Hello, I'm a frontend developer specializing in mobile.</Header>*/}
            {/*<Paragraph margin={"0 8px"}>I also like animations :)</Paragraph>*/}
            {/*<animated.div style={pageItemProps}>*/}
            {/*    <PageItem2/>*/}
            {/*</animated.div>*/}
        </Column>
    )
}

