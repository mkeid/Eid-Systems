import React, { Component } from 'react'
import { IndexBillboard } from './billboard'
import Body from './body'
import { Portfolio } from './portfolio'


class IndexSite extends Component {
    componentDidMount() {
        this.props.updateCurrentPage("index")
    }

    render() {
        return (
            <div className="index-site">
                <IndexBillboard data={this.props.data} />
                <Body title='SOME OF MY LATEST WORK'>
                    <Portfolio />
                </Body>
            </div>
        )
    }
}

module.exports = {
    IndexSite
}
