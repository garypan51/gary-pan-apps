import React from "react"
import {Routes, Route} from "react-router-dom"
import {Home} from "../containers/home"
import {About} from "../containers/about"
import {Projects} from "../containers/projects"
import {Contact} from "../containers/contact"
import {NotFound} from "../containers/notFound/NotFound";
import {t} from "../strings/i18n";

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

export const createRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}
