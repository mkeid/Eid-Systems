import { reduxForm } from "redux-form"
import LinkForm from "../../components/admin/links/link_form"

// Validate the post form input content */
const validate = values => {
    const errors = {}
    const fieldNames = ["title", "href"]

    fieldNames.forEach(fieldName => {
        if (fieldName in values && !values[fieldName].length) {
            errors[fieldName] = `Please fill out '${fieldName}'`
        }
    })

    errors.imageFile = !values.imageFile ? "Please upload 'image file'" : null

    return errors
}

// Wire up the PostForm component with redux to propagate state
const LinkFormContainer = reduxForm({
    form: "LinkForm",
    validate
})(LinkForm)

export default LinkFormContainer
