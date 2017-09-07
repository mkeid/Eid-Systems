import { connect } from "react-redux"
import { reduxForm } from "redux-form"
import LoginForm from "../components/auth/login_form"
import { login } from "../actions/auth_actions"

const validate = values => {
    const errors = {}

    const fieldNames = ["username", "password"]
    fieldNames.forEach(fieldName => {
        if (!values[fieldName]) {
            errors[fieldName] = `Please enter a ${fieldName}!`
        }
    })

    return errors
}

const mapStateToProps = ({ auth }) => ({ auth })

const LoginFormContainer = connect(
    mapStateToProps,
    { login }
)(LoginForm)

const LoginFormReduxContainer = reduxForm({
    form: "LoginForm",
    validate
})(LoginFormContainer)

export default LoginFormReduxContainer
