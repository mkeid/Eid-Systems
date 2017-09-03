import { connect } from "react-redux"
import { reduxForm } from "redux-form"
import { sendEmail } from "../actions/contact_actions"
import EmailForm from "../components/contact/email_form"

// Validate the contact form input content */
const emailExression = /[\w\d]+@[\w\d]+\.[\w\d]+/
const validate = values => {
    const errors = {}

    // Validate name input
    if (!values.name) {
        errors.name = "Please enter your name!"
    }

    // Validate email input
    if (!emailExression.exec(values.email)) {
        errors.email = "Please enter a valid email address!"
    }

    // Validate message input
    if (!values.message) {
        errors.message = "Please enter a message!"
    }

    return errors
}

// Wire up the email contact form with redux to propoagate state
const mapStateToProps = state => ({
    contacted: state.contact.contacted,
    name: state.contact.name,
    email: state.contact.email,
    message: state.contact.message
})

const EmailFormContainer = connect(
    mapStateToProps,
    { sendEmail }
)(EmailForm)

const ReduxEmailFormContainer = reduxForm({
    form: "EmailForm",
    validate
})(EmailFormContainer)

export default ReduxEmailFormContainer
