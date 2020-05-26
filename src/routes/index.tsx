import React from "react"
import {Routes, Route} from "react-router-dom"
import {Home} from "../containers/home"
import {AboutMe} from "../containers/aboutMe"
import {Projects} from "../containers/projects"
import {Contact} from "../containers/contact"
import {AboutThisWebsite} from "../containers/aboutThisWebsite"
import {NotFound} from "../containers/notFound/NotFound"
import {t} from "../strings/i18n"
import {ProjectDetail} from "../containers/projects/detail/ProjectDetail";

export interface GPAPage {
    name: string
    path: string
    backgroundColor?: string
}

export const GPAPages: GPAPage[] = [
    {
        name: t("home.title"),
        path: "/"
    },
    {
        name: t("about.title"),
        path: "/about-me"
    },
    {
        name: t("projects.title"),
        path: "/projects"
    },
    {
        name: t("contact.title"),
        path: "/contact"
    },
    {
        name: t("aboutThisWebsite.title"),
        path: "/about-this-website"
    }
]

export const createRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/index.html" element={<Home/>} />
            <Route path="about-me" element={<AboutMe/>} />
            <Route path="projects" element={<Projects/>} />
            <Route path="project/:id" element={<ProjectDetail/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="about-this-website" element={<AboutThisWebsite/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}
