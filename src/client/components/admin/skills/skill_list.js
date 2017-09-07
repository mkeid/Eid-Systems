import React, { Component } from "react"
import { Link } from "react-router-dom"

class SkillList extends Component {
    componentWillMount() {
        if (!this.props.skills.length) {
            this.props.fetchSkills()
        }
    }

    render() {
        if (!this.props.skills.length) {
            return null
        }

        const skills = this.props.skills.map(skill => (
            <div key={skill.title} className="admin-item">
                <Link to={`/admin/skills/edit/${skill._id}`}>
                    {skill.title}
                </Link>
            </div>
        ))

        return (
            <div className="admin-list">
                {skills}
            </div>
        )
    }
}

export default SkillList
