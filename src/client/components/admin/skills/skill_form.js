import React, { Component } from "react"

class SkillForm extends Component {
    componentDidMount() {
        const skillId = this.props.match.params["skill_id"]

        if (skillId && !this.props.skills[skillId]) {
            this.props.showSkill(skillId)
        }
    }

    render() {
        return (
            <form>
                <div className="head">
                    Edit Skill
                </div>
            </form>
        )
    }
}

export default SkillForm
