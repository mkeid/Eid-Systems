import React, { Component } from 'react'
import Body from './body'
import { ContactBillboard } from './billboard'


class ContactSite extends Component {
    render() {
        return (
            <div className="contact-site">
                <ContactBillboard />
                <Body title="OR">

                </Body>
            </div>
        )
    }
}

module.exports = {
    ContactSite
}
