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


const Main = (props) => (
    <main>
        <Switch>
            <Route
                exact path="/"
                render={() => (
                    <IndexSite
                        data={indexData}
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
