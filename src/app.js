import React, { Component } from "react"
import ReactDOM from "react-dom"
import { HashRouter, Route, Switch } from "react-router-dom"

import { AboutSite } from "./js/components/about"
import { ContactSite } from "./js/components/contact"
import Footer from "./js/components/footer.js"
import { IndexSite } from "./js/components/index.js"
import NavBar from "./js/components/nav"
import { PortfolioSite } from "./js/components/portfolio"
import { about, indexData, projects, skills } from "./js/components/data"
import "./css/main.scss"


const Main = (props) => (
    <main>
        <Switch>
            <Route
                exact path="/"
                render={() => (
                    <IndexSite
                        data={indexData}
                        projects={projects}
                        updateCurrentPage={props.updateCurrentPage}
                    />
                )}
            />
            <Route
                exact path="/about"
                render={() => (
                    <AboutSite
                        about={about}
                        skills={skills}
                        updateCurrentPage={props.updateCurrentPage}
                    />
                )}
            />
            <Route
                exact
                path="/portfolio"
                render={() => (
                    <PortfolioSite
                        projects={projects}
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

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: {
                about: false,
                portfolio: false,
                contact: false
            }
        }
        this.updateCurrentPage = this.updateCurrentPage.bind(this)
    }

    updateCurrentPage(page) {
        this.setState({
            currentPage: {
                about: page === "about",
                portfolio: page === "portfolio",
                contact: page === "contact"
            }
        })
    }

    render() {
        return (
            <div>
                <NavBar currentPage={this.state.currentPage} />
                <Main updateCurrentPage={this.updateCurrentPage} />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById("react-root")
)
