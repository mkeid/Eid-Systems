import React, { Component } from "react"

class ProjectForm extends Component {
    componentDidMount() {
        const projectId = this.props.match.params["project_id"]

        if (projectId && !this.props.projects[projectId]) {
            this.props.showProject(projectId)
        }
    }

    render() {
        return (
            <form>
                <div className="head">
                    Edit Project
                </div>
            </form>
        )
    }
}

export default ProjectForm
