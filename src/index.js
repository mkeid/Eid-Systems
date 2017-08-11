import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NavBar from './nav.js'
import Body from './body.js'
import Footer from './footer.js'
require('./index.scss')

class App extends Component {
    render() {
        const navItemsData = ['About', 'Portfolio', 'Contact']
        const navSocialsData = [
            {
                site: 'GitHub',
                url: 'https://github.com/mohamedkeid',
                src: 'github.jpg'
            },
            {
                site: 'LinkedIn',
                url: 'https://www.linkedin.com/in/mkeid/',
                src: 'linkedin.jpg'
            }
        ]
        return (
            <div>
                <NavBar
                    navItemsData={navItemsData}
                    navSocialsData={navSocialsData}
                />
                <Body />
                <Footer
                    copyrightName={'Mohamed K. Eid'}
                    copyrightYear={2017}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react-root')
)
