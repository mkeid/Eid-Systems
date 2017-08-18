import React, { Component } from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import axiosMiddleware from "redux-axios-middleware";
import { connect } from "react-redux"
import { compose, createStore, applyMiddleware } from "redux"
import { BrowserRouter, browserHistory } from "react-router-dom"
import { Provider } from "react-redux"
import ReactGA from "react-ga"

// Import local modules
import { Footer } from "./js/reuse"
import { Main } from "./js/sites"
import NavContainer from "./js/nav"
import { fetchStoreRequest, menuClose, menuOpen, reducer } from "./js/redux"
import "./css/main.scss"

// Set up Google Analytics
ReactGA.initialize("UA-48669228-4")
const logPageView = function() {
    window.scrollTo(0, 0)
    ReactGA.set({page: window.location.pathname})
    ReactGA.pageview(window.location.pathname)
}

// Init Axios client used for async API calls
const client = axios.create({baseURL: "/", responseType: "json"})

// Create our store which the entire application references
const middleware = applyMiddleware(axiosMiddleware(client))
const store = createStore(reducer, middleware)

// Fetch our application data from the backend
store.dispatch(fetchStoreRequest())

// Single page application within a router
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {currentPage: "index"}
        this.updateCurrentPage = this.updateCurrentPage.bind(this)
    }

    toggleMenu() {
        const func = store.getState().menuOpened ? menuClose : menuOpen
        store.dispatch(func())
    }

    updateCurrentPage(page) {
        this.setState({currentPage: page})
        store.dispatch(menuClose())
    }

    render() {
        return this.props.isLoading ? (<div />) : (
            <BrowserRouter
                onUpdate={this.props.onUpdate}
                history={browserHistory}>
                <div>
                    <NavContainer
                        currentPage={this.state.currentPage}
                        toggleMenu={this.toggleMenu} />
                    <Main updateCurrentPage={this.updateCurrentPage} />
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

// Create a container so the app can hide while fetching data
const AppContainer = connect(state => state)(App)

// Splice the React app into the DOM
ReactDOM.render(
    <Provider store={store}>
        <AppContainer onUpdate={logPageView} />
    </Provider>,
    document.getElementById("react-root")
)

module.exports = { store }
