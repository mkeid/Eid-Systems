import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import { AboutContainer } from "./about"
import { BlogContainer} from "./blog"
import { ContactSite } from "./contact"
import { IndexContainer } from "./index.js"
import { ProjectsContainer } from "./portfolio"


const Main = (props) => (
    <main>
        <Switch>
            <Route
                exact path="/"
                render={() => (
                    <IndexContainer
                        updateCurrentPage={props.updateCurrentPage}
                    />
                )}
            />
            <Route
                exact path="/about"
                render={() => (
                    <AboutContainer
                        updateCurrentPage={props.updateCurrentPage}
                    />
                )}
            />
            <Route
                exact path="/blog"
                render={() => (
                    <BlogContainer
                        updateCurrentPage={props.updateCurrentPage}
                    />
                )}
            />
            <Route
                exact path="/contact"
                render={() => (
                    <ContactSite
                        updateCurrentPage={props.updateCurrentPage}
                    />
                )}
            />
            <Route
                exact
                path="/portfolio"
                render={() => (
                    <ProjectsContainer
                        updateCurrentPage={props.updateCurrentPage}
                    />
                )}
            />
            <Route
                path="*"
                component={NotFound}
            />
        </Switch>
    </main>
)

const NotFound = () => (
    <div className="not-found-site">
        <div className="billboard">
            <div className="container"></div>
        </div>
    </div>
)

module.exports = {
    Main,
    NotFound
}
