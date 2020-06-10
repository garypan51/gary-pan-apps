import React, {useEffect} from 'react';
import {Column} from "../../components/flexbox/Column";
import {t} from "../../strings/i18n";
import {setAppBarTitle} from "../../redux/actions/AppActions";
import {useDispatch} from "react-redux";
import {useOnMobile} from "../../hooks/UseOnMobile";
import {Header} from "../../components/text/Header";
import {animated, useSpring, config} from "react-spring";

export const Home = () => {
    const dispatch = useDispatch()
    const onMobile = useOnMobile()

    const headerProps = useSpring({
        config: config.molasses,
        from: {opacity: 0},
        to:  {opacity: 1}
    })

    useEffect(() => {
        dispatch(setAppBarTitle(onMobile ? t("app.shortName") : t("app.name")))
    }, [onMobile])

    return (
        <Column
            width={"100%"}
            padding={"16px 26px 0 26px"}>
            <animated.div style={headerProps} >
                <Header textAlign={"flex-start"} fontSize={"50px"}>Hello, I'm a frontend developer.</Header>
            </animated.div>
            {/*<Paragraph margin={"0 8px"}>I also like animations :)</Paragraph>*/}
            {/*<animated.div style={pageItemProps}>*/}
            {/*    <PageItem2/>*/}
            {/*</animated.div>*/}
        </Column>
    )
}

