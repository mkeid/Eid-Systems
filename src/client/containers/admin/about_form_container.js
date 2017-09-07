import { reduxForm } from "redux-form"
import AboutForm from "../../components/admin/about/about_form"

const validate = values => {
    const errors = {}

    return errors
}

const AboutFormContainer = reduxForm({
    form: "AboutForm",
    validate
})(AboutForm)

export default AboutFormContainer
