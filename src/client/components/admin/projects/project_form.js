import React, { Component } from "react"
import ReactModal from "react-modal"
import { Field } from "redux-form"
import {
    CancelButton,
    DangerButton,
    SubmitButton,
    SuccessButton
} from "../../ui/buttons"
import renderTextField from "../../ui/render_text_field"


/*
* Form component for creating new projects and updating existing ones
* @extends Component
*/
class ProjectForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsVisible: false
        }

        // Bind this to functions
        this.checkProject = this.checkProject.bind(this)
        this.createProject = this.createProject.bind(this)
        this.deleteProject = this.deleteProject.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
        this.handleOpenModal = this.handleOpenModal.bind(this)
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
        this.props.initialize({
            title: "",
            type: "",
            url: ""
        })
        this.checkProject()
    }

    /** Check if page object is in the redux store on update */
    componentDidUpdate() {
        this.checkProject()
    }

    createProject(data) {
        this.props.createProject({project: data})
            .then(() => {
                this.props.history.push("/admin/projects")
            })
            .catch(response => {

            })
    }

    deleteProject() {
        this.props.deleteProject(this.state.project._id)
            .then(() => {
                this.props.history.push("/admin/projects")
            })
            .catch(response => {

            })
        this.handleCloseModal()
    }

    /** Update state to reflect that the delete modal is closed */
    handleCloseModal() {
        this.setState({
            modalIsVisible: false
        })
    }

    /** Update state to reflect that the delete modal is opened */
    handleOpenModal() {
        this.setState({
            modalIsVisible: true
        })
    }

    /** Handle a validated redux form submission of the form */
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
                    <DangerButton
                        value="Delete"
                        onClick={this.handleOpenModal} />
                    {this.state.hasSaved ? savedButton : saveButton}
                    <CancelButton
                        redirect={
                            () => this.props.history.push("/admin/projects")
                        } />
                </div>
                <ReactModal
                   isOpen={this.state.modalIsVisible}
                   contentLabel="Delete Project" >
                   <div className="head">
                        Delete Project
                   </div>
                   <p>
                       Are you sure you want to delete this document?
                       This cannot be undone.
                   </p>
                   <DangerButton
                        value="Delete"
                        onClick={this.deleteProject} />
                    <CancelButton
                         onClick={this.handleCloseModal} />
                </ReactModal>
            </form>
        )
    }
}


export default ProjectForm
