import React, { Component } from "react"
import ReactDOM from "react-dom"
import { HashRouter, Route, Switch } from "react-router-dom"

import { AboutSite } from "./js/about"
import { ContactSite } from "./js/contact"
import Footer from "./js/footer.js"
import { IndexSite } from "./js/index.js"
import NavBar from "./js/nav"
import { PortfolioSite } from "./js/portfolio"
import { about, indexData, skills } from "./js/data"
import "./css/main.scss"


const Main = () => (
    <main>
        <Switch>
            <Route
                exact path="/"
                render={() => <IndexSite data={indexData} />}
            />
            <Route
                exact path="/about"
                render={() => <AboutSite about={about} skills={skills} />}
            />
            <Route
                exact
                path="/portfolio"
                component={PortfolioSite}
            />
            <Route
                exact path="/contact"
                component={ContactSite}
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

const App = () => (
    <div>
        <NavBar />
        <Main />
        <Footer />
    </div>
)

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById("react-root")
)
