import { reduxForm } from "redux-form"
import IndexForm from "../../components/admin/index/index_form"

// Validate the index form input content */
const validate = values => {
    const errors = {}

    return errors
}

// Wire up the IndexForm component with redux to propagate state
const IndexFormContainer = reduxForm({
    form: "IndexForm",
    validate
})(IndexForm)

export default IndexFormContainer
