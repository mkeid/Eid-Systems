import { reduxForm } from "redux-form"
import AboutForm from "../../components/admin/about/about_form"

// Validate the about form input content */
const validate = values => {
    const errors = {}

    return errors
}

// Wire up the AboutForm component with redux to propagate state
const AboutFormContainer = reduxForm({
    form: "AboutForm",
    validate
})(AboutForm)

export default AboutFormContainer
