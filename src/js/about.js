import React, { Component } from "react"
import NavBar from "./nav"
import { Body } from "./reuse"
import { connect } from "react-redux"


/**
* A Component making up an individual section in the about page
* @extends Component
*/
class Skill extends Component {
    render() {
        // Split the description array into a list of paragraph components
        const descriptions = this.props.description.map(
            (paragraph, index) => (
                <p key={index}>
                    {paragraph}
                </p>
            )
        )

        // Create a list of keyword components for each tag
        const keywords = this.props.keywords.sort().map(
            keyword => (
                <div key={keyword} className="keyword">
                    {keyword}
                </div>
            )
        )

        return (
            <div className="skill">
                <div className="title">
                    {this.props.title}
                </div>
                <div className="description">
                    {descriptions}
                </div>
                <div className="keywords">
                    {keywords}
                </div>
            </div>
        )
    }
}


/** Component function within the billboard used to center the contents */
const AboutBillboardWindow = (props) => (
    <div className="info-containers">
        <div className="about-container">
            <div className="title">
                {props.title}
            </div>
            <div className="details">
                {props.data}
            </div>
        </div>
    </div>
)


/**
* Main head component at the top of the "About" page
* @extends Component
*/
class AboutBillboard extends Component {
    render() {
        const about = this.props.about
        const data = (
            <div>
                <div className="head">
                    {about.head}
                </div>
                <div className="detail">
                    {about.detail}
                </div>
            </div>
        )

        return (
            <div className="billboard">
                <div className="container">
                    <AboutBillboardWindow title="About Me" data={data} />
                </div>
            </div>
        )
    }
}


/**
* Component used by react router to render the "About" page
* @extends Component
*/
class AboutSite extends Component {
    componentDidMount() {
        this.props.updateCurrentPage("About")
        window.scrollTo(0, 0)
    }



    render() {
        // Create the sections of the about page under skills
        const skills = this.props.skills.map(
            skill => (
                <Skill key={skill.title} {...skill} />
            )
        )

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


// Init redux container for "About" page
const mapStateToProps = state => ({about: state.about, skills: state.skills})
const AboutContainer = connect(mapStateToProps)(AboutSite)

module.exports = { AboutContainer }
