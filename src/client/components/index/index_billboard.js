import React, { Component } from "react"
import Particles from "react-particles-js"
import { Link } from "react-router-dom"
import Portfolio from "../../containers/portfolio_container"
import indexParticlesConfig from "../../config/index_particles"


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
                <Particles height="33.5em" params={indexParticlesConfig} />
                <div className="container">
                    <InfoContainers
                        developerTitle={developerData.title}
                        developerKeywords={developerKeywords}
                        engineerTitle={engineerData.title}
                        engineerKeywords={engineerKeywords} />
                    <img src="/images/index/me-art.svg" />
                </div>
            </div>
        )
    }
}


export default IndexBillboard
