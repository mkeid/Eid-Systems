import React, { Component } from "react"
import { Link } from "react-router-dom"

class ProjectList extends Component {
    componentWillMount() {
        if (!this.props.projects.length) {
            this.props.fetchProjects()
        }
    }

    render() {
        if (!this.props.projects) {
            return null
        }

        const projects = this.props.projects.map(project => (
            <div key={project.title} className="admin-item project-item">
                <div className="title">
                    <Link to={`/admin/projects/edit/${project._id}`}>
                        {project.title}
                    </Link>
                </div>
            </div>
        ))

        return (
            <div className="admin-list">
                {projects}
            </div>
        )
    }
}

export default ProjectList
