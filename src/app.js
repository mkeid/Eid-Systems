import React, { Component } from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import axiosMiddleware from "redux-axios-middleware";
import { connect } from "react-redux"
import { compose, createStore, applyMiddleware } from "redux"
import { HashRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

// Import local modules
import allReducers from "./js/reducers/all"
import { Footer } from "./js/components/reuse"
import { Main } from "./js/components/sites"
import NavContainer from "./js/components/nav"
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
                blog: page === "blog",
                contact: page === "contact",
                portfolio: page === "portfolio"
            }
        })
    }

    render() {
        console.log(this.props)
        return this.props.isLoading ? (<div></div>) :
        (
            <div>
                <NavContainer currentPage={this.state.currentPage} />
                <Main updateCurrentPage={this.updateCurrentPage} />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => state
const AppContainer = connect(mapStateToProps)(App)

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>,
    document.getElementById("react-root")
)
