import React, { Component } from "react"
import PropTypes from "prop-types"
import { Field } from "redux-form"
import { CancelButton, SubmitButton, SuccessButton } from "../../ui/buttons"
import renderTextField from "../../ui/render_text_field"


/*
* Form component for creating new projects and updating existing ones
* @extends Component
*/
class ProjectForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        // Bind this to functions
        this.checkProject = this.checkProject.bind(this)
        this.createProject = this.createProject.bind(this)
        this.deleteProject = this.deleteProject.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderTextField = renderTextField.bind(this)
        this.updateProject = this.updateProject.bind(this)
    }

    /** If page object was found in store, init the redux form else fetch it */
    checkProject() {
        const match = this.props.match
        const isEditForm = match && match.params["project_id"]

        if (!this.state.project && isEditForm) {
            const projectId = this.props.match.params["project_id"]
            const project = this.props.projects[projectId]

            if (project) {
                this.setState({project})
                this.props.initialize(project)
            } else {
                this.props.showProject(projectId)
            }
        }
    }

    /** Dispatch redux action to update page status and possibly init form */
    componentDidMount() {
        this.props.updateAdminPage("Projects")
        this.checkProject()

        this.props.initialize({
            title: "", type: "", url: ""
        })
    }

    /** Check if page object is in the redux store on update */
    componentDidUpdate() {
        this.checkProject()
    }

    createProject(data) {
        this.props.createProject({project: data})
            .then(() => {
                this.context.router.history.push("/admin/projects")
            })
            .catch(response => {

            })
    }

    deleteProject() {
        this.props.deleteProject(this.state.project._id)
            .then(() => {
                this.context.router.history.push("/admin/projects")
            })
            .catch(response => {

            })
    }

    handleSubmit(data) {
        // If the form is modifying an existing project update...else create it
        const formProject = this.state.project
        if (formProject) {
            this.updateProject(formProjectId, data)
        } else {
            this.createProject(data)
        }
    }

    updateProject(projectId, data) {
        this.props.updateProject(projectId, {project: data})
            .then(() => {

            })
            .catch(response => {

            })
    }

    render() {
        const head = this.state.project ? "Edit Project" : "New Project"
        const savedButton = <SuccessButton value="Saved!" />
        const saveButton = <SubmitButton value="Save" />

        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <div className="head">
                    {head}
                </div>
                <div className="inputs">
                    <Field
                        name="title"
                        title="Title"
                        element="input"
                        type="text"
                        component={this.renderTextField} />
                    <Field
                        name="type"
                        title="Type"
                        element="input"
                        type="text"
                        component={this.renderTextField} />
                    <Field
                        name="url"
                        title="URL"
                        element="input"
                        type="text"
                        component={this.renderTextField} />
                    {this.state.hasSaved ? savedButton : saveButton}
                </div>
            </form>
        )
    }
}


// Enable the router context type so that the form gains routing capability
ProjectForm.contextTypes = {
    router: PropTypes.object
}


export default ProjectForm
