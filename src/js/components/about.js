import React, { Component } from "react"
import NavBar from "./nav"
import { Body } from "./reuse"
import { connect } from "react-redux"


const Skill = (props) => (
    <div className="skill">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
        <div className="keywords">{props.keywords}</div>
    </div>
)

const AboutBillboardWindow = (props) => (
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
                    <AboutBillboardWindow
                        title="About Me"
                        data={data}
                    />
                </div>
            </div>
        )
    }
}

class AboutSite extends Component {
    componentDidMount() {
        this.props.updateCurrentPage("about")
    }

    render() {
        const skills = this.props.skills.map((skill) => (
            <Skill
                key={skill.title}
                title={skill.title}
                description={
                    skill.description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))
                }
                keywords={
                    skill.keywords.sort().map((keyword) => (
                        <div key={keyword} className="keyword">{keyword}</div>
                    ))
                }
            />
        ))
        return (
            <div className="about-site">
                <AboutBillboard about={this.props.about} />
                <Body title="SKILLS">
                    <div className="skills">
                        {skills}
                    </div>
                </Body>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        about: state.about,
        skills: state.skills
    }
)

const AboutContainer = connect(mapStateToProps)(AboutSite)

module.exports = {
    AboutContainer
}
