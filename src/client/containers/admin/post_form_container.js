import { reduxForm } from "redux-form"
import PostForm from "../../components/admin/posts/post_form"

const validate = values => {
    const errors = {}

    return errors
}

const PostFormContainer = reduxForm({
    form: "PostForm",
    validate
})(PostForm)

export default PostFormContainer
