import React, { Component } from 'react'
import NavBar from './nav.js'
import { IndexBillboard } from './billboard.js'
import Body from './body.js'
import Footer from './footer.js'

class IndexSite extends Component {
    render() {
        return (
            <div className="index-site">
                <NavBar />
                <IndexBillboard />
                <Body title='SOME OF MY LATEST WORK'>

                </Body>
                <Footer />
            </div>
        )
    }
}

module.exports = IndexSite
