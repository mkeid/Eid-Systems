import React, { Component } from "react"
import { Body } from "./reuse"
import { connect } from "react-redux"


/**
* A single-project component
*/
class PortfolioItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            delay: props.delay,
            isVisible: false
        }
        this.makeVisible = this.makeVisible.bind(this)
    }

    componentDidMount() {
        setTimeout(this.makeVisible, this.state.delay)
    }

    makeVisible() {
        this.setState({
            isVisible: true
        })
    }

    render() {
        const visibleClass = this.state.isVisible ? " visible" : ""
        const className = "portfolio-item" + visibleClass

        return (
            <li className={className}>
                <a href={this.props.url}>
                    <img src={this.props.imgSrc} />
                    <div className="portfolio-item-info">
                        <div className="portfolio-item-title">
                            {this.props.title}
                        </div>
                        <div className="portfolio-item-type">
                            {this.props.type}
                        </div>
                    </div>
                    <div className="portfolio-arrow">
                        >
                    </div>
                </a>
            </li>
        )
    }
}


/**
* Component list of project components
* @extends Component
*/
class Portfolio extends Component {
    render() {
        const portfolioItems = this.props.projects.map(
            (item, index) =>
            <PortfolioItem key={item.title} delay={index * 100} {...item} />
        )

        return (
            <ul className="portfolio">
                <div className="container">
                    {portfolioItems}
                </div>
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
        window.scrollTo(0, 0)
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
