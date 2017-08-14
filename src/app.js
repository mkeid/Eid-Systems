import React, { Component } from "react"
import ReactDOM from "react-dom"
import { createStore } from 'redux'
import { HashRouter } from "react-router-dom"
import { Provider } from 'react-redux'

import allReducers from "./js/reducers/all"
import { Footer } from "./js/components/reuse"
import { Main } from "./js/components/sites"
import NavContainer from "./js/components/nav"
import "./css/main.scss"


const store = createStore(allReducers)

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
        return (
            <div>
                <NavContainer currentPage={this.state.currentPage} />
                <Main updateCurrentPage={this.updateCurrentPage} />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById("react-root")
)
