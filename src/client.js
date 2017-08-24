import React, { Component } from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import axiosMiddleware from "redux-axios-middleware";
import { connect } from "react-redux"
import { bindActionCreators, createStore, applyMiddleware } from "redux"
import { BrowserRouter, browserHistory } from "react-router-dom"
import { Provider } from "react-redux"
import ReactGA from "react-ga"

// Import local modules
import { Footer } from "./components/reuse"
import { Main } from "./routes"
import { menuClose, menuOpen } from "./actions/nav"
import NavContainer from "./containers/nav"
import { fetchStoreRequest } from "./actions/root"
import CombinedReducer from "./reducers/root"
import "./stylesheets/root.scss"

// Set up Google Analytics
ReactGA.initialize("UA-48669228-4")

// Init Axios client used for async API calls
const axiosClient = axios.create({baseURL: "/", responseType: "json"})

// Create our store which the entire application references
const middleware = applyMiddleware(axiosMiddleware(axiosClient))
const store = createStore(CombinedReducer, middleware)

// Fetch our application data from the backend
store.dispatch(fetchStoreRequest())

/**
* Single page application component within a router component
*/
class Client extends Component {
    constructor(props) {
        super(props)
        this.state = {currentPage: "index"}

        // Bind this to function
        this.updateCurrentPage = this.updateCurrentPage.bind(this)
    }

    updateCurrentPage(page) {
        this.setState({currentPage: page})
        this.props.menuClose()

        // Google analytics call
        ReactGA.set({page: window.location.pathname})
        ReactGA.pageview(window.location.pathname)
    }

    render() {
        return this.props.root.isLoading ? (<div />) : (
            <BrowserRouter
                onUpdate={this.props.onUpdate}
                history={browserHistory}>
                <div onClick={this.props.menuClose}>
                    <NavContainer
                        currentPage={this.state.currentPage}
                        menuClose={this.props.menuClose}
                        menuOpen={this.props.menuOpen} />
                    <Main updateCurrentPage={this.updateCurrentPage} />
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

// Create a container so the app can hide while fetching data
const mapDispatchToProps = dispatch => (
    bindActionCreators({menuClose, menuOpen}, dispatch)
)
const ClientContainer = connect(state => state, mapDispatchToProps)(Client)

// Splice the React app into the DOM
ReactDOM.render(
    <Provider store={store}>
        <ClientContainer />
    </Provider>,
    document.getElementById("react-root")
)

module.exports = { store }
