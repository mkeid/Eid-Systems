import React, { Component } from "react"
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
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderTextField = renderTextField.bind(this)
    }

    /** If page object was found in store, init the redux form else fetch it */
    checkSkill() {
        if (!this.state.skill && this.props.match) {
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
    }

    /** Check if page object is in the redux store on update */
    componentDidUpdate() {
        this.checkSkill()
    }

    handleSubmit(data) {
        // If the form is modifying an existing skill, update it. Else create it
        const formSkill = this.state.skill
        if (formSkill) {
            this.props.updateSkill(formSkill._id, {skill: data})
        } else {
            this.props.createSkill({skill: data})
        }
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

export default SkillForm
