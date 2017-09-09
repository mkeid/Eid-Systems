import { reduxForm } from "redux-form"
import SkillForm from "../../components/admin/skills/skill_form"

// Validate the skill form input content */
const validate = values => {
    const errors = {}

    return errors
}

// Wire up the SkillForm component with redux to propagate state
const SkillFormContainer = reduxForm({
    form: "SkillForm",
    validate
})(SkillForm)

export default SkillFormContainer
