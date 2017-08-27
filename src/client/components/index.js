import React, { Component } from "react"
import Particles from "react-particles-js"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Body } from "./reuse"
import { Portfolio } from "./portfolio"
import indexParticlesConfig from "../config/index_particles"


/**
* Component function appearing within the index billboard that lists skills
*/
const InfoContainer = (props) => (
    <div className={props.type + "-container"}>
        <div className="title">{props.title}</div>
        <div className="details">{props.data}</div>
        <Link to="/about">Learn more</Link>
    </div>
)


/**
* Set of components that make up the left and right billboard containers
* @extends Component
*/
class InfoContainers extends Component{
    render() {
        return (
            <div className="info-containers">
                <InfoContainer
                    type="developer"
                    title={this.props.developerTitle}
                    data={this.props.developerKeywords} />
                <InfoContainer
                    type="engineer"
                    title={this.props.engineerTitle}
                    data={this.props.engineerKeywords} />
            </div>
        )
    }
}


/**
* Main head compnent at the top of the "Index" page
* @extends Component
*/
class IndexBillboard extends Component {
    render() {
        // Data for the left-side component
        const developerData = this.props.data.developer
        const developerKeywords = developerData.keywords.map(
            data => <span key={data}>{data}</span>
        )

        // Data for the right-side component
        const engineerData = this.props.data.engineer
        const engineerKeywords= engineerData.keywords.map(
            data => (<span key={data}>{data}</span>)
        )

        return (
            <div className="billboard">
                <Particles height="31.5em" params={indexParticlesConfig} />
                <div className="container">
                    <InfoContainers
                        developerTitle={developerData.title}
                        developerKeywords={developerKeywords}
                        engineerTitle={engineerData.title}
                        engineerKeywords={engineerKeywords} />
                    <img src="/images/index/me-art.png" />
                </div>
            </div>
        )
    }
}


/**
* Component used by react router to render the "Index" page
* @extends Component
*/
class IndexSite extends Component {
    componentDidMount() {
        this.props.updateCurrentPage("Index")
    }

    render() {
        const projects = this.props.projects.filter(project => project.forIndex)
        return (
            <div className="index-site">
                <IndexBillboard data={this.props.index} />
                <Body title='SOME OF MY LATEST WORK'>
                    <Portfolio projects={projects}/>
                    <Link to="/portfolio" className="see-more">
                        See More
                    </Link>
                </Body>
            </div>
        )
    }
}




module.exports = { IndexSite }
