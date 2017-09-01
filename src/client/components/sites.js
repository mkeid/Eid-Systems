import React, { Component } from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import AboutContainer from "../containers/about_container"
import BlogContainer from "../containers/blog_container"
import ContactSite from "./contact/contact_site"
import IndexContainer from "../containers/index_container"
import PortfolioSite from "./portfolio/portfolio_site"

/**
* 404 page component function
*/
const NotFound = () => (
    <div className="not-found-site">
        <div className="billboard" />
    </div>
)

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
                render={() => (<PortfolioSite {...props} />)} />
            <Route exact path="/404" component={NotFound} />
            <Redirect to="/404" />
        </Switch>
    </main>
)

export default Sites
