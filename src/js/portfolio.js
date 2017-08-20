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

        // Bind this to functions
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.makeVisible = this.makeVisible.bind(this)
    }

    componentDidMount() {
        setTimeout(this.makeVisible, this.state.delay)
    }

    handleMouseEnter() {
        this.props.focus(this.props.title)
    }

    makeVisible() {
        this.setState({
            isVisible: true
        })
    }

    render() {
        const ghostClass = this.props.isGhost ? " ghost" : ""
        const visibleClass = this.state.isVisible ? " visible" : ""
        const className = "portfolio-item" + ghostClass + visibleClass

        return (
            <li className="portfolio-item-container"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.props.removeGhosts}>
                <div className={className}>
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
                </div>
            </li>
        )
    }
}


/**
* Component list of project components
* @extends Component
*/
class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ghostProjects: []
        }

        // Bing this to functions
        this.focusOnItem = this.focusOnItem.bind(this)
        this.removeGhosts = this.removeGhosts.bind(this)
    }

    focusOnItem(focusedProject) {
        this.setState({
            ghostProjects: this.props.projects.filter(
                project => project.title !== focusedProject
            ).map(project => project.title)
        })
    }

    removeGhosts() {
        this.setState({
            ghostProjects: []
        })
    }

    render() {
        const appearDelay = 150
        const portfolioItems = this.props.projects.map(
            (item, index) =>
            <PortfolioItem
                key={item.title}
                delay={index * appearDelay}
                focus={this.focusOnItem}
                isGhost={this.state.ghostProjects.includes(item.title)}
                removeGhosts={this.removeGhosts}
                {...item} />
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
