import React from 'react';
import {Row} from "../../components/flexbox/Row";
import {ProjectItem} from "./ProjectItem";

interface IProps {
    onProjectClick?: () => void
}

const projects = [
    {
        id: 0,
        name: "Voluptatem Quia",
        textColor: "#ffffff",
        backgroundColor: "#0068D6"
    },
    {
        id: 1,
        name: "Numquam Eius",
        textColor: "#AA13C6",
        backgroundColor: "#00003F"
    },
    {
        id: 2,
        name: "Et Quasi Architecto",
        textColor: "#ffffff",
        backgroundColor: "#2e7d32",
    },
    {
        id: 3,
        name: "Quis Autem",
        textColor: "#ffffff",
        backgroundColor: "#4a148c"
    }
]

export const ProjectPicker = (props: IProps) => {
    const projectItems = projects.map((project, index) => (
        <ProjectItem
            key={index}
            name={project.name}
            backgroundColor={project.backgroundColor}
            textColor={project.textColor}/>
    ))

    return (
        <Row
            transparent
            overflow={"visible"}
            alignItems={"center"}
            padding={"0 16px"}
            width={"100vw"}
            height={"180px"}
            justifyContent={"space-around"}>
            {projectItems}
        </Row>
    )
}
