import React, { Component } from "react"
import { Link } from "react-router-dom"

class ProjectList extends Component {
    componentWillMount() {
        this.props.updateAdminPage("Projects")

        if (!this.props.projects.length) {
            this.props.fetchProjects()
        }
    }

    render() {
        let items = [(
            <div key="new" className="admin-item">
                <Link to="/admin/projects/new">
                    <div className="new-item">
                        Create New Project
                    </div>
                </Link>
            </div>
        )]

        if (this.props.projects) {
            const projects = this.props.projects.map(project => (
                <div key={project.title} className="admin-item">
                    <Link to={`/admin/projects/edit/${project._id}`}>
                        <img src={project.imgSrc} />
                        <div className="content">
                            <div className="title">
                                {project.title}
                            </div>
                            <div className="subtitle">
                                {project.type}
                            </div>
                        </div>
                    </Link>
                </div>
            ))

            items = [...items, ...projects]
        }



        return (
            <div className="admin-list">
                {items}
            </div>
        )
    }
}

export default ProjectList
