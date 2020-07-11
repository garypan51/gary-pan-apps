import React from 'react';
import {Paragraph} from "../../components/text/Paragraph";
import {Header} from "../../components/text/Header";
import styled from "styled-components";
import {useOnMobile} from "../../hooks/UseOnMobile";
import {WebMobileProps} from "../../props/CommonProps";

const HeroTextSection = styled.div`
    max-width: ${(props: WebMobileProps) => props.onMobile ? undefined : "580px"};
`

export const HeroSection = () => {
    const onMobile = useOnMobile()

    return (
        <HeroTextSection onMobile={onMobile}>
            <Header fontSize={onMobile ? "2rem" : "3rem"}>Et harum quidem rerum facilis est et expedita.</Header>
            <Paragraph margin={"2rem 0 0 0"} fontSize={onMobile ? "1rem" : "2rem"}>Neque porro quisquam est, qu sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet?</Paragraph>
        </HeroTextSection>
    )
}