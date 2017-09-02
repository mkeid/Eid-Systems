import React, { Component } from "react"
import EmailFormReduxContainer from "../../containers/email_form_redux_container"
import ContactBillboardContainer from "../../containers/contact_billboard_container"
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
                <ContactBillboardContainer />
                <Body title="OR">
                    <EmailFormReduxContainer />
                </Body>
            </div>
        )
    }
}

export default ContactSite
