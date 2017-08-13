import React, { Component } from 'react'
import Body from './body'
import { ContactBillboard } from './billboard'


class EmailForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="email-form">
                <div className="head">Send me an email</div>
                <div className="inputs">
                    <div className="left">
                        <div className="input">
                            <div className="title">Your name:</div>
                            <input type="text" />
                        </div>
                        <div className="input">
                            <div className="title">Your email:</div>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="input">
                            <div className="title">Your message:</div>
                            <textarea />
                        </div>
                    </div>
                </div>
                <div className="send-button">Send</div>
            </div>
        )
    }
}

class ContactSite extends Component {
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
