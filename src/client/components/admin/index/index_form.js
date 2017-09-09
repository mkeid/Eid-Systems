import React, { Component } from "react"
import { Field } from "redux-form"
import { CancelButton, SubmitButton, SuccessButton } from "../../ui/buttons"
import renderTextField from "../../ui/render_text_field"


/*
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

    componentDidMount() {
        this.props.updateAdminPage("Index")

        const index = this.props.index
        if (index) {
            this.props.initialize(index)
        } else {
            this.props.showSite("index")
        }
    }

    componentDidUpdate() {
        const index = this.props.index
        if (index) {
            this.props.initialize(index)
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
                        title="Developer Keywords"
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
                        title="Engineer Keywords"
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
