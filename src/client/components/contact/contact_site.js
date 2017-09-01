import React, { Component } from "react"
import EmailFormReduxContainer from "../../containers/email_form_redux_container"
import ContactBillboard from "./contact_billboard"
import Body from "../ui/body"

/**
* Component used by react router to render the "Contact" page
* @extends Component
*/
class ContactSite extends Component {
    componentDidMount() {
        this.props.updateCurrentPage("Contact")
    }

    render() {
        return (
            <div className="contact-site">
                <ContactBillboard />
                <Body title="OR">
                    <EmailFormReduxContainer />
                </Body>
            </div>
        )
    }
}

export default ContactSite
