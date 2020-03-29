import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "../containers/home"

export const createRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    )
}