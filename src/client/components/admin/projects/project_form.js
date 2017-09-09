import React, { Component } from "react"
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
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderTextField = renderTextField.bind(this)
    }

    /** If page object was found in store, init the redux form else fetch it */
    checkProject() {
        if (!this.state.project && this.props.match) {
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
    }

    /** Check if page object is in the redux store on update */
    componentDidUpdate() {
        this.checkProject()
    }

    handleSubmit() {
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
                    {this.state.hasSaved ? savedButton : saveButton}
                </div>
            </form>
        )
    }
}

export default ProjectForm
