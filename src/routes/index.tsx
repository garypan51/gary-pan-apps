import React from "react"
import {Routes, Route} from "react-router-dom"
import {Home} from "../containers/home"
import {About} from "../containers/about"
import {Projects} from "../containers/projects"
import {Contact} from "../containers/contact"

export const createRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route  path="/contact" element={<Contact/>} />
        </Routes>
    )
}
