import React, { Component } from "react"

class IndexForm extends Component {
    componentDidMount() {
        this.props.updateAdminPage("Index")
    }

    render() {
        return (
            <form>
                <div className="head">Edit Index Page</div>
            </form>
        )
    }
}

export default IndexForm
