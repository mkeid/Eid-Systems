const SkillModel = require("../models/skill_model")

module.exports = {
    // TODO: implement function
    // Creates a new skill document with the specified attributes
    create(request, response) {

    },

    // TODO: implement function
    // Deletes a specified skill document
    destroy(request, response) {

    },

    // Returns all documents in the skills collection
    list(request, response) {
        ((callback, limit) => {
            SkillModel.find(callback).limit(limit)
        })
        ((error, skills) => {
            response.json({skills})
        })
    },

    // TODO: implement function
    // Updates a skill document with the specified attributes
    update(request, response) {

    }
}
