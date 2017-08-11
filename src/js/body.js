import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class PortfolioItem extends Component {
    render() {
        return (
            <li className="portfolioItem">
                <a href={this.props.url}>
                    <img src={this.props.imgSrc} />
                    <div className="portfolioItemTitle">{this.props.title}</div>
                    <div className="portfolioItemType">{this.props.type}</div>
                </a>
            </li>
        )
    }
}

class Portfolio extends Component {
    render() {
        const portfolioItemsData = [
            {
                title: 'Feed-Forward Style Transfer',
                type: 'Computer Vision',
                imgSrc: '/images/feed-forward-style-transfer.jpg',
                url: 'https://github.com/mohamedkeid/Feed-Forward-Style-Transfer'
            },
            {
                title: 'Neural Machine Translation',
                type: 'Natural Language Processing',
                imgSrc: '/images/neural-machine-translation.jpg',
                url: 'https://github.com/mohamedkeid/Feed-Forward-Style-Transfer'
            },
            {
                title: 'Neural Network From Scratch',
                type: 'Deep Learning',
                imgSrc: '/images/neural-network-from-scratch.jpg',
                url: 'https://github.com/mohamedkeid/Feed-Forward-Style-Transfer'
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

class Body extends Component {
    render() {
        return (
            <div className="body">
                <div className="title">
                    <span>{this.props.title}</span>
                </div>
                <Portfolio />
            </div>
        )
    }
}

module.exports = Body
