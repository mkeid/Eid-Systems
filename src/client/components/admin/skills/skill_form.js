import React, { Component } from "react"
import ReactModal from "react-modal"
import { Field } from "redux-form"
import { push } from "react-router-redux"
import { Notification } from 'react-notification'

import {
    CancelButton,
    DangerButton,
    SubmitButton,
    SuccessButton
} from "../../ui/buttons"
import { getFileObject, renderFileInput } from "../../ui/render_file_input"
import { convertToFormData } from "../../../helpers"
import renderTextField from "../../ui/render_text_field"


/**
* Form component for creating new skills and updating existing ones
* @extends Component
*/
class SkillForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsVisible: false
        }

        // Bind this to functions
        this.checkSkill = this.checkSkill.bind(this)
        this.createSkill = this.createSkill.bind(this)
        this.deleteSkill = this.deleteSkill.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
        this.handleOpenModal = this.handleOpenModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderTextField = renderTextField.bind(this)
        this.toggleNotification = this.toggleNotification.bind(this)
        this.updateSkill = this.updateSkill.bind(this)
    }

    /** If page object was found in store, init the redux form else fetch it */
    checkSkill() {
        const match = this.props.match
        const isEditForm = match && match.params["skill_id"]

        if (!this.state.skill && isEditForm) {
            const skillId = this.props.match.params["skill_id"]
            const skill = this.props.skills[skillId]

            if (skill) {
                if (skill.description.constructor === Array) {
                    skill.description = skill.description.join("\n\n")
                }

                getFileObject(skill.imgSrc, imageFile => {
                     skill.imageFile = [imageFile]
                     this.setState({skill})
                     this.props.initialize(skill)
                })
            } else {
                this.props.showSkill(skillId)
            }
        }
    }

    /** Dispatch redux action to update page status and possibly init form */
    componentDidMount() {
        this.props.updateAdminPage("Skills")
        this.props.initialize({
            title: "",
            keywords: "",
            description: ""
        })
        this.checkSkill()
    }

    /** Modify the description prop so it properly renders in the about page */
    componentWillUnmount() {
        const skill = this.state.skill
        if (skill) {
            skill.description = skill.description.split("\n\n")
        }
    }

    /** Check if page object is in the redux store on update */
    componentDidUpdate() {
        this.checkSkill()
    }

    /** Dispatch create skill action and return to skill spage on completion */
    createSkill(formData) {
        this.props.createSkill(formData)
            .then(() => {
                this.props.dispatch(push("/admin/skills"))
            })
            .catch(response => {
                console.log(response)
            })
    }

    /** Dispatch delete skill action and return to skill spage on completion */
    deleteSkill() {
        this.props.deleteSkill(this.state.skill._id)
            .then(() => {
                this.props.dispatch(push("/admin/skills"))
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
        if (typeof(data.keywords) === "string") {
            data.keywords = data.keywords.split(",")
        }

        if (typeof(data.description) === "string") {
            data.description = data.description.split("\n\n")
        }

        const formData = convertToFormData(data, "skill")

        // If the form is modifying an existing skill, update it. Else create it
        const formSkill = this.state.skill
        if (formSkill) {
            this.updateSkill(formSkill._id, formData)
        } else {
            this.createSkill(formData)
        }
    }

    toggleNotification() {
        this.setState({
          notificationIsActive: !this.state.notificationIsActive
        })
    }

    /** Dispatch update skill action and spawn a notification on completion */
    updateSkill(skillId, formData) {
        this.props.updateSkill(skillId, formData)
            .then(() => {
                this.toggleNotification()
            })
            .catch(response => {
                console.log(response)
            })
    }

    render() {
        let head = this.state.skill ? "Edit Skill" : "New Skill"
        const deleteButton = this.state.skill ? (
            <DangerButton
                 value="Delete"
                 onClick={this.handleOpenModal} />
        ) : null
        const savedButton = <SuccessButton value="Saved!" />
        const saveButton = <SubmitButton value="Save" />

        return (
            <form
                encType="multipart/form-data"
                onSubmit={this.props.handleSubmit(this.handleSubmit)}>
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
                        name="keywords"
                        title="Keywords (delimited by ',')"
                        element="input"
                        type="text"
                        component={this.renderTextField} />
                    <Field
                        name="description"
                        title="Description"
                        element="textArea"
                        component={this.renderTextField} />
                    <Field
                        name="imageFile"
                        title="Image File"
                        component={renderFileInput} />
                    {deleteButton}
                    {this.state.hasSaved ? savedButton : saveButton}
                    <CancelButton
                        redirect={
                            () => this.props.history.push("/admin/skills")
                        } />
                </div>
                <ReactModal
                className="modal"
                isOpen={this.state.modalIsVisible}
                contentLabel="Delete Skill" >
                <div className="head">
                   Delete Skill
                </div>
                <p>
                   Are you sure you want to delete this document?
                   This cannot be undone.
                </p>
                <DangerButton
                     value="Delete"
                     onClick={this.deleteSkill} />
                <CancelButton
                     onClick={this.handleCloseModal} />
                </ReactModal>
                <Notification
                    dismissAfter={5000}
                    isActive={this.state.notificationIsActive}
                    message="This skill was successfully saved.."
                    action="Dismiss"
                    title="Success!"
                    onDismiss={this.toggleNotification.bind(this)}
                    onClick={() =>  this.setState({
                        notificationIsActive: false
                    })}
                />
            </form>
        )
    }
}


export default SkillForm
