import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'
import IndexSite from './js/index-site'
import AboutSite from './js/about-site'
import PortfolioSite from './js/portfolio-site'
import ContactSite from './js/contact-site'
import './css/main.scss'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={IndexSite}></Route>
                    <Route exact path='/about' component={AboutSite}></Route>
                    <Route exact path='/portfolio' component={AboutSite}></Route>
                    <Route exact path='/contact' component={AboutSite}></Route>
                </Switch>
            </HashRouter>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react-root')
)
