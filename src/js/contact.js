import React, { Component } from 'react'
import Body from './body'
import { ContactBillboard } from './billboard'


class EmailForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            message: '',
            name: ''
        }

        this.handleChangedEmail = this.handleChangedEmail.bind(this)
        this.handleChangedMessage = this.handleChangedMessage.bind(this)
        this.handleChangedName = this.handleChangedName.bind(this)
    }

    handleChangedEmail(event) {
        this.setState({email: event.target.value})
    }

    handleChangedMessage(event) {
        this.setState({message: event.target.value})
    }

    handleChangedName(event) {
        this.setState({name: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="email-form">
                <div className="head">Send me an email</div>
                <div className="inputs">
                    <div className="left">
                        <div className="input">
                            <div className="title">Name</div>
                            <input type="text"
                                value={this.state.name}
                                onChange={this.handleChangedName}
                            />
                        </div>
                        <div className="input">
                            <div className="title">Email</div>
                            <input type="text"
                                value={this.state.email}
                                onChange={this.handleChangedEmail}
                            />
                        </div>
                    </div>
                    <div className="right">
                        <div className="input">
                            <div className="title">Message</div>
                            <textarea
                                value={this.state.message}
                                onChange={this.handleChangedMessage}
                            />
                        </div>
                    </div>
                </div>
                <input type="submit" value="Send" className="send-button" />
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
