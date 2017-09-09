import { reduxForm } from "redux-form"
import ProjectForm from "../../components/admin/projects/project_form"

// Validate the project form input content */
const validate = values => {
    const errors = {}

    return errors
}

// Wire up the ProjectForm component with redux to propagate state
const ProjectFormContainer = reduxForm({
    form: "ProjectForm",
    validate
})(ProjectForm)

export default ProjectFormContainer
