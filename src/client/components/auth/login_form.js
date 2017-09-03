import React, { Component } from "react"
import { Field } from "redux-form"
import PropTypes from "prop-types"
import renderTextField from "../ui/render_text_field"

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidUpdate() {
        if (this.props.isAuthenticated) {
            this.context.router.history.push("/admin")
        }
    }

    handleSubmit(credentials) {
        this.props.login(credentials)
    }

    render() {
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                <div className="head">Authentication</div>
                <div className="inputs">
                    <Field
                        name="username"
                        title="Username"
                        element="input"
                        type="text"
                        component={renderTextField.bind(this)} />
                    <Field
                        name="password"
                        title="Password"
                        element="input"
                        type="password"
                        component={renderTextField.bind(this)} />
                    <input
                        className="primary-button"
                        type="submit"
                        value="Login" />
                </div>
            </form>
        )
    }
}

LoginForm.contextTypes = {
    router: PropTypes.object
}

export default LoginForm
