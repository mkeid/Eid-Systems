import React, { Component } from "react"
import EmailFormContainer from
    "../../containers/email_form_container"
import ContactBillboardContainer from
    "../../containers/contact_billboard_container"
import Body from "../ui/body"


/**
* Component used by react router to render the "Contact" page
* @extends Component
*/
class ContactIndex extends Component {
    /** Dispatch redux action to update status of current page */
    componentDidMount() {
        this.props.updateCurrentPage("Contact")
    }

    render() {
        return (
            <div className="contact-index">
                <ContactBillboardContainer />
                <Body title="OR">
                    <EmailFormContainer />
                </Body>
            </div>
        )
    }
}


export default ContactIndex
