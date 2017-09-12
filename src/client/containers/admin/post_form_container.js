import { reduxForm } from "redux-form"
import PostForm from "../../components/admin/posts/post_form"

// Validate the post form input content */
const validate = values => {
    const errors = {}
    const fieldNames = ["title", "preview"]

    fieldNames.forEach(fieldName => {
        if (fieldName in values && !values[fieldName].length) {
            errors[fieldName] = `Please fill out '${fieldName}'`
        }
    })

    return errors
}

// Wire up the PostForm component with redux to propagate state
const PostFormContainer = reduxForm({
    form: "PostForm",
    validate
})(PostForm)

export default PostFormContainer
