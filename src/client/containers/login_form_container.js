import { connect } from "react-redux"
import { reduxForm } from "redux-form"
import LoginForm from "../components/auth/login_form"
import { login } from "../actions/auth_actions"

const validate = values => {
    const errors = {}

    if (!values.username) {
        errors.username = ""
    }

    if (!values.password) {
        errors.password = ""
    }

    return errors
}

const mapStateToProps = ({ isAuthenticated }) => ({ isAuthenticated })

const LoginFormContainer = connect(
    mapStateToProps,
    { login }
)(LoginForm)

const LoginFormReduxContainer = reduxForm({
    form: "LoginForm",
    validate
})(LoginFormContainer)

export default LoginFormReduxContainer
