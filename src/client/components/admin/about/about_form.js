import React, { Component } from "react"

class AboutForm extends Component {
    componentDidMount() {
        this.props.updateAdminPage("About")
    }

    render() {
        return (
            <form>
                <div className="head">
                    Edit About Page
                </div>
            </form>
        )
    }
}

export default AboutForm
