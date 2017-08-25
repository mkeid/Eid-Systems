import React, { Component } from "react"
import NavBar from "./nav"
import VisibilitySensor from "react-visibility-sensor"
import { Body } from "./reuse"
import { connect } from "react-redux"


/**
* A Component making up an individual keyword in a set of skills
* @extends Component
*/
class Keyword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }

        // Bind this to function
        this.show = this.show.bind(this)
    }

    /** Listen to see if the keyword should be visible */
    componentDidUpdate() {
        if (this.props.setIsVisible && !this.state.isVisible) {
            this.showKeywordTimeout = setTimeout(this.show, this.props.delay)
        }
    }

    /** Clear timeout so component doesn't try to set state while unmounted */
    componentWillUnmount() {
        this.showKeywordTimeout && clearTimeout(this.showKeywordTimeout)
    }

    /** Update visibility state so keyword can invoke its animation */
    show() {
        this.setState({isVisible: true})
    }

    render() {
        const visibleClass = this.state.isVisible ? "visible" : ""
        const className = `keyword ${visibleClass}`

        return <div className={className}>{this.props.word}</div>
    }
}


/**
* A Component making up an individual section in the about page
* @extends Component
*/
class Skill extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keywordsAreVisible: false
        }

        // Bind this to function
        this.showKeywords = this.showKeywords.bind(this)
    }

    /** Set the set of keywords to visible so each word invokes its action */
    showKeywords(isVisible) {
        if (!this.state.keywordsAreVisible && isVisible) {
            this.setState({keywordsAreVisible: true})
        }
    }

    render() {
        // Split the description array into a list of paragraph components
        const descriptions = this.props.description.map(
            (paragraph, index) => <p key={index}>{paragraph}</p>
        )

        // Create a list of keyword components for each tag
        const keywords = this.props.keywords.sort().map(
            (keyword, index) => (
                <Keyword
                    key={keyword}
                    delay={index * 500}
                    setIsVisible={this.state.keywordsAreVisible}
                    word={keyword} />
            )
        )

        return (
            <div className="skill">
                <div className="title">{this.props.title}</div>
                <div className="description">
                    {descriptions}
                </div>
                <VisibilitySensor
                    onChange={this.showKeywords}>
                    <div className="keywords">{keywords}</div>
                </VisibilitySensor>
            </div>
        )
    }
}


/**
* Component within the billboard used to center the contents
* @extends Component
*/
class AboutBillboardWindow extends Component {
    shouldComponentUpdate() {
        return false
    }

    render() {
        return (
            <div className="info-containers">
                <div className="about-container">
                    <div className="title">{this.props.title}</div>
                    <div className="details">{this.props.data}</div>
                </div>
            </div>
        )
    }
}

/**
* Main head component at the top of the "About" page
* @extends Component
*/
class AboutBillboard extends Component {
    shouldComponentUpdate() {
        return false
    }

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
    }

    shouldComponentUpdate() {
        return false
    }

    render() {
        // Create the sections of the about page under skills
        const skills = this.props.skills.map(
            skill => <Skill key={skill.title} {...skill} />
        )

        return (
            <div className="about-site">
                <AboutBillboard about={this.props.about} />
                <Body title="SKILLS">
                    <div className="skills">{skills}</div>
                </Body>
            </div>
        )
    }
}


module.exports = { AboutSite }
