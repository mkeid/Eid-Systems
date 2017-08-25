import React, { Component } from "react"
import { Body } from "./reuse"


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
        this.makeVisible = this.makeVisible.bind(this)
    }

    componentDidMount() {
        this.appearTimeout = setTimeout(this.makeVisible, this.state.delay)
    }

    componentWillUnmount() {
        this.appearTimeout && clearTimeout(this.appearTimeout)
    }

    makeVisible() {
        this.setState({
            isVisible: true
        })
    }

    render() {
        const visibleClass = this.state.isVisible ? "visible" : ""
        const className = `portfolio-item ${visibleClass}`

        return (
            <li className="portfolio-item-container">
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
    }

    render() {
        const appearDelay = 150
        const portfolioItems = this.props.projects.map(
            (item, index) =>
            <PortfolioItem
                key={item.title}
                delay={index * appearDelay}
                focus={this.focusOnItem}
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


module.exports = {
    Portfolio,
    PortfolioItem,
    PortfolioSite
}
