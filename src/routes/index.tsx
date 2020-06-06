import React from "react"
import {Switch, Route} from "react-router-dom"
import {Home} from "../containers/home"
import {AboutMe} from "../containers/aboutMe"
import {Projects} from "../containers/projects"
import {Contact} from "../containers/contact"
import {AboutThisWebsite} from "../containers/aboutThisWebsite"
import {NotFound} from "../containers/notFound/NotFound"
import {t} from "../strings/i18n"
import {ProjectDetail} from "../containers/projects/detail/ProjectDetail";
import * as H from "history";

export interface GPAPage {
    name: string
    path: string
    textColor?: string
    backgroundColor?: string
}

export const GPAPages: GPAPage[] = [
    {
        name: t("home.title"),
        path: "/",
        textColor: "#ffffff",
        backgroundColor: "#0068D6"
    },
    {
        name: t("about.title"),
        path: "/about-me",
        textColor: "#AA13C6",
        backgroundColor: "#00003F"
    },
    {
        name: t("work.title"),
        path: "/projects",
        textColor: "#ffffff",
        backgroundColor: "#2e7d32",
    },
    {
        name: t("contact.title"),
        path: "/contact",
        textColor: "#ffffff",
        backgroundColor: "#4a148c"
    },
    {
        name: t("aboutThisWebsite.title"),
        path: "/about-this-website",
        textColor: "#ffffff",
        backgroundColor: "#0068D6"
    }
]

export const createRoutes = (location?: H.Location) => {
    return (
        <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/index.html" component={Home} />
            <Route exact path="/about-me" component={AboutMe} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/project/:id" component={ProjectDetail} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about-this-website" component={AboutThisWebsite} />
            <Route exact path="*" component={NotFound} />
        </Switch>
    )
}
