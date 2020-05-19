import React from 'react';
import {Row} from "../../components/flexbox/Row";
import {Link} from "react-router-dom";
import {Paper} from "../../components/presentational/Paper";
import {t} from "../../strings/i18n";

interface GPAPage {
    name: string
    path: string
    backgroundColor?: string
}

export const PagePicker = () => {
    const gpaPages: GPAPage[] = [
        {
            name: t("home.title"),
            path: "/"
        },
        {
            name: t("about.title"),
            path: "/about"
        },
        {
            name: t("projects.title"),
            path: "/projects"
        },
        {
            name: t("contact.title"),
            path: "/contact"
        }
    ]

    const pages = gpaPages.map((item, index) => (
        <Link to={item.path} style={{textDecoration: "none"}}>
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
