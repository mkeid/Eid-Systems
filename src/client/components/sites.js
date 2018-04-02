import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AboutContainer from "../containers/about_container";
import AdminContainer from "../containers/admin/admin_container";
import AuthIndex from "./auth/auth_index";
import BlogContainer from "../containers/blog_container";
import ContactIndex from "./contact/contact_index";
import IndexContainer from "../containers/index_container";
import PortfolioIndex from "./portfolio/portfolio_index";

/**
 * 404 page component function.
 */
const NotFound = () => (
    <div className="not-found-site">
        <div className="billboard" />
    </div>
);

/**
 * Site conglomeration component comprised of a multitude of site through routing.
 * @param {*} props 
 */
const Sites = props => (
    <div className="sites">
        <Switch>
            <Route exact path="/"
                render={() => (<IndexContainer {...props} />)} />
            <Route exact path="/about"
                render={() => (<AboutContainer {...props} />)} />
            <Route path="/admin"
                render={() => (<AdminContainer {...props} />)} />
            <Route exact path="/auth"
                render={() => (<AuthIndex {...props} />)} />
            <Route exact path="/blog"
                render={() => (<BlogContainer {...props} />)} />
            <Route exact path="/contact"
                render={() => (<ContactIndex {...props} />)} />
            <Route exact path="/portfolio"
                render={() => (<PortfolioIndex {...props} />)} />
            <Route exact path="/404" component={NotFound} />
            <Redirect to="/404" />
        </Switch>
    </div>
);

export default Sites;
