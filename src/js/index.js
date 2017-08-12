import React, { Component } from 'react'
import { IndexBillboard } from './billboard.js'
import Body from './body.js'


class IndexSite extends Component {
    render() {
        return (
            <div className="index-site">
                <IndexBillboard />
                <Body title='SOME OF MY LATEST WORK' />
            </div>
        )
    }
}

module.exports = {
    IndexSite
}
