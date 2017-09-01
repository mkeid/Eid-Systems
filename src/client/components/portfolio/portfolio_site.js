import React, { Component } from "react"
import Body from "../ui/body"
import PortfolioContainer from "../../containers/portfolio_container"

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
                    <PortfolioContainer
                        projects={this.props.projects} />
                </Body>
            </div>
        )
    }
}

export default PortfolioSite
