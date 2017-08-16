import React, { Component } from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import axiosMiddleware from "redux-axios-middleware";
import { connect } from "react-redux"
import { compose, createStore, applyMiddleware } from "redux"
import { BrowserRouter, browserHistory } from "react-router-dom"
import { Provider } from 'react-redux'

// Import local modules
import { Footer } from "./js/reuse"
import { Main } from "./js/sites"
import NavContainer from "./js/nav"
import { fetchStore, fetchStoreRequest, reducer } from "./js/redux"
import "./css/main.scss"

// Axios client used for async API calls
const client = axios.create({
    baseURL: "/",
    responseType: "json"
})

// Create our store which the entire application references
const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)))

// Fetch our application data from the backend
store.dispatch(fetchStoreRequest())

// Single page application within a router
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {currentPage: "index"}
        this.updateCurrentPage = this.updateCurrentPage.bind(this)
    }

    updateCurrentPage(page) {
        this.setState({currentPage: page})
    }

    render() {
        return this.props.isLoading ? (<div></div>) :
        (
            <BrowserRouter history={browserHistory}>
                <div>
                    <NavContainer currentPage={this.state.currentPage} />
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
        <AppContainer />
    </Provider>,
    document.getElementById("react-root")
)
