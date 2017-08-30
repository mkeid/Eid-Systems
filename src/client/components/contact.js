import React, { Component } from "react"
import axios from "axios"
import { Body } from "./reuse"
import ReduxEmailFormContainer from "../containers/email_form"


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
    }

    render() {
        return (
            <div className="contact-site">
                <ContactBillboard />
                <Body title="OR">
                    <ReduxEmailFormContainer />
                </Body>
            </div>
        )
    }
}


export { ContactSite }
