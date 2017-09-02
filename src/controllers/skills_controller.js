const SkillModel = require("../models/skill_model")

module.exports = {
    // TODO: implement function
    // Creates a new skill document with the specified attributes
    create: function(request, response) {

    },

    // TODO: implement function
    // Deletes a specified skill document
    destroy: function(request, response) {

    },

    // Returns all documents in the skills collection
    list: function(request, response) {
        (function(callback, limit) {
            SkillModel.find(callback).limit(limit)
        })
        (function(error, skills) {
            response.json({skills})
        })
    },

    // TODO: implement function
    // Updates a skill document with the specified attributes
    update: function(request, response) {

    }
}
