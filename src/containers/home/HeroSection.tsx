import React from 'react';
import {Column} from "../../components/flexbox/Column";
import {Paragraph} from "../../components/text/Paragraph";
import {Header} from "../../components/text/Header";
import {HomeNavigationButtons} from "./HomeNavigationButtons";
import styled from "styled-components";

interface IProps {
    className?: string
}

const HomeNavigationButtonsContainer = styled(Column)`
    margin: 50px 0 0 0;
`

export const HeroSection = (props: IProps) => {
    return (
        <Column alignItems={"center"}>
            <Column
                width={"580px"}
                alignItems={"flex-start"}>
                <Header fontSize={"50px"}>Let’s craft apps that people love to use</Header>
                <Paragraph margin={"36px 0 0 0"} fontSize={"30px"}>Driven by design and hungry for Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet?</Paragraph>
            </Column>
            <HomeNavigationButtonsContainer>
                <HomeNavigationButtons/>
            </HomeNavigationButtonsContainer>
        </Column>
    )
}

