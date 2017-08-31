const Skill = require("../models/skill")

module.exports = {
    // TODO: implement function
    // Creates a new skill document with the specified attributes
    createSkill: function(request, response) {

    },

    // TODO: implement function
    // Deletes a specified skill document
    deleteSkill: function(request, response) {

    },

    // Returns all documents in the skills collection
    getSkills: function(request, response) {
        (function(callback, limit) {
            Skill.find(callback).limit(limit)
        })
        (function(error, skills) {
            response.json({skills})
        })
    },

    // TODO: implement function
    // Updates a skill document with the specified attributes
    updateSkill: function(request, response) {

    }
}
