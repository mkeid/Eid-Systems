import React, { Component } from "react"

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

export default ContactBillboard
