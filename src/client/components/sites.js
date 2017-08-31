import React, { Component } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import AboutContainer from "../containers/about"
import BlogContainer from "../containers/blog"
import { ContactSite } from "./contact"
import IndexContainer from "../containers/index"
import { NotFound } from "./reuse"
import ProjectsContainer from "../containers/portfolio"


/**
* Site conglomeration component comprised of a multitude of site through routing
*/
const Sites = (props) => (
    <main>
        <Switch>
            <Route exact path="/"
                render={() => (<IndexContainer {...props} />)} />
            <Route exact path="/about"
                render={() => (<AboutContainer {...props} />)} />
            <Route exact path="/blog"
                render={() => (<BlogContainer {...props} />)} />
            <Route exact path="/contact"
                render={() => (<ContactSite {...props} />)} />
            <Route exact path="/portfolio"
                render={() => (<ProjectsContainer {...props} />)} />
            <Route exact path="/404" component={NotFound} />
            <Redirect to="/404" />
        </Switch>
    </main>
)




module.exports = {
    Sites,
    NotFound
}
