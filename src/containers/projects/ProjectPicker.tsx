import React from 'react';
import {Row} from "../../components/flexbox/Row";
import {Paper} from "../../components/presentational/Paper";
import {Paragraph} from "../../components/text/Paragraph";
import {Column} from "../../components/flexbox/Column";

interface IProps {
    onPageClick?: () => void
}

const projects = [
    {
        name: "Voluptatem Quia"
    },
    {
        name: "Numquam Eius"
    },
    {
        name: "Et Quasi Architecto"
    },
    {
        name: "Quis Autem"
    }
]
export const ProjectPicker = (props: IProps) => {
    const pages = projects.map((page, index) => (
        <Paper
            cursor={"pointer"}
            onClick={props.onPageClick}
            width={"20vw"}
            height={"200px"}>
            <Column transparent alignItems={"center"}>
                <Paragraph>{page.name}</Paragraph>
            </Column>
        </Paper>
    ))

    return (
        <Row
            transparent
            width={"100vw"}
            justifyContent={"space-around"}>
            {pages}
        </Row>
    )
}
