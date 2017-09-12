import React, { Component } from "react"
import { Field } from "redux-form"
import { CancelButton, SubmitButton, SuccessButton } from "../../ui/buttons"
import renderTextField from "../../ui/render_text_field"


/*
* Form component for updating information in the "home" or "index" page
* @extends Component
*/
class IndexForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        // Bind this to function
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderTextField = renderTextField.bind(this)
    }

    /** Dispatch redux action to update page status and possibly init form */
    componentDidMount() {
        this.props.updateAdminPage("Index")

        const index = this.props.index
        if (index) {
            this.props.initialize(index)
        } else {
            this.props.showSite("index")
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
                    Edit Index Page
                </div>
                <div className="inputs">
                    <Field
                        name="developer[title]"
                        title="Developer Title"
                        element="input"
                        type="text"
                        component={this.renderTextField} />
                    <Field
                        name="developer[keywords]"
                        title="Developer Keywords (delimited by ',')"
                        element="input"
                        type="text"
                        component={this.renderTextField} />
                    <Field
                        name="engineer[title]"
                        title="Engineer Title"
                        element="input"
                        type="text"
                        component={this.renderTextField} />
                    <Field
                        name="engineer[keywords]"
                        title="Engineer Keywords (delimited by ',')"
                        element="input"
                        type="text"
                        component={this.renderTextField} />
                    {this.state.hasSaved ? savedButton : saveButton}
                </div>
            </form>
        )
    }
}

export default IndexForm
