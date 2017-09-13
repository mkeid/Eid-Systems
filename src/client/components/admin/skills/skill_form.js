import React, { Component } from "react"
import PropTypes from "prop-types"
import { Field } from "redux-form"
import { CancelButton, SubmitButton, SuccessButton } from "../../ui/buttons"
import renderTextField from "../../ui/render_text_field"


/**
* Form component for creating new skills and updating existing ones
* @extends Component
*/
class SkillForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        // Bind this to functions
        this.checkSkill = this.checkSkill.bind(this)
        this.createSkill = this.createSkill.bind(this)
        this.deleteSkill = this.deleteSkill.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderTextField = renderTextField.bind(this)
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
                this.setState({skill})
                this.props.initialize(skill)
            } else {
                this.props.showSkill(skillId)
            }
        }
    }

    /** Dispatch redux action to update page status and possibly init form */
    componentDidMount() {
        this.props.updateAdminPage("Skills")
        this.checkSkill()

        this.props.initialize({
            title: "", keywords: "", description: ""
        })
    }

    /** Check if page object is in the redux store on update */
    componentDidUpdate() {
        this.checkSkill()
    }

    createSkill(data) {
        this.props.createSkill({skill: data})
            .then(() => {
                this.context.router.history.push("/admin/skills")
            })
            .catch(response => {

            })
    }

    deleteSkill() {
        this.props.deleteSkill(this.state.skill._id)
            .then(() => {
                this.context.router.history.push("/admin/skills")
            })
            .catch(response => {

            })
    }

    handleSubmit(data) {
        // If the form is modifying an existing skill, update it. Else create it
        const formSkill = this.state.skill
        if (formSkill) {
            this.updateSkill(formSkill._id, data)
        } else {
            this.createSkill(data)
        }
    }

    updateSkill(skillId, data) {
        this.props.updateSkill(skillId, {skill: data})
            .then(() => {

            })
            .catch(response => {

            })
    }

    render() {
        let head = this.state.skill ? "Edit Skill" : "New Skill"
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
                    {this.state.hasSaved ? savedButton : saveButton}
                </div>
            </form>
        )
    }
}


// Enable the router context type so that the form gains routing capability
SkillForm.contextTypes = {
    router: PropTypes.object
}


export default SkillForm
