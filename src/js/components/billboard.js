import React, { Component } from "react"
import ReactDOM from "react-dom"
import { Link } from "react-router-dom"


const InfoContainer = (props) => (
    <div className={props.type + "-container"}>
        <div className="title">{props.title}</div>
        <div className="details">{props.data}</div>
        <Link to="/about">Learn more</Link>
    </div>
)

class InfoContainers extends Component{
    render() {
        return (
            <div className="info-containers">
                <InfoContainer
                    type="developer"
                    title={this.props.developerTitle}
                    data={this.props.developerKeywords}
                />
                <InfoContainer
                    type="engineer"
                    title={this.props.engineerTitle}
                    data={this.props.engineerKeywords}
                />
            </div>
        )
    }
}

class IndexBillboard extends Component {
    render() {
        const developerData = this.props.data.developer
        const developerKeywords = developerData.keywords.map(data => (
            <span key={data}>{data}</span>
        ))

        const engineerData = this.props.data.engineer
        const engineerKeywords= engineerData.keywords.map(data => (
            <span key={data}>{data}</span>
        ))

        return (
            <div className="billboard">
                <div className="container">
                    <InfoContainers
                        developerTitle={developerData.title}
                        developerKeywords={developerKeywords}
                        engineerTitle={engineerData.title}
                        engineerKeywords={engineerKeywords}
                    />
                    <img src="/images/me-art.png" />
                </div>
            </div>
        )
    }
}

const AboutContainer = (props) => (
    <div className="info-containers">
        <div className="about-container">
            <div className="title">{props.title}</div>
            <div className="details">{props.data}</div>
        </div>
    </div>
)

class AboutBillboard extends Component {
    render() {
        const about = this.props.about
        const data = (
            <div>
                <div className="head">{about.head}</div>
                <div className="detail">{about.detail}</div>
            </div>
        )
        return (
            <div className="billboard">
                <div className="container">
                    <AboutContainer
                        title="About Me"
                        data={data}
                    />
                </div>
            </div>
        )
    }
}

class ContactBillboard extends Component {
    render() {
        return (
            <div className="billboard">
                <div className="container">
                    <a className="linkedin-link" href="https://www.linkedin.com/in/mkeid/">
                        CONNECT
                    </a>
                </div>
            </div>
        )
    }
}

module.exports = {
    IndexBillboard,
    AboutBillboard,
    ContactBillboard
}
