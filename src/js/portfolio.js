import React, { Component } from "react"
import { Body } from "./reuse"
import { connect } from "react-redux"


/**
* A single-project component function
*/
const PortfolioItem = (props) => (
    <li className="portfolio-item">
        <a href={props.url}>
            <img src={props.imgSrc} />
            <div className="portfolio-item-info">
                <div className="portfolio-item-title">{props.title}</div>
                <div className="portfolio-item-type">{props.type}</div>
            </div>
            <div className="portfolio-arrow">></div>
        </a>
    </li>
)


/**
* Component list of project components
* @extends Component
*/
class Portfolio extends Component {
    render() {
        const portfolioItems = this.props.projects.map(
            item => <PortfolioItem key={item.title} {...item} />
        )

        return (
            <ul className="portfolio">
                <div className="container">{portfolioItems}</div>
            </ul>
        )
    }
}


/**
* Component used by react router to render the "Portfolio" page
* @extends Component
*/
class PortfolioSite extends Component {
    componentDidMount() {
        this.props.updateCurrentPage("Portfolio")
    }

    render() {
        return (
            <div className="portfolio-site">
                <Body>
                    <Portfolio projects={this.props.projects} />
                </Body>
            </div>
        )
    }
}


// Init redux container for "Portfolio" page
const mapStateToProps = state => ({projects: state.projects})
const ProjectsContainer = connect(mapStateToProps)(PortfolioSite)

module.exports = {
    Portfolio,
    PortfolioItem,
    PortfolioSite,
    ProjectsContainer
}
