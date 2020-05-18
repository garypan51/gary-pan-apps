import React from 'react';
import {Column} from "../../components/flexbox/Column";
import {Colors} from "../../resources/Colors";
import {Row} from "../../components/flexbox/Row";
import {Link} from "react-router-dom";
import {Paper} from "../../components/presentational/Paper";

interface GPAPage {
    name: string
    backgroundColor?: string
}

export const PagePicker = () => {
    const gpaPages: GPAPage[] = [
        {
            name: "Home",
        },
        {
            name: "About",
        },
        {
            name: "Projects",
        },
        {
            name: "Contact",
        }
    ]

    const pages = gpaPages.map((item, index) => (
        <Link to={"/contact"} style={{textDecoration: "none"}}>
            <Paper
                width={`20vw`}
                height={"200px"}>
                {item.name}
            </Paper>
        </Link>
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
