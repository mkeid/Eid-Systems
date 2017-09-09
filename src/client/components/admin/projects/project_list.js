import _ from "lodash"
import React, { Component } from "react"
import { Link } from "react-router-dom"


/*
* Component that renders list of projects where each item links to an edit form
* @extends Component
*/
class ProjectList extends Component {
    /** Dispatch redux action to update page status and fetch latest projects */
    componentDidMount() {
        this.props.updateAdminPage("Projects")
        this.props.fetchProjects()
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

        // If a list of projects exists in the redux store, append them to items
        if (this.props.projects) {
            let projects = _.map(this.props.projects, (value, key) => value)
            projects = projects.map(project => (
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
