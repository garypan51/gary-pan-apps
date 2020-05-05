import React from "react"
import {Route, Switch} from "react-router-dom"
import {Home} from "../containers/home"
import {About} from "../containers/about"
import {Projects} from "../containers/projects"
import {Contact} from "../containers/contact"

export const createRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
        </Switch>
    )
}
