import { reduxForm } from "redux-form"
import SkillForm from "../../components/admin/skills/skill_form"

// Validate the skill form input content */
const validate = values => {
    const errors = {}
    const fieldNames = ["title", "keywords", "description"]

    fieldNames.forEach(fieldName => {
        if (fieldName in values && !values[fieldName].length) {
            errors[fieldName] = `Please fill out '${fieldName}'`
        }
    })

    return errors
}

// Wire up the SkillForm component with redux to propagate state
const SkillFormContainer = reduxForm({
    form: "SkillForm",
    validate
})(SkillForm)

export default SkillFormContainer
