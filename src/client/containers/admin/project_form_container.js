import { reduxForm } from "redux-form"
import ProjectForm from "../../components/admin/projects/project_form"

const validate = values => {
    const errors = {}

    return errors
}

const ProjectFormContainer = reduxForm({
    form: "ProjectForm",
    validate
})(ProjectForm)

export default ProjectFormContainer
