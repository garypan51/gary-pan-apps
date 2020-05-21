import React from 'react';
import {Row} from "../../components/flexbox/Row";
import {Link} from "react-router-dom";
import {Paper} from "../../components/presentational/Paper";
import {GPAPages} from "../../routes";

export const PagePicker = () => {

    const pages = GPAPages.map((page, index) => (
        <Link to={page.path} style={{textDecoration: "none"}}>
            {/*Move this to a separate component*/}
            <Paper
                width={`20vw`}
                height={"200px"}>
                {page.name}
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
