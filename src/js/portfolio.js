import React, { Component } from "react"
import Body from "./body"


const PortfolioItem = (props) => (
    <li className="portfolio-item">
        <a href={props.url}>
            <img src={props.imgSrc} />
            <div className="portfolio-item-title">{props.title}</div>
            <div className="portfolio-item-type">{props.type}</div>
        </a>
    </li>
)

class Portfolio extends Component {
    render() {
        const portfolioItems = this.props.projects.map(item =>
            <PortfolioItem
                key={item.title}
                imgSrc={item.imgSrc}
                title={item.title}
                type={item.type}
                url={item.url}
            />
        )
        return (
            <ul className="portfolio">
                {portfolioItems}
            </ul>
        )
    }
}

class PortfolioSite extends Component {
    componentDidMount() {
        this.props.updateCurrentPage("portfolio")
    }

    render() {
        return (
            <div className="portfolio-site">
                <Body>
                    <Portfolio projects={this.props.projects}/>
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
