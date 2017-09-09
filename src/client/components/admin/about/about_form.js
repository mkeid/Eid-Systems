import React, { Component } from "react"
import { Field } from "redux-form"
import { CancelButton, SubmitButton, SuccessButton } from "../../ui/buttons"
import renderTextField from "../../ui/render_text_field"


/*
* Form component for updating information in the "about" page
* @extends Component
*/
class AboutForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        // Bind this to function
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderTextField = renderTextField.bind(this)
    }

    /** Dispatch redux action to update page status and possibly init form */
    componentDidMount() {
        this.props.updateAdminPage("About")

        const about = this.props.about
        if (about) {
            this.props.initialize(about)
        } else {
            this.props.showSite("about")
        }
    }

    componentDidUpdate() {
        const about = this.props.about
        if (about) {
            this.props.initialize(about)
        }
    }

    handleSubmit() {

    }

    render() {
        const savedButton = <SuccessButton value="Saved!" />
        const saveButton = <SubmitButton value="Save" />

        return (
            <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <div className="head">
                    Edit About Page
                </div>
                <div className="inputs">
                    <Field
                        name="head"
                        title="Head"
                        element="input"
                        type="text"
                        component={this.renderTextField} />
                    <Field
                        name="detail"
                        title="Detail"
                        element="textArea"
                        type="text"
                        component={this.renderTextField} />
                    {this.state.hasSaved ? savedButton : saveButton}
                </div>
            </form>
        )
    }
}

export default AboutForm
