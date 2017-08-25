import React, { Component } from "react"
import { connect } from "react-redux"
import axios from "axios"
import { Field, reduxForm } from "redux-form"
import { Shake } from "reshake"
import { Body } from "./reuse"
import { sendEmail } from "../actions/contact"


/**
* A form component storing input states with API calling functionality
* @extends Component
*/
class EmailForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            message: "",
            name: "",
            disabled: false,
            isShaking: false,
            justStoppedShaking: false
        }

        // Bind this to methods
        this.handleSendClick = this.handleSendClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderTextField = this.renderTextField.bind(this)
        this.stopShaking = this.stopShaking.bind(this)
    }

    /** After an update, stop the send button from shaking if it is */
    componentDidUpdate() {
        const { isShaking, justStoppedShaking } = this.state
        const { submitFailed } = this.props

        if (this.state.isShaking) {
            this.shakeTimeout = setTimeout(this.stopShaking, 500)
        }
        else if (!isShaking && !justStoppedShaking && submitFailed) {
            this.setState({isShaking: true})
        }
    }

    /** Clear timeout so component doesn't try to set state while unmounted */
    componentWillUnmount() {
        this.shakeTimeout && clearTimeout(this.shakeTimeout)
    }

    /** Handle click events from the send button */
    handleSendClick() {
        if (!this.props.valid) {
            this.setState({isShaking: true})
            this.props.dispatch({type: "START_SUBMIT", meta: {form: "EmailForm"}})
        }
    }

    /** If the form is appropriate, send an API POST request to send en email */
    handleSubmit(data) {
        this.props.sendEmail(data.name, data.email, data.message)
    }

    /** Stop the send button from shaking after a form error */
    stopShaking() {
        this.setState({isShaking: false, justStoppedShaking: true})
    }

    renderTextField(field) {
        return (
            <div className="input">
                <div className="title">{field.title}</div>
                {field.meta.touched ? (
                    field.meta.error ? (
                        <div className="warning">{field.meta.error}</div>
                    ) : ""
                ) : ""}
                {field.textArea ? (
                    <textarea {...field.input} />
                ) : (
                    <input {...field.input} type="text" />
                )}
            </div>
        )
    }

    render() {
        // Form submission button components
        const sendButton = this.state.isShaking ? (
            <Shake
                h={3} v={5} r={0} dur={42} max={100}
                fixed={true} fixedStop={false} freez={false}>
                <input type="submit" value="Send" className="send-button err" />
            </Shake>
        ) : (
            <input
                type="submit"
                onClick={this.handleSendClick}
                value="Send"
                className="send-button" />
        )
        const sentButton = (
            <div className="send-button sent-confirmation">Sent!</div>
        )

        const { handleSubmit } = this.props
        return (
            <fieldset disabled={this.props.contacted ? "disabled" : ""}>
                <form onSubmit={handleSubmit(this.handleSubmit)}
                    className="email-form">
                    <div className="head">Send me an email</div>
                    <div className="inputs">
                        <div className="left">
                            <Field
                                name="name"
                                title="Name"
                                component={this.renderTextField} />
                            <Field
                                name="email"
                                title="Email"
                                component={this.renderTextField} />
                        </div>
                        <div className="right">
                            <Field
                                name="message"
                                title="Message"
                                textArea={true}
                                component={this.renderTextField} />
                        </div>
                    </div>
                    {this.props.contacted ? sentButton : sendButton}
                </form>
            </fieldset>
        )
    }
}

const emailExression = /[\w\d]+@[\w\d]+\.[\w\d]+/
const validate = (values) => {
    const errors = {}

    // Validate name input
    if (!values.name) {
        errors.name = "Please enter a name!"
    }

    // Validate email input
    if (!values.email) {
        errors.email = "Please enter an email address!"
    }
    else if (!emailExression.exec(values.email)) {
        errors.email = "Please enter a valid email address!"
    }

    // Validate message input
    if (!values.message) {
        errors.message = "Please enter a message!"
    }

    return errors
}

const EmailFormContainer = connect(
    state => ({contacted: state.contact.contacted}),
    {sendEmail}
)(EmailForm)

const ReduxEmailForm = reduxForm({
    form: "EmailForm",
    validate
})(EmailFormContainer)

/**
* Main head component at the top of the "Contactt" page
*/
class ContactBillboard extends Component {
    shouldComponentUpdate() {
        return false
    }

    render() {
        return (
            <div className="billboard">
                <div className="container">
                    <a className="linkedin-link"
                        href="https://linkedin.com/in/mkeid/">
                        Connect
                    </a>
                </div>
            </div>
        )
    }
}


/**
* Component used by react router to render the "Contact" page
* @extends Component
*/
class ContactSite extends Component {
    componentDidMount() {
        this.props.updateCurrentPage("Contact")
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="contact-site">
                <ContactBillboard />
                <Body title="OR">
                    <ReduxEmailForm />
                </Body>
            </div>
        )
    }
}


module.exports = { ContactSite }
