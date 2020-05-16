import React, {useEffect, useState} from 'react';
import {Column} from "../../components/flexbox/Column";
import {Header} from "../../components/text/Header";
import {FadeInRightText} from "../../components/text/Animated/FadeInRightText";

export const WelcomeMessage = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        setTimeout(() => setShow(true), 1500)
    }, [])
    return (
        <Column
            width={"100%"}
            alignItems={"center"}>
            {/*<Header fontSize={"48px"}>Hey, I Really Enjoy Making Apps</Header>*/}
            {/*<Header fontSize={"48px"} margin={"10px 0"}>Welcome to Gary Pan Apps</Header>*/}
            <FadeInRightText show={show} text={"Welcome to Gary Pan Apps"}/>
        </Column>
    )
}


