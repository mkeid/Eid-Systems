import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { IndexBillboard } from './billboard'
import Body from './body'
import { Portfolio } from './portfolio'


class IndexSite extends Component {
    componentDidMount() {
        this.props.updateCurrentPage("index")
    }

    render() {
        const projects = this.props.projects.filter(project => project.forIndex)
        return (
            <div className="index-site">
                <IndexBillboard data={this.props.data} />
                <Body title='SOME OF MY LATEST WORK'>
                    <Portfolio projects={projects}/>
                    <Link to="/portfolio" className="see-more">See more</Link>
                </Body>
            </div>
        )
    }
}

module.exports = {
    IndexSite
}
