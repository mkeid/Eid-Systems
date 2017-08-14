import React, { Component } from "react"
import AlertContainer from "react-alert"
import axios from "axios"
import { Body } from "./reuse"


class EmailForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            message: "",
            name: "",
            disabled: false,
            shouldShowWarning: false,
            showWarning: false
        }
        this.baseState = this.state

        this.alertOptions = {
            offset: 14,
            position: "bottom left",
            theme: "dark",
            time: 5000,
            transition: "fade"
        }
        this.emailExression = /[\w\d]+@[\w\d]+\.[\w\d]+/

        this.handleBlurEmail = this.handleBlurEmail.bind(this)
        this.handleChangedEmail = this.handleChangedEmail.bind(this)
        this.handleChangedMessage = this.handleChangedMessage.bind(this)
        this.handleChangedName = this.handleChangedName.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.inputsNotEmpty = this.inputsNotEmpty.bind(this)
        this.showIncompleteFormAlert = this.showIncompleteFormAlert.bind(this)
        this.showEmailWarningAlert = this.showEmailWarningAlert.bind(this)
    }

    handleBlurEmail(event) {
        this.setState({
            showWarning: this.state.shouldShowWarning
        })
    }

    handleChangedEmail(event) {
        const email = event.target.value
        this.setState({
            email: email,
        })

        const validExpression = this.emailExression.exec(email)
        const validEmail = validExpression !== null || !email.length

        if (validEmail) {
            this.setState({
                shouldShowWarning: false,
                showWarning: false
            })
        } else {
            this.setState({
                shouldShowWarning: true
            })
        }

        this.setState({
            emailIsValid: validEmail
        })
    }

    handleChangedMessage(event) {
        this.setState({message: event.target.value})
    }

    handleChangedName(event) {
        this.setState({name: event.target.value})
    }

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
        })
        this.setState({
            disabled: true
        })
    }

    inputsNotEmpty() {
        const emailIsEmpty = this.state.email.length === 0
        const messageIsEmpty = this.state.message.length === 0
        const nameIsEmpty = this.state.name.length === 0
        return !(emailIsEmpty || messageIsEmpty || nameIsEmpty)
    }

    showEmailWarningAlert() {
        this.msg.error("Invalid email address")
    }

    showIncompleteFormAlert() {
        this.msg.error("Incomplete form")
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="email-form">
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                <div className="head">Send me an email</div>
                <div className="inputs">
                    <div className="left">
                        <div className="input">
                            <div className="title">Name</div>
                            <input type="text"
                                value={this.state.name}
                                onChange={this.handleChangedName}
                                disabled={this.state.disabled}
                            />
                        </div>
                        <div className="input">
                            <div className="title">Email</div>
                            {this.state.showWarning &&
                                <div className="email-warning">
                                    Invalid Address
                                </div>
                            }
                            <input type="text"
                                value={this.state.email}
                                onBlur={this.handleBlurEmail}
                                onChange={this.handleChangedEmail}
                                disabled={this.state.disabled}
                            />
                        </div>
                    </div>
                    <div className="right">
                        <div className="input">
                            <div className="title">Message</div>
                            <textarea
                                value={this.state.message}
                                onChange={this.handleChangedMessage}
                                disabled={this.state.disabled}
                            />
                        </div>
                    </div>
                </div>
                {this.state.disabled ? (
                    <div className="send-button sent-confirmation">SENT!</div>
                ) : (
                    <input type="submit" value="SEND" className="send-button" />
                )}
            </form>
        )
    }
}

class ContactBillboard extends Component {
    render() {
        return (
            <div className="billboard">
                <div className="container">
                    <a className="linkedin-link" href="https://www.linkedin.com/in/mkeid/">
                        CONNECT
                    </a>
                </div>
            </div>
        )
    }
}

class ContactSite extends Component {
    componentDidMount() {
        this.props.updateCurrentPage("contact")
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

module.exports = {
    ContactSite
}
