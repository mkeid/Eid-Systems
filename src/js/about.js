import React, { Component } from 'react'
import NavBar from './nav'
import { AboutBillboard } from './billboard'
import Body from './body'

const Skill = (props) => (
    <div className="skill">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
        <div className="keywords">{props.keywords}</div>
    </div>
)

class AboutSite extends Component {
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
                        <div className="keyword">{keyword}</div>
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

module.exports = {
    AboutSite
}
