import React, { Component } from "react"
import { Field } from "redux-form"
import { Shake } from "reshake"
import { LoadingButton, SubmitButton, SuccessButton } from "../ui/buttons"
import renderTextField from "../ui/render_text_field"


/**
* A form component storing input states with API calling functionality
* @extends Component
*/
class EmailForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShaking: false,
            makingRequest: false
        }

        // Bind this to methods
        this.handleSendClick = this.handleSendClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderSendButton = this.renderSendButton.bind(this)
        this.renderTextField = renderTextField.bind(this)
        this.stopShaking = this.stopShaking.bind(this)
    }

    /** If the user comes back to the form, re-fill in the inputs */
    componentDidMount() {
        if (this.props.contacted) {
            this.nameInput.value = this.props.name
            this.emailInput.value = this.props.email
            this.messageInput.value = this.props.message
        }
    }

    /** After an update, stop the send button from shaking if it is */
    componentDidUpdate() {
        if (this.state.isShaking) {
            this.shakeTimeout = setTimeout(this.stopShaking, 500)
        }
    }

    /** Clear timeout so component doesn't try to set state while unmounted */
    componentWillUnmount() {
        this.shakeTimeout && clearTimeout(this.shakeTimeout)
    }

    /** Handle click events from the send button */
    handleSendClick() {
        if (!this.props.valid) {
            this.setState({ isShaking: true })
            this.nameInput.focus()
            this.emailInput.focus()
            this.messageInput.focus()
            this.messageInput.blur()
        }
    }

    /** If the form is appropriate, send an API POST request to send en email */
    handleSubmit(data) {
        this.props.sendEmail(data.name, data.email, data.message)
        this.setState({makingRequest: true})
    }

    /** Stop the send button from shaking after a form error */
    stopShaking() {
        this.setState({isShaking: false})
    }

    /** Render the shaking error button component */
    renderShakingButton() {
        return (
            <Shake h={3} v={5} r={0} dur={42} max={100}
                fixed={true} fixedStop={false} freez={false}>
                <div className="primary-button err">Send</div>
            </Shake>
        )
    }

    /** Render the submit button component */
    renderSendButton() {
        const loadingButton = <LoadingButton />
        const sendButton = (
            <SubmitButton
                value="Send"
                onClick={this.handleSendClick} />
        )

        return this.state.makingRequest ? loadingButton : sendButton
    }

    render() {
        // Form submission button components
        const sendButton = this.state.isShaking ?
            this.renderShakingButton() : this.renderSendButton()
        const sentButton = <SuccessButton value="Sent!" />

        return (
            <fieldset disabled={this.props.contacted ? "disabled" : ""}>
                <form className="email-form"
                    onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                    <div className="head">
                        Send me an email
                    </div>
                    <div className="inputs">
                        <div className="left">
                            <Field
                                name="name"
                                title="Name"
                                element="input"
                                type="text"
                                component={this.renderTextField} />
                            <Field
                                name="email"
                                title="Email"
                                element="input"
                                type="text"
                                component={this.renderTextField} />
                        </div>
                        <div className="right">
                            <Field
                                name="message"
                                title="Message"
                                element="textArea"
                                component={this.renderTextField} />
                        </div>
                    </div>
                    {this.props.contacted ? sentButton : sendButton}
                </form>
            </fieldset>
        )
    }
}


export default EmailForm
