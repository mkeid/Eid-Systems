import React, { Component } from "react"
import LoginFormContainer from
    "../../containers/login_form_container"

class AuthIndex extends Component {
    constructor(props) {
        super(props)
    }

    shouldComponentUpdate() {
        return false
    }

    render() {
        return (
            <div className="auth-index">
                <div className="container">
                    <LoginFormContainer />
                </div>
            </div>
        )
    }
}

export default AuthIndex
