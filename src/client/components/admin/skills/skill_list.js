import _ from "lodash"
import React, { Component } from "react"
import { Link } from "react-router-dom"


/*
* Component that renders list of skills where each item links to an edit form
* @extends Component
*/
class SkillList extends Component {
    /** Dispatch redux action to update page status and fetch latest skills */
    componentDidMount() {
        this.props.updateAdminPage("Skills")
        this.props.fetchSkills()
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

        // If a list of skills exists in the redux store, append them to items
        if (this.props.skills) {
            let skills = _.map(this.props.skills, (value, key) => value)
            skills = skills.map(skill => (
                <div key={skill._id} className="admin-item">
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
