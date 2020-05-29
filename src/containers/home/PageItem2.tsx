import React from 'react';
import {Column} from "../../components/flexbox/Column";
import styled from "styled-components";

const PageItemContainer = styled(Column)`
    border-radius: 4px;
`

export const PageItem2 = () => {
    return (
        <PageItemContainer
            background={"linear-gradient(0.35turn, #e66465, #9198e5)"}
            width={"300px"}
            height={"150px"}
            padding={"0 26px"}>
            {/*<Header textAlign={"flex-start"} fontSize={"60px"}>Hello, I'm a frontend developer specializing in mobile.</Header>*/}
            {/*<Paragraph margin={"0 8px"}>I also like animations :)</Paragraph>*/}

        </PageItemContainer>
    )
}

