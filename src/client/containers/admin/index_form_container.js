import { reduxForm } from "redux-form"
import IndexForm from "../../components/admin/index/index_form"

// Validate the index form input content */
const validate = values => {
    const errors = {
        developer: {},
        engineer: {}
    }
    const fieldNames = ["title", "keywords"]
    const typeNames = ["developer", "engineer"]
    const typeNamesExist = typeNames.every(typeName => typeName in values)

    if (typeNamesExist) {
        // Perform checks for both dev and engineer types
        typeNames.forEach(typeName => {
            const typeVals = values[typeName]

            // Make sure the number of keywords is exactly 5
            const keywordsIsString = typeof(typeVals.keywords) === "string"
            if (keywordsIsString && typeVals.keywords.split(",").length !== 5) {
                const error = "Keywords must contain exactly 5 elements!"
                errors[typeName].keywords = error
            }

            // Make sure all fields are filled
            fieldNames.forEach(fieldName => {
                if (!typeVals[fieldName].length) {
                    const error = `Please fill out '${fieldName}'`
                    errors[typeName][fieldName] = error
                }
            })
        })
    }


    return errors
}

// Wire up the IndexForm component with redux to propagate state
const IndexFormContainer = reduxForm({
    form: "IndexForm",
    validate
})(IndexForm)

export default IndexFormContainer
