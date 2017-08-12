import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'

import { AboutSite } from './js/about'
import { ContactSite } from './js/contact'
import Footer from './js/footer.js'
import { IndexSite } from './js/index.js'
import NavBar from './js/nav'
import { PortfolioSite } from './js/portfolio'
import './css/main.scss'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={IndexSite} />
            <Route exact path='about' component={AboutSite} />
            <Route exact path='portfolio' component={PortfolioSite} />
            <Route exact path='contact' component={ContactSite} />
        </Switch>
    </main>
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
    document.getElementById('react-root')
)
