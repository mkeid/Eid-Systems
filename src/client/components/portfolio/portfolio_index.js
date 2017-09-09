import React, { Component } from "react"
import Body from "../ui/body"
import PortfolioContainer from "../../containers/portfolio_container"


/**
* Component used by react router to render the "Portfolio" page
* @extends Component
*/
class PortfolioIndex extends Component {
    /** Dispatch redux action to update status of current page */
    componentDidMount() {
        this.props.updateCurrentPage("Portfolio")
    }

    render() {
        return (
            <div className="portfolio-index">
                <Body>
                    <PortfolioContainer
                        projects={this.props.projects} />
                </Body>
            </div>
        )
    }
}


export default PortfolioIndex
