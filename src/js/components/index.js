import React, { Component } from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Body } from "./reuse"
import { Portfolio } from './portfolio'


const InfoContainer = (props) => (
    <div className={props.type + "-container"}>
        <div className="title">{props.title}</div>
        <div className="details">{props.data}</div>
        <Link to="/about">Learn more</Link>
    </div>
)

class InfoContainers extends Component{
    render() {
        return (
            <div className="info-containers">
                <InfoContainer
                    type="developer"
                    title={this.props.developerTitle}
                    data={this.props.developerKeywords}
                />
                <InfoContainer
                    type="engineer"
                    title={this.props.engineerTitle}
                    data={this.props.engineerKeywords}
                />
            </div>
        )
    }
}

class IndexBillboard extends Component {
    render() {
        const developerData = this.props.data.developer
        const developerKeywords = developerData.keywords.map(data => (
            <span key={data}>{data}</span>
        ))

        const engineerData = this.props.data.engineer
        const engineerKeywords= engineerData.keywords.map(data => (
            <span key={data}>{data}</span>
        ))

        return (
            <div className="billboard">
                <div className="container">
                    <InfoContainers
                        developerTitle={developerData.title}
                        developerKeywords={developerKeywords}
                        engineerTitle={engineerData.title}
                        engineerKeywords={engineerKeywords}
                    />
                    <img src="/images/me-art.png" />
                </div>
            </div>
        )
    }
}

class IndexSite extends Component {
    componentDidMount() {
        this.props.updateCurrentPage("index")
    }

    render() {
        const projects = this.props.projects.filter(project => project.forIndex)
        return (
            <div className="index-site">
                <IndexBillboard data={this.props.index} />
                <Body title='SOME OF MY LATEST WORK'>
                    <Portfolio projects={projects}/>
                    <Link to="/portfolio" className="see-more">See more</Link>
                </Body>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        index: state.index,
        projects: state.projects
    }
}

const IndexContainer = connect(mapStateToProps)(IndexSite)

module.exports = {
    IndexSite,
    IndexContainer
}
