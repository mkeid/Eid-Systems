import React, { Component } from "react"
import { Link } from "react-router-dom"

class SkillList extends Component {
    componentWillMount() {
        this.props.updateAdminPage("Skills")

        if (!this.props.skills.length) {
            this.props.fetchSkills()
        }
    }

    render() {
        let items = [(
            <div key="new" className="admin-item">
                <Link to={"/admin/skills/new"}>
                    <div className="new-item">
                        Create New Skill
                    </div>
                </Link>
            </div>
        )]

        if (this.props.skills.length) {
            const skills = this.props.skills.map(skill => (
                <div key={skill.title} className="admin-item">
                    <Link to={`/admin/skills/edit/${skill._id}`}>
                        <img src={skill.imgSrc} />
                        <div className="content">
                            <div className="title">
                                {skill.title}
                            </div>
                        </div>
                    </Link>
                </div>
            ))

            items = [...items, ...skills]
        }



        return (
            <div className="admin-list">
                {items}
            </div>
        )
    }
}

export default SkillList
