import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NavBar from './js/nav.js'
import Billboard from './js/billboard.js'
import Body from './js/body.js'
import Footer from './js/footer.js'
require('./css/main.scss')

class App extends Component {
    render() {
        const logoImgSrc = '/images/logo.png'
        const navItemsData = ['About', 'Portfolio', 'Contact']
        const navSocialsData = [
            {
                site: 'GitHub',
                url: 'https://github.com/mohamedkeid',
                src: '/images/github.png'
            },
            {
                site: 'LinkedIn',
                url: 'https://www.linkedin.com/in/mkeid/',
                src: '/images/linkedin.png'
            }
        ]
        return (
            <div>
                <NavBar
                    logoImgSrc={logoImgSrc}
                    navItemsData={navItemsData}
                    navSocialsData={navSocialsData}
                />
                <Billboard />
                <Body title='SOME OF MY LATEST WORK'>

                </Body>
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
