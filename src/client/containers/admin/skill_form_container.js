import { reduxForm } from "redux-form"
import SkillForm from "../../components/admin/skills/skill_form"

const validate = values => {
    const errors = {}

    return errors
}

const SkillFormContainer = reduxForm({
    form: "SkillForm",
    validate
})(SkillForm)

export default SkillFormContainer
