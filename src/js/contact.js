import React, { Component } from "react"
import AlertContainer from "react-alert"
import axios from "axios"
import { Shake } from "reshake"
import { Body } from "./reuse"


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
            shouldShowWarning: false,
            showWarning: false
        }
        this.baseState = this.state

        // Auxiliary attributes
        this.alertOptions = {
            offset: 14,
            position: "bottom left",
            theme: "dark",
            time: 5000,
            transition: "fade"
        }
        this.emailExression = /[\w\d]+@[\w\d]+\.[\w\d]+/

        // Bind this to methods
        this.handleBlurEmail = this.handleBlurEmail.bind(this)
        this.handleChangedEmail = this.handleChangedEmail.bind(this)
        this.handleChangedMessage = this.handleChangedMessage.bind(this)
        this.handleChangedName = this.handleChangedName.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.inputsNotEmpty = this.inputsNotEmpty.bind(this)
        this.showIncompleteFormAlert = this.showIncompleteFormAlert.bind(this)
        this.showEmailWarningAlert = this.showEmailWarningAlert.bind(this)
        this.stopShaking = this.stopShaking.bind(this)
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

    /** After leaving the email field, check the input valdity */
    handleBlurEmail(event) {
        const showWarning = this.state.shouldShowWarning
        this.setState({showWarning})
    }

    /** Update email state variable on change and verify it's valdity */
    handleChangedEmail(event) {
        const email = event.target.value
        this.setState({email})

        const validExpression = this.emailExression.exec(email)
        const emailIsValid = validExpression !== null || !email.length

        if (emailIsValid) {
            this.setState({shouldShowWarning: false, showWarning: false})
        } else {
            this.setState({shouldShowWarning: true})
        }

        this.setState({emailIsValid})
    }

    /** Update message state variable on change */
    handleChangedMessage(event) {
        const message = event.target.value
        this.setState({message})
    }

    /** Update name state variable on change */
    handleChangedName(event) {
        const name = event.target.value
        this.setState({name})
    }

    /** If the form is appropriate, send an API POST request to send en email */
    handleSubmit(event) {
        event.preventDefault();

        if (!this.inputsNotEmpty()) {
            this.showIncompleteFormAlert()
            return;
        } else if(this.state.showWarning) {
            this.showEmailWarningAlert()
            return;
        }

        const data = this.state
        axios.post("/email", data).then(response => {
            console.log(response)
            this.setState({disabled: true})
        })
    }

    /** Check to see if the input fields have been filled in */
    inputsNotEmpty() {
        const emailIsEmpty = this.state.email.length === 0
        const messageIsEmpty = this.state.message.length === 0
        const nameIsEmpty = this.state.name.length === 0
        return !(emailIsEmpty || messageIsEmpty || nameIsEmpty)
    }

    /** Alert the user that the email is not valid */
    showEmailWarningAlert() {
        this.msg.error("Invalid email address")
        this.setState({isShaking: true})
    }

    /** Alert the user that the form has not been entirely filled in */
    showIncompleteFormAlert() {
        this.msg.error("Incomplete form")
        this.setState({isShaking: true})
    }

    /** Stop the send button from shaking after a form error */
    stopShaking() {
        this.setState({isShaking: false})
    }

    render() {
        // Form submission button components
        const sendButton = this.state.isShaking ? (
            <Shake h={3} v={5} r={0}
                dur={42}
                int={10}
                max={100}
                fixed={true}
                fixedStop={false}
                freez={false}>
                <input type="submit" value="Send" className="send-button err" />
            </Shake>
        ) : (
            <input type="submit" value="Send" className="send-button" />
        )
        const sentButton = (
            <div className="send-button sent-confirmation">
                Sent!
            </div>
        )

        return (
            <form onSubmit={this.handleSubmit} className="email-form">
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                <div className="head">
                    Send me an email
                </div>
                <div className="inputs">
                    <div className="left">
                        <div className="input">
                            <div className="title">
                                Name
                            </div>
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.handleChangedName}
                                disabled={this.state.disabled} />
                        </div>
                        <div className="input">
                            <div className="title">
                                Email
                            </div>
                            {this.state.showWarning &&
                                <div className="email-warning">
                                    Invalid Address
                                </div>
                            }
                            <input
                                type="text"
                                value={this.state.email}
                                onBlur={this.handleBlurEmail}
                                onChange={this.handleChangedEmail}
                                disabled={this.state.disabled} />
                        </div>
                    </div>
                    <div className="right">
                        <div className="input">
                            <div className="title">
                                Message
                            </div>
                            <textarea
                                value={this.state.message}
                                onChange={this.handleChangedMessage}
                                disabled={this.state.disabled} />
                        </div>
                    </div>
                </div>
                {this.state.disabled ? sentButton : sendButton}
            </form>
        )
    }
}


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
                    <a
                        className="linkedin-link"
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

    shouldComponentUpdate() {
        return false
    }

    render() {
        return (
            <div className="contact-site">
                <ContactBillboard />
                <Body title="OR">
                    <EmailForm />
                </Body>
            </div>
        )
    }
}


module.exports = { ContactSite }
