import React, { Component } from "react"


/**
* Main head component at the top of the "Contactt" page
* @extends Component
*/
class ContactBillboard extends Component {
    render() {
        const link = this.props.links.find(link => link.title === "LinkedIn")

        if (!link) {
            return null
        }

        return (
            <div className="billboard">
                <div className="container">
                    <a className="linkedin-link"
                        href={link["href"]}>
                        Connect
                    </a>
                </div>
            </div>
        )
    }
}

export default ContactBillboard
