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
        const portfolioItemsData = [
            {
                title: "Feed-Forward Style Transfer",
                type: "Computer Vision",
                imgSrc: "/images/feed-forward-style-transfer.jpg",
                url: "https://github.com/mohamedkeid/Feed-Forward-Style-Transfer"
            },
            {
                title: "Neural Machine Translation",
                type: "Natural Language Processing",
                imgSrc: "/images/neural-machine-translation.jpg",
                url: "https://github.com/mohamedkeid/Feed-Forward-Style-Transfer"
            },
            {
                title: "Neural Network From Scratch",
                type: "Deep Learning",
                imgSrc: "/images/neural-network-from-scratch.jpg",
                url: "https://github.com/mohamedkeid/Feed-Forward-Style-Transfer"
            },
        ]
        const portfolioItems = portfolioItemsData.map(item =>
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

const PortfolioSite = () => (
    <div className="portfolio-site">
        <Body>
            <Portfolio />
        </Body>
    </div>
)

module.exports = {
    Portfolio,
    PortfolioItem,
    PortfolioSite
}
