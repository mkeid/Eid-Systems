import { reduxForm } from "redux-form"
import IndexForm from "../../components/admin/index/index_form"

const validate = values => {
    const errors = {}

    return errors
}

const IndexFormContainer = reduxForm({
    form: "IndexForm",
    validate
})(IndexForm)

export default IndexFormContainer
