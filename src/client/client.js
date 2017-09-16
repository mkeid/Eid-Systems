import detect_ie from "./config/detect_ie"
detect_ie()

// Import local modules
import React, { Component } from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import axiosMiddleware from "redux-axios-middleware";
import { connect } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter } from "react-router-dom"
import { ConnectedRouter, routerMiddleware } from "react-router-redux"
import { Provider } from "react-redux"
import ReactGA from "react-ga"

// Import local files
import Footer from "./components/ui/footer"
import Sites from "./components/sites"
import { menuClose, menuOpen } from "./actions/nav_bar_actions"
import NavBarContainer from "./containers/nav_bar_container"
import { fetchSites } from "./actions/site_actions"
import CombinedReducer from "./reducers/combined_reducer"
import "./stylesheets/root.scss"

// Set up Google Analytics
ReactGA.initialize("UA-48669228-4")

// Init Axios client used for async API calls
const axiosClient = axios.create({
    baseURL: "/api/",
    headers: {
        authorization: localStorage.getItem("token")
    },
    responseType: "json"
})

// Create an enhanced history that syncs navigation with events with the store
const history = createHistory()

// Create our store which the entire application references and fetch init data
const middleware = applyMiddleware(
    routerMiddleware(history),
    axiosMiddleware(axiosClient)
)
const store = createStore(CombinedReducer, middleware)
store.dispatch(fetchSites())

/**
* Single page application component within a router component
*/
class Client extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: "index"
        }

        // Bind this to function
        this.updateCurrentPage = this.updateCurrentPage.bind(this)
    }

    updateCurrentPage(page) {
        this.setState({currentPage: page})
        this.props.menuClose()
        window.scrollTo(0, 0)

        // Google analytics call
        ReactGA.set({ page: window.location.pathname })
        ReactGA.pageview(window.location.pathname)
    }

    render() {
        return this.props.sites.isLoading ? null : (
            <ConnectedRouter history={history}>
                <div onClick={this.props.menuClose}>
                    <NavBarContainer
                        currentPage={this.state.currentPage}
                        menuClose={this.props.menuClose}
                        menuOpen={this.props.menuOpen} />
                    <Sites updateCurrentPage={this.updateCurrentPage} />
                    <Footer />
                </div>
            </ConnectedRouter>
        )
    }
}

// Create a container so the app can hide while fetching data
const ClientContainer = connect(
    state => state,
    { menuClose, menuOpen }
)(Client)

// Splice the React app into the DOM
ReactDOM.render(
    <Provider store={ store }>
        <ClientContainer />
    </Provider>,
    document.getElementById("react-root")
)

module.exports = { store }
