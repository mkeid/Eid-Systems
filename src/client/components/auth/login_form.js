import React, { Component } from "react"
import { Field } from "redux-form"

class LoginForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form className="login-form">
                <div className="title">Login</div>
            </form>
        )
    }
}

export default LoginForm
