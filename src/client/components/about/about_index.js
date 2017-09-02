import React, { Component } from "react"
import AboutBillboard from "./about_billboard"
import Body from "../ui/body"
import Skill from "./skill"

/**
* Component used by react router to render the "About" page
* @extends Component
*/
class AboutIndex extends Component {
    componentDidMount() {
        this.props.updateCurrentPage("About")
    }

    componentWillMount() {
        if (!this.props.skills.length) {
            this.props.fetchSkills()
        }
    }

    render() {
        // Create the sections of the about page under skills
        const skills = this.props.skills.map(
            skill => <Skill key={skill.title} {...skill} />
        )

        return (
            <div className="about-index">
                <AboutBillboard about={this.props.about} />
                <Body title="SKILLS">
                    <div className="skills">{skills}</div>
                </Body>
            </div>
        )
    }
}

export default AboutIndex
